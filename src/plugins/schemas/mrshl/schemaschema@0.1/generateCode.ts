import { CreateStreamConsumer } from "../../../../runProgram"
import { createSchemaStreamProcesser } from "./createSchemaStreamProcessor"
import * as p from "pareto"
import {
    IBlock,
    BlockXWriter,
    ILineWriter,
    generateSchemaLoader,
} from "./generateSchemaLoader"

export const createCodeGenerator: CreateStreamConsumer = (
    write: (str: string) => void,
    error: (str: string) => void,
): p.IStreamConsumer<string, null, null> => {

    return createSchemaStreamProcesser(
        {
            onSchema: (schema) => {
                let currentLine = ""
                function flush() {
                    write(currentLine.trimRight())
                    currentLine = ""
                }
                function createLineWriter(
                    newline: (indentation: string) => void,
                    snippet: (str: string) => void,
                    indentation: string,
                    currentIndentation: string,
                ): ILineWriter {
                    return {
                        snippet: (str) => {
                            snippet(`${str}`)
                        },
                        nestedBlockX: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                            newline(currentIndentation)
                        },
                        nestedBlock: (callback) => {
                            snippet(`{`)
                            callback(createBlock(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                            newline(currentIndentation)
                            snippet(`}`)
                        },
                    }
                }
                function createBlock(
                    newline: (indentation: string) => void,
                    snippet: (str: string) => void,
                    indentation: string,
                    currentIndentation: string,
                ): IBlock {
                    return {
                        variable: (callback) => {
                            newline(currentIndentation)
                            callback(createLineWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation
                            ))
                        },
                        statement: (callback) => {
                            newline(currentIndentation)
                            callback(createLineWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation
                            ))
                        },
                    }
                }
                function createBlockWriter(
                    newline: (indentation: string) => void,
                    snippet: (str: string) => void,
                    indentation: string,
                    currentIndentation: string,
                ): BlockXWriter {
                    return {
                        line: (callback) => {
                            newline(currentIndentation)
                            callback(createLineWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation,
                            ))
                        },
                        func: (
                            str,
                            body,
                        ) => {

                            newline(currentIndentation)
                            snippet(`${str} {`)

                            body(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                            newline(currentIndentation)
                            snippet(`}`)
                        },
                        fullLine: (str) => {
                            newline(currentIndentation)
                            snippet(`${str}`)
                        },
                        nestedBlockX: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                        },
                    }
                }
                console.warn("generating code...")
                generateSchemaLoader(
                    schema,
                    createBlockWriter(
                        (indentation) => {
                            flush()
                            write(`\n`)
                            currentLine = indentation
                        },
                        (str) => currentLine += str,
                        "    ",
                        "",
                    )
                )
                flush()
            },
        },
        error,
    )
}
