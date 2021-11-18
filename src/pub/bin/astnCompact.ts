import * as astn from "astn"
import * as pr from "pareto-runtime"

import * as ass from "../src/pub/lib"
import * as env from "../src/pub/lib/env"
import { defaultSchemaHost } from "../src/pub/lib"

const sourcePath = pr.getElement(pr.getProcessArguments(), 2)

if (sourcePath === undefined) {
    pr.logError("missing source path")
    pr.processExit(1)
}

function printDiagnostic(message: string, severity: astn.DiagnosticSeverity) {
    if (severity[0] === "warning") {
        pr.logWarning(message)
    } else {
        pr.logError(message)
    }
}

const cacheDir = "./schemacache"

const stdout = pr.createStdOut()

ass.createNormalizer(
    pr.basename(sourcePath),
    env.createFileSystemResourceProvider(
        pr.dirname(sourcePath),
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
    (str) => stdout.write(str),
    (normalizer) => {
        normalizer.onData(pr.readFileSync(sourcePath))
        normalizer.onEnd(null)
    }
)