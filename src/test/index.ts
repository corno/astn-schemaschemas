import * as ass from "../src/pub/lib"
import { testProgram } from "./testProgram"
import * as pt from "pareto-test"

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
                ass.createCodeGenerator,
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
                ass.createCodeGenerator2,
                resolve,
            )
        })
    }
})
