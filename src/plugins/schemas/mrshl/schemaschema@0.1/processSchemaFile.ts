import * as stream from "stream"
import * as p from "pareto"
import * as astn from "astn"


export function processSchemaFile(
    handler: astn.TreeHandler<astn.TokenizerAnnotationData, null>,
): void {

    const parserStack = astn.createStreamPreTokenizer(
        astn.createTokenizer(
            astn.createStructureParser({
                onEmbeddedSchema: $ => {
                    console.error(`expected a schema reference @ ${astn.printRange($.embeddedSchemaAnnotation.range)}`)
                    return astn.createDummyTreeHandler()
                },
                onSchemaReference: $ => {
                    const expectedSchemaHeader = "mrshl/schemaschema@0.1"
                    if ($.token.data.value !== expectedSchemaHeader) {
                        console.error(`expected "${expectedSchemaHeader}" but found "${$.token.data.value}"`)
                    }
                    return p.value(false)
                },
                onBody: () => {
                    return handler
                },
                onEnd: () => {
                    //
                },
                errors: {
                    onTreeError: $ => {
                        console.error(`${astn.printTreeParserError($.error)} @ ${astn.printRange($.annotation.range)}`)
                    },
                    onStructureError: $ => {
                        console.error(`${astn.printStructureError($.error)} @ ${astn.printRange($.annotation.range)}`)
                    },
                },
            })
        ),
        $ => {
            console.error(`${astn.printTokenError($.error)} @ ${astn.printRange($.range)}`)
        },
    )
    process.stdin.setEncoding("utf-8")
    process.stdin.pipe(
        new stream.Writable({
            defaultEncoding: "utf-8",
            write: function (data, _encoding, callback) {
                parserStack.onData(data.toString()).handle(_abort => {
                    callback()
                })
            },
        })
    ).on('finish', () => {
        parserStack.onEnd(false, null).handle(
            _result => {
                //
            },
        )
    })
}
