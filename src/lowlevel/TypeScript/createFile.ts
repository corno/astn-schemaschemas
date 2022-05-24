import { Block, Line } from "./WriteAPI"
import * as pr from "pareto-runtime"

export function createFile(
    indentation: string,
    newline: string,
    write: (str: string,) => void,
): Block {
    let isFirstLine = true
    function createBlock(
        indentation: string,
        currentIndentation: string,
        flush: () => void,
    ): Block {
        return {
            line: (callback) => {
                flush()
                if (!isFirstLine) {
                    write(newline)
                }
                isFirstLine = false
                let currentLine: string | null = currentIndentation
                function createLine(
                    indentation: string,
                    currentIndentation: string,
                ): Line {
                    return {
                        indent: (callback) => {
                            callback(createBlock(
                                indentation,
                                currentIndentation + indentation,
                                () => {
                                    if (currentLine !== null) {
                                        write(pr.trimRight(currentLine))
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
                    write(pr.trimRight(currentLine))
                }
            },
        }
    }
    return createBlock(
        indentation,
        "",
        () => {
            //
        },
    )
}
