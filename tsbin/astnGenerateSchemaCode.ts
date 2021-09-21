import * as stream from "stream"
import * as p from "pareto"

import { createSchemaStreamProcesser } from "../src/plugins/schemas/mrshl/schemaschema@0.1/createSchemaStreamProcessor"
import { generateCode } from "../src/plugins/schemas/mrshl/schemaschema@0.1/generateCode"


function createCodeGenerator(

): p.IStreamConsumer<string, null, null> {
    return createSchemaStreamProcesser(
        generateCode,
        str => console.error(str),
    )
}

const ssp = createCodeGenerator()

process.stdin.setEncoding("utf-8")
process.stdin.pipe(
    new stream.Writable({
        defaultEncoding: "utf-8",
        write: function (data, _encoding, callback) {
            ssp.onData(data.toString()).handle(_abort => {
                callback()
            })
        },
    })
).on('finish', () => {
    ssp.onEnd(false, null).handle(
        _result => {
            //
        },
    )
})