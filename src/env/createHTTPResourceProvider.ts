import * as pr from "pareto-runtime"
import { SchemaHost } from "../SchemaHost"
import * as astn from "astn"


export function createHTTPResourceProvider(
    schemaHost: SchemaHost,
    timeout: number,
): astn.IResourceProvider {
    return {
        getResource: (
            id,
            sc,
            onFailed,
        ) => {
            const path = `${schemaHost.pathStart}/${pr.encodeURI(id)}`.replace(/\/\//g, "/")
            pr.doHTTPRequest(
                {
                    host: schemaHost.host,
                    path: path,
                    timeout: timeout,
                },
                {
                    onError: ($) => {
                        onFailed(["other", { description: $ }])
                    },
                    onNotFound: () => {
                        onFailed(["not found", {}])
                    },
                    onSuccess: () => {
                        return sc
                    },
                    onTimeout: () => {
                        onFailed(["other", { description: "timeout" }])
                    },
                },
            )
        },
    }
}