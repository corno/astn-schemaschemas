import { CreateStreamConsumer } from "../../../../runProgram"
import { createSchemaStreamProcesser } from "./createSchemaStreamProcessor"
import * as p from "pareto"
import * as ll from "../../../../lowlevel/generated/lowlevel"
import * as gts from "../../../../lowlevel/generateTypescript"
import { generateCode2 } from "./generateCode"

export const createCodeGenerator2: CreateStreamConsumer = (
    write: (str: string) => void,
    error: (str: string) => void,
): p.IStreamConsumer<string, null, null> => {

    return createSchemaStreamProcesser(
        {
            onSchema: (schema) => {
                let isFirstLine = true
                function createBlock(
                    indentation: string,
                    currentIndentation: string,
                    flush: () => void,
                ): gts.Block {
                    return {
                        line: (callback) => {
                            flush()
                            if (!isFirstLine) {
                                write(`\r\n`)
                            }
                            isFirstLine = false
                            let currentLine: string | null = currentIndentation
                            function createLine(
                                indentation: string,
                                currentIndentation: string,
                            ): gts.Line {
                                return {
                                    indent: (callback) => {
                                        callback(createBlock(
                                            indentation,
                                            currentIndentation + indentation,
                                            () => {
                                                if (currentLine !== null) {
                                                    write(currentLine.trimRight())
                                                    currentLine = null
                                                }
                                            },
                                        ))
                                    },
                                    snippet: (str) => {
                                        if (currentLine === null) {
                                            write(`\r\n`)
                                            currentLine = currentIndentation
                                        }
                                        currentLine += `${str}`
                                    },
                                }
                            }
                            callback(createLine(
                                indentation,
                                currentIndentation
                            ))
                            if (currentLine !== null) {
                                write(currentLine.trimRight())
                            }
                        },
                    }
                }
                console.warn("generating code...")
                generateCode2(
                    schema,
                    ($) => {
                        gts.generateTypeScript(
                            ll.createBuilder($),
                            createBlock(
                                "    ",
                                "",
                                () => {
                                    //
                                },
                            ),
                        )
                    }
                )
            },
        },
        error,
    )
}
