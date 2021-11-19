import * as astn from "astn"
import { IStreamConsumer } from "astn/dist/src/IStreamConsumer"
import { getSchemaSchemaBuilder } from "./getSchemaSchemaBuilder"

export function createNormalizer(
    sourcePathBaseName: string,
    contextSchemaProvider: astn.IResourceProvider,
    referencedSchemaProvider: astn.IResourceProvider,
    onDiagnostic: (message: string, severity: astn.DiagnosticSeverity) => void,
    style: astn.SerializationStyle,
    write: (str: string) => void,
    onResult: ($: IStreamConsumer<string, null>) => void,
): void {
    astn.createProcessorForASTNStreamWithContext(
        {
            schemaFileName: "schema.astn-schema",
            serializedDatasetBaseName: sourcePathBaseName,
        },
        {
            getSchemaSchemaBuilder: getSchemaSchemaBuilder,
            contextSchemaProvider: contextSchemaProvider,
            referencedSchemaProvider: referencedSchemaProvider,
            getTypedTreeHandler: (resolvedSchema) => {
                const simpleDS: astn.Datastore = {
                    root: { type: null },
                }
                return astn.createBuilder(
                    simpleDS,
                    () => {
                        astn.marshall(
                            astn.createMarshallInterface(simpleDS),
                            resolvedSchema.schemaAndSideEffects.getSchema(),
                            resolvedSchema.specification,
                            style,
                            write,
                        )
                    }
                )
            },
            onError: onDiagnostic,
            onResult: onResult,
        },
    )
}