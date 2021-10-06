import * as ass from "../src"
import { testProgram } from "./testProgram"

export function bla(): void {
    //
}

export interface IInterface {
    y(): void
}

describe('generate code', () => {
    {
        const dir = __dirname + "/../../test/codeGeneration/data"

        it("1", () => {
            return testProgram(
                dir + "/" + "in.astn",
                dir,
                "out",
                "ts_",
                ass.createCodeGenerator,
            )
        })
    }
    {
        const dir = __dirname + "/../../test/codeGeneration2/data"

        it("2", () => {
            return testProgram(
                dir + "/" + "in.astn",
                dir,
                "out",
                "ts_",
                ass.createCodeGenerator2,
            )
        })
    }
})
