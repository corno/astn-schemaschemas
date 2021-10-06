/*eslint
    "camelcase": off,
    "@typescript-eslint/no-empty-function": off,
    "dot-notation": off,
*/

import * as ll from "./generated/lowlevel"


function generateIdentifier(str: string) {
    return str.replace(/ /g, "_").replace(/\-/g, "_")
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

export function generateTypeScript(
    data: ll.__root_T,
    $w: Block,
): void {
    function doNamespace(
        prefix: string,
        ns: ll.__namespace_T
    ) {

        ns.interfaces.forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`export interface ${prefix}${generateIdentifier(key)}_I`)
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
                $w.snippet(` {`)
                $w.indent(($w) => {
                    $.members.forEach(($, key) => {
                        $w.line(($w) => {
                            $w.snippet(`${generateIdentifier(key)}`)
                            switch ($.type[0]) {
                                case "method":
                                    cc($.type[1], ($) => {
                                        $w.snippet(`(): ${generateIdentifier($["return type"])}`)

                                        $.parameters.forEach(($, key) => {
                                            $w.snippet(generateIdentifier(key))
                                            //
                                        })
                                    })
                                    break
                                case "sub interface":
                                    cc($.type[1], ($) => {
                                        $w.snippet(`: ${generateIdentifier($.interface)}_I`)
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
            })
        })
        ns.types.forEach(($, key) => {
            function doType(
                type: ll.__type_T,
                x: TypeNameBuilder,
                $w: Line,
            ) {
                switch (type.type[0]) {
                    case "boolean": {
                        $w.snippet(`boolean`)
                        break
                    }
                    case "dictionary": {
                        $w.snippet(`${x.dictionary().getIdentifier()}`)
                        break
                    }
                    case "group": {
                        $w.snippet(`${x.group().getIdentifier()}`)
                        break
                    }
                    case "list": {
                        $w.snippet(`${x.list().getIdentifier()}`)
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
                        break
                    }
                    case "type reference": {
                        break
                    }
                    default:
                        assertUnreachable(type.type[0])
                }
            }
            function generateCodeForTypeTree(
                type: ll.__type_T,
                x: TypeNameBuilder,
            ) {
                //navigate all types
                switch (type.type[0]) {
                    case "boolean": {
                        break
                    }
                    case "dictionary": {
                        const $ = type.type[1]
                        //generate code for this type
                        generateCodeForTypeTree(
                            $.entry,
                            x.dictionary(),
                        )
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.dictionary().getIdentifier()} = { [key: string]: `)
                            doType(
                                $.entry,
                                x.dictionary(),
                                $w,
                            )
                            $w.snippet(` }`)
                        })
                        break
                    }
                    case "group": {
                        const $ = type.type[1]
                        $.properties.forEach(($$, key) => {
                            generateCodeForTypeTree(
                                $$.type,
                                x.group().property(key),
                            )
                        })
                        //generate code for this type
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.group().getIdentifier()} = {`)
                            $w.indent(($w) => {

                                $.properties.forEach(($$, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`readonly "${key}"`)

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
                        const $ = type.type[1]
                        generateCodeForTypeTree(
                            $.element,
                            x.list(),
                        )
                        //generate code for this type
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${x.getIdentifier()} = `)
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
                        const $ = type.type[1]
                        const tu = x.taggedUnion()
                        $.options.forEach(($$, key) => {
                            generateCodeForTypeTree(
                                $$.type,
                                tu.option(key)
                            )
                        })
                        $w.line(() => { })
                        $w.line(($w) => {
                            $w.snippet(`type ${tu.getIdentifier()} = `)
                            $w.indent(($w) => {
                                $.options.forEach(($, key) => {
                                    $w.line(($w) => {
                                        $w.snippet(`| `)
                                        doType(
                                            $.type,
                                            tu.option(key),
                                            $w,
                                        )
                                    })
                                })
                            })
                        })
                        break
                    }
                    case "type reference": {
                        break
                    }
                    default:
                        assertUnreachable(type.type[0])
                }
            }
            generateCodeForTypeTree(
                $.type,
                createTypeNameBuilder(
                    `${prefix}${key}_T`,
                ),
            )
            //generate code for this type
            $w.line(() => { })
            $w.line(($w) => {
                $w.snippet(`type ${prefix}${generateIdentifier(key)}_T = `)
                doType(
                    $.type,
                    createTypeNameBuilder(
                        `${prefix}${key}_T`,
                    ),
                    $w,
                )
            })
        })
        ns.functions.forEach(($, key) => {
            $w.line(() => { })
            $w.line(($w) => {
                function doFunction(
                    func: ll.__function_T,
                    $w: Line,
                ) {
                    function doBlock(
                        block: ll.__statement_block_T,
                        $w: Line,
                    ) {
                        $w.snippet(`{`)
                        $w.indent(($w) => {
                            block["nested functions"].forEach(($, key) => {
                                $w.line(($w) => {
                                    $w.snippet(`function ${generateIdentifier(key)}_F`)
                                    doFunction(
                                        $.function,
                                        $w,
                                    )
                                })
                            })
                            $w.line(($w) => {
                                $w.snippet(`throw new Error("IMPLEMENT ME")`)
                            })
                            block.statements.forEach(($) => {
                                $w.line(($w) => {
                                    switch ($.type[0]) {
                                        case "if":
                                            cc($.type[1], (_$) => {
                                                $w.snippet(`//if statement`)
                                            })
                                            break
                                        default:
                                            assertUnreachable($.type[0])
                                    }
                                })
                            })
                        })
                        $w.snippet(`}`)
                    }
                    $w.snippet(`(`)
                    $w.indent(($w) => {
                        func.parameters.forEach(($, key) => {
                            $w.line(($w) => {
                                $w.snippet(`${generateIdentifier(key)}: `)
                                switch ($.type[0]) {
                                    case "callback":
                                        cc($.type[1], ($) => {

                                            $w.snippet(`(`)
                                            $w.indent(($w) => {
                                                $.parameters.forEach(($, key) => {
                                                    $w.line(($w) => {
                                                        $w.snippet(`${generateIdentifier(key)}: `)

                                                        switch ($.type[0]) {
                                                            case "string":
                                                                cc($.type[1], (_$) => {
                                                                    $w.snippet(`string`)
                                                                })
                                                                break
                                                            case "type argument":
                                                                cc($.type[1], ($) => {
                                                                    $w.snippet(`${$.argument}`)
                                                                })
                                                                break
                                                            case "typex":
                                                                cc($.type[1], ($) => {
                                                                    const b = createTypeNameBuilder(
                                                                        `${prefix}${$.type}_T`,
                                                                    )
                                                                    $w.snippet(`${b.getIdentifier()}`)
                                                                })
                                                                break
                                                            default:
                                                                assertUnreachable($.type[0])
                                                        }
                                                        $w.snippet(`,`)
                                                    })
                                                })
                                            })
                                            $w.snippet(`) => void`)
                                        })
                                        break
                                    case "interface":
                                        cc($.type[1], ($) => {
                                            $w.snippet(`${$.interface}`)
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
                                $w.snippet(`,`)
                            })
                        })
                    })
                    $w.snippet(`): ${func["return type"]}_I`)
                    doBlock(
                        func.block,
                        $w,
                    )
                }
                $w.snippet(`export function ${prefix}${generateIdentifier(key)}_F`)
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
                doFunction(
                    $.function,
                    $w,
                )
            })
        })
        ns.namespaces.forEach(($, k) => {
            doNamespace(`${prefix}${k}_`, $.namespace)
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
    doNamespace("", data.namespace)
}
