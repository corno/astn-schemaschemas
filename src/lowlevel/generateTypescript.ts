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


export type __procedures_B = {
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
    readonly "procedures"?: DictionaryBuilder<__procedures_B>
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


function createTypeNameBuilder(
    prefix: string,
): TypeNameBuilder {
    return {
        dictionary: () => {
            return createTypeNameBuilder(`${prefix}_D`)
        },
        list: () => {
            return createTypeNameBuilder(`${prefix}_L`)
        },
        group: () => {
            return {
                getIdentifier: () => {
                    return `${generateIdentifier(prefix)}_G`
                },
                property: (name) => {
                    return createTypeNameBuilder(`${prefix}_G_${name}_P`)
                },
            }
        },
        taggedUnion: () => {
            return {
                option: (optName) => {
                    return createTypeNameBuilder(`${prefix}_TU_${optName}_O`)
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

function createNameBuilder(
    namespaceName: string
) {
    return {
        type: (name: string) => {
            return createTypeNameBuilder(`${generateIdentifier(namespaceName)}_${name}_T`)
        },
    }
}

export function generateTypeScript(
    $: ll.__root_T,
    $w: Block,
): void {
    const $root = $
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
    function generateProcedureDeclaration(
        $: ll.__procedure_declaration_T,
        $w: Line,
        arrowOrColon: string,
        namespaceName: string,
        typeArgumentsCallback: ($w: Line) => void,
    ) {
        $w.snippet(`($p: `)
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
                        case "interface":
                            cc($.type[1], ($) => {
                                generateInterfaceDefinition(
                                    $.interface,
                                    $w,
                                    namespaceName,
                                    typeArgumentsCallback,
                                )
                            })
                            break
                        case "builder":
                            cc($.type[1], ($) => {
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
                            break
                        case "function":
                            cc($.type[1], ($) => {
                                $w.snippet(`($p: `)
                                generateTypeReference(
                                    $.in,
                                    $w,
                                    namespaceName,
                                    typeArgumentsCallback,
                                )
                                $w.snippet(`) => `)
                                generateTypeReference(
                                    $.out,
                                    $w,
                                    namespaceName,
                                    typeArgumentsCallback,
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
                $w.snippet(`${createNameBuilder("").type($$.type).getIdentifier()}`)
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
    $.namespaces.forEach((ns, namespaceName) => {
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
                    $w.snippet(`${createNameBuilder("").type($$.type).getIdentifier()}`)
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
                switch ($.type[0]) {
                    case "boolean": {
                        $w.snippet(`boolean`)
                        break
                    }
                    case "dictionary": {
                        $w.snippet(`${x.dictionary().getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "group": {
                        $w.snippet(`${x.group().getIdentifier()}`)
                        generateTypeParameters($w)
                        break
                    }
                    case "list": {
                        $w.snippet(`${x.list().getIdentifier()}`)
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
                        $w.snippet(`${x.taggedUnion().getIdentifier()}`)
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
                            $w.snippet(`type ${x.dictionary().getIdentifier()}`)
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
                            $w.snippet(`type ${x.group().getIdentifier()}`)
                            generateTypeParameters($w)
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
                            $w.snippet(`type ${tu.getIdentifier()}`)
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
                createNameBuilder(namespaceName).type(key),
            )
            //generate code for this type
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_T`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateTypeUsage(
                    $.type,
                    createNameBuilder(namespaceName).type(key),
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
                        $w.line(($w) => {
                            $w.snippet(`${generateQuoted(k)}`)
                            generateProcedureDeclaration(
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
        ns["procedure declarations"].forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_PD`)
                generateTypeParameters($w)
                $w.snippet(` = `)
                generateProcedureDeclaration(
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
    })
    $["procedure implementations"].forEach(($, key) => {
        const ns2 = $.namespace
        function generateStringInitializer(
            $: ll.__string_initializer_T,
            $w: Line,
        ) {
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
                case "from callback":
                    cc($.strategy[1], ($) => {
                        $w.snippet(`$cb${generateIdentifier($.path)}`)
                    })
                    break
                case "from variable":
                    cc($.strategy[1], ($) => {
                        $w.snippet(`${$.variable}_v${generateIdentifier($.path)}`)
                    })
                    break
                default:
                    assertUnreachable($.strategy[0])
            }
        }
        function generateTypeInitializer(
            $: ll.__type_initializer_T,
            $w: Line,
        ) {
            switch ($.strategy[0]) {
                case "from state":
                    cc($.strategy[1], ($) => {
                        const $$ = $
                        switch ($.type[0]) {
                            case "boolean":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateIdentifier($$.state)}`)
                                })
                                break
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`createDictionary(${generateIdentifier($$.state)})`)
                                })
                                break
                            case "list":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateIdentifier($$.state)}`)
                                })
                                break
                            case "number":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateIdentifier($$.state)}`)
                                })
                                break
                            case "string":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateIdentifier($$.state)}`)
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                    break
                case "from callback":
                    cc($.strategy[1], ($) => {
                        $w.snippet(`$cb${generateIdentifier($.path)}`)
                    })
                    break
                case "from function":
                    cc($.strategy[1], ($) => {
                        switch ($.context[0]) {
                            case "argument":
                                cc($.context[1], ($) => {
                                    $w.snippet(`$f`)
                                })
                                break
                            case "variable":
                                cc($.context[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.variable)}_v`)
                                })
                                break
                            default:
                                assertUnreachable($.context[0])
                        }
                        $w.snippet(`.${generateIdentifier($.function)}(`)
                        generateTypeInitializer(
                            $.argument,
                            $w,
                        )
                        $w.snippet(`)`)
                    })
                    break
                case "literal":
                    cc($.strategy[1], ($) => {
                        switch ($.type[0]) {
                            case "boolean":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateQuoted($.value)}`)
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
                                                generateTypeInitializer(
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
                            case "list":
                                cc($.type[1], ($) => {
                                    $w.snippet(`[]`)
                                })
                                break
                            case "number":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateQuoted($.value)}`)
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
                                    generateTypeInitializer(
                                        $.initializer,
                                        $w,
                                    )
                                })
                                break
                            case "tagged union":
                                cc($.type[1], ($) => {
                                    $w.snippet(`[${generateQuoted($.option)}, `)
                                    generateTypeInitializer(
                                        $.data,
                                        $w,
                                    )
                                    $w.snippet(` ]`)
                                })
                                break
                            default:
                                assertUnreachable($.type[0])
                        }
                    })
                    break
                case "from variable":
                    cc($.strategy[1], ($) => {
                        $w.snippet(`${$.variable}_v${generateIdentifier($.path)}`)
                    })
                    break
                default:
                    assertUnreachable($.strategy[0])
            }
        }
        function generateProcedureCall(
            $: ll.__procedure_call_T,
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
                                    $w.snippet(`$p[${generateQuoted($.argument)}]`)
                                })
                                break
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent(($w) => {
                                        $.entries.forEach(($, k) => {
                                            $w.line(($w) => {
                                                $w.snippet(`${generateQuoted(k)}: `)
                                                generateInterfaceInitializer(
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
                                    generateInterfaceInitializer(
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
        function generateInternalProcedureSpecification(
            $: ll.__internal_procedure_specification_T,
            $w: Line,
            arrowOrNothing: string,
        ) {
            $w.snippet(`($p: `)
            $w.snippet(`{`)
            $w.indent(($w) => {
                $.parameters.forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`${generateQuoted(key)}: `)
                        generateInterfaceDefinition(
                            $.interface,
                            $w,
                            ns2.namespace,
                            ($w) => {

                            },
                        )
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
                            ns2.namespace,
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
            )
        }
        function generateInterfaceInitializer(
            $: ll.__interface_initializer_T,
            $w: Line,
        ) {
            switch ($.type[0]) {
                case "method": {
                    cc($.type[1], ($) => {
                        switch ($.strategy[0]) {
                            case "argument": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`$p[${generateQuoted($.argument)}]`)
                                })
                                break
                            }
                            case "procedure implementation": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`($cb) => `)
                                    generateprocedureBlock(
                                        $.block,
                                        $w,
                                    )
                                })
                                break
                            }
                            case "inline procedure": {
                                cc($.strategy[1], ($) => {
                                    $w.snippet(`(`)
                                    generateInternalProcedureSpecification(
                                        $.specification,
                                        $w,
                                        ` =>`,
                                    )
                                    $w.snippet(`)`)
                                    generateProcedureCall(
                                        $.call,
                                        $w,
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
                                                generateInterfaceInitializer(
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
                            case "procedure call6":
                                cc($.strategy[1], ($) => {
                                    function generateNamedprocedureCall(
                                        $: ll.__named_procedure_call_T,
                                        $w: Line,
                                    ) {
                                        switch ($.type[0]) {
                                            case "external":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`$p.${$.builder}.${$.method}`)
                                                })
                                                break
                                            case "local":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`${$.procedure}_NIC`)
                                                })
                                                break
                                            case "variable":
                                                cc($.type[1], ($) => {
                                                    $w.snippet(`${$.variable}_v${$.path}`)
                                                })
                                                break
                                            default:
                                                assertUnreachable($.type[0])
                                        }
                                        generateProcedureCall(
                                            $["procedure call"],
                                            $w,
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
                default:
                    assertUnreachable($.type[0])
            }
        }
        function navigateToNestedType(
            $: ll.__nested_type_reference_T,
        ) {
            let nameBuilder = createNameBuilder($.namespace.namespace).type($.type)
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
        function generateprocedureBlock(
            $: ll.__procedure_block_T,
            $w: Line,
        ) {
            $w.snippet(`{`)
            $w.indent(($w) => {
                $.variables.forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`const ${generateIdentifier(key)}_v = ${$.path}`)
                    })
                })
                $.states.forEach(($, key) => {
                    $w.line(($w) => {
                        switch ($.type[0]) {
                            case "dictionary":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: { [key: string]: `)
                                    $w.snippet(`${navigateToNestedType($.type["nested type"]).getIdentifier()}_${$.type["dictionary"]}`)
                                    $w.snippet(` } = {}`)
                                })
                                break
                            case "list":
                                cc($.type[1], ($) => {
                                    $w.snippet(`const ${generateIdentifier(key)}: `)
                                    $w.snippet(`${navigateToNestedType($.type["nested type"]).getIdentifier()}`)
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
                                    $w.snippet(`${navigateToNestedType($["nested type"]).taggedUnion().option(key).getIdentifier()}`)
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
                                    generateTypeInitializer(
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
                $["nested procedures"].forEach(($, key) => {
                    $w.line(($w) => {
                        $w.snippet(`function ${generateIdentifier(key)}_NIC`)
                        generateInternalProcedureSpecification(
                            $.specification,
                            $w,
                            ``,
                        )
                    })
                })
                $.effects.forEach(($) => {
                    $w.line(($w) => {
                        switch ($.type[0]) {
                            case "interface call":
                                cc($.type[1], ($) => {
                                    $w.snippet(`$p.${$.interface}(`)
                                    generateTypeInitializer(
                                        $.initializer,
                                        $w,
                                    )
                                    $w.snippet(`)`)
                                })
                                break
                            case "state change":
                                cc($.type[1], ($) => {
                                    $w.snippet(`${generateIdentifier($.state)}`)
                                    switch ($.type[0]) {
                                        case "string":
                                            cc($.type[1], ($) => {
                                                $w.snippet(` = `)
                                                generateStringInitializer(
                                                    $.initializer,
                                                    $w,
                                                )
                                            })
                                            break
                                        case "dictionary":
                                            cc($.type[1], ($) => {
                                                switch ($.strategy[0]) {
                                                    case "add entry":
                                                        cc($.strategy[1], ($) => {
                                                            $w.snippet(`[`)
                                                            generateStringInitializer(
                                                                $.key,
                                                                $w,
                                                            )
                                                            $w.snippet(`] = `)
                                                            generateTypeInitializer(
                                                                $.initializer,
                                                                $w,
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
                                                            generateTypeInitializer(
                                                                $.initializer,
                                                                $w,
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
                                generateInterfaceInitializer($.initializer, $w)
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
            const decl = find(find($root.namespaces, ns2.namespace)["procedure declarations"], $.declaration)
            $w.snippet(`export function ${generateIdentifier(ns2.namespace)}_${generateIdentifier(key)}_pi`)
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
                decl.declaration,
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
            )
        })
    })
}
