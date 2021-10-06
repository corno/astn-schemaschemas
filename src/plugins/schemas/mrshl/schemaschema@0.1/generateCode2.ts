/* eslint
    "camelcase": "off"
*/

import * as def from "./types"
import * as t from "../../../../lowlevel/generated/lowlevel"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
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
        "namespace": {
            "namespaces": {
                "deserialize": {
                    "namespace": {
                        "type parameters": {
                            "TokenAnnotation": {},
                            "NonTokenAnnotation": {},
                        },
                        interfaces: {
                            "ValueHandler": {
                            },
                            "ExpectContext": {
                            },
                            "RequiredValueHandler": {
                                "members": {
                                    "exists": {
                                        "type": ["sub interface", {
                                            "interface": "ValueHandler",
                                            "type arguments": {
                                                "TokenAnnotation": {},
                                                "NonTokenAnnotation": {},
                                            },
                                        }],
                                    },
                                    "missing": {
                                        "type": ["method", {
                                            "return type": "void",
                                        }],
                                    },
                                },
                            },
                        },
                        functions: {
                            "createDeserializer": {
                                "function": {
                                    "parameters": {
                                        "context": {
                                            "type": ["interface", {
                                                "interface": "IExpectContext",
                                                "type arguments": {
                                                    "TokenAnnotation": {},
                                                    "NonTokenAnnotation": {},
                                                },
                                            }],

                                        },
                                        "raiseValidationError": {
                                            "type": ["callback", {
                                                "parameters": {
                                                    "message": {
                                                        "type": ["string", {}],
                                                    },
                                                    "annotation": {
                                                        "type": ["type argument", {
                                                            "argument": "TokenAnnotation",
                                                        }],
                                                    },
                                                },
                                            }],
                                        },
                                        "callback": {
                                            "type": ["callback", {
                                                "parameters": {
                                                    "result": {
                                                        "type": ["typex", {
                                                            "type": `${schema["root type"].name}`,
                                                        }],
                                                    },
                                                },
                                            }],
                                        },
                                    },
                                    "block": {
                                        "nested functions": buildDictionary((add) => {
                                            schema["component types"].forEach((e, k) => {
                                                add(`${k}`, {
                                                    "function": {
                                                        "return type": `${k}`,
                                                    },
                                                })
                                            })
                                        }),
                                    },
                                },
                            },
                        },
                    },
                },
                "build": {

                },
            },
            "types": buildDictionaryWithNamespaces({
                "_T": buildDictionary((add) => {
                    schema["component types"].forEach((e, k) => {
                        function doNode(
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
                                                "type": {
                                                    "type": ((): t.__type_type_TU_Builder => {
                                                        switch (e.type[0]) {
                                                            case "collection": {
                                                                const $ = e.type[1]
                                                                switch ($.type[0]) {
                                                                    case "dictionary": {
                                                                        const $$ = $.type[1]

                                                                        return ["dictionary", {
                                                                            "entry": doNode($.node, $$["key property"].get()),
                                                                        }]
                                                                    }
                                                                    case "list": {
                                                                        return ["list", {
                                                                            "element": doNode($.node, null),
                                                                        }]
                                                                    }
                                                                    default:
                                                                        return assertUnreachable($.type[0])
                                                                }
                                                            }
                                                            case "component": {
                                                                const $ = e.type[1]
                                                                return ["type reference", {
                                                                    "type": `${$.type.name}_T`,
                                                                }]
                                                            }
                                                            case "state group": {
                                                                const $ = e.type[1]
                                                                return ["tagged union", {
                                                                    "options": buildDictionary((add) => {
                                                                        $.states.forEach((e, k) => {
                                                                            add(k, {
                                                                                "type": doNode(e.node, null),
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
                                    }),
                                }],
                            }
                        }

                        add(k, {
                            "type": doNode(e.node, null),
                        })
                    })

                }),
                "_B": buildDictionary((add) => {
                    schema["component types"].forEach((e, k) => {
                        function doNode(
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
                                                                            "entry": doNode($.node, $$["key property"].get()),
                                                                        }]
                                                                    }
                                                                    case "list": {
                                                                        return ["list", {
                                                                            "element": doNode($.node, null),
                                                                        }]
                                                                    }
                                                                    default:
                                                                        return assertUnreachable($.type[0])
                                                                }
                                                            }
                                                            case "component": {
                                                                const $ = e.type[1]
                                                                return ["type reference", {
                                                                    "type": `${$.type.name}_B`,
                                                                }]
                                                            }
                                                            case "state group": {
                                                                const $ = e.type[1]
                                                                return ["tagged union", {
                                                                    "options": buildDictionary((add) => {
                                                                        $.states.forEach((e, k) => {
                                                                            add(k, {
                                                                                "type": doNode(e.node, null),
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
                                    }),
                                }],
                            }
                        }

                        add(k, {
                            "type": doNode(e.node, null),
                        })
                    })

                }),
            }),
            functions: {
                "createBuilder": {
                    "function": {
                        "parameters": {

                        },
                    },
                },
            },

        },
    })
}