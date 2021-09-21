import * as ass from "../../src"
import { testProgram } from "../testProgram"

export function bla(): void {
    //
}

export interface IInterface {
    y(): void
}

describe('formatting', () => {
    const dir = __dirname + "/../../../test/codeGeneration/data"

    it("generate code", () => {
        return testProgram(
            dir + "/" + "in.astn",
            dir,
            "out",
            "ts_",
            ass.createCodeGenerator,
        )
    })
})
