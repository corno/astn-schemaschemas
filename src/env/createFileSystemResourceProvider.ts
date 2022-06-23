import * as pr from "pareto-runtime"
import * as astn from "astn"
import * as fs from "./fs"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

export function createFileSystemResourceProvider(
    dir: string
): astn.IResourceProvider {
    return {
        getResource: (
            fileName,
            sc,
            onFailed,
        ) => {
            fs.readFile(
                pr.join([dir, fileName]),
                ($) => {
                    switch ($[0]) {
                        case "error":
                            cc($[1], ($) => {
                                switch ($.type[0]) {
                                    case "is directory":
                                        cc($.type[1], () => {
                                            onFailed(["not found", {}])

                                        })
                                        break
                                    case "no entity":
                                        cc($.type[1], () => {
                                            onFailed(["not found", {}])

                                        })
                                        break
                                    case "other":
                                        cc($.type[1], ($) => {
                                            onFailed(["other", { description: $.message }])
                                        })
                                        break
                                    default:
                                        assertUnreachable($.type[0])
                                }
                            })
                            break
                        case "success":
                            cc($[1], ($) => {
                                sc.onData($.data)
                                sc.onEnd(null)
                            })
                            break
                        default:
                            assertUnreachable($[0])
                    }
                }
            )
        },
    }
}