import * as etc from "astn/dist/pub/esc/interfaces/etc"
//import * as typed from "astn/dist/pub/esc/interfaces/typed"
import * as astnTypedImp from "astn/dist/pub/esc/implementations/_astnTyped"
import * as astnImp from "astn/dist/pub/esc/implementations/_astn"
// import { getSchemaSchemaBuilder } from "./getSchemaSchemaBuilder"
// import { createExternalSchemaLoader } from "astn/dist/pub/esc/implementations/_astnTyped"
// import { createCodeGenerator2 } from "."

export function createNormalizer(
    sourcePathBaseName: string,
    contextSchemaProvider: etc.IResourceProvider,
    referencedSchemaProvider: etc.IResourceProvider,
    onDiagnostic: (message: string, severity: etc.DiagnosticSeverity) => void,
    style: typed.SerializationStyle,
    write: (str: string) => void,
    onResult: ($: etc.IStreamConsumer<string, null>) => void,
): void {
    astnTypedImp.createProcessorForASTNStreamWithContext(
        {
            schemaFileName: "schema.astn-schema",
            serializedDatasetBaseName: sourcePathBaseName,
        },
        {
            fixmeOnResult: ($) => {
                const tok = astnImp.createTokenizer(
                    {
                        parser: $,
                        onError: ($) => {
                            onDiagnostic(`${astnImp.printTokenizerError($.error)} @ ${astnImp.printRange($.range)}`, ["error", {}])

                        },
                    }
                )
                onResult(tok)
            },
            contextSchemaProvider: contextSchemaProvider,
            onContextSchemaIssue: ($) => {
                onDiagnostic(astnTypedImp.printContextSchemaIssue($), $.severity)
            },
            //getSchemaSchemaBuilder: astnTypedImp.getSchemaSchemaBuilder,
            //referencedSchemaProvider: referencedSchemaProvider,
            // getTypedTreeHandler: (resolvedSchema) => {
            //     const simpleDS: astn.Datastore = {
            //         root: { type: null },
            //     }
            //     return astnImp.createBuilder(
            //         simpleDS,
            //         () => {
            //             astn.marshall(
            //                 astn.createMarshallInterface(simpleDS),
            //                 resolvedSchema.schemaAndSideEffects.getSchema(),
            //                 resolvedSchema.specification,
            //                 style,
            //                 write,
            //             )
            //         }
            //     )
            // },
            //onError: onDiagnostic,
            //onResult: onResult,
        },
        ($) => {
            return astnTypedImp.createExternalSchemaLoader({
                onFailed: $.onFailed,
                onSucces: $.onSucces,
                $c: {
                    onError: ($) => {
                        onError("invalid external schema", ["error", {}], null)
                    },
                    getSchemaSchemaBuilder: (name) => {
                        if (name !== "astn/schema@0.1") {
                            return null
                        }
                        return schemaImp.createASTNSchemaBuilder<token.TokenizerAnnotationData, token.TokenizerAnnotationData>(
                            ($) => {
                                return astnImp.createExpectContext({
                                    issueHandler: $.issueHandler,
                                    duplicateEntrySeverity: $.duplicateEntrySeverity,
                                    onDuplicateEntry: $.onDuplicateEntry,
                                    createDummyValueHandler: astnImp.createDummyValueHandler,

                                })
                            },
                            astnTypedImp.createDummyTypedHandler,
                        )
                    },
                    createTokenizer: astnImp.createTokenizer,
                    createLoggingTreeParser: astnImp.createTreeParser,
                    createStructureParser: ($) => {
                        return astnImp.createStructureParser({
                            handler: $,
                            onError: ($) => {
                                onError(astnImp.printParsingError($.error), ["error", {}], $.annotation.range)
                            },
                        })
                    },
                    createDummyTreeHandler: astnImp.createDummyTreeHandler,
                    createTreeParser: astnImp.createTreeParser,
                },
            })
        },
        astnImp.createStructureParser,
    )
}