/* eslint
    "camelcase": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
*/
import * as def from "../types"
import * as t from "../../../../../lowlevel/generated/lowlevel"
import { generateCore } from "./core"
import { generateDeserializeAPI } from "./deserializeAPI"
import { generateDeserializeNamespace } from "./deserialize"
import { createDeserializer } from "../createDeserializer"
import { generateCreateDeserializer } from "./generateCreateDeserializer"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

function buildDictionary<T>(
    builder: (
        add: (
            key: string, v: T
        ) => void
    ) => void
): { [key: string]: T } {
    const out: { [key: string]: T } = {}
    builder((key, value) => {
        out[key] = value
    })
    return out
}

function buildDictionaryWithNamespaces<T>(
    namespaces: { [key: string]: { [key: string]: T } }
) {
    const out: { [key: string]: T } = {}
    Object.keys(namespaces).forEach((k) => {
        const ns = namespaces[k]
        Object.keys(ns).forEach((kk) => {
            if (out[`${kk}${k}`] !== undefined) {
                throw new Error("key clash")
            }
            out[`${kk}${k}`] = ns[kk]
        })
    })
    return out
}

export function generateCode2(
    schema: def.Schema,
    callback: ($: t.__root_B) => void,
): void {
    callback({
        "namespaces": {
            "lang": {
                "types": {
                    "boolean": {
                        "type": {
                            "type": ["boolean", {}],
                        },
                    },
                    "number": {
                        "type": {
                            "type": ["number", {}],
                        },
                    },
                    "string": {
                        "type": {
                            "type": ["string", {}],
                        },
                    },
                    "nothing": {
                        "type": {
                            "type": ["group", {
                            }],
                        },
                    },
                },
            },
            "core": generateCore(
                schema,
            ),
            "build": {
                "types": buildDictionary((add) => {
                    schema["component types"].forEach((e, k) => {
                        function generateBuilderNode(
                            node: def.Node,
                            keyProperty: def.Property | null,
                        ): t.__type_B {
                            return {
                                "type": ["group", {
                                    "properties": buildDictionary((add) => {
                                        node.properties.forEach((e, k) => {
                                            if (e === keyProperty) {
                                                return
                                            }
                                            add(k, {
                                                "occurence": ["optional", {}],
                                                "type": {
                                                    "type": ((): t.__type_type_TU_Builder => {
                                                        switch (e.type[0]) {
                                                            case "collection": {
                                                                const $ = e.type[1]
                                                                switch ($.type[0]) {
                                                                    case "dictionary": {
                                                                        const $$ = $.type[1]
                                                                        return ["dictionary", {
                                                                            "entry": generateBuilderNode($.node, $$["key property"].get()),
                                                                        }]
                                                                    }
                                                                    case "list": {
                                                                        return ["list", {
                                                                            "element": generateBuilderNode($.node, null),
                                                                        }]
                                                                    }
                                                                    default:
                                                                        return assertUnreachable($.type[0])
                                                                }
                                                            }
                                                            case "component": {
                                                                const $ = e.type[1]
                                                                return ["type reference", {
                                                                    "type": {
                                                                        "type": $.type.name,
                                                                    },
                                                                }]
                                                            }
                                                            case "state group": {
                                                                const $ = e.type[1]
                                                                return ["tagged union", {
                                                                    "options": buildDictionary((add) => {
                                                                        $.states.forEach((e, k) => {
                                                                            add(k, {
                                                                                "type": generateBuilderNode(e.node, null),
                                                                            })
                                                                        })
                                                                    }),
                                                                }]
                                                            }
                                                            case "value": {
                                                                const $ = e.type[1]
                                                                switch ($.type[0]) {
                                                                    case "boolean":
                                                                        return ["boolean", {}]
                                                                    case "number":
                                                                        return ["number", {}]
                                                                    case "string":
                                                                        return ["string", {}]
                                                                    default:
                                                                        return assertUnreachable($.type[0])
                                                                }
                                                            }
                                                            default:
                                                                return assertUnreachable(e.type[0])
                                                        }
                                                    })(),
                                                },
                                            })
                                        })
                                        //"interface calls"
                                    }),
                                }],
                            }
                        }
                        add(k, {
                            "type": generateBuilderNode(e.node, null),
                        })
                    })
                }),
                // "functions": {
                //     // "createBuilder": {
                //     //     "procedure": {
                //     //         "parameters": {
                //     //         },
                //     //     },
                //     // },
                // },
            },
            "deserialize api": generateDeserializeAPI(
            ),
            "deserialize": generateDeserializeNamespace(
                schema,
            ),
        },
        "procedure implementations": {
            "createDeserializer": generateCreateDeserializer(
                schema,
            ),
        },
    })
}