/* eslint
    "camelcase": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
*/
import * as def from "./types"
import * as t from "../../../../lowlevel/generated/lowlevel"
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
        "namespace": {
            "types": buildDictionaryWithNamespaces({
                "_T": buildDictionary((add) => {
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
                "_B": buildDictionary((add) => {
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
            }),
            "namespaces": {
                // "core": {

                // },
                "deserialize": {
                    "namespace": {
                        "type parameters": {
                            "TokenAnnotation": {},
                            "NonTokenAnnotation": {},
                        },
                        "types": {
                            "Empty": {
                                "type": {
                                    "type": ["group", {
                                    }],
                                },

                            },
                            "StringToken": {
                                "type": {
                                    "type": ["group", {
                                        "properties": {
                                            "token": {
                                                "type": {
                                                    "type": ["group", {
                                                        "properties": {
                                                            "data": {
                                                                "type": {
                                                                    "type": ["group", {
                                                                        "properties": {
                                                                            "value": {
                                                                                "type": {
                                                                                    "type": ["string", {}],
                                                                                },
                                                                            },
                                                                        },
                                                                    }],
                                                                },
                                                            },
                                                        },
                                                    }],
                                                },
                                            },
                                            "annotation": {
                                                "type": {
                                                    "type": ["type argument", {
                                                        "argument": "TokenAnnotation",
                                                    }],
                                                },
                                            },
                                        },
                                    }],
                                },
                            },
                            "ValidationError": {
                                "type": {
                                    "type": ["group", {
                                        "properties": {
                                            "message": {
                                                "type": {
                                                    "type": ["string", {}],
                                                },
                                            },
                                            "annotation": {
                                                "type": {
                                                    "type": ["type argument", {
                                                        "argument": "TokenAnnotation",
                                                    }],
                                                },
                                            },
                                        },
                                    }],
                                },
                            },
                        },
                        interfaces: {
                            "ValueHandler": {
                                "definition": {
                                    "type": ["group", {
                                        "members": {
                                            // "array": {
                                            //     "type": ["method", {
                                            //         "callback": {
                                            //             "return type": ["interface", {
                                            //                 "interface": "ArrayHandler",
                                            //             }],
                                            //         },
                                            //     }],
                                            // },
                                            // "multilineString": {
                                            //     "type": ["method", {
                                            //         "callback": {
                                            //             "parameters": {
                                            //                 "token": {
                                            //                     "type": ["typex", {
                                            //                     }],
                                            //                 },
                                            //             },
                                            //         },
                                            //     }],
                                            // },
                                            // "object": {
                                            //     "type": ["method", {
                                            //     }],
                                            // },
                                            // "simpleString": {
                                            //     "type": ["method", {
                                            //     }],
                                            // },
                                            // "taggedUnion": {
                                            //     "type": ["method", {
                                            //     }],
                                            // },
                                        },
                                    }],
                                },
                            },
                            "RequiredValueHandler": {
                                "definition": {
                                    "type": ["group", {
                                        "members": {
                                            "exists": {
                                                "definition": {
                                                    "type": ["reference", {
                                                        "interface": "ValueHandler",
                                                        "type arguments": {
                                                            "TokenAnnotation": {},
                                                            "NonTokenAnnotation": {},
                                                        },
                                                    }],
                                                },
                                            },
                                            "missing": {
                                                "definition": {
                                                    "type": ["method", {
                                                        "type": {
                                                            "type": "Empty",
                                                        },
                                                        // "type": ["reference", {
                                                        //     "interface": "Empty",
                                                        // }],
                                                    }],
                                                },
                                                // "type": ["method", {
                                                //     "callback": {
                                                //         "type": "Empty",
                                                //     },
                                                // }],
                                            },
                                        },

                                    }],
                                },
                            },
                        },
                        "interface builders": {
                            "ExpectContext": {
                                "methods": {
                                    "expectVerboseGroup": {
                                        "declaration": {
                                            "interface": {
                                                "type": ["reference", {
                                                    "interface": "ValueHandler",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "parameters": {
                                                "properties": {
                                                    "type": ["dictionary", {
                                                        "entry": {
                                                            "type": ["group", {
                                                                "members": {
                                                                    "onExists": {
                                                                        "definition": {
                                                                            "type": ["method", {
                                                                                "type": {
                                                                                    "type": "Empty",
                                                                                },
                                                                            }],
                                                                        },
                                                                    },
                                                                    // "onNotExists": {
                                                                    //     "type": ["method", {
                                                                    //     }],
                                                                    // },
                                                                },
                                                            }],
                                                        },
                                                    }],
                                                },
                                                "onEnd": {
                                                    "type": ["interface", {
                                                        "interface": {
                                                            "type": ["method", {
                                                                "type": {
                                                                    "type": "Empty",
                                                                },
                                                            }],
                                                        },
                                                    }],
                                                },
                                            },
                                        },
                                    },
                                    "expectDictionary": {
                                        "declaration": {
                                            "interface": {
                                                "type": ["reference", {
                                                    "interface": "ValueHandler",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "parameters": {
                                                "onProperty": {
                                                    "type": ["interface", {
                                                        "interface": {
                                                            "type": ["method", {
                                                                "type": {
                                                                    "type": "StringToken",
                                                                },
                                                                "return type": ["interface", {
                                                                    "interface": {
                                                                        "type": ["reference", {
                                                                            "interface": "RequiredValueHandler",
                                                                            "type arguments": {
                                                                                "TokenAnnotation": {},
                                                                                "NonTokenAnnotation": {},
                                                                            },
                                                                        }],
                                                                    },
                                                                }],

                                                            }],
                                                        },
                                                    }],
                                                },
                                            },
                                        },
                                    },
                                    "expectQuotedString": {
                                        "declaration": {
                                            "interface": {
                                                "type": ["reference", {
                                                    "interface": "ValueHandler",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "parameters": {
                                                "callback": {
                                                    "type": ["interface", {
                                                        "interface": {
                                                            "type": ["method", {
                                                                "type": {
                                                                    "type": "StringToken",
                                                                },
                                                            }],
                                                        },
                                                    }],
                                                },
                                            },
                                        },
                                    },
                                    "expectTaggedUnion": {
                                        "declaration": {
                                            "interface": {
                                                "type": ["reference", {
                                                    "interface": "ValueHandler",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "parameters": {
                                                "options": {
                                                    "type": ["dictionary", {
                                                        "entry": {
                                                            "type": ["method", {
                                                                "type": {
                                                                    "type": "Empty",
                                                                },
                                                                "return type": ["interface", {
                                                                    "interface": {
                                                                        "type": ["reference", {
                                                                            "interface": "RequiredValueHandler",
                                                                            "type arguments": {
                                                                                "TokenAnnotation": {},
                                                                                "NonTokenAnnotation": {},
                                                                            },
                                                                        }],
                                                                    },
                                                                }],
                                                            }],
                                                        },

                                                    }],
                                                },
                                            },
                                        },
                                    },
                                    "expectList": {
                                        "declaration": {
                                            "interface": {
                                                "type": ["reference", {
                                                    "interface": "ValueHandler",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "parameters": {
                                                "onElement": {
                                                    "type": ["interface", {
                                                        "interface": {
                                                            "type": ["method", {
                                                                "type": {
                                                                    "type": "Empty",
                                                                },
                                                                "return type": ["interface", {
                                                                    "interface": {
                                                                        "type": ["reference", {
                                                                            "interface": "ValueHandler",
                                                                            "type arguments": {
                                                                                "TokenAnnotation": {},
                                                                                "NonTokenAnnotation": {},
                                                                            },
                                                                        }],
                                                                    },
                                                                }],
                                                            }],
                                                        },
                                                    }],
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            // "definition": {
                            //     "members": {
                            // },
                        },
                        "functions": {
                            "createDeserializer": {
                                "specification": {
                                    "declaration": {
                                        "interface": {
                                            "type": ["reference", {
                                                "interface": "RequiredValueHandler",
                                                "type arguments": {
                                                    "TokenAnnotation": {},
                                                    "NonTokenAnnotation": {},
                                                },
                                            }],
                                        },
                                        "parameters": {
                                            "context": {
                                                "type": ["builder", {
                                                    "builder": "ExpectContext",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                }],
                                            },
                                            "raiseValidationError": {
                                                "type": ["interface", {
                                                    "interface": {
                                                        "type": ["method", {
                                                            "type": {
                                                                "type": "ValidationError",
                                                            },
                                                        }],
                                                    },
                                                }],
                                            },
                                            "callback": {
                                                "type": ["interface", {
                                                    "interface": {
                                                        "type": ["method", {
                                                            "type": {
                                                                "type": schema["root type"].name,
                                                            },
                                                        }],
                                                    },
                                                }],
                                            },
                                        },
                                    },
                                    "block": {
                                        "nested functions": buildDictionary((add) => {
                                            add("wrap", {
                                                "specification": {
                                                    "declaration": {
                                                        "interface": {
                                                            "type": ["reference", {
                                                                "interface": "RequiredValueHandler",
                                                                "type arguments": {
                                                                    "TokenAnnotation": {},
                                                                    "NonTokenAnnotation": {},
                                                                },
                                                            }],
                                                        },
                                                        "parameters": {
                                                            "handler": {
                                                                "type": ["interface", {
                                                                    "interface": {
                                                                        "type": ["reference", {
                                                                            "interface": "ValueHandler",
                                                                            "type arguments": {
                                                                                "TokenAnnotation": {},
                                                                                "NonTokenAnnotation": {},
                                                                            },
                                                                        }],
                                                                    },
                                                                }],
                                                            },
                                                        },
                                                    },
                                                    "block": {
                                                        "return value": ["interface", {
                                                            "initializer": {
                                                                "type": ["group", {
                                                                    "strategy": ["inline", {
                                                                        "members": {
                                                                            "exists": {
                                                                                "initializer": {
                                                                                    "type": ["method", {

                                                                                        "strategy": ["argument", {
                                                                                            "argument": "handler",
                                                                                        }],
                                                                                    }],
                                                                                },
                                                                            },
                                                                            "missing": {
                                                                                "initializer": {
                                                                                    "type": ["method", {
                                                                                        "strategy": ["function implementation", {
                                                                                        }],
                                                                                    }],
                                                                                },
                                                                            },
                                                                        },
                                                                    }],
                                                                }],
                                                            },
                                                        }],
                                                    },
                                                },
                                            })
                                            schema["component types"].forEach((e2, k) => {
                                                const typeName = k
                                                function generateNodeDeserializer(
                                                    $: def.Node,
                                                    keyProperty: def.Property | null,
                                                ): t.__function_specification_B {
                                                    return {
                                                        "declaration": {
                                                            "parameters": {
                                                                "out": {
                                                                    "type": ["interface", {
                                                                        "interface": {
                                                                            "type": ["method", {
                                                                                "type": {
                                                                                    "type": "FIXME *name of type*",
                                                                                },
                                                                                "return type": ["interface", {
                                                                                    "interface": {
                                                                                        "type": ["reference", {
                                                                                            "interface": "ValueHandler",
                                                                                            "type arguments": {
                                                                                                "TokenAnnotation": {},
                                                                                                "NonTokenAnnotation": {},
                                                                                            },
                                                                                        }],
                                                                                    },
                                                                                }],
                                                                            }],
                                                                        },
                                                                    }],
                                                                },
                                                            },
                                                        },
                                                        "block": {
                                                            "states": buildDictionary((add) => {
                                                                $.properties.forEach(($, k) => {
                                                                    function generateInitializer(
                                                                        $: def.Node,
                                                                        keyProperty: def.Property | null,
                                                                    ): t.__type_initializer_B {
                                                                        return {
                                                                            "type": ["group", {
                                                                                "strategy": ["literal", {
                                                                                    "properties": buildDictionary((add) => {
                                                                                        $.properties.forEach(($, k) => {
                                                                                            if ($ === keyProperty) {
                                                                                                return
                                                                                            }
                                                                                            add(k, {
                                                                                                "initializer": {
                                                                                                    "type": ((): t.__type_type_initializer_TU_Builder => {
                                                                                                        switch ($.type[0]) {
                                                                                                            case "collection":
                                                                                                                return cc($.type[1], ($): t.__type_type_initializer_TU_Builder => {
                                                                                                                    switch ($.type[0]) {
                                                                                                                        case "dictionary":
                                                                                                                            return cc($.type[1], ($) => {
                                                                                                                                return ["dictionary", {
                                                                                                                                    "strategy": ["literal", {
                                                                                                                                    }],
                                                                                                                                }]
                                                                                                                            })
                                                                                                                        case "list":
                                                                                                                            return cc($.type[1], ($) => {
                                                                                                                                return ["list", {
                                                                                                                                    "strategy": ["literal", {
                                                                                                                                    }],
                                                                                                                                }]
                                                                                                                            })
                                                                                                                        default:
                                                                                                                            return assertUnreachable($.type[0])
                                                                                                                    }
                                                                                                                })
                                                                                                            case "component":
                                                                                                                return cc($.type[1], ($) => {
                                                                                                                    return ["string", {
                                                                                                                        "strategy": ["literal", {
                                                                                                                            "value": "FIXME COMP",
                                                                                                                        }],
                                                                                                                    }]
                                                                                                                })
                                                                                                            case "state group":
                                                                                                                return cc($.type[1], ($) => {
                                                                                                                    return ["tagged union", {
                                                                                                                        "strategy": ["literal", {
                                                                                                                            "option": $["default state"].name,
                                                                                                                            "data": generateInitializer(
                                                                                                                                $["default state"].get().node,
                                                                                                                                null,
                                                                                                                            ),
                                                                                                                        }],
                                                                                                                    }]
                                                                                                                })
                                                                                                            case "value":
                                                                                                                return cc($.type[1], ($) => {
                                                                                                                    return ["string", {
                                                                                                                        "strategy": ["literal", {
                                                                                                                            "value": $["default value"],
                                                                                                                        }],
                                                                                                                    }]
                                                                                                                })
                                                                                                            default:
                                                                                                                return assertUnreachable($.type[0])
                                                                                                        }

                                                                                                    })(),
                                                                                                },
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                }],
                                                                            }],
                                                                        }
                                                                    }
                                                                    if ($ === keyProperty) {
                                                                        return
                                                                    }
                                                                    add(k, {
                                                                        "type": ((): t.__type_states_TU_Builder => {
                                                                            switch ($.type[0]) {
                                                                                case "collection":
                                                                                    return cc($.type[1], ($) => {
                                                                                        switch ($.type[0]) {
                                                                                            case "dictionary":
                                                                                                return cc($.type[1], ($) => {
                                                                                                    return ["dictionary", {
                                                                                                        "type": {
                                                                                                            "nested type reference": {
                                                                                                                "type": {
                                                                                                                    "type": typeName,
                                                                                                                },
                                                                                                                "steps": [],
                                                                                                            },
                                                                                                            "dictionary": k,
                                                                                                        },
                                                                                                    }]
                                                                                                })
                                                                                            case "list":
                                                                                                return cc($.type[1], ($) => {
                                                                                                    return ["list", {
                                                                                                        "type": {
                                                                                                            "nested type reference": {
                                                                                                                "type": {
                                                                                                                    "type": typeName,
                                                                                                                },
                                                                                                                "steps": [],
                                                                                                            },
                                                                                                            "list": k,
                                                                                                        },
                                                                                                    }]
                                                                                                })
                                                                                            default:
                                                                                                return assertUnreachable($.type[0])
                                                                                        }
                                                                                    })
                                                                                case "component":
                                                                                    return cc($.type[1], ($) => {

                                                                                        return ["type5", {
                                                                                            "initializer": generateInitializer($.type.get().node, null),
                                                                                        }]
                                                                                    })
                                                                                case "state group":
                                                                                    return cc($.type[1], ($): t.__type_states_TU_Builder => {
                                                                                        return ["type5", {
                                                                                            "type": {
                                                                                                "type": k,
                                                                                            },
                                                                                            "initializer": {
                                                                                                "type": ["tagged union", {
                                                                                                    "strategy": ["literal", {
                                                                                                        "option": $["default state"].name,
                                                                                                        "data": generateInitializer(
                                                                                                            $["default state"].get().node,
                                                                                                            null,
                                                                                                        ),
                                                                                                        //"value": "FIXME SG",
                                                                                                    }],
                                                                                                }],
                                                                                            },
                                                                                        }]
                                                                                    })
                                                                                case "value":
                                                                                    return cc($.type[1], ($) => {
                                                                                        return ["string", {
                                                                                            "initial value": $["default value"],
                                                                                        }]
                                                                                    })
                                                                                default:
                                                                                    return assertUnreachable($.type[0])
                                                                            }
                                                                        })(),
                                                                    })
                                                                })
                                                            }),
                                                            "return value": ["interface", {
                                                                "initializer": {
                                                                    "type": ["reference", {
                                                                        "strategy": ["function call6", {
                                                                            "function call": {
                                                                                "type": ["external", {
                                                                                    "builder": "context",
                                                                                    "method": "expectVerboseGroup",
                                                                                }],
                                                                                "function call": {
                                                                                    "arguments": {
                                                                                        "properties": {

                                                                                            "type": ["dictionary", {
                                                                                                "entries": buildDictionary((add) => {
                                                                                                    $.properties.forEach((p, k) => {
                                                                                                        if (p === keyProperty) {
                                                                                                            return
                                                                                                        }
                                                                                                        add(k, {
                                                                                                            "initializer": {
                                                                                                                "type": ["group", {
                                                                                                                    "strategy": ["inline", {
                                                                                                                        "members": {
                                                                                                                            "onExists": {
                                                                                                                                "initializer": {
                                                                                                                                    "type": ["method", {
                                                                                                                                        "strategy": ["function implementation", {
                                                                                                                                            "block": {
                                                                                                                                                "return value": ["interface", {


                                                                                                                                                    "initializer": {
                                                                                                                                                        "type": ((): t.__type_interface_initializer_TU_Builder => {
                                                                                                                                                            switch (p.type[0]) {
                                                                                                                                                                case "collection":
                                                                                                                                                                    return cc(p.type[1], ($): t.__type_interface_initializer_TU_Builder => {
                                                                                                                                                                        switch ($.type[0]) {
                                                                                                                                                                            case "dictionary":
                                                                                                                                                                                return cc($.type[1], ($$): t.__type_interface_initializer_TU_Builder => {
                                                                                                                                                                                    return ["reference", {
                                                                                                                                                                                        "strategy": ["function call6", {
                                                                                                                                                                                            "function call": {
                                                                                                                                                                                                "type": ["local", {
                                                                                                                                                                                                    "function": "wrap",
                                                                                                                                                                                                }],
                                                                                                                                                                                                "function call": {
                                                                                                                                                                                                    "arguments": {
                                                                                                                                                                                                        "handler": {
                                                                                                                                                                                                            "type": ["interface initializer", {
                                                                                                                                                                                                                "initializer": {
                                                                                                                                                                                                                    "type": ["reference", {
                                                                                                                                                                                                                        "strategy": ["function call6", {
                                                                                                                                                                                                                            "function call": {
                                                                                                                                                                                                                                "type": ["external", {
                                                                                                                                                                                                                                    "builder": "context",
                                                                                                                                                                                                                                    "method": "expectDictionary",
                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                "function call": {
                                                                                                                                                                                                                                    "arguments": {
                                                                                                                                                                                                                                        "onProperty": {
                                                                                                                                                                                                                                            "type": ["interface initializer", {
                                                                                                                                                                                                                                                "initializer": {
                                                                                                                                                                                                                                                    "type": ["method", {
                                                                                                                                                                                                                                                        "strategy": ["function implementation", {
                                                                                                                                                                                                                                                            "block": {

                                                                                                                                                                                                                                                                "return value": ["interface", {
                                                                                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                                                                                        "type": ["reference", {
                                                                                                                                                                                                                                                                            "strategy": ["function call6", {
                                                                                                                                                                                                                                                                                "function call": {
                                                                                                                                                                                                                                                                                    "type": ["local", {
                                                                                                                                                                                                                                                                                        "function": "wrap",
                                                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                                                    "function call": {
                                                                                                                                                                                                                                                                                        "arguments": {
                                                                                                                                                                                                                                                                                            "handler": {
                                                                                                                                                                                                                                                                                                "type": ["interface initializer", {
                                                                                                                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                                                                                                                        "type": ["method", {
                                                                                                                                                                                                                                                                                                            "strategy": ["function implementation", {
                                                                                                                                                                                                                                                                                                                "block": {
                                                                                                                                                                                                                                                                                                                    "nested functions": {
                                                                                                                                                                                                                                                                                                                        "temp": {
                                                                                                                                                                                                                                                                                                                            "specification": generateNodeDeserializer($.node, $$["key property"].get()),
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                    "return value": ["interface", {
                                                                                                                                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                                                                                                                                            "type": ["reference", {
                                                                                                                                                                                                                                                                                                                                "strategy": ["function call6", {
                                                                                                                                                                                                                                                                                                                                    "function call": {
                                                                                                                                                                                                                                                                                                                                        "type": ["local", {
                                                                                                                                                                                                                                                                                                                                            "function": "temp",
                                                                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                                                                        "function call": {
                                                                                                                                                                                                                                                                                                                                            "arguments": {
                                                                                                                                                                                                                                                                                                                                                "out": {
                                                                                                                                                                                                                                                                                                                                                    "type": ["interface initializer", {
                                                                                                                                                                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                                                                                                                                                                            "type": ["method", {
                                                                                                                                                                                                                                                                                                                                                                "strategy": ["function implementation", {
                                                                                                                                                                                                                                                                                                                                                                    "block": {
                                                                                                                                                                                                                                                                                                                                                                        "effects": [
                                                                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                                                                "type": ["state change", {
                                                                                                                                                                                                                                                                                                                                                                                    "type": ["add entry", {
                                                                                                                                                                                                                                                                                                                                                                                        "state": k,
                                                                                                                                                                                                                                                                                                                                                                                        "key": "FIXME_KEY",
                                                                                                                                                                                                                                                                                                                                                                                        "context property": "FIXME_CONTEXT_PROP",
                                                                                                                                                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                },
                                                                                                                                                                                                            }],
                                                                                                                                                                                                        },
                                                                                                                                                                                                    },
                                                                                                                                                                                                },
                                                                                                                                                                                            },
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            case "list":
                                                                                                                                                                                return cc($.type[1], ($$) => {
                                                                                                                                                                                    return ["reference", {
                                                                                                                                                                                        "strategy": ["function call6", {
                                                                                                                                                                                            "function call": {
                                                                                                                                                                                                "type": ["local", {
                                                                                                                                                                                                    "function": "wrap",
                                                                                                                                                                                                }],
                                                                                                                                                                                                "arguments": {
                                                                                                                                                                                                    "handler": {
                                                                                                                                                                                                        "type": ["function call2", {
                                                                                                                                                                                                            "function call3": {
                                                                                                                                                                                                                "type": ["external", {
                                                                                                                                                                                                                    "builder": "context",
                                                                                                                                                                                                                    "method": "expectList",
                                                                                                                                                                                                                }],
                                                                                                                                                                                                                "arguments": {
                                                                                                                                                                                                                    "onElement": {
                                                                                                                                                                                                                        "strategy": ["function implementation", {
                                                                                                                                                                                                                            "block": generateNodeDeserializer($.node, null),
                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                },
                                                                                                                                                                                                            },
                                                                                                                                                                                                        }],
                                                                                                                                                                                                    },
                                                                                                                                                                                                },
                                                                                                                                                                                            },
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            default:
                                                                                                                                                                                return assertUnreachable($.type[0])
                                                                                                                                                                        }
                                                                                                                                                                    })
                                                                                                                                                                case "component":
                                                                                                                                                                    return cc(p.type[1], ($): t.__type_interface_initializer_TU_Builder => {
                                                                                                                                                                        return ["reference", {
                                                                                                                                                                            "strategy": ["function call6", {
                                                                                                                                                                                "function call": {
                                                                                                                                                                                    "type": ["external", {
                                                                                                                                                                                        "builder": "context",
                                                                                                                                                                                        "method": "expectFoo",
                                                                                                                                                                                    }],
                                                                                                                                                                                },
                                                                                                                                                                            }],
                                                                                                                                                                        }]
                                                                                                                                                                    })
                                                                                                                                                                case "state group":
                                                                                                                                                                    return cc(p.type[1], ($): t.__type_interface_initializer_TU_Builder => {
                                                                                                                                                                        return ["reference", {
                                                                                                                                                                            "strategy": ["function call6", {
                                                                                                                                                                                "function call": {
                                                                                                                                                                                    "type": ["external", {
                                                                                                                                                                                        "builder": "context",
                                                                                                                                                                                        "method": "expectTaggedUnion",
                                                                                                                                                                                    }],

                                                                                                                                                                                    "function call": {
                                                                                                                                                                                        "arguments": {
                                                                                                                                                                                            "options": {
                                                                                                                                                                                                "type": ["dictionary", {
                                                                                                                                                                                                    "entries": buildDictionary((add) => {
                                                                                                                                                                                                        $.states.forEach(($, k) => {
                                                                                                                                                                                                            add(k, {
                                                                                                                                                                                                                "initializer": {
                                                                                                                                                                                                                    "type": ["method", {
                                                                                                                                                                                                                        "strategy": ["function implementation", {
                                                                                                                                                                                                                            "block": {
                                                                                                                                                                                                                                "return value": ["interface", {
                                                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                                                        "type": ["reference", {
                                                                                                                                                                                                                                            "strategy": ["function call6", {
                                                                                                                                                                                                                                                "function call": {
                                                                                                                                                                                                                                                    "type": ["local", {
                                                                                                                                                                                                                                                        "function": "wrap",
                                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                                    "function call": {
                                                                                                                                                                                                                                                        "arguments": {
                                                                                                                                                                                                                                                            "handler": {
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                },
                                                                                                                                                                                                            })
                                                                                                                                                                                                        })
                                                                                                                                                                                                    }),
                                                                                                                                                                                                }],
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            }],
                                                                                                                                                                        }]
                                                                                                                                                                    })
                                                                                                                                                                case "value":
                                                                                                                                                                    return cc(p.type[1], ($): t.__type_interface_initializer_TU_Builder => {

                                                                                                                                                                        return ["reference", {
                                                                                                                                                                            "strategy": ["function call6", {
                                                                                                                                                                                "function call": {
                                                                                                                                                                                    "type": ["external", {
                                                                                                                                                                                        "builder": "context",
                                                                                                                                                                                        "method": "expectQuotedString",
                                                                                                                                                                                    }],
                                                                                                                                                                                    "function call": {
                                                                                                                                                                                        "arguments": {
                                                                                                                                                                                            "callback": {
                                                                                                                                                                                                "type": ["interface initializer", {
                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                        "type": ["method", {
                                                                                                                                                                                                            "strategy": ["function implementation", {
                                                                                                                                                                                                                "block": {
                                                                                                                                                                                                                    "effects": [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "type": ["state change", {
                                                                                                                                                                                                                                "type": ["set string", {
                                                                                                                                                                                                                                    "state": k,
                                                                                                                                                                                                                                    "context property": "token.data.value",
                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                },

                                                                                                                                                                                                            }],
                                                                                                                                                                                                        }],
                                                                                                                                                                                                    },

                                                                                                                                                                                                }],
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            }],
                                                                                                                                                                        }]
                                                                                                                                                                    })

                                                                                                                                                                default:
                                                                                                                                                                    return assertUnreachable(p.type[0])
                                                                                                                                                            }
                                                                                                                                                        })(),
                                                                                                                                                    },
                                                                                                                                                }],

                                                                                                                                            },

                                                                                                                                        }],
                                                                                                                                    }],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        },
                                                                                                                    }],
                                                                                                                }],
                                                                                                            },
                                                                                                        })
                                                                                                    })
                                                                                                }),
                                                                                            }],
                                                                                        },
                                                                                        "onEnd": {
                                                                                            "type": ["interface initializer", {
                                                                                                "initializer": {
                                                                                                    "type": ["method", {
                                                                                                        "strategy": ["function implementation", {
                                                                                                            "block": {
                                                                                                                "effects": [
                                                                                                                    {
                                                                                                                        "type": ["interface call", {
                                                                                                                            "interface": "out",
                                                                                                                            "initializer": {
                                                                                                                                "type": ["group", {
                                                                                                                                    "strategy": ["literal", {
                                                                                                                                        "properties": buildDictionary((add) => {
                                                                                                                                            $.properties.forEach(($, k) => {
                                                                                                                                                if ($ === keyProperty) {
                                                                                                                                                    return
                                                                                                                                                }
                                                                                                                                                add(k, {
                                                                                                                                                    "initializer": {
                                                                                                                                                        "type": ((): t.__type_type_initializer_TU_Builder => {
                                                                                                                                                            switch ($.type[0]) {
                                                                                                                                                                case "collection":
                                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                                        switch ($.type[0]) {
                                                                                                                                                                            case "dictionary":
                                                                                                                                                                                return cc($.type[1], ($) => {
                                                                                                                                                                                    return ["dictionary", {
                                                                                                                                                                                        "strategy": ["from state", {
                                                                                                                                                                                            "state": k,
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            case "list":
                                                                                                                                                                                return cc($.type[1], ($) => {
                                                                                                                                                                                    return ["list", {
                                                                                                                                                                                        "strategy": ["from state", {
                                                                                                                                                                                            "state": k,
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            default:
                                                                                                                                                                                return assertUnreachable($.type[0])
                                                                                                                                                                        }
                                                                                                                                                                    })
                                                                                                                                                                case "component":
                                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                                        return ["string", {
                                                                                                                                                                            "strategy": ["literal", {
                                                                                                                                                                                "value": "FIXME COMP",
                                                                                                                                                                            }],
                                                                                                                                                                        }]
                                                                                                                                                                    })
                                                                                                                                                                case "state group":
                                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                                        return ["tagged union", {
                                                                                                                                                                            "strategy": ["from state", {
                                                                                                                                                                                "state": k,
                                                                                                                                                                            }],
                                                                                                                                                                        }]
                                                                                                                                                                    })
                                                                                                                                                                case "value":
                                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                                        switch ($.type[0]) {
                                                                                                                                                                            case "boolean":
                                                                                                                                                                                return cc($.type[1], ($) => {
                                                                                                                                                                                    return ["boolean", {
                                                                                                                                                                                        "strategy": ["from state", {
                                                                                                                                                                                            "state": k,
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            case "number":
                                                                                                                                                                                return cc($.type[1], ($) => {
                                                                                                                                                                                    return ["number", {
                                                                                                                                                                                        "strategy": ["from state", {
                                                                                                                                                                                            "state": k,
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            case "string":
                                                                                                                                                                                return cc($.type[1], ($) => {
                                                                                                                                                                                    return ["string", {
                                                                                                                                                                                        "strategy": ["from state", {
                                                                                                                                                                                            "state": k,
                                                                                                                                                                                        }],
                                                                                                                                                                                    }]
                                                                                                                                                                                })
                                                                                                                                                                            default:
                                                                                                                                                                                return assertUnreachable($.type[0])
                                                                                                                                                                        }
                                                                                                                                                                    })
                                                                                                                                                                default:
                                                                                                                                                                    return assertUnreachable($.type[0])
                                                                                                                                                            }
                                                                                                                                                        })(),
                                                                                                                                                    },
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        }),
                                                                                                                                    }],
                                                                                                                                }],
                                                                                                                            },
                                                                                                                        }],
                                                                                                                    },
                                                                                                                ],

                                                                                                            },
                                                                                                        }],
                                                                                                    }],
                                                                                                },
                                                                                            }],
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        }],
                                                                    }],
                                                                },

                                                            }],

                                                        },
                                                    }
                                                }
                                                add(`${k}`, {
                                                    "specification": {
                                                        "declaration": {
                                                            "interface": {
                                                                "type": ["reference", {
                                                                    "interface": "ValueHandler",
                                                                    "type arguments": {
                                                                        "TokenAnnotation": {},
                                                                        "NonTokenAnnotation": {},
                                                                    },
                                                                }],
                                                            },
                                                            "parameters": {
                                                                "callback": {
                                                                    "type": ["interface", {
                                                                        "interface": {
                                                                            "type": ["method", {
                                                                                "type": {
                                                                                    "type": k,
                                                                                },
                                                                            }],
                                                                        },
                                                                    }],
                                                                },
                                                            },
                                                        },
                                                        "block": {
                                                            "nested functions": {
                                                                "temp": {
                                                                    "specification": generateNodeDeserializer(e2.node, null),
                                                                },
                                                            },
                                                        },
                                                    },
                                                })
                                            })
                                        }),
                                        "return value": ["interface", {
                                            "initializer": {
                                                "type": ["reference", {
                                                    "strategy": ["function call6", {
                                                        "function call": {
                                                            "type": ["local", {
                                                                "function": "wrap",
                                                            }],
                                                            "function call": {
                                                                "arguments": {
                                                                    "handler": {
                                                                        "type": ["interface initializer", {
                                                                            "initializer": {
                                                                                "type": ["reference", {
                                                                                    "strategy": ["function call6", {
                                                                                        "function call": {

                                                                                            "type": ["local", {
                                                                                                "function": `${schema["root type"].name}`,
                                                                                            }],
                                                                                            "function call": {
                                                                                                "arguments": {
                                                                                                    "callback": {
                                                                                                        "type": ["builder", {
                                                                                                            "argument": "callback",
                                                                                                        }],
                                                                                                    },
                                                                                                },

                                                                                            },
                                                                                        },
                                                                                    }],
                                                                                }],
                                                                            },
                                                                        }],
                                                                    },
                                                                },

                                                            },
                                                        },
                                                    }],
                                                }],
                                            },
                                        }],
                                    },
                                },
                            },
                        },
                    },
                },
                "build": {
                    "namespace": {
                        "functions": {
                            // "createBuilder": {
                            //     "function": {
                            //         "parameters": {
                            //         },
                            //     },
                            // },
                        },
                    },
                },
            },
        },
    })
}