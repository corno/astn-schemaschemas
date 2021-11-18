import * as pr from "pareto-runtime"
import * as astn from "astn"
import { CreateStreamConsumer } from "../../../../runProgram"
import { createSchemaStreamProcesser } from "./createSchemaStreamProcessor"
import * as ll from "../../../../lowlevel/lowlevel.generated"
import { generateCode2 } from "./generateCode"
import { generateTypeScript } from "../../../../lowlevel/TypeScript/generateTypescript"
import { createFile } from "../../../../lowlevel/TypeScript/createFile"

export const createCodeGenerator2: CreateStreamConsumer = (
    write: (str: string) => void,
    error: (str: string) => void,
): astn.IStreamConsumer<string, null> => {

    return createSchemaStreamProcesser(
        {
            onSchema: (schema) => {
                pr.logWarning("generating code...")
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
