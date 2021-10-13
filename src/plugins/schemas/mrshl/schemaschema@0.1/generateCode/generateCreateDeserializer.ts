/* eslint
    "camelcase": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
*/
import * as def from "../types"
import * as t from "../../../../../lowlevel/generated/lowlevel"

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

export function generateCreateDeserializer(
    schema: def.Schema,
): t.__procedure_implementations_B {
    return {
        "type parameters": {
            "TokenAnnotation": {},
            "NonTokenAnnotation": {},
        },
        "namespace": {
            "namespace": "deserialize",
            "type arguments": {
                "TokenAnnotation": {},
                "NonTokenAnnotation": {},
            },
        },
        "declaration": "createDeserializer",
        "block": {
            "variables": {
                "x": {
                    "path": "$p",
                },
            },
            "nested procedures": buildDictionary((add) => {
                add("wrap", {
                    "specification": {
                        "return type": ["interface", {
                            "interface": {
                                "type": ["reference", {
                                    "namespace": {
                                        "namespace": ["other", {
                                            "namespace": {
                                                "namespace": "deserialize api",
                                                "type arguments": {
                                                    "TokenAnnotation": {},
                                                    "NonTokenAnnotation": {},
                                                },
                                            },
                                        }],
                                    },
                                    "interface": "RequiredValueHandler",
                                }],
                            },

                        }],
                        "parameters": {
                            "handler": {
                                "type": ["reference", {
                                    "namespace": {
                                        "namespace": ["other", {
                                            "namespace": {
                                                "namespace": "deserialize api",
                                                "type arguments": {
                                                    "TokenAnnotation": {},
                                                    "NonTokenAnnotation": {},
                                                },
                                            },
                                        }],
                                    },
                                    "interface": "ValueHandler",
                                }],
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
                                                            "strategy": ["procedure implementation", {
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
                    type Step = {
                        "type":
                        | ["group", {
                            "property": string
                        }]
                        | ["dictionary", {
                        }]
                        | ["list", {
                        }]
                        | ["tagged union option", {
                            "option": string
                        }]
                    }
                    function generateSteps(
                        $: Step[],
                    ): t.__steps_B[] {
                        return $.map(($): t.__steps_B => {
                            return {
                                "type": ((): t.__type_steps_TU_Builder => {
                                    switch ($.type[0]) {
                                        case "dictionary":
                                            return cc($.type[1], ($): t.__type_steps_TU_Builder => {
                                                return ["dictionary", {}]
                                            })
                                        case "group":
                                            return cc($.type[1], ($) => {
                                                return ["group", {
                                                    "property": $.property,
                                                }]
                                            })
                                        case "list":
                                            return cc($.type[1], ($) => {
                                                return ["list", {}]
                                            })
                                        case "tagged union option":
                                            return cc($.type[1], ($) => {
                                                return ["tagged union option", {
                                                    "option": $.option,
                                                }]
                                            })
                                        default:
                                            return assertUnreachable($.type[0])
                                    }
                                })(),
                            }
                        })
                    }
                    function generateNodeDeserializer(
                        $: def.Node,
                        keyProperty: def.Property | null,
                        typePath: Step[],
                    ): t.__internal_procedure_specification_B {
                        return {
                            "return type": ["interface", {
                                "interface": {
                                    "type": ["reference", {

                                        "namespace": {
                                            "namespace": ["other", {
                                                "namespace": {
                                                    "namespace": "deserialize api",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },
                                                },
                                            }],
                                        },
                                        "interface": "ValueHandler",
                                    }],
                                },
                            }],
                            "parameters": {
                                "out": {
                                    "type": ["method", {
                                        "type": {
                                            "namespace": {
                                                "namespace": "core",
                                            },
                                            "type": k,
                                            "steps": generateSteps(typePath),
                                        },
                                        "return type": ["void", {
                                        }],
                                    }],
                                },
                            },
                            "block": {
                                "states": buildDictionary((add) => {
                                    $.properties.forEach(($, k) => {
                                        const newPath = typePath.concat([{ "type": ["group", { "property": k }] }])
                                        function generateInitializer(
                                            $: def.Node,
                                            keyProperty: def.Property | null,
                                        ): t.__type_initializer_B {
                                            return {
                                                "strategy": ["literal", {
                                                    "type": ["group", {
                                                        "properties": buildDictionary((add) => {
                                                            $.properties.forEach(($, k) => {
                                                                if ($ === keyProperty) {
                                                                    return
                                                                }
                                                                add(k, {
                                                                    "initializer": {
                                                                        "strategy": ((): t.__strategy_type_initializer_TU_Builder => {
                                                                            switch ($.type[0]) {
                                                                                case "collection":
                                                                                    return cc($.type[1], ($): t.__strategy_type_initializer_TU_Builder => {
                                                                                        switch ($.type[0]) {
                                                                                            case "dictionary":
                                                                                                return cc($.type[1], ($) => {
                                                                                                    return ["literal", {
                                                                                                        "type": ["dictionary", {
                                                                                                        }],
                                                                                                    }]
                                                                                                })
                                                                                            case "list":
                                                                                                return cc($.type[1], ($) => {
                                                                                                    return ["literal", {
                                                                                                        "type": ["list", {
                                                                                                        }],
                                                                                                    }]
                                                                                                })
                                                                                            default:
                                                                                                return assertUnreachable($.type[0])
                                                                                        }
                                                                                    })
                                                                                case "component":
                                                                                    return cc($.type[1], ($) => {
                                                                                        return ["literal", {
                                                                                            "type": ["string", {
                                                                                                "value": "FIXME COMP",
                                                                                            }],
                                                                                        }]
                                                                                    })
                                                                                case "state group":
                                                                                    return cc($.type[1], ($) => {
                                                                                        return ["literal", {
                                                                                            "type": ["tagged union", {
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
                                                                                        const $$ = $
                                                                                        return ["literal", {
                                                                                            "type": ((): t.__type_literal_TU_Builder => {
                                                                                                switch ($.type[0]) {
                                                                                                    case "boolean":
                                                                                                        return cc($.type[1], ($) => {
                                                                                                            return ["boolean", {
                                                                                                                "value": $$["default value"],
                                                                                                            }]
                                                                                                        })
                                                                                                    case "number":
                                                                                                        return cc($.type[1], ($) => {
                                                                                                            return ["number", {
                                                                                                                "value": $$["default value"],
                                                                                                            }]
                                                                                                        })
                                                                                                    case "string":
                                                                                                        return cc($.type[1], ($) => {
                                                                                                            return ["string", {
                                                                                                                "value": $$["default value"],
                                                                                                            }]
                                                                                                        })
                                                                                                    default:
                                                                                                        return assertUnreachable($.type[0])
                                                                                                }
                                                                                            })(),
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
                                                                    return cc($.type[1], ($): t.__type_states_TU_Builder => {
                                                                        return ["dictionary", {
                                                                            "type": {
                                                                                "namespace": {
                                                                                    "namespace": "core",
                                                                                },
                                                                                "type": typeName,
                                                                                "steps": generateSteps(newPath),
                                                                            },
                                                                        }]
                                                                    })
                                                                case "list":
                                                                    return cc($.type[1], ($) => {
                                                                        return ["list", {
                                                                            "type": {
                                                                                "namespace": {
                                                                                    "namespace": "core",
                                                                                },
                                                                                "type": typeName,
                                                                                "steps": generateSteps(newPath),
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
                                                                "nested type": {
                                                                    "namespace": {
                                                                        "namespace": "core",
                                                                    },
                                                                    "type": typeName,
                                                                    "steps": generateSteps(newPath),
                                                                },

                                                                // "type": k,
                                                                "initializer": {
                                                                    "strategy": ["literal", {
                                                                        "type": ["tagged union", {
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
                                            "strategy": ["procedure call6", {
                                                "procedure call": {
                                                    "type": ["variable", {
                                                        "variable": "x",
                                                        "path": ".context.expectVerboseGroup",
                                                    }],
                                                    "procedure call": {
                                                        "arguments": {
                                                            "properties": {
                                                                "type": ["dictionary", {
                                                                    "entries": buildDictionary((add) => {
                                                                        $.properties.forEach((p, k) => {
                                                                            if (p === keyProperty) {
                                                                                return
                                                                            }
                                                                            const newPath = typePath.concat([{ "type": ["group", { "property": k }] }])
                                                                            add(k, {
                                                                                "initializer": {
                                                                                    "type": ["group", {
                                                                                        "strategy": ["inline", {
                                                                                            "members": {
                                                                                                "onExists": {
                                                                                                    "initializer": {
                                                                                                        "type": ["method", {
                                                                                                            "strategy": ["procedure implementation", {
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
                                                                                                                                                            "strategy": ["procedure call6", {
                                                                                                                                                                "procedure call": {
                                                                                                                                                                    "type": ["local", {
                                                                                                                                                                        "procedure": "wrap",
                                                                                                                                                                    }],
                                                                                                                                                                    "procedure call": {
                                                                                                                                                                        "arguments": {
                                                                                                                                                                            "handler": {
                                                                                                                                                                                "type": ["interface initializer", {
                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                        "type": ["reference", {
                                                                                                                                                                                            "strategy": ["procedure call6", {
                                                                                                                                                                                                "procedure call": {
                                                                                                                                                                                                    "type": ["variable", {
                                                                                                                                                                                                        "variable": "x",
                                                                                                                                                                                                        "path": ".context.expectDictionary",
                                                                                                                                                                                                    }],
                                                                                                                                                                                                    "procedure call": {
                                                                                                                                                                                                        "arguments": {
                                                                                                                                                                                                            "onProperty": {
                                                                                                                                                                                                                "type": ["interface initializer", {
                                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                                        "type": ["method", {
                                                                                                                                                                                                                            "strategy": ["procedure implementation", {
                                                                                                                                                                                                                                "block": {
                                                                                                                                                                                                                                    "variables": {
                                                                                                                                                                                                                                        "y": {
                                                                                                                                                                                                                                            "path": "$cb",
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "return value": ["interface", {
                                                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                                                            "type": ["reference", {
                                                                                                                                                                                                                                                "strategy": ["procedure call6", {
                                                                                                                                                                                                                                                    "procedure call": {
                                                                                                                                                                                                                                                        "type": ["local", {
                                                                                                                                                                                                                                                            "procedure": "wrap", //wrap
                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                        "procedure call": {
                                                                                                                                                                                                                                                            "arguments": {
                                                                                                                                                                                                                                                                "handler": { //handler
                                                                                                                                                                                                                                                                    "type": ["interface initializer", {
                                                                                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                                                                                            "type": ["method", {
                                                                                                                                                                                                                                                                                "strategy": ["inline procedure", {

                                                                                                                                                                                                                                                                                    "specification": {
                                                                                                                                                                                                                                                                                        "return type": ["interface", {
                                                                                                                                                                                                                                                                                            "interface": {
                                                                                                                                                                                                                                                                                                "type": ["reference", {
                                                                                                                                                                                                                                                                                                    "namespace": {
                                                                                                                                                                                                                                                                                                        "namespace": ["other", {
                                                                                                                                                                                                                                                                                                            "namespace": {
                                                                                                                                                                                                                                                                                                                "namespace": "deserialize api",
                                                                                                                                                                                                                                                                                                                "type arguments": {
                                                                                                                                                                                                                                                                                                                    "TokenAnnotation": {},
                                                                                                                                                                                                                                                                                                                    "NonTokenAnnotation": {},
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    "interface": "ValueHandler",
                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                        "block": {
                                                                                                                                                                                                                                                                                            "nested procedures": {
                                                                                                                                                                                                                                                                                                "temp": { //temp
                                                                                                                                                                                                                                                                                                    "specification": generateNodeDeserializer(
                                                                                                                                                                                                                                                                                                        $.node,
                                                                                                                                                                                                                                                                                                        $$["key property"].get(),
                                                                                                                                                                                                                                                                                                        newPath.concat([
                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                "type": ["dictionary", {}],
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                        ]),
                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "return value": ["interface", {
                                                                                                                                                                                                                                                                                                "initializer": {
                                                                                                                                                                                                                                                                                                    "type": ["reference", {
                                                                                                                                                                                                                                                                                                        "strategy": ["procedure call6", {
                                                                                                                                                                                                                                                                                                            "procedure call": {
                                                                                                                                                                                                                                                                                                                "type": ["local", {
                                                                                                                                                                                                                                                                                                                    "procedure": "temp",
                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                "procedure call": {
                                                                                                                                                                                                                                                                                                                    "arguments": {
                                                                                                                                                                                                                                                                                                                        "out": {
                                                                                                                                                                                                                                                                                                                            "type": ["interface initializer", {
                                                                                                                                                                                                                                                                                                                                "initializer": {
                                                                                                                                                                                                                                                                                                                                    "type": ["method", {
                                                                                                                                                                                                                                                                                                                                        "strategy": ["procedure implementation", {
                                                                                                                                                                                                                                                                                                                                            "block": {
                                                                                                                                                                                                                                                                                                                                                "effects": [
                                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                                        "type": ["state change", {
                                                                                                                                                                                                                                                                                                                                                            "state": k,
                                                                                                                                                                                                                                                                                                                                                            "type": ["dictionary", {
                                                                                                                                                                                                                                                                                                                                                                "strategy": ["add entry", {
                                                                                                                                                                                                                                                                                                                                                                    "key": {
                                                                                                                                                                                                                                                                                                                                                                        "strategy": ["from variable", {
                                                                                                                                                                                                                                                                                                                                                                            "variable": "y",
                                                                                                                                                                                                                                                                                                                                                                            "path": ".token.data.value",
                                                                                                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                                                                                                                                                                                                        "strategy": ["from callback", {

                                                                                                                                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                }],
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
                                                                                                                                                            "strategy": ["procedure call6", {
                                                                                                                                                                "procedure call": {
                                                                                                                                                                    "type": ["local", {
                                                                                                                                                                        "procedure": "wrap",
                                                                                                                                                                    }],
                                                                                                                                                                    "arguments": {
                                                                                                                                                                        "handler": {
                                                                                                                                                                            "type": ["procedure call2", {
                                                                                                                                                                                "procedure call3": {
                                                                                                                                                                                    "type": ["external", {
                                                                                                                                                                                        "builder": "context",
                                                                                                                                                                                        "method": "expectList",
                                                                                                                                                                                    }],
                                                                                                                                                                                    "arguments": {
                                                                                                                                                                                        "onElement": {
                                                                                                                                                                                            "strategy": ["procedure implementation", {
                                                                                                                                                                                                "block": generateNodeDeserializer(
                                                                                                                                                                                                    $.node,
                                                                                                                                                                                                    null,
                                                                                                                                                                                                    newPath.concat([
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "type": ["list", {}],
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ]),
                                                                                                                                                                                                ),
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
                                                                                                                                                "strategy": ["procedure call6", {
                                                                                                                                                    "procedure call": {
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
                                                                                                                                                "strategy": ["procedure call6", {
                                                                                                                                                    "procedure call": {
                                                                                                                                                        "type": ["variable", {
                                                                                                                                                            "variable": "x",
                                                                                                                                                            "path": ".context.expectTaggedUnion",
                                                                                                                                                        }],
                                                                                                                                                        "procedure call": {
                                                                                                                                                            "arguments": {
                                                                                                                                                                "options": {
                                                                                                                                                                    "type": ["dictionary", {
                                                                                                                                                                        "entries": buildDictionary((add) => {
                                                                                                                                                                            $.states.forEach(($, k) => {
                                                                                                                                                                                add(k, {
                                                                                                                                                                                    "initializer": {
                                                                                                                                                                                        "type": ["method", {
                                                                                                                                                                                            "strategy": ["procedure implementation", {
                                                                                                                                                                                                "block": {
                                                                                                                                                                                                    "return value": ["interface", {
                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                            "type": ["reference", {
                                                                                                                                                                                                                "strategy": ["procedure call6", {
                                                                                                                                                                                                                    "procedure call": {
                                                                                                                                                                                                                        "type": ["local", {
                                                                                                                                                                                                                            "procedure": "wrap",
                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                        "procedure call": {
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
                                                                                                                                                "strategy": ["procedure call6", {
                                                                                                                                                    "procedure call": {
                                                                                                                                                        "type": ["variable", {
                                                                                                                                                            "variable": "x",
                                                                                                                                                            "path": ".context.expectQuotedString",
                                                                                                                                                        }],
                                                                                                                                                        "procedure call": {
                                                                                                                                                            "arguments": {
                                                                                                                                                                "callback": {
                                                                                                                                                                    "type": ["interface initializer", {
                                                                                                                                                                        "initializer": {
                                                                                                                                                                            "type": ["method", {
                                                                                                                                                                                "strategy": ["procedure implementation", {
                                                                                                                                                                                    "block": {
                                                                                                                                                                                        "effects": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": ["state change", {
                                                                                                                                                                                                    "state": k,
                                                                                                                                                                                                    "type": ["string", {
                                                                                                                                                                                                        "initializer": {
                                                                                                                                                                                                            "strategy": ["from callback", {
                                                                                                                                                                                                                "path": ".token.data.value",

                                                                                                                                                                                                            }],
                                                                                                                                                                                                        },
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
                                                                            "strategy": ["procedure implementation", {
                                                                                "block": {
                                                                                    "effects": [
                                                                                        {
                                                                                            "type": ["interface call", {
                                                                                                "interface": "out",
                                                                                                "initializer": {
                                                                                                    "strategy": ["literal", {
                                                                                                        "type": ["group", {
                                                                                                            "properties": buildDictionary((add) => {
                                                                                                                $.properties.forEach(($, k) => {
                                                                                                                    if ($ === keyProperty) {
                                                                                                                        return
                                                                                                                    }
                                                                                                                    add(k, {
                                                                                                                        "initializer": {
                                                                                                                            "strategy": ((): t.__strategy_type_initializer_TU_Builder => {
                                                                                                                                switch ($.type[0]) {
                                                                                                                                    case "collection":
                                                                                                                                        return cc($.type[1], ($) => {
                                                                                                                                            switch ($.type[0]) {
                                                                                                                                                case "dictionary":
                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                        return ["from state", {
                                                                                                                                                            "type": ["dictionary", {}],
                                                                                                                                                            "state": k,

                                                                                                                                                        }]
                                                                                                                                                    })
                                                                                                                                                case "list":
                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                        return ["from state", {
                                                                                                                                                            "state": k,
                                                                                                                                                            "type": ["list", {}],
                                                                                                                                                        }]
                                                                                                                                                    })
                                                                                                                                                default:
                                                                                                                                                    return assertUnreachable($.type[0])
                                                                                                                                            }
                                                                                                                                        })
                                                                                                                                    case "component":
                                                                                                                                        return cc($.type[1], ($) => {
                                                                                                                                            return ["from state", {
                                                                                                                                                "state": k,

                                                                                                                                            }]
                                                                                                                                        })
                                                                                                                                    case "state group":
                                                                                                                                        return cc($.type[1], ($) => {
                                                                                                                                            return ["from state", {
                                                                                                                                                "state": k,
                                                                                                                                                //"type": ["tagged union", {}],//FIXME
                                                                                                                                            }]
                                                                                                                                        })
                                                                                                                                    case "value":
                                                                                                                                        return cc($.type[1], ($) => {
                                                                                                                                            switch ($.type[0]) {
                                                                                                                                                case "boolean":
                                                                                                                                                    return cc($.type[1], ($): t.__strategy_type_initializer_TU_Builder => {
                                                                                                                                                        return ["from function", {
                                                                                                                                                            "context": ["variable", {
                                                                                                                                                                "variable": "x",
                                                                                                                                                            }],
                                                                                                                                                            "function": "stringToBoolean",
                                                                                                                                                            "argument": {
                                                                                                                                                                "strategy": ["from state", {
                                                                                                                                                                    "state": k,
                                                                                                                                                                    "type": ["boolean", {}],

                                                                                                                                                                }],
                                                                                                                                                            },
                                                                                                                                                        }]
                                                                                                                                                    })
                                                                                                                                                case "number":
                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                        return ["from function", {
                                                                                                                                                            "context": ["variable", {
                                                                                                                                                                "variable": "x",
                                                                                                                                                            }],
                                                                                                                                                            "function": "stringToNumber",
                                                                                                                                                            "argument": {
                                                                                                                                                                "strategy": ["from state", {
                                                                                                                                                                    "state": k,
                                                                                                                                                                    "type": ["boolean", {}],

                                                                                                                                                                }],
                                                                                                                                                            },
                                                                                                                                                        }]
                                                                                                                                                    })
                                                                                                                                                case "string":
                                                                                                                                                    return cc($.type[1], ($) => {
                                                                                                                                                        return ["from state", {
                                                                                                                                                            "state": k,
                                                                                                                                                            "type": ["string", {}],
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
                            "return type": ["interface", {
                                "interface": {
                                    "type": ["reference", {
                                        "namespace": {
                                            "namespace": ["other", {
                                                "namespace": {
                                                    "namespace": "deserialize api",
                                                    "type arguments": {
                                                        "TokenAnnotation": {},
                                                        "NonTokenAnnotation": {},
                                                    },

                                                },

                                            }],
                                        },
                                        "interface": "ValueHandler",
                                    }],
                                },

                            }],
                            "parameters": {
                                "callback": {
                                    "type": ["method", {
                                        "type": {
                                            "namespace": {
                                                "namespace": "core",
                                            },
                                            "type": k,
                                        },
                                    }],
                                },
                            },
                            "block": {
                                "nested procedures": {
                                    "temp": {
                                        "specification": generateNodeDeserializer(
                                            e2.node,
                                            null,
                                            [],
                                        ),
                                    },
                                },
                                "return value": ["interface", {
                                    "initializer": {
                                        "type": ["reference", {
                                            "strategy": ["procedure call6", {
                                                "procedure call": {
                                                    "type": ["local", {
                                                        "procedure": "temp",
                                                    }],
                                                    "procedure call": {
                                                        "arguments": {
                                                            "out": {
                                                                "type": ["interface initializer", {
                                                                    "initializer": {
                                                                        "type": ["method", {
                                                                            "strategy": ["procedure implementation", {
                                                                                "block": {
                                                                                    "effects": [
                                                                                        {
                                                                                            "type": ["interface call", {
                                                                                                "interface": "callback",
                                                                                                "initializer": {
                                                                                                    "strategy": ["from callback", {
                                                                                                        "path": "",
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
                        },
                    })
                })
            }),
            "return value": ["interface", {
                "initializer": {
                    "type": ["reference", {
                        "strategy": ["procedure call6", {
                            "procedure call": {
                                "type": ["local", {
                                    "procedure": "wrap",
                                }],
                                "procedure call": {
                                    "arguments": {
                                        "handler": {
                                            "type": ["interface initializer", {
                                                "initializer": {
                                                    "type": ["reference", {
                                                        "strategy": ["procedure call6", {
                                                            "procedure call": {
                                                                "type": ["local", {
                                                                    "procedure": `${schema["root type"].name}`,
                                                                }],
                                                                "procedure call": {
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
    }
}