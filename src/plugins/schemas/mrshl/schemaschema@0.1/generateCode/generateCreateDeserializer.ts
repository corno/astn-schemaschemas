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
        "declaration": "createDeserializer",
        "block": {
            "nested procedures": buildDictionary((add) => {
                add("wrap", {
                    "specification": {
                        "declaration": {
                            "return type": ["interface", {
                                "interface": {
                                    "type": ["reference", {
                                        "interface": "RequiredValueHandler",
                                        // "type arguments": {
                                        //     "TokenAnnotation": {},
                                        //     "NonTokenAnnotation": {},
                                        // },
                                    }],
                                },

                            }],
                            "parameters": {
                                "handler": {
                                    "type": ["interface", {
                                        "interface": {
                                            "type": ["reference", {
                                                "interface": "ValueHandler",
                                                // "type arguments": {
                                                //     "TokenAnnotation": {},
                                                //     "NonTokenAnnotation": {},
                                                // },
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
                    function generateNodeDeserializer(
                        $: def.Node,
                        keyProperty: def.Property | null,
                    ): t.__procedure_specification_B {
                        return {
                            "declaration": {
                                "return type": ["interface", {
                                    "interface": {
                                        "type": ["reference", {
                                            "interface": "ValueHandler",
                                            // "type arguments": {
                                            //     "TokenAnnotation": {},
                                            //     "NonTokenAnnotation": {},
                                            // },
                                        }],
                                    },
                                }],
                                "parameters": {
                                    "out": {
                                        "type": ["interface", {
                                            "interface": {
                                                "type": ["method", {
                                                    "type": {
                                                        // "namespace": ["other", {
                                                        //     "namespace": "core",
                                                        // }],
                                                        "type": "FIXME *name of type*",
                                                    },
                                                    "return type": ["void", {
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
                                                                                            "initializer": {
                                                                                                "strategy": ["literal", {
                                                                                                    "value": "FIXME COMP",
                                                                                                }],
                                                                                            },
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
                                                                                            "initializer": {
                                                                                                "strategy": ["literal", {
                                                                                                    "value": $["default value"],
                                                                                                }],
                                                                                            },
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
                                                                                        // "namespace": ["other", {
                                                                                        //     "namespace": "core",
                                                                                        // }],
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
                                                                                        // "namespace": ["other", {
                                                                                        //     "namespace": "core",
                                                                                        // }],
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
                                                                    "namespace": ["other", {
                                                                        //"namespace": "core",
                                                                    }],
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
                                                                                                                                                                                                                                                                                        "declaration": {

                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "block": {
                                                                                                                                                                                                                                                                                            "nested procedures": {
                                                                                                                                                                                                                                                                                                "temp": { //temp
                                                                                                                                                                                                                                                                                                    "specification": generateNodeDeserializer($.node, $$["key property"].get()),
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
                                                                                                                                                                                                                                                                                                                                                                        "type": ["type reference", {
                                                                                                                                                                                                                                                                                                                                                                            "strategy": ["from callback", {

                                                                                                                                                                                                                                                                                                                                                                            }],
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
                                                                                                                                                "initializer": {
                                                                                                                                                    "strategy": ["literal", {
                                                                                                                                                        "value": "FIXME COMP",
                                                                                                                                                    }],
                                                                                                                                                },
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
                                                                                                                                                            "initializer": {
                                                                                                                                                                "strategy": ["from state", {
                                                                                                                                                                    "state": k,
                                                                                                                                                                }],
                                                                                                                                                            },
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
                                "return type": ["interface", {
                                    "interface": {
                                        "type": ["reference", {
                                            "interface": "ValueHandler",
                                            // "type arguments": {
                                            //     "TokenAnnotation": {},
                                            //     "NonTokenAnnotation": {},
                                            // },
                                        }],
                                    },

                                }],
                                "parameters": {
                                    "callback": {
                                        "type": ["interface", {
                                            "interface": {
                                                "type": ["method", {
                                                    "type": {
                                                        "namespace": ["other", {
                                                            //"namespace": "core",
                                                        }],
                                                        "type": k,
                                                    },
                                                }],
                                            },
                                        }],
                                    },
                                },
                            },
                            "block": {
                                "nested procedures": {
                                    "temp": {
                                        "specification": generateNodeDeserializer(e2.node, null),
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
                                                                                                    "type": ["type reference", {
                                                                                                        "strategy": ["from callback", {
                                                                                                            "path": "",
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