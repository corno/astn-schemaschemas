import * as astn from "astn"
import { createDeserializer } from "./createDeserializer"
import * as t from "./types"
import { convertToGenericSchema } from "./createTypedParserDefinitions"
import * as sideEffects from "./sideEffects"
import { SchemaAndSideEffects } from "astn"

export function createSchemaAndSideEffects<TokenAnnotation, NonTokenAnnotation>(
    onSchemaError: (error: astn.SchemaDeserializationError, annotation: TokenAnnotation) => void,
    onSchema: (schema: SchemaAndSideEffects<TokenAnnotation, NonTokenAnnotation>) => void,
): astn.TreeHandler<TokenAnnotation, NonTokenAnnotation> {

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
        md2 => {
            schema = md2
        },
        () => {
            if (schema !== null) {
                if (foundError) {
                    console.error("SCHEMA FOUND BUT WITH ERRORS")
                }
                const s = schema
                onSchema({
                    schema: convertToGenericSchema(schema),
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