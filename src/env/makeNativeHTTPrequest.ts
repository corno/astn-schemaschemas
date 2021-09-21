import * as http from "http"
import * as p20 from "pareto-20"
import * as p from "pareto"
import { SchemaHost } from "../SchemaHost"
import * as astn from "astn"

export function makeNativeHTTPrequest(
    schemaHost: SchemaHost,
    schema: string,
    timeout: number,
): p.IUnsafeValue<p.IStream<string, null>, astn.RetrievalError> {
    return p20.wrapUnsafeFunction((onError, onSucces) => {

        const path = `${schemaHost.pathStart}/${encodeURI(schema)}`.replace(/\/\//g, "/")
        const request = http.request(
            {
                host: schemaHost.host,
                path: path,
                timeout: timeout,
            },
            (res) => {
                if (res.statusCode !== 200) {
                    onError(["not found", {}])
                    return
                }
                //below code is streaming but unstable
                // onSucces(p20.createStream((_limiter, consumer) => {
                //     res.on('data', chunk => {
                //         res.pause()
                //         consumer.onData(chunk.toString()).handle(
                //             _abortRequested => {
                //                 res.resume()
                //             }
                //         )
                //     })
                //     res.on('end', () => {
                //         consumer.onEnd(false, null)
                //     })
                // }))

                let complete = ""
                onSucces(p20.createStream((_limiter, consumer) => {
                    res.on(
                        'data',
                        (chunk) => {
                            complete += chunk.toString()
                        }
                    )
                    res.on('end', () => {

                        consumer.onData(complete).handle(
                            (_abortRequested) => {
                                //
                                consumer.onEnd(false, null)
                            }
                        )
                    })
                }))
            }
        )
        request.on('timeout', () => {
            onError(["other", { description: "timeout" }])
        });
        request.on('error', (e) => {
            onError(["other", { description: e.message }])
        });
        request.end()
    })
}
