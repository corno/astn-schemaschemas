import { CreateStreamConsumer } from "../src/runProgram"
import * as pt from "pareto-test"
import * as pr from "pareto-runtime"
import * as fs from "../src/env/fs"

export function testProgram(
    inputFilePath: string,
    outDir: string,
    outBasename: string,
    outExtension: string,
    createStreamConsumer: CreateStreamConsumer,
    resolve: () => void,
): void {
    const dataIn = fs.readFileSync(inputFilePath)

    const expectedOut = fs.readFileSync(outDir + "/" + outBasename + ".expected." + outExtension)

    let actualOut = ""
    const sc = createStreamConsumer(
        (str) => actualOut += str,
        (str) => {
            throw new Error(`unexpected error: ${str}`)
        }
    )

    const actualFilePath = outDir + "/" + outBasename + ".actual." + outExtension

    try {
        fs.unlinkSync(actualFilePath)
    } catch (e) {
        //
    }

    sc.onData(dataIn)
    sc.onEnd(null)

    if (actualOut !== expectedOut) {
        fs.writeFileSync(actualFilePath, actualOut)
    }
    pt.assertEqual(expectedOut, actualOut)
    resolve()
}