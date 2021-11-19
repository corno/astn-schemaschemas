import * as mrshlschemaschema01 from "./plugins/schemas/mrshl/schemaschema@0.1"
import * as astn from "astn"

export function getSchemaSchemaBuilder<TokenAnnotation, NonTokenAnnotation>(
    name: string,
): astn.SchemaSchemaBuilder<TokenAnnotation, NonTokenAnnotation> | null {
    switch (name) {
        case "astn/schema@0.1": return astn.createASTNSchemaBuilder()
        case "mrshl/schemaschema@0.1": return (onSchemaError, onSchema) => mrshlschemaschema01.createSchemaAndSideEffects<TokenAnnotation, NonTokenAnnotation>(onSchemaError, onSchema)
        default: return null
    }

}