import * as mrshlschemaschema01 from "./plugins/schemas/mrshl/schemaschema@0.1"
import * as schema from "astn/dist/pub/esc/implementations/_schema"
import * as astnImp from "astn/dist/pub/esc/implementations/_astn"
import * as typedImp from "astn/dist/pub/esc/implementations/_astnTyped"
import * as tt from "astn/dist/pub/esc/interfaces/typedTokenize"

export function getSchemaSchemaBuilder<TokenAnnotation>(
    name: string,
): tt.SchemaSchemaBuilder<TokenAnnotation, TokenAnnotation> | null {
    switch (name) {
        case "astn/schema@0.1": return schema.createASTNSchemaBuilder<TokenAnnotation, TokenAnnotation>(
            ($) => {
                return astnImp.createExpectContext({
                    issueHandler: $.issueHandler,
                    createDummyValueHandler: astnImp.createDummyValueHandler,
                    onDuplicateEntry: $.onDuplicateEntry,
                    duplicateEntrySeverity: $.duplicateEntrySeverity,

                })
            },
            typedImp.createDummyTypedHandler,
        )
        case "mrshl/schemaschema@0.1": return (onSchemaError, onSchema) => mrshlschemaschema01.createSchemaAndSideEffects<TokenAnnotation>(onSchemaError, onSchema)
        default: return null
    }

}