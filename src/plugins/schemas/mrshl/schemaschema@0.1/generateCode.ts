import {
    Block,
    BlockXWriter,
    ILineWriter,
    generateSchemaLoader,
} from "./generateSchemaLoader"
import { Schema } from "./types"

export interface ICodeGenerator {
    onSchema: (schema: Schema) => void
}

export function createCodeGenerator(
    write: (str: string) => void,
): ICodeGenerator {
    return {
        onSchema: (schema) => {

            function generateCode(
                schema: Schema,
            ): void {
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
                        snippet: str => {
                            snippet(`${str}`)
                        },
                        nestedBlockX: callback => {
                            callback(createBlockWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation + indentation
                            ))
                            newline(currentIndentation)
                        },
                        nestedBlock: callback => {
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
                ): Block {
                    return {
                        variable: callback => {
                            newline(currentIndentation)
                            callback(createLineWriter(
                                newline,
                                snippet,
                                indentation,
                                currentIndentation
                            ))
                        },
                        statement: callback => {
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
                        line: callback => {
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
                        fullLine: str => {
                            newline(currentIndentation)
                            snippet(`${str}`)
                        },
                        nestedBlockX: callback => {
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
                        indentation => {
                            flush()
                            write(`\n`)
                            currentLine = indentation
                        },
                        str => currentLine += str,
                        "    ",
                        "",
                    )
                )
                flush()
            }
            generateCode(schema)
        },
    }
}
