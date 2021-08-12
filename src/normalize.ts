import * as astn from "astn"
import * as path from "path"
import * as fs from "fs"
import * as p from "pareto"
import * as p20 from "pareto-20"
import * as astncore from "astn"
import { SchemaHost } from "./SchemaHost"
import { getSchemaSchemaBuilder } from "./getSchemaSchemaBuilder"

function readFileFromFileSystem(
    dir: string,
    schemaFileName: string,
): p.IUnsafeValue<p.IStream<string, null>, astn.RetrievalError> {
    return p20.wrapUnsafeFunction((onError, onSuccess) => {
        fs.readFile(
            path.join(dir, schemaFileName),
            { encoding: "utf-8" },
            (err, data) => {
                if (err === null) {
                    onSuccess(p20.createArray([data]).streamify())
                } else {
                    if (err.code === "ENOENT") {
                        //there is no schema file
                        onError(["not found", {}])
                    } else if (err.code === "EISDIR") {
                        //the path is a directory
                        onError(["not found", {}])
                    } else {
                        console.log(err.code)
                        onError(["other", { description: err.message }])
                    }
                }
            }
        )
    })
}


export function normalize(
    sourcePath: string,
    makeHTTPrequest: (
        schemaHost: SchemaHost,
        schema: string,
        timeout: number,
    ) => p.IUnsafeValue<p.IStream<string, null>, astn.RetrievalError>,
    style: astn.SerializationStyle,
    onDiagnostic: (message: string, severity: astncore.DiagnosticSeverity) => void,
    write: (str: string) => void,
): p.IValue<null> {
    return astn.processFile(
        fs.readFileSync(sourcePath, { encoding: "utf-8"}),
        path.basename(sourcePath),
        path.dirname(sourcePath),
        getSchemaSchemaBuilder,
        readFileFromFileSystem,
        referencedSchema => makeHTTPrequest(
            {
                host: 'astn.io',
                pathStart: '/dev/schemas/',
            },
            referencedSchema,
            3000,
        ),
        onDiagnostic,
        rs => astn.createTypedSerializer(
            rs,
            style,
            write,
        )
    )
}