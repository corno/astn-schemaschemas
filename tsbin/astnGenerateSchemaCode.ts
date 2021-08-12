import * as p from "pareto"
import * as astn from "astn"
import * as astncore from "astn"

import {
    createDeserializer,
} from "../src/plugins/schemas/mrshl/schemaschema@0.1/createDeserializer"
import {
    Block,
    BlockXWriter,
    LineWriter,
    generateSchemaLoader,
} from "../src/plugins/schemas/mrshl/schemaschema@0.1/generateSchemaLoader"
import { processSchemaFile } from "../src/plugins/schemas/mrshl/schemaschema@0.1/processSchemaFile"


processSchemaFile(
    createDeserializer(
        (error, annotation) => {
            console.error(`EXPECT ERROR FOUND: ${astncore.printExpectError(error)} @ ${astn.printRange(annotation.range)}`)
        },
        (error, annotation) => {
            console.error(`VALIDATION ERROR FOUND: ${error} @ ${astn.printRange(annotation.range)}`)
        },
        schema => {
            if (schema === null) {
                console.error("MISSING SCHEMA")
            } else {
                let currentLine = ""
                function flush() {
                    process.stdout.write(currentLine.trimRight())
                    currentLine = ""
                }

                function createLineWriter(
                    newline: (indentation: string) => void,
                    snippet: (str: string) => void,
                    indentation: string,
                    currentIndentation: string,
                ): LineWriter {
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
                            process.stdout.write(`\n`)
                            currentLine = indentation
                        },
                        str => currentLine += str,
                        "    ",
                        "",
                    )
                )
                flush()
            }
        },
        () => {
            return p.value(null)
        },
    ),
)