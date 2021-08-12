import * as path from "path"
import * as fs from "fs"
import * as p from "pareto"
import * as p20 from "pareto-20"
import * as astn from "astn"

export function readFileFromFileSystem(
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
                        onError(["other", { description: err.message }])
                    }
                }
            }
        )
    })
}
