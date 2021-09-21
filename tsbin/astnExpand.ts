import * as p20 from "pareto-20"
import * as fs from "fs"
import * as astn from "astn"
import * as path from "path"

import { makeNativeHTTPrequest } from "../src/env/makeNativeHTTPrequest";
import { createNormalizer } from "../src/createNormalizer";
import { readFileFromFileSystem } from "../src";

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

createNormalizer(
    path.dirname(sourcePath),
    path.basename(sourcePath),
    readFileFromFileSystem,
    makeNativeHTTPrequest,
    printDiagnostic,
    ["expanded", { omitPropertiesWithDefaultValues: false }],
    (str) => process.stdout.write(str)
).mapResult((normalizer) => {
    return p20.createArray([fs.readFileSync(sourcePath, {encoding: "utf-8"})]).streamify().consume(
        null,
        normalizer,
    )
}).handle(() => {
    //
})