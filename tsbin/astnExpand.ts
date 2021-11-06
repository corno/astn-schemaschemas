import * as pr from "pareto-runtime"
import * as astn from "astn"
import * as ass from "../src"
import * as env from "../src/env"
import { defaultSchemaHost } from "../src"


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
    ["expanded", { omitPropertiesWithDefaultValues: false }],
    (str) => stdout.write(str),
    (normalizer) => {
        normalizer.onData(pr.readFileSync(sourcePath))
        normalizer.onEnd(null)
    }
)