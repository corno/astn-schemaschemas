import * as pr from "pareto-runtime"
import * as tt from "astn/dist/pub/esc/interfaces/typedTokenize"
import * as etc from "astn/dist/pub/esc/interfaces/etc"
import * as grammar from "astn/dist/pub/esc/interfaces/grammar"
import { createDeserializer } from "./createDeserializer"
import * as t from "./types"
import { convertToASTNSchema as convertToASTNSchema } from "./convertToASTNSchema"
import * as sideEffects from "./sideEffects"

export function createSchemaAndSideEffects<TokenAnnotation>(
    onSchemaError: (error: tt.SchemaDeserializationError, annotation: TokenAnnotation) => void,
    onSchema: (schema: tt.ISchemaAndSideEffects<TokenAnnotation>) => void,
): grammar.ITreeHandler<TokenAnnotation> {

    let foundError = false
    let schema: null | t.Schema = null

    return createDeserializer(
        (errorMessage, annotation) => {
            foundError = true
            onSchemaError(["expect", errorMessage], annotation)
        },
        (message, annotation) => {
            foundError = true
            onSchemaError(["validation", { message: message }], annotation)
        },
        (md2) => {
            schema = md2
        },
        () => {
            if (schema !== null) {
                if (foundError) {
                    pr.logError("SCHEMA FOUND BUT WITH ERRORS")
                }
                const s = schema
                onSchema({
                    getSchema: () => convertToASTNSchema(s),
                    createStreamingValidator: (
                        onValidationError: (message: string, annotation: TokenAnnotation, severity: etc.DiagnosticSeverity) => void,
                    ) => sideEffects.createRoot<TokenAnnotation>(s, onValidationError),
                })
            } else {
                if (!foundError) {
                    throw new Error("UNEXPECTED: NO SCHEMA AND NO ERRORS")
                }
            }
        },
    )
}