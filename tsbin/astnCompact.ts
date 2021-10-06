import * as astn from "astn"
import * as fs from "fs"
import * as path from "path"
import * as p20 from "pareto-20"

import * as ass from "../src"
import * as env from "../src/env"
import { defaultSchemaHost } from "../src"

const [, , sourcePath] = process.argv

if (sourcePath === undefined) {
    console.error("missing source path")
    process.exit(1)
}

function printDiagnostic(message: string, severity: astn.DiagnosticSeverity) {
    if (severity === astn.DiagnosticSeverity.warning) {
        console.warn(message)
    } else {
        console.error(message)
    }
}

const cacheDir = __dirname + "/../../schemacache"

ass.createNormalizer(
    path.basename(sourcePath),
    env.createFileSystemResourceProvider(
        path.dirname(sourcePath),
    ),
    env.createCachedResourceProvider(
        env.createHTTPResourceProvider(
            defaultSchemaHost,
            3000,
        ),
        cacheDir,
    ),
    printDiagnostic,
    ["compact"],
    (str) => process.stdout.write(str)
).mapResult((normalizer) => {
    return p20.createArray([fs.readFileSync(sourcePath, { encoding: "utf-8" })]).streamify().consume(
        null,
        normalizer,
    )
}).handle(() => {
    //
})