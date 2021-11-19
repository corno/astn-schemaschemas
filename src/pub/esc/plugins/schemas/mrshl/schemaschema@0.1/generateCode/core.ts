/* eslint
    "camelcase": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
*/
import * as def from "../types"
import * as t from "../../../../../lowlevel/lowlevel.generated"

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

export function generateCore(
    schema: def.Schema,
): t.__namespaces_B {
    return {
        "types": buildDictionary((add) => {
            schema["component types"].forEach((e, k) => {
                function generateNode(
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
                                                                    "entry": generateNode($.node, $$["key property"].get()),
                                                                }]
                                                            }
                                                            case "list": {
                                                                return ["list", {
                                                                    "element": generateNode($.node, null),
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
                                                                        "type": generateNode(e.node, null),
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
                    "type": generateNode(e.node, null),
                })
            })
        }),
    }
}