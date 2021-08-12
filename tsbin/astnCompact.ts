import * as astncore from "astn"
import { makeNativeHTTPrequest } from "../src/makeNativeHTTPrequest";
import { normalize } from "../src/normalize";

const [, , sourcePath] = process.argv

if (sourcePath === undefined) {
    console.error("missing source path")
    process.exit(1)
}

function printDiagnostic(message: string, severity: astncore.DiagnosticSeverity) {
    if (severity === astncore.DiagnosticSeverity.warning) {
        console.warn(message)
    } else {
        console.error(message)
    }
}

normalize(
    sourcePath,
    makeNativeHTTPrequest,
    ["compact"],
    printDiagnostic,
    str => process.stdout.write(str)
).handle(() => {
    //
})