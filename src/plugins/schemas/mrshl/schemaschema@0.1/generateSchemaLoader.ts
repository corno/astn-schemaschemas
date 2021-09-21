/*eslint
    "max-len": "off"
*/


import * as def from "./types"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T>(input: T, callback: (output: T) => void): void {
    callback(input)
}

function generateIdentifier(str: string) {
    return str.replace(/ /g, "_").replace(/\-/g, "_")
}

function generateHandlerFunctionName(str: string) {
    return `_generateHandler_${generateIdentifier(str)}`
}

// function generateBuilderFunctionName(str: string) {
//     return `_generateBuilder_${generateIdentifier(str)}`
// }

export interface ILineWriter {
    snippet: (str: string) => void
    nestedBlockX: (
        callback: ($w: BlockXWriter) => void,
    ) => void
    nestedBlock: (
        callback: ($w: IBlock) => void,
    ) => void
}

export interface IBlock {
    variable: (
        // modification: "const" | "let",
        // name: string,
        callback: ($w: ILineWriter) => void
    ) => void
    statement: (
        callback: ($w: ILineWriter) => void
    ) => void
}

export interface BlockXWriter {
    line: (callback: ($w: ILineWriter) => void) => void
    fullLine: (str: string) => void
    func: (
        str: string,
        body: ($w: BlockXWriter) => void,
    ) => void
    nestedBlockX: (
        callback: ($w: BlockXWriter) => void,
    ) => void
}

interface NodeIdentifierGenerator {
    collection: (str: string) => NodeIdentifierGenerator
    stateGroup: (str: string) => StateGroupIdentifierGenerator
    generateNodeIdentifier: () => string
    generateNodeBuilderIdentifier: () => string
}

interface StateGroupIdentifierGenerator {
    state: (str: string) => NodeIdentifierGenerator
    generateTaggedUnionIdentifier: () => string
}

function generateVariableIdentifier(str: string) {
    return `_${generateIdentifier(str)}_v`
}

type Registry = {
        known: { [key: string]: string }
        usedIdentifiers: { [key: string]: string }
}
const stateGroupRegistry: Registry = {
    known: {},
    usedIdentifiers: {},
}

const nodeRegistry: Registry = {
    known: {},
    usedIdentifiers: {},
}
const nodeBuilderRegistry: Registry = {
    known: {},
    usedIdentifiers: {},
}

function getPathIdentifier(registry: Registry, path: string[]): string {
    const asJSON = JSON.stringify(path)
    if (registry.known[asJSON] === undefined) {
        let varName = ""
        for (let i = path.length - 1; i !== -1; i -= 1) {
            varName += `_${path[i]}`
            if (registry.usedIdentifiers[varName] === undefined) {
                registry.usedIdentifiers[varName] = asJSON
                break
            }
        }
        registry.known[asJSON] = varName
    }
    return generateIdentifier(registry.known[asJSON])
}

function createIdentifierGenerator(componentTypeName: string): NodeIdentifierGenerator {

    function createNode(path: string[]): NodeIdentifierGenerator {
        return {
            collection: (str) => {
                return createNode(path.concat([str]))
            },
            stateGroup: (sgStr) => {
                const path2 = path.concat([sgStr])
                return {
                    state: (stateStr) => {
                        return createNode(path2.concat([stateStr]))
                    },
                    generateTaggedUnionIdentifier: () => {
                        if (path2.length === 0) {
                            return "FIXME_NODE"
                        } else {
                            return `_${getPathIdentifier(stateGroupRegistry, path2)}_TU`
                        }
                    },
                }
            },
            generateNodeIdentifier: () => {
                return `_${getPathIdentifier(nodeRegistry, path)}_T`
            },
            generateNodeBuilderIdentifier: () => {
                if (path.length === 0) {
                    return "FIXME_NODE"
                } else {
                    //console.log()
                    return `_${getPathIdentifier(nodeBuilderRegistry, path)}_B`
                }
            },
        }
    }
    return createNode([componentTypeName])
}

export function generateSchemaLoader(
    schema: def.Schema,
    $w: BlockXWriter,
): void {

    function generateNodeTypes(
        node: def.Node,
        keyProperty: def.Property | null,
        ig: NodeIdentifierGenerator,
    ) {
        //first generate for all nested nodes
        node.properties.forEach(($, key) => {
            if ($ === keyProperty) {
                return
            }

            switch ($.type[0]) {
                case "collection":
                    const newPath = ig.collection(key)

                    cc($.type[1], ($) => {
                        const node = $.node
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    generateNodeTypes(node, $["key property"].get(), newPath)
                                })
                                break
                            case "list":
                                cc($.type[1], (_$) => {
                                    generateNodeTypes(node, null, newPath)
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }

                    })
                    break
                case "component":
                    break
                case "state group":
                    cc($.type[1], ($) => {
                        const newPath = ig.stateGroup(key)

                        $.states.forEach(($, key) => {
                            generateNodeTypes($.node, null, newPath.state(key))
                        })
                        //generate the tagged union type
                        $w.fullLine(`export type ${newPath.generateTaggedUnionIdentifier()} =`)
                        $w.nestedBlockX(($w) => {
                            const newPath = ig.stateGroup(key)
                            $.states.forEach((_$, key) => {

                                $w.fullLine(`| ["${key}", ${newPath.state(key).generateNodeIdentifier()}]`)
                            })
                        })
                        $w.fullLine(``)
                    })

                    break
                case "value":
                    break
                default:
                    assertUnreachable($.type[0])
            }
        })
        //generate the type
        $w.fullLine(`export type ${ig.generateNodeIdentifier()} = {`)
        $w.nestedBlockX(($w) => {
            node.properties.forEach(($, key) => {
                if ($ === keyProperty) {
                    return
                }

                $w.line(($w) => {
                    $w.snippet(`readonly "${key}": `)
                    switch ($.type[0]) {
                        case "collection":
                            cc($.type[1], ($) => {
                                const propertyPath = ig.collection(key)
                                switch ($.type[0]) {
                                    case "dictionary":
                                        $w.snippet(`IDictionary<${propertyPath.generateNodeIdentifier()}>`)
                                        break
                                    case "list":
                                        $w.snippet(`IArray<${propertyPath.generateNodeIdentifier()}>`)
                                        break
                                    default:
                                        assertUnreachable($.type[0])
                                }
                            })
                            break
                        case "component":
                            cc($.type[1], ($) => {
                                $w.snippet(`${createIdentifierGenerator($.type.name).generateNodeIdentifier()}`)
                            })
                            break
                        case "state group":
                            const propertyPath = ig.stateGroup(key)
                            $w.snippet(`${propertyPath.generateTaggedUnionIdentifier()}`)
                            break
                        case "value":
                            $w.snippet(`string`)
                            break
                        default:
                            assertUnreachable($.type[0])
                    }
                })
            })

        })
        $w.fullLine(`}`)
        $w.fullLine(``)
    }
    function generateNodeBuilderTypes(
        node: def.Node,
        keyProperty: def.Property | null,
        ig: NodeIdentifierGenerator,
    ) {
        //first generate for all nested nodes
        node.properties.forEach(($, key) => {
            if ($ === keyProperty) {
                return
            }

            switch ($.type[0]) {
                case "collection":
                    const newPath = ig.collection(key)

                    cc($.type[1], ($) => {
                        const node = $.node
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    generateNodeBuilderTypes(node, $["key property"].get(), newPath)
                                })
                                break
                            case "list":
                                cc($.type[1], (_$) => {
                                    generateNodeBuilderTypes(node, null, newPath)
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }

                    })
                    break
                case "component":
                    break
                case "state group":
                    cc($.type[1], ($) => {
                        const newPath = ig.stateGroup(key)

                        $.states.forEach(($, key) => {
                            generateNodeBuilderTypes($.node, null, newPath.state(key))
                        })
                        //generate the tagged union type
                        $w.fullLine(`export type ${newPath.generateTaggedUnionIdentifier()}_Builder =`)
                        $w.nestedBlockX(($w) => {
                            const newPath = ig.stateGroup(key)
                            $.states.forEach((_$, key) => {

                                $w.fullLine(`| ["${key}", ${newPath.state(key).generateNodeBuilderIdentifier()}]`)
                            })
                        })
                        $w.fullLine(``)
                    })

                    break
                case "value":
                    break
                default:
                    assertUnreachable($.type[0])
            }
        })
        //generate the type
        $w.fullLine(`export type ${ig.generateNodeBuilderIdentifier()} = {`)
        $w.nestedBlockX(($w) => {
            node.properties.forEach(($, key) => {
                if ($ === keyProperty) {
                    return
                }

                $w.line(($w) => {
                    $w.snippet(`readonly "${key}": `)
                    switch ($.type[0]) {
                        case "collection":
                            cc($.type[1], ($) => {
                                const propertyPath = ig.collection(key)
                                switch ($.type[0]) {
                                    case "dictionary":
                                        $w.snippet(`{ callback: (key: string, value: ${propertyPath.generateNodeBuilderIdentifier()} ) => void }`)
                                        break
                                    case "list":
                                        $w.snippet(`{ callback: (value: ${propertyPath.generateNodeBuilderIdentifier()} ) => void }`)
                                        break
                                    default:
                                        assertUnreachable($.type[0])
                                }
                            })
                            break
                        case "component":
                            cc($.type[1], ($) => {
                                $w.snippet(`${createIdentifierGenerator($.type.name).generateNodeBuilderIdentifier()}`)
                            })
                            break
                        case "state group":
                            const propertyPath = ig.stateGroup(key)
                            $w.snippet(`${propertyPath.generateTaggedUnionIdentifier()}_Builder`)
                            break
                        case "value":
                            $w.snippet(`string`)
                            break
                        default:
                            assertUnreachable($.type[0])
                    }
                })
            })

        })
        $w.fullLine(`}`)
        $w.fullLine(``)
    }

    function generateNodeCode(
        node: def.Node,
        keyProperty: def.Property | null,
        $w: ILineWriter,
        path: NodeIdentifierGenerator,
    ) {

        $w.snippet(`((callback: (out: ${path.generateNodeIdentifier()}) => void) => `)
        $w.nestedBlock(($w) => {
            node.properties.forEach(($, key) => {
                if ($ === keyProperty) {
                    return
                }

                switch ($.type[0]) {
                    case "collection":
                        cc($.type[1], ($) => {
                            const newPath = path.collection(key)
                            switch ($.type[0]) {
                                case "dictionary": {
                                    $w.variable(($w) => $w.snippet(`const ${generateVariableIdentifier(key)}: { [key: string]: ${newPath.generateNodeIdentifier()} } = {}`))
                                    break
                                }
                                case "list": {
                                    $w.variable(($w) => $w.snippet(`const ${generateVariableIdentifier(key)}: ${newPath.generateNodeIdentifier()}[] = []`))
                                    break
                                }
                                default:
                                    assertUnreachable($.type[0])
                            }
                        })
                        break
                    case "component": {
                        //const $$ = $.type[1]
                        cc($.type[1], ($) => {
                            $w.variable(($w) => $w.snippet(`let ${generateVariableIdentifier(key)}: ${createIdentifierGenerator($.type.name).generateNodeIdentifier()} | null = null`))
                        })
                        break
                    }
                    case "state group": {
                        //const $$ = $.type[1]
                        cc($.type[1], (_$) => {
                            const newPath = path.stateGroup(key)
                            $w.variable(($w) => $w.snippet(`let ${generateVariableIdentifier(key)}: ${newPath.generateTaggedUnionIdentifier()} | null = null`))
                        })
                        break
                    }
                    case "value": {
                        //const $$ = $.type[1]
                        $w.variable(($w) => $w.snippet(`let ${generateVariableIdentifier(key)}: string | null = null`))
                        break
                    }
                    default:
                        assertUnreachable($.type[0])
                }
            })
            $w.statement(($w) => {
                $w.snippet(`return context.expectVerboseGroup({`)
                $w.nestedBlockX(($w) => {
                    $w.fullLine(`properties: {`)
                    $w.nestedBlockX(($w) => {
                        node.properties.forEach(($, key) => {
                            if ($ === keyProperty) {
                                return
                            }

                            $w.fullLine(`"${key}": {`)
                            $w.nestedBlockX(($w) => {

                                switch ($.type[0]) {
                                    case "collection": {
                                        const $$ = $.type[1]
                                        const newPath = path.collection(key)
                                        const node = $$.node
                                        switch ($$.type[0]) {
                                            case "dictionary": {
                                                // const $$$ = $$.type[1]
                                                cc($$.type[1], ($) => {
                                                    $w.fullLine(`onNotExists: () => { /**/ },`)
                                                    $w.line(($w) => {
                                                        $w.snippet(`onExists: () => wrap(context.expectDictionary({`)
                                                        $w.nestedBlockX(($w) => {
                                                            $w.fullLine(`onProperty: propertyData => {`)
                                                            $w.nestedBlockX(($w) => {
                                                                $w.line(($w) => {
                                                                    $w.snippet(`return wrap(`)
                                                                    generateNodeCode(node, $["key property"].get(), $w, newPath)
                                                                    $w.snippet(`(node => ${generateVariableIdentifier(key)}[propertyData.token.data.value] = node)`)
                                                                    $w.snippet(`)`)
                                                                })

                                                            })
                                                            $w.fullLine(`},`)
                                                        })
                                                        $w.snippet(`})),`)
                                                    })

                                                })
                                                break
                                            }
                                            case "list": {
                                                $w.fullLine(`onNotExists: () => { /**/ },`)
                                                $w.line(($w) => {
                                                    $w.snippet(`onExists: () => wrap(context.expectList({`)
                                                    $w.nestedBlockX(($w) => {
                                                        $w.fullLine(`onElement: () => {`)
                                                        $w.nestedBlockX(($w) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`return `)
                                                                generateNodeCode(node, null, $w, newPath)
                                                                $w.snippet(`(node => ${generateVariableIdentifier(key)}.push(node))`)
                                                            })

                                                        })
                                                        $w.fullLine(`},`)
                                                    })
                                                    $w.snippet(`})),`)
                                                })
                                                break
                                            }
                                            default:
                                                assertUnreachable($$.type[0])
                                        }
                                        break
                                    }
                                    case "component": {
                                        const $$ = $.type[1]
                                        $w.fullLine(`onNotExists: () => { /**/ },`)
                                        $w.line(($w) => {
                                            $w.snippet(`onExists: () => wrap(${generateHandlerFunctionName($$.type.name)}(`)
                                            $w.nestedBlockX(($w) => {
                                                $w.fullLine(`node => ${generateVariableIdentifier(key)} = node`)
                                            })
                                            $w.snippet(`)),`)
                                        })
                                        // $$.type
                                        break
                                    }
                                    case "state group": {
                                        const $$ = $.type[1]
                                        const propertyVariable = generateVariableIdentifier(key)
                                        const newPath = path.stateGroup(key)
                                        $w.fullLine(`onNotExists: () => { /**/ },`)
                                        $w.line(($w) => {
                                            $w.snippet(`onExists: () => wrap(context.expectTaggedUnion({`)
                                            $w.nestedBlockX(($w) => {
                                                $w.fullLine(`options: {`)
                                                $w.nestedBlockX(($w) => {
                                                    $$.states.forEach((state, key) => {
                                                        $w.fullLine(`"${key}": () => {`)
                                                        $w.nestedBlockX(($w) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`return wrap(`)
                                                                generateNodeCode(state.node, null, $w, newPath.state(key))
                                                                $w.snippet(`(node => ${propertyVariable} = ["${key}", node])`)
                                                                $w.snippet(`)`)
                                                            })
                                                        })
                                                        $w.fullLine(`},`)
                                                    })
                                                })
                                                $w.fullLine(`},`)
                                            })
                                            $w.snippet(`})),`)
                                        })
                                        break
                                    }
                                    case "value": {
                                        const $$ = $.type[1]
                                        $w.fullLine(`onNotExists: () => { /**/ },`)
                                        $w.line(($w) => {
                                            switch ($$.type[0]) {
                                                case "boolean": {
                                                    break
                                                }
                                                case "number": {
                                                    break
                                                }
                                                case "string": {
                                                    $w.snippet(`onExists: () => wrap(context.expectQuotedString({`)
                                                    $w.nestedBlockX(($w) => {
                                                        $w.fullLine(`warningOnly: true,`)
                                                        $w.fullLine(`callback: $ => {`)
                                                        $w.nestedBlockX(($w) => {
                                                            $w.fullLine(`${generateVariableIdentifier(key)} = $.token.data.value`)
                                                        })
                                                        $w.fullLine(`},`)
                                                    })
                                                    $w.snippet(`})),`)
                                                    break
                                                }
                                                default:
                                                    assertUnreachable($$.type[0])
                                            }
                                        })
                                        break
                                    }
                                    default:
                                        assertUnreachable($.type[0])
                                }
                            })
                            $w.fullLine(`},`)
                        })
                    })
                    $w.fullLine(`},`)
                    $w.fullLine(`onEnd: () => {`)
                    $w.nestedBlockX(($w) => {
                        function createDefaultInitializer($: def.Node, $w: ILineWriter) {
                            $w.snippet(`{`)
                            $w.nestedBlockX(($w) => {
                                $.properties.forEach(($, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`"${key}": `)
                                        switch ($.type[0]) {
                                            case "collection":
                                                cc($.type[1], ($) => {
                                                    switch ($.type[0]) {
                                                        case "dictionary":
                                                            $w.snippet(`createDictionary({})`)
                                                            break
                                                        case "list":
                                                            $w.snippet(`[]`)
                                                            break
                                                        default:
                                                            assertUnreachable($.type[0])
                                                    }
                                                })
                                                break
                                            case "component":
                                                cc($.type[1], ($) => {
                                                    createDefaultInitializer($.type.get().node, $w)
                                                })
                                                break
                                            case "state group":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`[ "${$["default state"].name}", `)
                                                    createDefaultInitializer($["default state"].get().node, $w)
                                                    $w.snippet(` ]`)
                                                })
                                                break
                                            case "value":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`"${$["default value"]}"`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($.type[0])
                                        }
                                        $w.snippet(`,`)
                                    })
                                })

                            })
                            $w.snippet(`}`)
                        }
                        node.properties.forEach(($, key) => {
                            if ($ === keyProperty) {
                                return
                            }

                            switch ($.type[0]) {
                                case "collection":
                                    break
                                case "component":
                                    cc($.type[1], ($) => {
                                        $w.fullLine(`if (${generateVariableIdentifier(key)} === null) {`)
                                        $w.nestedBlockX(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateVariableIdentifier(key)} = `)
                                                createDefaultInitializer($.type.get().node, $w)
                                            })
                                        })
                                        $w.fullLine(`}`)
                                    })
                                    break
                                case "state group":
                                    cc($.type[1], ($) => {
                                        $w.fullLine(`if (${generateVariableIdentifier(key)} === null) {`)
                                        $w.nestedBlockX(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateVariableIdentifier(key)} = ["${$["default state"].name}", `)
                                                createDefaultInitializer($["default state"].get().node, $w)
                                                $w.snippet(`]`)
                                            })
                                        })
                                        $w.fullLine(`}`)
                                    })
                                    break
                                case "value":
                                    cc($.type[1], ($) => {
                                        $w.fullLine(`if (${generateVariableIdentifier(key)} === null) {`)
                                        $w.nestedBlockX(($w) => {
                                            $w.fullLine(`${generateVariableIdentifier(key)} = "${$["default value"]}"`)
                                        })
                                        $w.fullLine(`}`)
                                    })
                                    break
                                default:
                                    assertUnreachable($.type[0])
                            }
                        })
                        $w.fullLine(`callback({`)
                        $w.nestedBlockX(($w) => {
                            node.properties.forEach(($, key) => {
                                if ($ === keyProperty) {
                                    return
                                }

                                switch ($.type[0]) {
                                    case "collection":
                                        cc($.type[1], ($) => {
                                            switch ($.type[0]) {
                                                case "dictionary":
                                                    $w.fullLine(`"${key}": createDictionary(${generateVariableIdentifier(key)}),`)
                                                    break
                                                case "list":
                                                    $w.fullLine(`"${key}": ${generateVariableIdentifier(key)},`)
                                                    break
                                                default:
                                                    assertUnreachable($.type[0])
                                            }
                                        })
                                        break
                                    case "component":
                                        $w.fullLine(`"${key}": ${generateVariableIdentifier(key)},`)
                                        break
                                    case "state group":
                                        $w.fullLine(`"${key}": ${generateVariableIdentifier(key)},`)
                                        break
                                    case "value":
                                        $w.fullLine(`"${key}": ${generateVariableIdentifier(key)},`)
                                        break
                                    default:
                                        assertUnreachable($.type[0])
                                }
                            })
                        })
                        $w.fullLine(`})`)
                    })
                    $w.fullLine(`},`)
                })
                $w.snippet(`})`)
            })
        })
        $w.snippet(`)`)
    }

    $w.fullLine(`/*eslint`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`"@typescript-eslint/no-unused-vars": 0,`)
        $w.fullLine(`"camelcase": 0,`)
        $w.fullLine(`"dot-notation": 0,`)
        $w.fullLine(`"no-underscore-dangle": 0,`)
        $w.fullLine(`"quote-props": 0`)
    })
    $w.fullLine(`*/`)

    $w.fullLine(`import * as astn from "astn"`)
    /*
    interface ValueHandler<TokenAnnotation, NonTokenAnnotation> {

    }

    interface RequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {
        exists: ValueHandler<TokenAnnotation, NonTokenAnnotation>
        missing: () => void
    }

    interface IExpectContext<TokenAnnotation, NonTokenAnnotation> {
        expectList($: {
            onElement: () => ValueHandler<TokenAnnotation, NonTokenAnnotation>
        }): ValueHandler<TokenAnnotation, NonTokenAnnotation>
        expectVerboseGroup($: {
            properties: {
                [key: string]: {
                    onNotExists: () => void
                    onExists: () => RequiredValueHandler<TokenAnnotation, NonTokenAnnotation>
                }
            }
            onEnd: () => void

        }): ValueHandler<TokenAnnotation, NonTokenAnnotation>
        expectTaggedUnion($: {
            options: {
                [key: string]: () => RequiredValueHandler<TokenAnnotation, NonTokenAnnotation>
            }
        }): ValueHandler<TokenAnnotation, NonTokenAnnotation>
        expectDictionary($: {
            onProperty: ($: {
                data: {
                    keyString: {
                        value: string
                    }
                }
            }) => RequiredValueHandler<TokenAnnotation, NonTokenAnnotation>
        }): ValueHandler<TokenAnnotation, NonTokenAnnotation>
        expectQuotedString($: {
            warningOnly: boolean
            callback: ($: {
                value: string
            }) => astn.ValueHandler<TokenAnnotation, NonTokenAnnotation>
        }): astn.ValueHandler<TokenAnnotation, NonTokenAnnotation>
    }
    */
    $w.fullLine(``)

    $w.fullLine(`interface IDictionary<T> {`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`forEach(callback: (e: T, key: string) => void): void`)
    })
    $w.fullLine(`}`)
    $w.fullLine(``)


    $w.fullLine(`interface IArray<T> {`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`forEach(callback: (e: T) => void): void`)
    })
    $w.fullLine(`}`)
    $w.fullLine(``)

    $w.fullLine(`function createDictionary<T>(raw: { [key: string]: T }): IDictionary<T> {`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`return {`)
        $w.nestedBlockX(($w) => {
            $w.fullLine(`forEach: (callback: (e: T, key: string) => void) => { Object.keys(raw).sort().forEach(key => { callback(raw[key], key) }) },`)
        })
        $w.fullLine(`}`)
    })
    $w.fullLine(`}`)
    $w.fullLine(``)


    schema["component types"].forEach(($, key) => {
        generateNodeTypes($.node, null, createIdentifierGenerator(key))
    })
    schema["component types"].forEach(($, key) => {
        generateNodeBuilderTypes($.node, null, createIdentifierGenerator(key))
    })

    // schema["component types"].forEach(($, key) => {
    //     $w.fullLine(`function ${generateHandlerFunctionName(key)}(`)
    //     $w.nestedBlockX($w => {
    //         $w.fullLine(`callback: (out: ${createIdentifierGenerator(key).generateNodeIdentifier()}) => void,`)
    //     })
    //     $w.fullLine(`): astn.ValueHandler<TokenAnnotation, NonTokenAnnotation> {`)
    //     $w.nestedBlockX($w => {
    //         $w.line($w => {
    //             $w.snippet(`return `)
    //             generateNodeCode($.node, null, $w, createIdentifierGenerator(key))
    //             $w.snippet(`(node => callback(node))`)
    //         })
    //     })
    //     $w.fullLine(`}`)
    //     $w.fullLine(``)
    // })

    $w.fullLine(`export function createDeserializer<TokenAnnotation, NonTokenAnnotation>(`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`context: astn.IExpectContext<TokenAnnotation, NonTokenAnnotation>,`)
        $w.fullLine(`raiseValidationError: (message: string, annotation: TokenAnnotation) => void,`)
        $w.fullLine(`callback: (result: ${createIdentifierGenerator(schema["root type"].name).generateNodeIdentifier()}) => void,`)
    })
    $w.fullLine(`): astn.RequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {`)
    $w.nestedBlockX(($w) => {
        $w.fullLine(`function wrap(handler: astn.ValueHandler<TokenAnnotation, NonTokenAnnotation>): astn.RequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {`)
        $w.nestedBlockX(($w) => {
            $w.fullLine(`return {`)
            $w.nestedBlockX(($w) => {
                $w.fullLine(`exists: handler,`)
                $w.fullLine(`missing: () => {`)
                $w.nestedBlockX(($w) => {
                    $w.fullLine(`//`)
                })
                $w.fullLine(`},`)
            })
            $w.fullLine(`}`)
        })
        $w.fullLine(`}`)

        schema["component types"].forEach(($, key) => {
            $w.fullLine(`function ${generateHandlerFunctionName(key)}(`)
            $w.nestedBlockX(($w) => {
                $w.fullLine(`callback: (out: ${createIdentifierGenerator(key).generateNodeIdentifier()}) => void,`)
            })
            $w.fullLine(`): astn.ValueHandler<TokenAnnotation, NonTokenAnnotation> {`)
            $w.nestedBlockX(($w) => {
                $w.line(($w) => {
                    $w.snippet(`return `)
                    generateNodeCode($.node, null, $w, createIdentifierGenerator(key))
                    $w.snippet(`(node => callback(node))`)
                })
            })
            $w.fullLine(`}`)
            $w.fullLine(``)
        })

        $w.fullLine(`return wrap(${generateHandlerFunctionName(schema["root type"].name)}(callback))`)
    })
    $w.fullLine(`}`)
}