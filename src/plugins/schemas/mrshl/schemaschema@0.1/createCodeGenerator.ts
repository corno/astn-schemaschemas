import { CreateStreamConsumer } from "../../../../runProgram"
import { createSchemaStreamProcesser } from "./createSchemaStreamProcessor"
import * as p from "pareto"
import {
    IBlock,
    ITempBlock,
    ILine,
    generateCode,
} from "./generateCode_old"

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
                ): ILine {
                    return {
                        snippet: (str) => {
                            snippet(`${str}`)
                        },
                        tempBlock: (callback) => {
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
                ): ITempBlock {
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
                        parameters: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                        },
                        indent: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                        },
                        objectImp: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                        },
                        objectDef: (callback) => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                        },
                        statementsBlock: (callback) => {
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
                generateCode(
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
