import * as astnImp from "astn/dist/pub/esc/implementations/_astn"

import {
    createDeserializer,
} from "./createDeserializer"
import { Schema } from "./types"
import { IStreamConsumer } from "astn/dist/pub/esc/interfaces/etc"


export interface ISchemaHandler {
    onSchema: (schema: Schema) => void
}

export function createSchemaStreamProcesser(
    handler: ISchemaHandler,
    onError: (str: string) => void,
): IStreamConsumer<string, null> {
    return astnImp.createTokenizer({
        parser: astnImp.createStructureParser({
            handler: {
                onEmbeddedSchema: ($) => {
                    onError(`expected a schema reference @ ${astnImp.printRange($.embeddedSchemaAnnotation.range)}`)
                    return astnImp.createDummyTreeHandler()
                },
                onSchemaReference: ($) => {
                    const expectedSchemaHeader = "mrshl/schemaschema@0.1"
                    if ($.token.token.value !== expectedSchemaHeader) {
                        onError(`expected "${expectedSchemaHeader}" but found "${$.token.token.value}"`)
                    }
                },
                onNoInternalSchema: () => { },
                onBody: () => {
                    return astnImp.createTreeParser({
                        handler: createDeserializer(
                            ($, annotation) => {
                                onError(`${astnImp.printExpectError($)} @ ${astnImp.printRange(annotation.range)}`)
                            },
                            (error, annotation) => {
                                onError(`${error} @ ${astnImp.printRange(annotation.range)}`)
                            },
                            (schema) => {
                                if (schema !== null) {
                                    handler.onSchema(schema)
                                } else {
                                    onError("MISSING SCHEMA")
                                }
                            },
                            () => { },
                        ),
                        onError: ($) => {
                            onError(`${astnImp.printParsingError($.error)} @ ${astnImp.printRange($.annotation.range)}`)
                        },
                    })
                },
            },
            onError: ($) => {
                onError(`${astnImp.printParsingError($.error)} @ ${astnImp.printRange($.annotation.range)}`)
            },
        }),
        onError: ($) => {
            onError(`${astnImp.printTokenizerError($.error)} @ ${astnImp.printRange($.range)}`)
        },
    })
}
