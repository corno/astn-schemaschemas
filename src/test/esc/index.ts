import { testProgram } from "./testProgram"
import * as pt from "pareto-test"
import { createCodeGenerator,createCodeGenerator2 } from "../../pub/esc"

export function bla(): void {
    //
}

export interface IInterface {
    y(): void
}

pt.testset('generate code', () => {
    {
        const dir = "./test/codeGeneration/data"

        pt.testAsync("1", (resolve) => {
            testProgram(
                dir + "/" + "in.astn",
                dir,
                "out",
                "ts_",
                createCodeGenerator,
                resolve
            )
        })
    }
    {
        const dir = "./test/codeGeneration2/data"

        pt.testAsync("2", (resolve) => {
            return testProgram(
                dir + "/" + "in.astn",
                dir,
                "out",
                "ts_",
                createCodeGenerator2,
                resolve,
            )
        })
    }
})
