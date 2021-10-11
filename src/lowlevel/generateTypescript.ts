/*eslint
    "camelcase": off,
    "dot-notation": off,
    "@typescript-eslint/no-empty-function": off,
    "@typescript-eslint/no-unused-vars": off,
*/

import * as ll from "./generated/lowlevel"


function generateIdentifier(str: string) {
    return str.replace(/ /g, "_").replace(/\-/g, "_")
}

function generateQuoted(str: string) {
    return `"${str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`
}


export type DictionaryBuilder<T> = { [key: string]: T }


export type __functions_B = {
}

export type __parameters_B = {
    readonly "type"?: string
}

export type __method_B = {
    readonly "parameters"?: DictionaryBuilder<__parameters_B>
    readonly "return type"?: string
}

export type __type_arguments_B = {
    readonly "type"?: string
}

export type __sub_interface_B = {
    readonly "interface"?: string
    readonly "type arguments"?: DictionaryBuilder<__type_arguments_B>
}

export type __type_BU =
    | ["method", __method_B]
    | ["sub interface", __sub_interface_B]

export type __members_B = {
    readonly "type"?: __type_BU
}

export type __type_parameters_B = {
}

export type __interfaces_B = {
    readonly "members"?: DictionaryBuilder<__members_B>
    readonly "type parameters"?: DictionaryBuilder<__type_parameters_B>
}

export type __root_B = {
    readonly "functions"?: DictionaryBuilder<__functions_B>
    readonly "interfaces"?: DictionaryBuilder<__interfaces_B>
}

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

export interface Block {
    line: (callback: (line: Line) => void) => void
}

export interface Line {
    snippet: (str: string) => void
    indent: (callback: (block: Block) => void) => void
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

interface TypeNameBuilder {
    dictionary(): TypeNameBuilder
    list(): TypeNameBuilder
    group(): GroupNameBuilder
    taggedUnion(): TaggedUnionNameBuilder
    getIdentifier(): string
}

interface GroupNameBuilder {
    property(name: string): TypeNameBuilder
    getIdentifier(): string
}

interface TaggedUnionNameBuilder {
    option(name: string): TypeNameBuilder
    getIdentifier(): string
}


function createTypeNameBuilder2(
    prefix: string,
): TypeNameBuilder {
    return {
        dictionary: () => {
            return createTypeNameBuilder2(`${prefix}_D`)
        },
        list: () => {
            return createTypeNameBuilder2(`${prefix}_L`)
        },
        group: () => {
            return {
                getIdentifier: () => {
                    return `${generateIdentifier(prefix)}_G`
                },
                property: (name) => {
                    return createTypeNameBuilder2(`${prefix}_G_${name}_P`)
                },
            }
        },
        taggedUnion: () => {
            return {
                option: (optName) => {
                    return createTypeNameBuilder2(`${prefix}_TU_${optName}_O`)
                },
                getIdentifier: () => {
                    return generateIdentifier(`${prefix}_TU`)
                },
            }
        },
        getIdentifier: () => {
            return `${generateIdentifier(prefix)}`
        },
    }
}

type NamespaceStack = {
    name: string
    data: ll.__namespace_T
}[]

function createNameBuilder(
    namespaces: NamespaceStack
) {
    return {
        type: (name: string) => {
            return createTypeNameBuilder2(`${namespaces.map(($) => $.name).join("")}${name}_T`)
        },
    }
}

export function generateTypeScript(
    data: ll.__root_T,
    $w: Block,
): void {
    function doNamespace(
        namespaceStack: NamespaceStack,
        ns: ll.__namespace_T
    ) {
        function doTypeParameters(
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
        function doFunctionCall(
            $: ll.__function_call_T,
            $w: Line,
        ) {
            $w.snippet(`({`)
            $w.indent(($w) => {
                $.arguments.forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`${generateQuoted(key)}: `)
                        switch ($.type[0]) {
                            case "builder":
                                cc($.type[1], ($) => {
                                    $w.snippet(`$f[${generateQuoted($.argument)}]`)
                                })
                                break
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $.entries.forEach(($, k) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateQuoted(k)}: `)
                                                doInterfaceInitializer(
                                                    $.initializer,
                                                    $w,
                                                )
                                                $w.snippet(`,`)
                                            })
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                break
                            case "interface initializer":
                                cc($.type[1], ($) => {
                                    doInterfaceInitializer(
                                        $.initializer,
                                        $w,
                                    )
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                        $w.snippet(`,`)
                    })
                })
            })
            $w.snippet(`})`)
        }
        function doInterfaceInitializer(
            $: ll.__interface_initializer_T,
            $w: Line,
        ) {
            switch ($.type[0]) {
                case "method": {
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "argument": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`$f[${generateQuoted($.argument)}]`)
                                })
                                break
                            }
                            case "function implementation": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`($cb) => `)
                                    generateFunctionBlock(
                                        $.block,
                                        $w,
                                    )
                                })
                                break
                            }
                            case "inline function": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`(`)
                                    doFunctionSpecification(
                                        $.specification,
                                        $w,
                                        " =>"
                                    )
                                    $w.snippet(`)`)
                                    doFunctionCall(
                                        $.call,
                                        $w,
                                    )

                                    // doBlock(
                                    //     $.block,
                                    //     $w,
                                    // )
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
                                                doInterfaceInitializer(
                                                    $.initializer,
                                                    $w,
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
                            case "function call6":
                                cc($.strategy[1], ($) => {
                                    function doNamedFunctionCall(
                                        $: ll.__named_function_call_T,
                                        $w: Line,
                                    ) {
                                        switch ($.type[0]) {
                                            case "external":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`$f.${$.builder}.${$.method}`)
                                                })
                                                break
                                            case "local":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`${$.function}_NIC`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($.type[0])
                                        }
                                        doFunctionCall(
                                            $["function call"],
                                            $w,
                                        )
                                    }
                                    doNamedFunctionCall(
                                        $["function call"],
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
                default:
                    assertUnreachable($.type[0])
            }
        }
        function generateTypeReference(
            $: ll.__type_reference_T,
            $w: Line,
        ) {
            $w.snippet(`${createNameBuilder(namespaceStack).type($.type).getIdentifier()}`)
        }
        function generateFunctionBlock(
            $: ll.__function_block_T,
            $w: Line,
        ) {
            $w.snippet(`{`)
            $w.indent(($w) => {
                $.states.forEach(($, key) => {
                    $w.line(($w) => {
                        function navigateToNestedType(
                            $: ll.__nested_type_reference_T,
                        ) {
                            function find<T>(
                                dict: IDictionary<T>,
                                name: string,
                            ): T {
                                let res: T | null = null
                                let options = ""
                                dict.forEach(($, k) => {
                                    options += ` ${k}`
                                    if (k === name) {
                                        res = $
                                    }
                                })
                                if (res !== null) {
                                    return res
                                } else {
                                    throw new Error(`missing: ${name}, options: ${options}`)
                                }
                            }
                            let nameBuilder = createTypeNameBuilder2("FOO")
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
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: { [key:string]: `)
                                    $w.snippet(`${navigateToNestedType($.type["nested type reference"]).dictionary().getIdentifier()}`)
                                    $w.snippet(` } = {}`)
                                })
                                break
                            case "list":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: `)
                                    $w.snippet(`${navigateToNestedType($.type["nested type reference"]).list().getIdentifier()}`)
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
                                    $w.snippet(`const ${generateIdentifier(key)}: `)
                                    generateTypeReference($.type, $w)
                                    $w.snippet(` = `)
                                    doTypeInitializer(
                                        $.initializer,
                                        $w,
                                    )
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                })
                $.effects.forEach(($) => {
                    $w.line(($w) => {
                        switch ($.type[0]) {
                            case "interface call":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${$.interface}(`)
                                    doTypeInitializer(
                                        $.initializer,
                                        $w,
                                    )
                                    $w.snippet(`)`)
                                })
                                break
                            case "state change":
                                cc($.type[1], ($) => {
                                    switch ($.type[0]) {
                                        case "set string":
                                            cc($.type[1], ($) => {
                                                $w.snippet(`${generateIdentifier($.state)} = $.${$["context property"]}`)
                                            })
                                            break
                                        case "add entry":
                                            cc($.type[1], ($) => {
                                                $w.snippet(`${generateIdentifier($.state)}[${$.key}] = $.${$["context property"]}`)
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
                $["nested functions"].forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`function ${generateIdentifier(key)}_NIC`)
                        doFunctionSpecification(
                            $.specification,
                            $w,
                            ":",
                        )
                    })
                })
                switch ($["return value"][0]) {
                    case "interface":
                        cc($["return value"][1], ($) => {
                            $w.line(($w) => {
                                $w.snippet(`return `)
                                doInterfaceInitializer($.initializer, $w)
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
        function doFunctionSpecification(
            $: ll.__function_specification_T,
            $w: Line,
            arrowOrColon: string,
        ) {
            doFunctionDeclaration(
                $.declaration,
                $w,
                arrowOrColon,
            )
            generateFunctionBlock(
                $.block,
                $w,
            )
        }
        function doFunctionDeclaration(
            $: ll.__function_declaration_T,
            $w: Line,
            arrowOrColon: string,
        ) {
            $w.snippet(`($f: `)
            $w.snippet(`{`)
            $w.indent(($w) => {
                $.parameters.forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`${generateQuoted(key)}: `)
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $w.line(($w) => {
                                            $w.snippet(`[key: string]: `)
                                            doInterfaceDefinition(
                                                $.entry,
                                                $w,
                                            )
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                break
                            case "interface":
                                cc($.type[1], ($) => {
                                    doInterfaceDefinition(
                                        $.interface,
                                        $w,
                                    )
                                })
                                break
                            case "builder":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${namespaceStack.map(($) => $.name).join("")}${$.builder}_IB`)
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
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                })
            })
            $w.snippet(`}`)
            $w.snippet(`) ${arrowOrColon} ${namespaceStack.map(($) => $.name).join("")}`)
            doInterfaceDefinition(
                $.interface,
                $w,
            )
        }
        function doInterfaceDefinition(
            $: ll.__interface_definition_T,
            $w: Line,
        ) {
            switch ($.type[0]) {
                case "group":
                    cc($.type[1], ($) => {
                        $w.snippet(`{`)
                        $w.indent(($w) => {
                            $.members.forEach(($, key) => {
                                $w.line(($w) => {
                                    $w.snippet(`${generateQuoted(key)}: `)
                                    doInterfaceDefinition(
                                        $.definition,
                                        $w,
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
                        generateTypeReference($.type, $w)
                        doTypeParameters($w)
                        $w.snippet(`) => `)
                        switch ($["return type"][0]) {
                            case "interface":
                                cc($["return type"][1], ($) => {
                                    doInterfaceDefinition(
                                        $.interface,
                                        $w,
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
                        $w.snippet(`${namespaceStack.map(($) => $.name).join("")}${$.interface}_I`)
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
                    })
                    break
                default:
                    assertUnreachable($.type[0])
            }
        }
        function doTypeInitializer(
            $: ll.__type_initializer_T,
            $w: Line,
        ) {
            switch ($.type[0]) {
                case "boolean":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.state)}`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateQuoted($.value)}`)
                                })
                                break
                            default:
                                assertUnreachable($.strategy[0])
                        }
                    })
                    break
                case "dictionary":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`createDictionary(${generateIdentifier($.state)})`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], (_$) => {
                                    $w.snippet(`{}`)
                                })
                                break
                            default:
                                assertUnreachable($.strategy[0])
                        }
                    })
                    break
                case "group":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`createList(${generateIdentifier($.state)})`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $.properties.forEach(($, k) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateQuoted(k)}: `)
                                                doTypeInitializer(
                                                    $.initializer,
                                                    $w,
                                                )
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
                case "list":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`createList(${generateIdentifier($.state)})`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], (_$) => {
                                    $w.snippet(`[]`)
                                })
                                break
                            default:
                                assertUnreachable($.strategy[0])
                        }
                    })
                    break
                case "number":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.state)}`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateQuoted($.value)}`)
                                })
                                break
                            default:
                                assertUnreachable($.strategy[0])
                        }
                    })
                    break
                case "string":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.state)}`)
                                })
                                break
                            case "literal":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateQuoted($.value)}`)
                                })
                                break
                            default:
                                assertUnreachable($.strategy[0])
                        }
                    })
                    break
                case "tagged union":
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "literal":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`[${generateQuoted($.option)}, `)
                                    doTypeInitializer(
                                        $.data,
                                        $w,
                                    )
                                    $w.snippet(` ]`)
                                })
                                break
                            case "from state":
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.state)}`)
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
        }
        ns.interfaces.forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export type ${namespaceStack.map(($) => $.name).join("")}${generateIdentifier(key)}_I`)
                doTypeParameters($w)
                $w.snippet(` = `)
                doInterfaceDefinition(
                    $["definition"],
                    $w,
                )
            })
        })
        ns.types.forEach(($, key) => {
            function doType(
                $: ll.__type_T,
                x: TypeNameBuilder,
                $w: Line,
            ) {
                switch ($.type[0]) {
                    case "boolean": {
                        $w.snippet(`boolean`)
                        break
                    }
                    case "dictionary": {
                        $w.snippet(`${x.dictionary().getIdentifier()}`)
                        doTypeParameters($w)
                        break
                    }
                    case "group": {
                        $w.snippet(`${x.group().getIdentifier()}`)
                        doTypeParameters($w)
                        break
                    }
                    case "list": {
                        $w.snippet(`${x.list().getIdentifier()}`)
                        doTypeParameters($w)
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
                        $w.snippet(`${x.taggedUnion().getIdentifier()}`)
                        doTypeParameters($w)
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
                            $w.snippet(`type ${x.dictionary().getIdentifier()}`)
                            doTypeParameters($w)
                            $w.snippet(` = IDictionary<`)
                            doType(
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
                            $w.snippet(`type ${x.group().getIdentifier()}`)
                            doTypeParameters($w)
                            $w.snippet(` = {`)
                            $w.indent(($w) => {

                                $.properties.forEach(($$, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`readonly ${generateQuoted(key)}`)

                                        switch ($$.occurence[0]) {
                                            case "required": {
                                                break
                                            }
                                            case "optional": {
                                                $w.snippet(`?`)
                                                break
                                            }
                                            default:
                                                assertUnreachable($$.occurence[0])
                                        }
                                        $w.snippet(`: `)

                                        doType(
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
                            doTypeParameters($w)
                            $w.snippet(` = `)
                            doType(
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
                            $w.snippet(`type ${tu.getIdentifier()}`)
                            doTypeParameters($w)
                            $w.snippet(` = `)
                            $w.indent(($w) => {
                                $.options.forEach(($, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`| [${generateQuoted(key)}, `)
                                        doType(
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
                createNameBuilder(namespaceStack).type(key),
            )
            //generate code for this type
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`type ${namespaceStack.map(($) => $.name).join("")}${generateIdentifier(key)}_T`)
                doTypeParameters($w)
                $w.snippet(` = `)
                doType(
                    $.type,
                    createNameBuilder(namespaceStack).type(key),
                    $w,
                )
            })
        })
        ns["interface builders"].forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export interface ${namespaceStack.map(($) => $.name).join("")}${generateIdentifier(key)}_IB`)
                doTypeParameters($w)
                $w.snippet(` `)
                $w.snippet(`{`)
                $w.indent(($w) => {
                    $.methods.forEach(($, k) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(k)}: `)
                            doFunctionDeclaration(
                                $.declaration,
                                $w,
                                "=>"
                            )
                        })
                    })
                })
                $w.snippet(`}`)
            })
        })
        ns.functions.forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export function ${namespaceStack.map(($) => $.name).join("")}${generateIdentifier(key)}_IC`)
                doTypeParameters($w)
                doFunctionSpecification(
                    $.specification,
                    $w,
                    ":",
                )
            })
        })
        ns.namespaces.forEach(($, k) => {
            doNamespace(namespaceStack.concat([{ name: `${k}_`, data: $.namespace }]), $.namespace)
        })
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
    doNamespace([], data.namespace)
}
