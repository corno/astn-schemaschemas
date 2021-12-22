import * as pr from "pareto-runtime"
import * as etc from "astn/dist/pub/esc/interfaces/etc"
import { createFileSystemResourceProvider } from "./createFileSystemResourceProvider"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

export function createCachedResourceProvider(
    resourceProvider: etc.IResourceProvider,
    cacheDir: string,
): etc.IResourceProvider {
    return {
        getResource: (
            id,
            sc,
            onFailed,
        ) => {
            const fullPath = pr.normalize(pr.join([cacheDir, id]))
            if (!fullPath.startsWith(pr.normalize(cacheDir))) {
                //invalid resourcePath, possibly trying to access files outside of the cache directory, skip caching
                return resourceProvider.getResource(
                    id,
                    sc,
                    onFailed,
                )
            } else {
                return createFileSystemResourceProvider(
                    cacheDir,
                ).getResource(
                    id,
                    sc,
                    (_$) => {
                        //could not get it from the cache

                        const dirContainingTheCacheFile = pr.dirname(fullPath)
                        const tempCache = ((): etc.IStreamConsumer<string, null> => {
                            let tmp = ""
                            return {
                                onData: ($) => {
                                    tmp += $
                                },
                                onEnd: () => {
                                    pr.mkdir(
                                        dirContainingTheCacheFile,
                                        ($) => {
                                            switch ($[0]) {
                                                case "error":
                                                    cc($[1], (_$) => {
                                                        pr.logWarning(`error while creating cache dir}`)
                                                    })
                                                    break
                                                case "success":
                                                    cc($[1], (_$) => {
                                                        pr.writeFile(
                                                            fullPath,
                                                            tmp,
                                                            (err) => {
                                                                if (err !== null) {
                                                                    pr.logWarning(`error while writing cache`)
                                                                }
                                                            },
                                                        )
                                                    })
                                                    break
                                                default:
                                                    assertUnreachable($[0])
                                            }
                                        }
                                    )
                                },
                            }
                        })()
                        resourceProvider.getResource(
                            id,
                            {
                                onData: ($) => {
                                    tempCache.onData($)
                                    sc.onData($)
                                },
                                onEnd: () => {
                                    tempCache.onEnd(null)
                                    sc.onEnd(null)
                                },
                            },
                            onFailed,
                        )
                    },
                )
            }
        },
    }
}
