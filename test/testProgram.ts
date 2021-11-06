import { CreateStreamConsumer } from "../src/runProgram"
import * as pt from "pareto-test"
import * as pr from "pareto-runtime"

export function testProgram(
    inputFilePath: string,
    outDir: string,
    outBasename: string,
    outExtension: string,
    createStreamConsumer: CreateStreamConsumer,
    resolve: () => void,
): void {
    const dataIn = pr.readFileSync(inputFilePath)

    const expectedOut = pr.readFileSync(outDir + "/" + outBasename + ".expected." + outExtension)

    let actualOut = ""
    const sc = createStreamConsumer(
        (str) => actualOut += str,
        (str) => {
            throw new Error(`unexpected error: ${str}`)
        }
    )

    const actualFilePath = outDir + "/" + outBasename + ".actual." + outExtension

    try {
        pr.unlinkSync(actualFilePath)
    } catch (e) {
        //
    }

    sc.onData(dataIn)
    sc.onEnd(null)

    if (actualOut !== expectedOut) {
        pr.writeFileSync(actualFilePath, actualOut)
    }
    pt.assertEqual(expectedOut, actualOut)
    resolve()
}