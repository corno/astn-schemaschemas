import * as p from "pareto"
import * as astn from "astn"
import { getSchemaSchemaBuilder } from "./getSchemaSchemaBuilder"

export function createNormalizer(
    sourcePathBaseName: string,
    contextSchemaProvider: astn.IResourceProvider,
    referencedSchemaProvider: astn.IResourceProvider,
    onDiagnostic: (message: string, severity: astn.DiagnosticSeverity) => void,
    style: astn.SerializationStyle,
    write: (str: string) => void,
): p.IValue<p.IStreamConsumer<string, null, null>> {
    return astn.createProcessorForASTNStreamWithContext(
        sourcePathBaseName,
        getSchemaSchemaBuilder,
        contextSchemaProvider,
        referencedSchemaProvider,
        (resolvedSchema) => {
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
        onDiagnostic,
    )
}