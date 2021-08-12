import * as path from "path"
import * as p from "pareto"
import * as astn from "astn"
import { SchemaHost } from "./SchemaHost"
import { getSchemaSchemaBuilder } from "./getSchemaSchemaBuilder"
import { readFileFromFileSystem } from "./readFileFromFileSystem"
import { defaultSchemaHost } from "./defaultSchemaHost"

export function createNormalizer(
    sourcePath: string,
    makeHTTPrequest: (
        schemaHost: SchemaHost,
        schema: string,
        timeout: number,
    ) => p.IUnsafeValue<p.IStream<string, null>, astn.RetrievalError>,
    onDiagnostic: (message: string, severity: astn.DiagnosticSeverity) => void,
    style: astn.SerializationStyle,
    write: (str: string) => void,
): p.IValue<p.IStreamConsumer<string, null, null>> {
    return astn.createProcessorForASTNStreamWithContext(
        path.basename(sourcePath),
        path.dirname(sourcePath),
        getSchemaSchemaBuilder,
        readFileFromFileSystem,
        referencedSchema => makeHTTPrequest(
            defaultSchemaHost,
            referencedSchema,
            3000,
        ),
        rs => astn.createTypedSerializer(
            rs,
            style,
            write,
        ),
        onDiagnostic,
    )
}