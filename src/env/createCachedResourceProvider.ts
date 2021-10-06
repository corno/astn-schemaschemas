import * as p from "pareto"
import * as astn from "astn"
import * as fs from "fs"
import * as p20 from "pareto-20"
import * as path from "path"
import { IResourceProvider } from "astn"
import { createFileSystemResourceProvider } from "./createFileSystemResourceProvider"

export function createCachedResourceProvider(
    resourceProvider: astn.IResourceProvider,
    cacheDir: string,
): IResourceProvider {
    return {
        getResource: (
            id: string
        ) => {
            const fullPath = path.normalize(path.join(cacheDir, id))
            if (!fullPath.startsWith(path.normalize(cacheDir))) {
                //invalid resourcePath, possibly trying to access files outside of the cache directory, skip caching
                return resourceProvider.getResource(id)
            } else {
                const dirContainingTheSchema = path.dirname(fullPath)
                return createFileSystemResourceProvider(
                    cacheDir,
                ).getResource(id).tryToCatch((_error) => {
                    //file not found in cache
                    return resourceProvider.getResource(id).mapResult(
                        (result) => {
                            let data = ""
                            return result.consume(null, {
                                onData: ($) => {
                                    data += $
                                    return p.value(false)
                                },
                                onEnd: () => {
                                    return p.value(null)
                                },
                            }).mapResult(() => {
                                return p20.wrapSafeFunction((onResult) => {
                                    fs.mkdir(
                                        dirContainingTheSchema,
                                        { recursive: true },
                                        (err) => {
                                            if (err !== null) {
                                                console.warn(`error while creating cache dir: ${err.message}`)
                                            } else {
                                                fs.writeFile(
                                                    fullPath,
                                                    data,
                                                    (err) => {
                                                        if (err !== null) {
                                                            console.warn(`error while writing cache: ${err.message}`)
                                                        }
                                                        onResult(p.buildStream(
                                                            (builder) => {
                                                                builder.push(data)
                                                            },
                                                            null,
                                                        ))
                                                    },
                                                )
                                            }
                                        }
                                    )
                                })
                            })
                        }
                    )
                })
            }
        },
    }
}
