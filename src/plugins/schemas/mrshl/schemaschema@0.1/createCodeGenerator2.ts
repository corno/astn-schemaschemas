import { CreateStreamConsumer } from "../../../../runProgram"
import { createSchemaStreamProcesser } from "./createSchemaStreamProcessor"
import * as p from "pareto"
import * as ll from "../../../../lowlevel/generated/lowlevel"
import { generateCode2 } from "./generateCode"
import { generateTypeScript } from "../../../../lowlevel/TypeScript/generateTypescript"
import { createFile } from "../../../../lowlevel/TypeScript/createFile"

export const createCodeGenerator2: CreateStreamConsumer = (
    write: (str: string) => void,
    error: (str: string) => void,
): p.IStreamConsumer<string, null, null> => {

    return createSchemaStreamProcesser(
        {
            onSchema: (schema) => {
                console.warn("generating code...")
                generateCode2(
                    schema,
                    ($) => {
                        generateTypeScript(
                            ll.createBuilder($),
                            createFile(
                                "    ",
                                `\r\n`,
                                write,
                            ),
                        )
                    }
                )
            },
        },
        error,
    )
}
