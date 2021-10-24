/*eslint
    "camelcase": off,
    "dot-notation": off,
    "@typescript-eslint/no-empty-function": off,
    "@typescript-eslint/no-unused-vars": off,
*/
import * as ll from "../generated/lowlevel"
import { Block, Line } from "./WriteAPI"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void
}

function doDictionary<T>(
    dict: IDictionary<T>,
    onEmpty: () => void,
    onBegin: () => void,
    onEnd: () => void,
    onEntry: ($: T, key: string) => void,
    onSeparator: () => void,
) {
    let isEmpty = true
    let isFirst = true
    dict.forEach(($, key) => {
        if (isFirst) {
            onBegin()
        } else {
            onSeparator()
        }
        onEntry($, key)
        isEmpty = false
        isFirst = false
    })
    if (isEmpty) {
        onEmpty()
    } else {
        onEnd()
    }
}

function findImp<T>(
    dict: IDictionary<T>,
    name: string,
    onNotFound: (options: string[]) => T,
): T {
    let res: T | null = null
    const options: string[] = []
    dict.forEach(($, k) => {
        options.push(k)
        if (k === name) {
            res = $
        }
    })
    if (res !== null) {
        return res
    } else {
        return onNotFound(options)
    }
}

function find<T>(
    dict: IDictionary<T>,
    name: string,
): T {
    return findImp(
        dict,
        name,
        (options) => {
            throw new Error(`missing: ${name}, options: ${options.map((o) => `'${o}'`).join(", ")}`)
        }
    )
}

function findInStack<T>(
    stack: IDictionary<T>[],
    name: string,
) {
    const opts: { [key: string]: null } = {}
    for (let i = 0; i !== stack.length; i += 1) {
        const tmp = findImp(
            stack[i],
            name,
            (options) => {
                options.forEach(($) => {
                    opts[$] = null
                })
                return null
            },
        )
        if (tmp !== null) {
            return tmp
        }
    }
    throw new Error(`missing: ${name}, options: ${Object.keys(opts).map(($) => `'${$}'`).join(`, `)}`)
}

function generateIdentifier(str: string) {
    return str.replace(/ /g, "_").replace(/\-/g, "_")
}

function generateQuoted(str: string) {
    return `"${str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`
}

interface TypeNameBuilder {
    dictionary(): TypeNameBuilder
    list(): TypeNameBuilder
    group(): GroupNameBuilder
    taggedUnion(): TaggedUnionNameBuilder
    getIdentifier(): string
    getNamespaceName(): string
}

interface GroupNameBuilder {
    property(name: string): TypeNameBuilder
}

interface TaggedUnionNameBuilder {
    option(name: string): TypeNameBuilder
}

// function createNameBuilder(
//     schema: ll.__root_T,
//     namespaceName: string,
// ) {
//     const ns = find(schema.namespaces, namespaceName)
//     function createTypeNameBuilder(
//         path: string,
//         type: ll.__type_T
//     ): TypeNameBuilder {
//         return {
//             dictionary: () => {
//                 if (type.type[0] !== "dictionary") {
//                     throw new Error(`Not a dictionary: ${generateIdentifier(path)}`)
//                 }
//                 return createTypeNameBuilder(`${path}_D`, type.type[1].entry)
//             },
//             list: () => {
//                 if (type.type[0] !== "list") {
//                     throw new Error(`Not a list: ${generateIdentifier(path)}`)
//                 }
//                 return createTypeNameBuilder(`${path}_L`, type.type[1].element)
//             },
//             group: () => {
//                 if (type.type[0] !== "group") {
//                     throw new Error(`Not a group: ${generateIdentifier(path)}`)
//                 }
//                 const $ = type.type[1]
//                 return {
//                     property: (name) => {
//                         return createTypeNameBuilder(`${path}_G_${name}_P`, find($.properties, name).type)
//                     },
//                 }
//             },
//             taggedUnion: () => {
//                 if (type.type[0] !== "tagged union") {
//                     throw new Error(`Not a tagged union: ${generateIdentifier(path)}`)
//                 }
//                 const $ = type.type[1]
//                 return {
//                     option: (optName) => {
//                         return createTypeNameBuilder(`${path}_TU_${optName}_O`, find($.options, optName).type)
//                     },
//                 }
//             },
//             getIdentifier: () => {
//                 return `${generateIdentifier(path)}`
//             },
//             getNamespaceName: () => {
//                 return namespaceName
//             },
//         }
//     }

//     return {
//         type: (name: string) => {
//             return createTypeNameBuilder(`${generateIdentifier(namespaceName)}_${name}`, find(ns.types, name).type)
//         },
//     }
// }

function createNameBuilder(
    schema: ll.__root_T,
    namespaceName: string,
) {
    const ns = find(schema.namespaces, namespaceName)
    function createTypeNameBuilder(
        path: string,
    ): TypeNameBuilder {

        return {
            dictionary: () => {
                return createTypeNameBuilder(`${path}_D`)
            },
            list: () => {
                return createTypeNameBuilder(`${path}_L`)
            },
            group: () => {
                return {
                    property: (name) => {
                        return createTypeNameBuilder(`${path}_G_${name}_P`)
                    },
                }
            },
            taggedUnion: () => {
                return {
                    option: (optName) => {
                        return createTypeNameBuilder(`${path}_TU_${optName}_O`)
                    },
                }
            },
            getIdentifier: () => {
                return `${generateIdentifier(path)}`
            },
            getNamespaceName: () => {
                return namespaceName
            },
        }
    }

    return {
        type: (name: string) => {
            console.error(`TYPE: ${name}`)
            find(ns.types, name)
            return createTypeNameBuilder(`${generateIdentifier(namespaceName)}_${name}`)
        },
    }
}

function booleanToString($: string) { //FIX this should be a number
    return $
}

function numberToString($: string) { //FIX this should be a number
    return $
}

export function generateTypeScript(
    $: ll.__root_T,
    $w: Block,
): void {
    const $root = $
    function generateProcedureDeclaration(
        $: ll.__procedure_declarations_T,
        $w: Line,
        arrowOrColon: string,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        $w.snippet(`(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$c: `)
                generateTypeReference(
                    $.context,
                    $w,
                    namespaceName,
                    ($w) => {
                        $w.snippet(`FIXME CONTEXT`)
                    },
                )
                $w.snippet(`,`)
            })
            $w.line(($w) => {
                $w.snippet(`$i: `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.interfaces.forEach(($, key) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(key)}: `)
                            generateInterfaceDefinition(
                                $.interface,
                                $w,
                                namespaceName,
                                typeArgumentsCallback,
                            )
                        })
                    })
                })
                $w.snippet(`},`)
            })
            $w.line(($w) => {
                $w.snippet(`$b: `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.builders.forEach(($, key) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(key)}: `)
                            generateNamespacedIdentifier(
                                $.namespace,
                                $w,
                                ($w) => {
                                    $w.snippet(`_${$.builder}_IB`)
                                },
                                namespaceName,
                                typeArgumentsCallback,
                            )
                        })
                    })
                })
                $w.snippet(`},`)
            })
            $w.line(($w) => {
                $w.snippet(`$f: `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.functions.forEach(($, key) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(key)}: `)
                            generateFunctionDeclaration(
                                $.declaration,
                                $w,
                                ` =>`,
                                namespaceName,
                                typeArgumentsCallback,
                            )
                        })
                    })
                })
                $w.snippet(`},`)
            })
        })
        $w.snippet(`)${arrowOrColon} `)
        switch ($["return type"][0]) {
            case "interface":
                cc($["return type"][1], ($) => {
                    generateInterfaceDefinition(
                        $.interface,
                        $w,
                        namespaceName,
                        typeArgumentsCallback,
                    )
                })
                break
            case "void":
                cc($["return type"][1], ($) => {
                    $w.snippet(`void`)
                })
                break
            default:
                assertUnreachable($["return type"][0])
        }
    }
    function generateNamespacedIdentifier(
        $: ll.__optional_namespace_reference_T,
        $w: Line,
        identifier: ($w: Line) => void,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        switch ($.namespace[0]) {
            case "current":
                cc($.namespace[1], ($) => {
                    $w.snippet(`${generateIdentifier(namespaceName)}`)
                    identifier($w)
                    typeArgumentsCallback($w)
                })
                break
            case "other":
                cc($.namespace[1], ($) => {
                    function generateNamespaceReference(
                        $: ll.__namespace_reference_T,
                        $w: Line,
                    ) {
                        $w.snippet(`${generateIdentifier($.namespace)}`)
                        identifier($w)
                        doDictionary(
                            $["type arguments"],
                            () => {
                                //
                            },
                            () => {
                                $w.snippet(`<`)
                            },
                            () => {
                                $w.snippet(`>`)
                            },
                            ($, key) => {
                                $w.snippet(`${generateIdentifier(key)}`)
                            },
                            () => {
                                $w.snippet(`, `)
                            },
                        )
                    }
                    generateNamespaceReference(
                        $.namespace,
                        $w,
                    )
                })
                break
            default:
                assertUnreachable($.namespace[0])
        }
    }
    function generateFunctionDeclaration(
        $: ll.__function_declaration_T,
        $w: Line,
        arrowOrColon: string,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        $w.snippet(`($c: `)
        generateTypeReference(
            $.in,
            $w,
            namespaceName,
            typeArgumentsCallback,
        )
        $w.snippet(`)${arrowOrColon} `)
        generateTypeReference(
            $.out,
            $w,
            namespaceName,
            typeArgumentsCallback,
        )

    }
    function generateTypeReference(
        $: ll.__type_reference_T,
        $w: Line,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        const $$ = $
        generateNamespacedIdentifier(
            $.namespace,
            $w,
            ($w) => {
                $w.snippet(`_${generateIdentifier($.type)}_T`)
            },
            namespaceName,
            typeArgumentsCallback,
        )
    }
    function generateInterfaceDefinition(
        $: ll.__interface_definition_T,
        $w: Line,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        switch ($.type[0]) {
            case "dictionary":
                cc($.type[1], ($) => {
                    $w.snippet(`{`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`[key: string]: `)
                            generateInterfaceDefinition(
                                $.entry,
                                $w,
                                namespaceName,
                                typeArgumentsCallback,
                            )
                        })
                    })
                    $w.snippet(`}`)
                })
                break
            case "group":
                cc($.type[1], ($) => {
                    $w.snippet(`{`)
                    $w.indent(($w) => {
                        $.members.forEach(($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`${generateQuoted(key)}: `)
                                generateInterfaceDefinition(
                                    $.definition,
                                    $w,
                                    namespaceName,
                                    typeArgumentsCallback,
                                )
                            })
                        })
                    })
                    $w.snippet(`}`)
                })
                break
            case "method":
                cc($.type[1], ($) => {
                    $w.snippet(`($: `)
                    generateTypeReference(
                        $.type,
                        $w,
                        namespaceName,
                        typeArgumentsCallback,
                    )
                    $w.snippet(`) => `)
                    switch ($["return type"][0]) {
                        case "interface":
                            cc($["return type"][1], ($) => {
                                generateInterfaceDefinition(
                                    $.interface,
                                    $w,
                                    namespaceName,
                                    typeArgumentsCallback,
                                )
                            })
                            break
                        case "void":
                            cc($["return type"][1], () => {
                                $w.snippet(`void`)
                            })
                            break
                        default:
                            assertUnreachable($["return type"][0])
                    }
                })
                break
            case "reference":
                cc($.type[1], ($) => {
                    const x = $.interface
                    generateNamespacedIdentifier(
                        $.namespace,
                        $w,
                        ($w) => {
                            $w.snippet(`_${x}_I`)
                        },
                        namespaceName,
                        typeArgumentsCallback,
                    )
                })
                break
            default:
                assertUnreachable($.type[0])
        }
    }
    function generateMissingHandler(
        $: ll.__missing_handler_T,
        $w: Block,
        $r: {
            context: TypeNameBuilder
            target: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            namespaceName: string
        },
    ) {
        switch ($.guaranteed[0]) {
            case "no":
                cc($.guaranteed[1], ($) => {
                    $w.line(($w) => {

                        $w.snippet(`if ($c === undefined) {`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`return `)
                                generateTypeExpression(
                                    $["on missing"],
                                    $w,
                                    {
                                        context: $r.context,
                                        target: $r.target,
                                        markedValues: $r.markedValues,
                                        states: $r.states,
                                        nestedFunctions: $r.nestedFunctions,
                                        externalFunctions: $r.externalFunctions,
                                        namespaceName: $r.namespaceName,
                                    },
                                )
                            })
                        })
                        $w.snippet(`}`)
                    })
                })
                break
            case "yes":
                cc($.guaranteed[1], ($) => {
                })
                break
            default:
                assertUnreachable($.guaranteed[0])
        }
    }
    function generateContextStart(
        $: ll.__context_start_T,
        $w: Block,
        $r: {
            context: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            currentNamespaceName: string
        },
        callback: (
            context: TypeNameBuilder,
            $w: Block
        ) => void,
    ) {
        let context = $r.context
        $w.line(($w) => {
            $w.snippet(`const FOO = `)
            switch ($.start[0]) {
                case "marked value":
                    cc($.start[1], ($) => {
                        //findInStack($r.markedValues, $.marker)
                        //console.error("SET CONTEXT")
                        $w.snippet(`${$.marker}_m`)
                        $w.indent(($w) => {
                            callback(
                                context,
                                $w,
                            )
                        })
                    })
                    break
                case "context":
                    cc($.start[1], ($) => {
                        context = context
                        $w.snippet(`$c`)
                        $w.indent(($w) => {
                            callback(
                                context,
                                $w,
                            )
                        })
                    })
                    break
                case "function":
                    cc($.start[1], ($) => {
                        function x2(
                            functionTarget: TypeNameBuilder
                        ) {
                            $w.snippet(`(`)
                            generateTypeExpression(
                                $.argument,
                                $w,
                                {
                                    context: $r.context, //FIXME!!!!!!
                                    target: functionTarget,
                                    markedValues: $r.markedValues,
                                    states: $r.states,
                                    nestedFunctions: $r.nestedFunctions,
                                    externalFunctions: $r.externalFunctions,
                                    namespaceName: $r.currentNamespaceName,
                                },
                            )
                            $w.snippet(`)`)
                            $w.indent(($w) => {
                                callback(
                                    functionTarget,
                                    $w,
                                )
                            })
                        }
                        switch ($.context[0]) {
                            case "local function":
                                cc($.context[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.function)}_fi`)
                                    x2(
                                        createTypeReferenceNameBuilder(
                                            findInStack($r.nestedFunctions, $.function).declaration.out,
                                            $r.currentNamespaceName,
                                        )
                                    )
                                    $w.indent(($w) => {
                                        callback(
                                            context,
                                            $w,
                                        )
                                    })
                                })
                                break
                            case "argument":
                                cc($.context[1], ($) => {
                                    if ($r.externalFunctions === null) {
                                        throw new Error(`unexpected missing external functions`)
                                    }
                                    $w.snippet(`$f[${generateQuoted($.function)}]`)
                                    x2(
                                        createTypeReferenceNameBuilder(
                                            find($r.externalFunctions, $.function).declaration.out,
                                            $r.currentNamespaceName,
                                        )
                                    )
                                    $w.indent(($w) => {
                                        callback(
                                            context,
                                            $w,
                                        )
                                    })
                                })
                                break
                            // case "from marked":
                            //     cc($.context[1], ($) => {
                            //         $w.snippet(`${generateIdentifier($.marker)}_m[${generateQuoted(x.function)}]`)
                            //         x2(
                            //             createNameBuilder($root, "SSSFSD3").type("TTTW")
                            //         )
                            //     })
                            //     break
                            default:
                                assertUnreachable($.context[0])
                        }
                        //console.error("SET CONTEXT")
                    })
                    break
                case "state":
                    cc($.start[1], ($) => {
                        const $$ = $
                        const $state = findInStack($r.states, $.state)
                        // if ($state.type[0] !== "type5") {
                        //     throw new Error(`unexpected state: not a type, ${$.state}`)
                        // }
                        //console.error("SET CONTEXT")
                        $w.snippet(`${generateIdentifier($$.state)}`)
                        $w.indent(($w) => {
                            callback(
                                context,
                                $w,
                            )
                        })
                    })
                    break
                default:
                    assertUnreachable($.start[0])
            }
        })
    }
    function generateContextSelection(
        $: ll.__context_selection_T,
        $w: Line,
        $r: {
            context: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            namespaceName: string
        },
        callback: (
            context: TypeNameBuilder,
            $w: Block
        ) => void,
    ) {

        $w.snippet(`(() => {`)
        $w.indent(($w) => {
            generateContextStart(
                $["start"],
                $w,
                {
                    context: $r.context,
                    markedValues: $r.markedValues,
                    states: $r.states,
                    nestedFunctions: $r.nestedFunctions,
                    externalFunctions: $r.externalFunctions,
                    currentNamespaceName: $r.namespaceName,
                },
                callback,
            )
            $.steps.forEach(($) => {
                $w.line(($w) => {
                    $w.snippet(`FIXME STEP ${$.property}`)
                })
                //console.error("SET CONTEXT")
            })
        })
        $w.snippet(`})()`)


        // switch ($.guaranteed[0]) {
        //     case "no":
        //         cc($.guaranteed[1], ($) => {
        //             $w.snippet(`(`)
        //             generateContextSelection(
        //                 x["context selection"],
        //                 $w,
        //             )
        //             x.path.forEach(($) => {
        //                 $w.snippet(`[${generateQuoted($.step)}]`)
        //             })
        //             $w.snippet(` === undefined`)
        //             $w.indent(($w) => {
        //                 $w.line(($w) => {
        //                     $w.snippet(`? `)
        //                     generateTypeExpression(
        //                         $["on missing"],
        //                         $w,
        //                     )
        //                 })
        //                 $w.line(($w) => {
        //                     $w.snippet(`: `)
        //                     generateContextSelection(
        //                         x["context selection"],
        //                         $w,
        //                     )
        //                     x.path.forEach(($) => {
        //                         $w.snippet(`[${generateQuoted($.step)}]`)
        //                     })

        //                 })
        //             })
        //             $w.snippet(`)`)
        //         })
        //         break
        //     case "yes":
        //         cc($.guaranteed[1], ($) => {
        //         })
        //         break
        //     default:
        //         assertUnreachable($.guaranteed[0])
        // }
    }
    function generateGuaranteedContextSelection(
        $: ll.__guaranteed_context_selection_T,
        $w: Line,
        $r: {
            context: TypeNameBuilder
            target: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            namespaceName: string
        },
        callback: (
            context: TypeNameBuilder,
            $w: Block
        ) => void,
    ) {

        $w.snippet(`((): ${$r.target.getIdentifier()} => {`)
        $w.indent(($w) => {
            generateMissingHandler(
                $["missing handler"],
                $w,
                {
                    context: $r.context,
                    target: $r.target,
                    markedValues: $r.markedValues,
                    states: $r.states,
                    nestedFunctions: $r.nestedFunctions,
                    externalFunctions: $r.externalFunctions,
                    namespaceName: $r.namespaceName,
                },
            )
            generateContextStart(
                $["start"],
                $w,
                {
                    context: $r.context,
                    markedValues: $r.markedValues,
                    states: $r.states,
                    nestedFunctions: $r.nestedFunctions,
                    externalFunctions: $r.externalFunctions,
                    currentNamespaceName: $r.namespaceName,
                },
                callback,
            )
            $.steps.forEach(($) => {
                generateMissingHandler(
                    $["missing handler"],
                    $w,
                    {
                        context: $r.context, //FIXME!!!!!!!!!!!!!!!
                        target: $r.target,
                        states: $r.states,
                        markedValues: $r.markedValues,
                        nestedFunctions: $r.nestedFunctions,
                        externalFunctions: $r.externalFunctions,
                        namespaceName: $r.namespaceName,
                    },
                )
                $w.line(($w) => {
                    $w.snippet(`FIXME STEP ${$.property}`)
                })
                //console.error("SET CONTEXT")
            })
        })
        $w.snippet(`})()`)


        // switch ($.guaranteed[0]) {
        //     case "no":
        //         cc($.guaranteed[1], ($) => {
        //             $w.snippet(`(`)
        //             generateContextSelection(
        //                 x["context selection"],
        //                 $w,
        //             )
        //             x.path.forEach(($) => {
        //                 $w.snippet(`[${generateQuoted($.step)}]`)
        //             })
        //             $w.snippet(` === undefined`)
        //             $w.indent(($w) => {
        //                 $w.line(($w) => {
        //                     $w.snippet(`? `)
        //                     generateTypeExpression(
        //                         $["on missing"],
        //                         $w,
        //                     )
        //                 })
        //                 $w.line(($w) => {
        //                     $w.snippet(`: `)
        //                     generateContextSelection(
        //                         x["context selection"],
        //                         $w,
        //                     )
        //                     x.path.forEach(($) => {
        //                         $w.snippet(`[${generateQuoted($.step)}]`)
        //                     })

        //                 })
        //             })
        //             $w.snippet(`)`)
        //         })
        //         break
        //     case "yes":
        //         cc($.guaranteed[1], ($) => {
        //         })
        //         break
        //     default:
        //         assertUnreachable($.guaranteed[0])
        // }
    }
    function generateStringExpression(
        $: ll.__string_expression_T,
        $w: Line,
        $r: {
            context: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            namespaceName: string
        },
    ) {
        switch ($.strategy[0]) {
            case "literal":
                cc($.strategy[1], ($) => {
                    $w.snippet(`${generateQuoted($.value)}`)
                })
                break
            case "select":
                cc($.strategy[1], ($) => {
                    generateContextSelection(
                        $.context,
                        $w,
                        {
                            context: $r.context,
                            markedValues: $r.markedValues,
                            states: $r.states,
                            nestedFunctions: $r.nestedFunctions,
                            externalFunctions: $r.externalFunctions,
                            namespaceName: $r.namespaceName,
                        },
                        (context, $w) => {
                            $w.line(($w) => {
                                $w.snippet(`FIXME COPY STRING`)
                            })
                        }
                    )
                })
                break
            default:
                assertUnreachable($.strategy[0])
        }
    }
    function generateTypeExpression(
        $: ll.__type_expression_T,
        $w: Line,
        $r: {
            context: TypeNameBuilder
            target: TypeNameBuilder
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
            namespaceName: string
        }
    ) {
        switch ($.strategy[0]) {
            case "copy":
                cc($.strategy[1], ($) => {
                    const x = $
                    generateGuaranteedContextSelection(
                        x["context"],
                        $w,
                        {
                            context: $r.context,
                            target: $r.target,
                            markedValues: $r.markedValues,
                            states: $r.states,
                            nestedFunctions: $r.nestedFunctions,
                            externalFunctions: $r.externalFunctions,
                            namespaceName: $r.namespaceName,
                        },
                        (context, $w) => {
                            $w.line(($w) => {
                                $w.snippet(`FIXME COPY`)
                            })
                        },
                    )
                })
                break
            case "literal":
                cc($.strategy[1], ($) => {
                    //console.error(`>LITERAL`)
                    switch ($.type[0]) {
                        case "boolean":
                            cc($.type[1], ($) => {
                                $w.snippet(`${booleanToString($.value)}`)
                            })
                            break
                        case "dictionary":
                            cc($.type[1], ($) => {
                                $w.snippet(`{}`)
                            })
                            break
                        case "group":
                            cc($.type[1], ($) => {
                                $w.snippet(`{`)
                                $w.indent(($w) => {
                                    $.properties.forEach(($, k) => {
                                        $w.line(($w) => {
                                            $w.snippet(`${generateQuoted(k)}: `)
                                            generateTypeExpression(
                                                $.expression,
                                                $w,
                                                {
                                                    context: $r.context,
                                                    target: $r.target.group().property(k),
                                                    markedValues: $r.markedValues,
                                                    states: $r.states,
                                                    nestedFunctions: $r.nestedFunctions,
                                                    externalFunctions: $r.externalFunctions,
                                                    namespaceName: $r.namespaceName,
                                                },
                                            )
                                            $w.snippet(`,`)
                                        })
                                    })
                                })
                                $w.snippet(`}`)
                            })
                            break
                        case "list":
                            cc($.type[1], ($) => {
                                $w.snippet(`[]`)
                            })
                            break
                        case "number":
                            cc($.type[1], ($) => {
                                $w.snippet(`${numberToString($.value)}`)
                            })
                            break
                        case "string":
                            cc($.type[1], ($) => {
                                $w.snippet(`${generateQuoted($.value)}`)
                            })
                            break
                        case "type argument":
                            cc($.type[1], ($) => {
                                $w.snippet(`FIXME`)
                            })
                            break
                        case "type reference":
                            cc($.type[1], ($) => {
                                generateTypeExpression(
                                    $.expression,
                                    $w,
                                    {
                                        context: $r.context,
                                        target: createNameBuilder($root, "XYZ1").type("xxx1"), //FIXME
                                        markedValues: $r.markedValues,
                                        states: $r.states,
                                        nestedFunctions: $r.nestedFunctions,
                                        externalFunctions: $r.externalFunctions,
                                        namespaceName: $r.namespaceName,
                                    },
                                )
                            })
                            break
                        case "tagged union":
                            cc($.type[1], ($) => {
                                $w.snippet(`[${generateQuoted($.option)}, `)
                                generateTypeExpression(
                                    $.data,
                                    $w,
                                    {
                                        context: $r.context,
                                        target: $r.target.taggedUnion().option($.option),
                                        markedValues: $r.markedValues,
                                        states: $r.states,
                                        nestedFunctions: $r.nestedFunctions,
                                        externalFunctions: $r.externalFunctions,
                                        namespaceName: $r.namespaceName,
                                    },
                                )
                                $w.snippet(`]`)
                            })
                            break
                        default:
                            assertUnreachable($.type[0])
                    }
                    //console.error(`<LITERAL`)
                })
                break
            case "map":
                cc($.strategy[1], ($) => {
                    generateGuaranteedContextSelection(
                        $.context,
                        $w,
                        {
                            context: $r.context,
                            target: $r.target,
                            markedValues: $r.markedValues,
                            states: $r.states,
                            nestedFunctions: $r.nestedFunctions,
                            externalFunctions: $r.externalFunctions,
                            namespaceName: $r.namespaceName,
                        },
                        (context, $w) => {
                            $w.line(($w) => {
                                $w.snippet(`FIXMEMAP`)
                                generateTypeExpression(
                                    $.entry,
                                    $w,
                                    {
                                        context: context,
                                        target: $r.target.dictionary(),
                                        markedValues: $r.markedValues,
                                        states: $r.states,
                                        nestedFunctions: $r.nestedFunctions,
                                        externalFunctions: $r.externalFunctions,
                                        namespaceName: $r.namespaceName,
                                    },
                                )
                            })
                        }
                    )
                })
                break
            case "switch":
                cc($.strategy[1], ($) => {
                    generateGuaranteedContextSelection(
                        $.context,
                        $w,
                        {
                            context: $r.context,
                            target: $r.target,
                            markedValues: $r.markedValues,
                            states: $r.states,
                            nestedFunctions: $r.nestedFunctions,
                            externalFunctions: $r.externalFunctions,
                            namespaceName: $r.namespaceName,
                        },
                        (context, $w) => {
                            $w.line(($w) => {
                                $w.snippet(`switch ($c[0]) {`)
                                $w.indent(($w) => {
                                    $.options.forEach(($, k) => {
                                        $w.line(($w) => {
                                            $w.snippet(`case ${generateQuoted(k)}: {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`return cc($c[1], ($c) => {`)
                                                    $w.indent(($w) => {
                                                        $w.line(($w) => {
                                                            $w.snippet(`return `)
                                                            generateTypeExpression(
                                                                $.expression,
                                                                $w,
                                                                {
                                                                    context: context.taggedUnion().option(k),
                                                                    target: $r.target,
                                                                    markedValues: $r.markedValues,
                                                                    states: $r.states,
                                                                    nestedFunctions: $r.nestedFunctions,
                                                                    externalFunctions: $r.externalFunctions,
                                                                    namespaceName: $r.namespaceName,
                                                                },
                                                            )
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`}`)
                                        })
                                    })
                                    $w.line(($w) => {
                                        $w.snippet(`default: return assertUnreachable($c[0])`)
                                    })
                                })
                                $w.snippet(`}`)
                            })
                        },
                    )
                })
                break
            case "dictionary from state":
                cc($.strategy[1], ($) => {
                    $w.snippet(`createDictionary(${generateIdentifier($.state)})`)
                })
                break
            default:
                assertUnreachable($.strategy[0])
        }
    }
    function getNamespace(
        $: ll.__optional_namespace_reference_T,
        currentNamespaceName: string,
    ): string {
        switch ($.namespace[0]) {
            case "current":
                return cc($.namespace[1], ($) => {
                    return currentNamespaceName
                })
            case "other":
                return cc($.namespace[1], ($) => {
                    return $.namespace.namespace
                })
            default:
                return assertUnreachable($.namespace[0])
        }
    }
    function createTypeReferenceNameBuilder(
        $: ll.__type_reference_T,
        currentNamespaceName: string,
    ) {
        return createNameBuilder($root, getNamespace($.namespace, currentNamespaceName)).type($.type)
    }
    function generateTypeExpressionBlock(
        $: ll.__type_expression_block_T,
        $w: Line,
        $r: {
            context: TypeNameBuilder
            target: TypeNameBuilder
            currentNamespaceName: string
            markedValues: IDictionary<ll.__markers_T>[]
            states: IDictionary<ll.__states_T>[]
            nestedFunctions: IDictionary<ll.__functions_type_expression_block_T>[]
            externalFunctions: IDictionary<ll.__functions_T> | null
        },
    ) {
        $w.snippet(`{`)
        $w.indent(($w) => {
            const $teb = $
            $["functions"].forEach(($, key) => {
                $w.line(() => { })
                $w.line(($w) => {
                    $w.snippet(`function ${generateIdentifier(key)}_fi`)
                    // generateFunctionDeclaration(
                    //     $.declaration,
                    //     $w,
                    //     $.namespace.namespace,
                    //     ($w) => {
                    //         doDictionary(
                    //             //should be parameters
                    //             $.namespace["type arguments"],
                    //             () => {
                    //                 //
                    //             },
                    //             () => {
                    //                 $w.snippet(`<`)
                    //             },
                    //             () => {
                    //                 $w.snippet(`>`)
                    //             },
                    //             ($, key) => {
                    //                 $w.snippet(`${generateIdentifier(key)}`)
                    //             },
                    //             () => {
                    //                 $w.snippet(`, `)
                    //             },
                    //         )

                    //     }
                    // )
                    $w.snippet(` `)
                    generateTypeExpressionBlock(
                        $.block,
                        $w,
                        {
                            context: createTypeReferenceNameBuilder(
                                $.declaration.in,
                                $r.currentNamespaceName,
                            ),
                            target: createTypeReferenceNameBuilder(
                                $.declaration.out,
                                $r.currentNamespaceName,
                            ),
                            currentNamespaceName: $r.currentNamespaceName,
                            markedValues: $r.markedValues,
                            states: $r.states,
                            nestedFunctions: $r.nestedFunctions.concat([$teb.functions]),
                            externalFunctions: $r.externalFunctions,
                        },
                    )
                })
            })
            $w.line(($w) => {
                $w.snippet(`return `)
                generateTypeExpression(
                    $.expression,
                    $w,
                    {
                        context: $r.context,
                        target: $r.target,
                        markedValues: $r.markedValues,
                        states: $r.states,
                        nestedFunctions: $r.nestedFunctions.concat([$.functions]),
                        externalFunctions: $r.externalFunctions,
                        namespaceName: $r.currentNamespaceName,
                    },
                )
            })
        })
        $w.snippet(`}`)
    }
    //eslint
    $w.line(($w) => {
        //$w.snippet(`/* eslint-disable */`)
        $w.snippet(`/* eslint`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`"camelcase": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"dot-notation": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"no-underscore-dangle": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"max-len": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"@typescript-eslint/ban-types": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"@typescript-eslint/no-empty-function": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"@typescript-eslint/no-empty-interface": 0,`)
            })
            $w.line(($w) => {
                $w.snippet(`"@typescript-eslint/no-unused-vars": 0,`)
            })
        })
        $w.snippet(`*/`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`interface IDictionary<T> {`)
        // $w.indent(($w) => {
        //     $w.line(($w) => {
        //     })
        // })
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`forEach(callback: (e: T, key: string) => void): void`)
            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`function assertUnreachable<RT>(_x: never): RT {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`throw new Error("unreachable")`)
            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`function cc<T, RT>(input: T, callback: (output: T) => RT): RT {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`return callback(input)`)
            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`function createDictionary<T>(raw: { [key: string]: T }): IDictionary<T> {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`return {`)
                $w.indent(($w) => {
                    $w.line(($w) => {
                        $w.snippet(`forEach: (callback: (e: T, key: string) => void) => { Object.keys(raw).sort().forEach((key) => { callback(raw[key], key) }) },`)
                    })
                })
                $w.snippet(`}`)
            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`function mapDictionary<T, RT>(source: IDictionary<T>, convert: (v: T) => RT): IDictionary<RT> {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`return {`)
                $w.indent(($w) => {
                    $w.line(($w) => {
                        $w.snippet(`forEach: (callback: (e: RT, key: string) => void) => { source.forEach((e, key) => { callback(convert(e), key) }) },`)
                    })
                })
                $w.snippet(`}`)
            })
        })
        $w.snippet(`}`)
    })
    $.namespaces.forEach((ns, namespaceName) => {
        //console.error(`NAMESPACE: ${namespaceName}`)
        function generateTypeParameters(
            $w: Line
        ) {
            doDictionary(
                ns["type parameters"],
                () => {
                    //
                },
                () => {
                    $w.snippet(`<`)
                },
                () => {
                    $w.snippet(`>`)
                },
                ($, key) => {
                    $w.snippet(`${generateIdentifier(key)}`)
                },
                () => {
                    $w.snippet(`, `)
                },
            )
        }
        function generateTypeReference(
            $: ll.__type_reference_T,
            $w: Line,
        ) {
            const $$ = $
            generateNamespacedIdentifier(
                $.namespace,
                $w,
                ($w) => {
                    $w.snippet(`${createNameBuilder($root, "").type($$.type).getIdentifier()}`)
                },
                namespaceName,
                ($w) => {
                    doDictionary(
                        ns["type parameters"],
                        () => {
                            //
                        },
                        () => {
                            $w.snippet(`<`)
                        },
                        () => {
                            $w.snippet(`>`)
                        },
                        ($, key) => {
                            $w.snippet(`${generateIdentifier(key)}`)
                        },
                        () => {
                            $w.snippet(`, `)
                        },
                    )
                }
            )
        }
        ns.types.forEach(($, key) => {
            function generateTypeUsage(
                $: ll.__type_T,
                x: TypeNameBuilder,
                $w: Line,
            ) {
                switch ($.occurence[0]) {
                    case "required": {
                        break
                    }
                    case "optional": {
                        $w.snippet(`undefined | `)
                        break
                    }
                    default:
                        assertUnreachable($.occurence[0])
                }
                switch ($.type[0]) {
                    case "boolean": {
                        $w.snippet(`boolean`)
                        break
                    }
                    case "dictionary": {
                        $w.snippet(`${x.getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "group": {
                        $w.snippet(`${x.getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "list": {
                        $w.snippet(`${x.getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "number": {
                        $w.snippet(`number`)
                        break
                    }
                    case "string": {
                        $w.snippet(`string`)
                        break
                    }
                    case "tagged union": {
                        $w.snippet(`${x.getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "type argument":
                        cc($.type[1], ($) => {
                            $w.snippet(`${$.argument}`)
                        })
                        break
                    case "type reference": {
                        cc($.type[1], ($) => {
                            generateTypeReference(
                                $.type,
                                $w,
                            )
                        })
                        break
                    }
                    default:
                        assertUnreachable($.type[0])
                }
            }
            function generateCodeForTypeTree(
                $$: ll.__type_T,
                x: TypeNameBuilder,
            ) {
                //navigate all types
                switch ($$.type[0]) {
                    case "boolean": {
                        break
                    }
                    case "dictionary": {
                        const $ = $$.type[1]
                        //generate code for this type
                        generateCodeForTypeTree(
                            $.entry,
                            x.dictionary(),
                        )
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.getIdentifier()}`)
                            generateTypeParameters($w)
                            $w.snippet(` = IDictionary<`)
                            generateTypeUsage(
                                $.entry,
                                x.dictionary(),
                                $w,
                            )
                            $w.snippet(`>`)
                        })
                        break
                    }
                    case "group": {
                        const $ = $$.type[1]
                        $.properties.forEach(($$, key) => {
                            generateCodeForTypeTree(
                                $$.type,
                                x.group().property(key),
                            )
                        })
                        //generate code for this type
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.getIdentifier()}`)
                            generateTypeParameters($w)
                            $w.snippet(` = {`)
                            $w.indent(($w) => {
                                $.properties.forEach(($$, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`readonly ${generateQuoted(key)}`)
                                        $w.snippet(`: `)
                                        generateTypeUsage(
                                            $$.type,
                                            x.group().property(key),
                                            $w,
                                        )
                                    })
                                })
                            })
                            $w.snippet(`}`)
                        })
                        break
                    }
                    case "list": {
                        const $ = $$.type[1]
                        generateCodeForTypeTree(
                            $.element,
                            x.list(),
                        )
                        //generate code for this type
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.getIdentifier()}`)
                            generateTypeParameters($w)
                            $w.snippet(` = `)
                            generateTypeUsage(
                                $.element,
                                x.list(),
                                $w,
                            )
                            $w.snippet(`[]`)
                        })
                        break
                    }
                    case "number": {
                        break
                    }
                    case "string": {
                        break
                    }
                    case "tagged union": {
                        const $ = $$.type[1]
                        const tu = x.taggedUnion()
                        $.options.forEach(($$, key) => {
                            generateCodeForTypeTree(
                                $$.type,
                                tu.option(key)
                            )
                        })
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.getIdentifier()}`)
                            generateTypeParameters($w)
                            $w.snippet(` = `)
                            $w.indent(($w) => {
                                $.options.forEach(($, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`| [${generateQuoted(key)}, `)
                                        generateTypeUsage(
                                            $.type,
                                            tu.option(key),
                                            $w,
                                        )
                                        $w.snippet(`]`)
                                    })
                                })
                            })
                        })
                        break
                    }
                    case "type argument":
                        break
                    case "type reference": {
                        break
                    }
                    default:
                        assertUnreachable($$.type[0])
                }
            }
            generateCodeForTypeTree(
                $.type,
                createNameBuilder($root, namespaceName).type(key),
            )
            //generate code for this type
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_T`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateTypeUsage(
                    $.type,
                    createNameBuilder($root, namespaceName).type(key),
                    $w,
                )
            })
        })
        ns.interfaces.forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_I`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateInterfaceDefinition(
                    $["definition"],
                    $w,
                    namespaceName,
                    ($w) => {
                        doDictionary(
                            ns["type parameters"],
                            () => {
                                //
                            },
                            () => {
                                $w.snippet(`<`)
                            },
                            () => {
                                $w.snippet(`>`)
                            },
                            ($, key) => {
                                $w.snippet(`${generateIdentifier(key)}`)
                            },
                            () => {
                                $w.snippet(`, `)
                            },
                        )
                    }
                )
            })
        })
        ns["interface builders"].forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export interface ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_IB`)
                generateTypeParameters($w)
                $w.snippet(` `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.methods.forEach(($, k) => {
                        function generateBuilderProcedureDeclaration(
                            $: ll.__builder_procedure_declaration_T,
                            $w: Line,
                            arrowOrColon: string,
                            namespaceName: string,
                            typeArgumentsCallback: ($w: Line) => void,
                        ) {
                            $w.snippet(`(`)
                            $w.indent(($w) => {
                                $w.line(($w) => {
                                    $w.snippet(`$i: `)
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $.interfaces.forEach(($, key) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateQuoted(key)}: `)
                                                generateInterfaceDefinition(
                                                    $.interface,
                                                    $w,
                                                    namespaceName,
                                                    typeArgumentsCallback,
                                                )
                                            })
                                        })
                                    })
                                    $w.snippet(`},`)
                                })
                            })
                            $w.snippet(`)${arrowOrColon} `)
                            switch ($["return type"][0]) {
                                case "interface":
                                    cc($["return type"][1], ($) => {
                                        generateInterfaceDefinition(
                                            $.interface,
                                            $w,
                                            namespaceName,
                                            typeArgumentsCallback,
                                        )
                                    })
                                    break
                                case "void":
                                    cc($["return type"][1], ($) => {
                                        $w.snippet(`void`)
                                    })
                                    break
                                default:
                                    assertUnreachable($["return type"][0])
                            }
                        }
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(k)}`)
                            generateBuilderProcedureDeclaration(
                                $.declaration,
                                $w,
                                `:`,
                                namespaceName,
                                ($w) => {
                                    doDictionary(
                                        ns["type parameters"],
                                        () => {
                                            //
                                        },
                                        () => {
                                            $w.snippet(`<`)
                                        },
                                        () => {
                                            $w.snippet(`>`)
                                        },
                                        ($, key) => {
                                            $w.snippet(`${generateIdentifier(key)}`)
                                        },
                                        () => {
                                            $w.snippet(`, `)
                                        },
                                    )
                                }
                            )
                        })
                    })
                })
                $w.snippet(`}`)
            })
        })
        ns["function declarations"].forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_PD`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateFunctionDeclaration(
                    $.declaration,
                    $w,
                    ` =>`,
                    namespaceName,
                    ($w) => {
                        doDictionary(
                            ns["type parameters"],
                            () => {
                                //
                            },
                            () => {
                                $w.snippet(`<`)
                            },
                            () => {
                                $w.snippet(`>`)
                            },
                            ($, key) => {
                                $w.snippet(`${generateIdentifier(key)}`)
                            },
                            () => {
                                $w.snippet(`, `)
                            },
                        )
                    }
                )
            })
        })
        ns["procedure declarations"].forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_PD`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateProcedureDeclaration(
                    $,
                    $w,
                    ` =>`,
                    namespaceName,
                    ($w) => {
                        doDictionary(
                            ns["type parameters"],
                            () => {
                                //
                            },
                            () => {
                                $w.snippet(`<`)
                            },
                            () => {
                                $w.snippet(`>`)
                            },
                            ($, key) => {
                                $w.snippet(`${generateIdentifier(key)}`)
                            },
                            () => {
                                $w.snippet(`, `)
                            },
                        )
                    }
                )
            })
        })
    })
    $["function implementations"].forEach(($, key) => {
        //console.error(`FUNCTION IMP: ${key}`)
        const ns2 = $.namespace
        $w.line(() => { })
        $w.line(($w) => {
            const decl = find(find($root.namespaces, ns2.namespace)["function declarations"], $.declaration)
            $w.snippet(`export function ${generateIdentifier(key)}_fi`)
            doDictionary(
                $["type parameters"],
                () => {
                    //
                },
                () => {
                    $w.snippet(`<`)
                },
                () => {
                    $w.snippet(`>`)
                },
                ($, key) => {
                    $w.snippet(`${generateIdentifier(key)}`)
                },
                () => {
                    $w.snippet(`, `)
                },
            )
            generateFunctionDeclaration(
                decl.declaration,
                $w,
                `:`,
                $.namespace.namespace,
                ($w) => {
                    doDictionary(
                        //should be parameters
                        $.namespace["type arguments"],
                        () => {
                            //
                        },
                        () => {
                            $w.snippet(`<`)
                        },
                        () => {
                            $w.snippet(`>`)
                        },
                        ($, key) => {
                            $w.snippet(`${generateIdentifier(key)}`)
                        },
                        () => {
                            $w.snippet(`, `)
                        },
                    )

                }
            )
            $w.snippet(` `)
            generateTypeExpressionBlock(
                $.block,
                $w,
                {
                    context: createNameBuilder($root, ns2.namespace).type(decl.declaration.in.type),
                    target: createNameBuilder($root, ns2.namespace).type(decl.declaration.out.type),
                    currentNamespaceName: ns2.namespace,
                    markedValues: [],
                    states: [],
                    nestedFunctions: [],
                    externalFunctions: null,
                },
            )
        })
    })
    $["procedure implementations"].forEach(($, key) => {
        //console.error(`PROCEDURE IMP: ${key}`)
        const $pi = $
        const decl = find(find($root.namespaces, $pi.namespace.namespace)["procedure declarations"], $.declaration)

        function generateprocedureBlock(
            $: ll.__procedure_block_T,
            $w: Line,
            $r: {
                context: TypeNameBuilder
                interfaces: IDictionary<ll.__interfaces_procedure_declarations_T>
                parameters: IDictionary<ll.__parameters_T>[]
                markedValues: IDictionary<ll.__markers_T>[]
                states: IDictionary<ll.__states_T>[]
            }
        ) {
            const pb$r = $r
            const allStates = $r.states.concat([$.states])
            function navigateToNestedType(
                $: ll.__nested_type_reference_T,
            ) {
                let nameBuilder = createNameBuilder($root, $.namespace.namespace).type($.type)
                //let t = find(ns.types, $.type).type
                $.steps.forEach(($) => {
                    switch ($.type[0]) {
                        case "dictionary":
                            cc($.type[1], ($) => {
                                // if (t.type[0] !== "dictionary") {
                                //     throw new Error("not a dictionary")
                                // }
                                //t = t.type[1].entry
                                nameBuilder = nameBuilder.dictionary()
                            })
                            break
                        case "group":
                            cc($.type[1], ($) => {
                                // if (t.type[0] !== "group") {
                                //     throw new Error("not a group")
                                // }
                                // t = find(t.type[1].properties, $.property).type
                                nameBuilder = nameBuilder.group().property($.property)
                            })
                            break
                        case "list":
                            cc($.type[1], ($) => {
                                // if (t.type[0] !== "list") {
                                //     throw new Error("not a list")
                                // }
                                // t = t.type[1].element
                                nameBuilder = nameBuilder.list()
                            })
                            break
                        case "tagged union option":
                            cc($.type[1], ($) => {
                                // if (t.type[0] !== "tagged union") {
                                //     throw new Error("not a tagged union")
                                // }
                                // t = find(t.type[1].options, $.option).type
                                nameBuilder = nameBuilder.taggedUnion().option($.option)
                            })
                            break
                        default:
                            assertUnreachable($.type[0])
                    }
                })
                return nameBuilder
            }
            function generateInternalProcedureSpecification(
                $: ll.__internal_procedure_specification_T,
                $w: Line,
                arrowOrNothing: string,
                $r: {
                }
            ) {
                $w.snippet(`($ip: `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.parameters.forEach(($, key) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(key)}: `)
                            switch ($.type[0]) {
                                case "group":
                                    cc($.type[1], ($) => {
                                        $w.snippet(`{`)
                                        $w.indent(($w) => {
                                            $.members.forEach(($, key) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`${generateQuoted(key)}: `)
                                                    generateInterfaceDefinition(
                                                        $.definition,
                                                        $w,
                                                        $pi.namespace.namespace,
                                                        () => { },
                                                    )
                                                })
                                            })
                                        })
                                        $w.snippet(`}`)
                                    })
                                    break
                                case "method":
                                    cc($.type[1], ($) => {
                                        $w.snippet(`($: ${navigateToNestedType($.type).getIdentifier()}`)

                                        $w.snippet(`) => `)
                                        switch ($["return type"][0]) {
                                            case "interface":
                                                cc($["return type"][1], ($) => {
                                                    generateInterfaceDefinition(
                                                        $.interface,
                                                        $w,
                                                        $pi.namespace.namespace,
                                                        () => { },
                                                    )
                                                })
                                                break
                                            case "void":
                                                cc($["return type"][1], () => {
                                                    $w.snippet(`void`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($["return type"][0])
                                        }
                                    })
                                    break
                                case "reference":
                                    cc($.type[1], ($) => {
                                        generateNamespacedIdentifier(
                                            $.namespace,
                                            $w,
                                            ($w) => {
                                                $w.snippet(`_${$.interface}_I`)
                                            },
                                            $pi.namespace.namespace,
                                            () => { },
                                        )
                                    })
                                    break
                                default:
                                    assertUnreachable($.type[0])
                            }
                        })
                    })
                })
                $w.snippet(`}`)
                $w.snippet(`): `)
                switch ($["return type"][0]) {
                    case "interface":
                        cc($["return type"][1], ($) => {
                            generateInterfaceDefinition(
                                $.interface,
                                $w,
                                $pi.namespace.namespace,
                                ($w) => {

                                },
                            )
                        })
                        break
                    case "void":
                        cc($["return type"][1], ($) => {
                            $w.snippet(`void`)
                        })
                        break
                    default:
                        assertUnreachable($["return type"][0])
                }
                $w.snippet(`${arrowOrNothing} `)
                generateprocedureBlock(
                    $.block,
                    $w,
                    {
                        context: pb$r.context,
                        interfaces: pb$r.interfaces,
                        parameters: pb$r.parameters.concat([$.parameters]),
                        markedValues: pb$r.markedValues,
                        states: allStates,
                    },
                )
            }
            function generateInterfaceExpression(
                $: ll.__interface_expression_T,
                $w: Line,
                $r: {
                },
            ) {
                function generateProcedureCall(
                    $: ll.__procedure_call_T,
                    $w: Line,
                    $r: {
                    },
                ) {
                    $w.snippet(`(`)
                    $w.snippet(`{`)
                    $w.indent(($w) => {
                        $["interface arguments"].forEach(($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`${generateQuoted(key)}: `)

                                generateInterfaceExpression(
                                    $.expression,
                                    $w,
                                    {},
                                )
                                $w.snippet(`,`)
                            })
                        })
                    })
                    $w.snippet(`}`)

                    $w.snippet(`)`)
                }
                switch ($.type[0]) {
                    case "argument":
                        cc($.type[1], ($) => {
                            $w.snippet(`$i[${generateQuoted($.argument)}]`)
                        })
                        break
                    case "initialize":
                        cc($.type[1], ($) => {
                            switch ($.type[0]) {
                                case "method": {
                                    cc($.type[1], ($) => {
                                        switch ($.strategy[0]) {
                                            case "argument": {
                                                cc($.strategy[1], ($) => {
                                                    $w.snippet(`$ip[${generateQuoted($.argument)}]`)
                                                })
                                                break
                                            }
                                            case "procedure implementation": {
                                                cc($.strategy[1], ($) => {
                                                    $w.snippet(`($c) => `)
                                                    generateprocedureBlock(
                                                        $.block,
                                                        $w,
                                                        {
                                                            context: pb$r.context,
                                                            interfaces: decl.interfaces,
                                                            parameters: pb$r.parameters,
                                                            markedValues: pb$r.markedValues,
                                                            states: allStates,
                                                        }
                                                    )
                                                })
                                                break
                                            }
                                            case "inline procedure": {
                                                //console.error("Inline procedure")
                                                cc($.strategy[1], ($) => {
                                                    $w.snippet(`(`)
                                                    generateInternalProcedureSpecification(
                                                        $.specification,
                                                        $w,
                                                        ` =>`,
                                                        {
                                                        },
                                                    )
                                                    $w.snippet(`)`)
                                                    generateProcedureCall(
                                                        $.call,
                                                        $w,
                                                        {},
                                                    )
                                                })
                                                break
                                            }
                                            default:
                                                assertUnreachable($.strategy[0])
                                        }
                                    })
                                    break
                                }
                                case "group": {
                                    cc($.type[1], ($) => {
                                        switch ($.strategy[0]) {
                                            case "inline":
                                                cc($.strategy[1], ($) => {
                                                    $w.snippet(`{`)
                                                    $w.indent(($w) => {
                                                        $.members.forEach(($, k) => {
                                                            $w.line(($w) => {
                                                                $w.snippet(`${generateQuoted(k)}: `)
                                                                generateInterfaceExpression(
                                                                    $.expression,
                                                                    $w,
                                                                    {},
                                                                )
                                                                $w.snippet(`,`)
                                                            })
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($.strategy[0])
                                        }
                                    })
                                    break
                                }
                                case "reference": {
                                    cc($.type[1], ($) => {
                                        switch ($.strategy[0]) {
                                            case "procedure call6":
                                                cc($.strategy[1], ($) => {
                                                    function generateNamedprocedureCall(
                                                        $: ll.__named_procedure_call_T,
                                                        $w: Line,
                                                    ) {
                                                        switch ($.type[0]) {
                                                            case "external":
                                                                cc($.type[1], ($) => {
                                                                    $w.snippet(`$b.${$.builder}.${$.method}`)
                                                                })
                                                                break
                                                            case "local":
                                                                cc($.type[1], ($) => {
                                                                    $w.snippet(`${$.procedure}_NIC`)
                                                                })
                                                                break
                                                            // case "from marked":
                                                            //     cc($.type[1], ($) => {
                                                            //         $w.snippet(`${$.marker}_m${$.path}`)
                                                            //     })
                                                            //     break
                                                            default:
                                                                assertUnreachable($.type[0])
                                                        }
                                                        generateProcedureCall(
                                                            $["procedure call"],
                                                            $w,
                                                            {},
                                                        )
                                                    }
                                                    generateNamedprocedureCall(
                                                        $["procedure call"],
                                                        $w,
                                                    )
                                                })
                                                break
                                            default:
                                                assertUnreachable($.strategy[0])
                                        }
                                    })
                                    break
                                }
                                case "dictionary":
                                    cc($.type[1], ($) => {
                                        $w.snippet(`{`)
                                        $w.indent(($w) => {
                                            $.entries.forEach(($, k) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`${generateQuoted(k)}: `)
                                                    generateInterfaceExpression(
                                                        $.expression,
                                                        $w,
                                                        {},
                                                    )
                                                    $w.snippet(`,`)
                                                })
                                            })
                                        })
                                        $w.snippet(`}`)
                                    })
                                    break
                                default:
                                    assertUnreachable($.type[0])
                            }
                        })
                        break
                    default:
                        assertUnreachable($.type[0])
                }
            }
            $w.snippet(`{`)
            $w.indent(($w) => {
                const $block = $
                $.markers.forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`const ${generateIdentifier(key)}_m = $c`)
                    })
                })
                $.states.forEach(($, key) => {
                    $w.line(($w) => {
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: { [key: string]: `)
                                    $w.snippet(`${navigateToNestedType($.type).dictionary().getIdentifier()}`)
                                    $w.snippet(` } = {}`)
                                })
                                break
                            case "list":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: `)
                                    $w.snippet(`${navigateToNestedType($.type).list().getIdentifier()}`)
                                    $w.snippet(`[] = []`)
                                })
                                break
                            case "string":
                                cc($.type[1], ($) => {
                                    $w.snippet(`let ${generateIdentifier(key)} = ${generateQuoted($["initial value"])}`)
                                })
                                break
                            case "type5":
                                cc($.type[1], ($) => {
                                    $w.snippet(`let ${generateIdentifier(key)}: `)
                                    $w.snippet(`${navigateToNestedType($["nested type"]).getIdentifier()}`)
                                    doDictionary(
                                        $["nested type"].namespace["type arguments"],
                                        () => {
                                        },
                                        () => {
                                            $w.snippet(`<`)
                                        },
                                        () => {
                                            $w.snippet(`>`)
                                        },
                                        ($, key) => {
                                            $w.snippet(`${generateIdentifier(key)}`)
                                        },
                                        () => {
                                            $w.snippet(`, `)
                                        },
                                    )
                                    $w.snippet(` = `)
                                    generateTypeExpression(
                                        $.expression,
                                        $w,
                                        {
                                            context: $r.context,
                                            target: createNameBuilder($root, $["nested type"].namespace.namespace).type($["nested type"].type),
                                            markedValues: $r.markedValues.concat([$block.markers]),
                                            states: $r.states.concat([$block.states]),
                                            nestedFunctions: [],
                                            externalFunctions: decl.functions,
                                            namespaceName: $pi.namespace.namespace,
                                        },
                                    )
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                })
                $["nested procedures"].forEach(($, key) => {
                    //console.error(`NESTED PROCEDURE: ${key}`)
                    $w.line(($w) => {
                        $w.snippet(`function ${generateIdentifier(key)}_NIC`)
                        generateInternalProcedureSpecification(
                            $.specification,
                            $w,
                            ``,
                            {},
                        )
                    })
                })
                $.effects.forEach(($) => {
                    $w.line(($w) => {
                        switch ($.type[0]) {
                            case "internal interface call":
                                cc($.type[1], ($) => {
                                    $w.snippet(`$ip.${$.interface}(`)
                                    const $p = findInStack($r.parameters, $.interface)
                                    if ($p.type[0] !== "method") {
                                        throw new Error(`Not a method: ${$.interface}`)
                                    }
                                    const $m = $p.type[1]
                                    generateTypeExpression(
                                        $.expression,
                                        $w,
                                        {
                                            context: $r.context,
                                            target: navigateToNestedType($m.type),
                                            markedValues: $r.markedValues.concat([$block.markers]),
                                            states: allStates,
                                            nestedFunctions: [],
                                            externalFunctions: decl.functions,
                                            namespaceName: $pi.namespace.namespace,
                                        },
                                    )
                                    $w.snippet(`)`)
                                })
                                break
                            case "external interface call":
                                cc($.type[1], ($) => {
                                    $w.snippet(`$ip.${$.interface}(`)
                                    const $interface = find($r.interfaces, $.interface)
                                    if ($interface.interface.type[0] !== "method") {
                                        throw new Error(`Not a method: ${$.interface}`)
                                    }
                                    const $method = $interface.interface.type[1]
                                    generateTypeExpression(
                                        $.expression,
                                        $w,
                                        {
                                            context: createNameBuilder($root, "FIXME13").type("FIXME"),
                                            target: createTypeReferenceNameBuilder(
                                                $method.type,
                                                $pi.namespace.namespace,
                                            ),
                                            markedValues: $r.markedValues.concat([$block.markers]),
                                            states: allStates,
                                            nestedFunctions: [],
                                            externalFunctions: decl.functions,
                                            namespaceName: $pi.namespace.namespace,
                                        },
                                    )
                                    $w.snippet(`)`)
                                })
                                break
                            case "state change":
                                cc($.type[1], ($) => {
                                    //console.error("SIZE", allStates.length)
                                    const $state = findInStack(allStates, $.state)
                                    $w.snippet(`${generateIdentifier($.state)}`)
                                    switch ($.type[0]) {
                                        case "type4":
                                            cc($.type[1], ($) => {
                                                if ($state.type[0] !== "type5") {
                                                    throw new Error(`unexpected: state not dictionary`)
                                                }
                                                const $type = $state.type[1]["nested type"]
                                                $w.snippet(` = `)
                                                generateTypeExpression(
                                                    $.expression,
                                                    $w,
                                                    {
                                                        context: $r.context,
                                                        target: navigateToNestedType(
                                                            $type,
                                                        ),
                                                        markedValues: $r.markedValues.concat([$block.markers]),
                                                        states: allStates,
                                                        nestedFunctions: [],
                                                        externalFunctions: decl.functions,
                                                        namespaceName: $pi.namespace.namespace,
                                                    },
                                                )
                                            })
                                            break
                                        case "string":
                                            cc($.type[1], ($) => {
                                                $w.snippet(` = `)
                                                generateStringExpression(
                                                    $.initializer,
                                                    $w,
                                                    {
                                                        context: $r.context,
                                                        markedValues: $r.markedValues.concat([$block.markers]),
                                                        states: allStates,
                                                        nestedFunctions: [],
                                                        externalFunctions: decl.functions,
                                                        namespaceName: $pi.namespace.namespace,
                                                    },
                                                )
                                            })
                                            break
                                        case "dictionary":
                                            cc($.type[1], ($) => {
                                                if ($state.type[0] !== "dictionary") {
                                                    throw new Error(`unexpected: state not dictionary`)
                                                }
                                                const $dict = $state.type[1].type

                                                switch ($.strategy[0]) {
                                                    case "add entry":
                                                        cc($.strategy[1], ($) => {
                                                            $w.snippet(`[`)
                                                            generateStringExpression(
                                                                $.key,
                                                                $w,
                                                                {
                                                                    context: $r.context,
                                                                    markedValues: $r.markedValues.concat([$block.markers]),
                                                                    states: allStates,
                                                                    nestedFunctions: [],
                                                                    externalFunctions: decl.functions,
                                                                    namespaceName: $pi.namespace.namespace,
                                                                },
                                                            )
                                                            $w.snippet(`] = `)
                                                            generateTypeExpression(
                                                                $.expression,
                                                                $w,
                                                                {
                                                                    context: $r.context,
                                                                    target: navigateToNestedType(
                                                                        $dict,
                                                                    ),
                                                                    markedValues: $r.markedValues.concat([$block.markers]),
                                                                    states: allStates,
                                                                    nestedFunctions: [],
                                                                    externalFunctions: decl.functions,
                                                                    namespaceName: $pi.namespace.namespace,
                                                                },
                                                            )
                                                        })
                                                        break
                                                    default:
                                                        assertUnreachable($.strategy[0])
                                                }
                                            })
                                            break
                                        case "list":
                                            cc($.type[1], ($) => {
                                                switch ($.strategy[0]) {
                                                    case "add element":
                                                        cc($.strategy[1], ($) => {
                                                            $w.snippet(`.push(`)
                                                            generateTypeExpression(
                                                                $.expression,
                                                                $w,
                                                                {
                                                                    context: $r.context,
                                                                    target: createNameBuilder($root, "FIXME23").type("FOO"),
                                                                    markedValues: $r.markedValues.concat([$block.markers]),
                                                                    states: allStates,
                                                                    nestedFunctions: [],
                                                                    externalFunctions: decl.functions,
                                                                    namespaceName: $pi.namespace.namespace,
                                                                },
                                                            )
                                                            $w.snippet(`)`)
                                                        })
                                                        break
                                                    default:
                                                        assertUnreachable($.strategy[0])
                                                }
                                            })
                                            break
                                        default:
                                            assertUnreachable($.type[0])
                                    }
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                })
                switch ($["return value"][0]) {
                    case "interface":
                        cc($["return value"][1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`return `)
                                generateInterfaceExpression(
                                    $.expression,
                                    $w,
                                    {},
                                )
                            })
                        })
                        break
                    case "void":
                        break
                    default:
                        assertUnreachable($["return value"][0])
                }
            })
            $w.snippet(`}`)
        }
        $w.line(() => { })
        $w.line(($w) => {
            $w.snippet(`export function ${generateIdentifier(key)}_pi`)
            doDictionary(
                $["type parameters"],
                () => {
                    //
                },
                () => {
                    $w.snippet(`<`)
                },
                () => {
                    $w.snippet(`>`)
                },
                ($, key) => {
                    $w.snippet(`${generateIdentifier(key)}`)
                },
                () => {
                    $w.snippet(`, `)
                },
            )
            generateProcedureDeclaration(
                decl,
                $w,
                ":",
                $.namespace.namespace,
                ($w) => {
                    doDictionary(
                        //should be parameters
                        $.namespace["type arguments"],
                        () => {
                            //
                        },
                        () => {
                            $w.snippet(`<`)
                        },
                        () => {
                            $w.snippet(`>`)
                        },
                        ($, key) => {
                            $w.snippet(`${generateIdentifier(key)}`)
                        },
                        () => {
                            $w.snippet(`, `)
                        },
                    )

                }
            )
            $w.snippet(` `)
            generateprocedureBlock(
                $.block,
                $w,
                {
                    context: createTypeReferenceNameBuilder(decl.context, $pi.namespace.namespace),
                    interfaces: decl.interfaces,
                    parameters: [],
                    markedValues: [],
                    states: [],
                }
            )
        })
    })
}
