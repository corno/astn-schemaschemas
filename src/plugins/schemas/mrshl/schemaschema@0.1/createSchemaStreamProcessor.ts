import * as p from "pareto"
import * as astn from "astn"


import {
    createDeserializer,
} from "./createDeserializer"
import { Schema } from "."

export function createSchemaStreamProcesser(
    generateCode: (schema: Schema) => void,
    onError: (str: string) => void,
): p.IStreamConsumer<string, null, null> {
    return astn.createStreamPreTokenizer(
        astn.createTokenizer(
            astn.createStructureParser({
                onEmbeddedSchema: $ => {
                    onError(`expected a schema reference @ ${astn.printRange($.embeddedSchemaAnnotation.range)}`)
                    return astn.createDummyTreeHandler()
                },
                onSchemaReference: $ => {
                    const expectedSchemaHeader = "mrshl/schemaschema@0.1"
                    if ($.token.data.value !== expectedSchemaHeader) {
                        onError(`expected "${expectedSchemaHeader}" but found "${$.token.data.value}"`)
                    }
                    return p.value(false)
                },
                onBody: () => {
                    return createDeserializer(
                        (error, annotation) => {
                            console.error(`${astn.printExpectError(error)} @ ${astn.printRange(annotation.range)}`)
                        },
                        (error, annotation) => {
                            console.error(`${error} @ ${astn.printRange(annotation.range)}`)
                        },
                        schema => {
                            if (schema !== null) {
                                generateCode(schema)
                            } else {
                                onError("MISSING SCHEMA")
                            }
                        },
                        () => {
                            return p.value(null)
                        },
                    )
                },
                onEnd: () => {
                    //
                },
                errors: {
                    onTreeError: $ => {
                        onError(`${astn.printTreeParserError($.error)} @ ${astn.printRange($.annotation.range)}`)
                    },
                    onStructureError: $ => {
                        onError(`${astn.printStructureError($.error)} @ ${astn.printRange($.annotation.range)}`)
                    },
                },
            })
        ),
        $ => {
            onError(`${astn.printTokenError($.error)} @ ${astn.printRange($.range)}`)
        },
    )
}
