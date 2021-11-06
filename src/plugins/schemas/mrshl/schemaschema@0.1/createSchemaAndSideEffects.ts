import * as pr from "pareto-runtime"
import * as astn from "astn"
import { createDeserializer } from "./createDeserializer"
import * as t from "./types"
import { convertToASTNSchema as convertToASTNSchema } from "./convertToASTNSchema"
import * as sideEffects from "./sideEffects"

export function createSchemaAndSideEffects<TokenAnnotation, NonTokenAnnotation>(
    onSchemaError: (error: astn.SchemaDeserializationError, annotation: TokenAnnotation) => void,
    onSchema: (schema: astn.ISchemaAndSideEffects<TokenAnnotation, NonTokenAnnotation>) => void,
): astn.ITreeHandler<TokenAnnotation, NonTokenAnnotation> {

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
                        onValidationError: (message: string, annotation: TokenAnnotation, severity: astn.DiagnosticSeverity) => void,
                    ) => sideEffects.createRoot<TokenAnnotation, NonTokenAnnotation>(s, onValidationError),
                })
            } else {
                if (!foundError) {
                    throw new Error("UNEXPECTED: NO SCHEMA AND NO ERRORS")
                }
            }
        },
    )
}