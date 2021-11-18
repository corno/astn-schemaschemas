import { IStreamConsumer } from "astn/dist/src/IStreamConsumer"
import * as pr from "pareto-runtime"

export type CreateStreamConsumer = (
    write: (str: string) => void,
    onError: (str: string) => void,
) => IStreamConsumer<string, null>

export function runProgram(
    createStreamConsumer: CreateStreamConsumer
): void {
    const stdOut = pr.createStdOut()
    const stdErr = pr.createStdOut()
    const ssp = createStreamConsumer(
        (str) => stdOut.write(str),
        (str) => stdErr.write(str)
    )
    pr.subscribeToStdIn(ssp)
}