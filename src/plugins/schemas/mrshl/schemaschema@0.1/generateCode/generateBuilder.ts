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

export function generateBuilder(
    schema: def.Schema,
): t.__function_implementations_B {
    return {
        "namespace": {
            "namespace": "build",
        },
        "declaration": "build",
        "block": {
            "functions": buildDictionary((add) => {
                schema["component types"].forEach(($, key) => {
                    function generateTypeBuilder(
                        $: def.Node,
                        keyProperty: null | def.Property,
                    ): t.__type_expression_B {
                        return {
                            "strategy": ["literal", {
                                "type": ["group", {
                                    "properties": buildDictionary((add) => {
                                        $.properties.forEach(($, key) => {
                                            if ($ === keyProperty) {
                                                return
                                            }
                                            add(key, {
                                                "expression": {
                                                    "strategy": ((): t.__strategy_type_expression_TU_Builder => {
                                                        switch ($.type[0]) {
                                                            case "collection":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["map", {
                                                                        "entry": generateTypeBuilder(
                                                                            $.node,
                                                                            ((): null | def.Property => {
                                                                                switch ($.type[0]) {
                                                                                    case "dictionary":
                                                                                        return cc($.type[1], ($) => {
                                                                                            return $["key property"].get()
                                                                                        })
                                                                                    case "list":
                                                                                        return cc($.type[1], ($) => {
                                                                                            return null
                                                                                        })
                                                                                    default:
                                                                                        return assertUnreachable($.type[0])
                                                                                }
                                                                            })()
                                                                        ),
                                                                    }]
                                                                })
                                                            case "component":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["copy", {
                                                                        "context": {
                                                                            "start": {
                                                                                "start": ["function", {
                                                                                    "context": ["local function", {
                                                                                        "function": `build_${$.type.name}`,
                                                                                    }],
                                                                                }],
                                                                            },
                                                                        },
                                                                    }]
                                                                })
                                                            case "state group":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["switch", {
                                                                        "context": {
                                                                            // "strategy": ["from context", {
                                                                            // }],
                                                                            "missing handler": {
                                                                                "guaranteed": ["no", {
                                                                                    "on missing": {
                                                                                        "strategy": ["literal", {
                                                                                            "type": ["tagged union", {
                                                                                                "option": $["default state"].name,
                                                                                                "data": generateTypeBuilder(
                                                                                                    $["default state"].get().node,
                                                                                                    null,
                                                                                                ),
                                                                                            }],
                                                                                        }],
                                                                                    },
                                                                                }],
                                                                            },
                                                                        },
                                                                        "options": buildDictionary((add) => {
                                                                            $.states.forEach(($, k) => {
                                                                                add(k, {
                                                                                    "expression": {
                                                                                        "strategy": ["literal", {
                                                                                            "type": ["tagged union", {
                                                                                                "option": k,
                                                                                                "data": {
                                                                                                    //"strategy":
                                                                                                },
                                                                                            }],
                                                                                        }],
                                                                                    },
                                                                                })
                                                                            })
                                                                        }),
                                                                    }]
                                                                    // return ["literal", {
                                                                    //     "type": ["tagged union", {
                                                                    //         "option": $["default state"].name,
                                                                    //         "data": generateTypeBuilder(
                                                                    //             $["default state"].get().node,
                                                                    //             null,
                                                                    //         ),
                                                                    //     }],
                                                                    // }]
                                                                })
                                                            case "value":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["copy", {
                                                                        "context": {
                                                                            "start": {
                                                                                "start": ["context", {
                                                                                }],
                                                                            },
                                                                            "steps": [{ "property": key }],
                                                                        },
                                                                        // "guaranteed": ["no", {
                                                                        //     "on missing": {
                                                                        //         "strategy": ["literal", {
                                                                        //             "type": ((): t.__type_literal_TU_Builder => {
                                                                        //                 const x = $["default value"]
                                                                        //                 switch ($.type[0]) {
                                                                        //                     case "boolean":
                                                                        //                         return cc($.type[1], ($): t.__type_literal_TU_Builder => {
                                                                        //                             return ["boolean", {
                                                                        //                                 "value": x,
                                                                        //                             }]
                                                                        //                         })
                                                                        //                     case "number":
                                                                        //                         return cc($.type[1], ($) => {
                                                                        //                             return ["number", {
                                                                        //                                 "value": x,
                                                                        //                             }]
                                                                        //                         })
                                                                        //                     case "string":
                                                                        //                         return cc($.type[1], ($) => {
                                                                        //                             return ["string", {
                                                                        //                                 "value": x,
                                                                        //                             }]
                                                                        //                         })
                                                                        //                     default:
                                                                        //                         return assertUnreachable($.type[0])
                                                                        //                 }
                                                                        //             })(),
                                                                        //         }],
                                                                        //     },
                                                                        // }],
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
                    function generateDefaultTypeBuilder(
                        $: def.Node,
                        keyProperty: null | def.Property,
                    ): t.__type_expression_B {
                        return {
                            "strategy": ["literal", {
                                "type": ["group", {
                                    "properties": buildDictionary((add) => {
                                        $.properties.forEach(($, key) => {
                                            if ($ === keyProperty) {
                                                return
                                            }
                                            add(key, {
                                                "expression": {
                                                    "strategy": ((): t.__strategy_type_expression_TU_Builder => {
                                                        switch ($.type[0]) {
                                                            case "collection":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    switch ($.type[0]) {
                                                                        case "dictionary":
                                                                            return cc($.type[1], ($) => {
                                                                                return ["literal", {
                                                                                    "type": ["dictionary", {}],
                                                                                }]
                                                                            })
                                                                        case "list":
                                                                            return cc($.type[1], ($) => {
                                                                                return ["literal", {
                                                                                    "type": ["list", {}],
                                                                                }]
                                                                            })
                                                                        default:
                                                                            return assertUnreachable($.type[0])
                                                                    }
                                                                })
                                                            case "component":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["copy", {
                                                                        "context": {
                                                                            "start": {
                                                                                "start": ["function", {
                                                                                    "context": ["local function", {
                                                                                        "function": `defaultBuild_${$.type.name}`,
                                                                                    }],
                                                                                }],
                                                                            },
                                                                        },
                                                                    }]
                                                                })
                                                            case "state group":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["literal", {
                                                                        "type": ["tagged union", {
                                                                            "option": $["default state"].name,
                                                                            "data": generateTypeBuilder(
                                                                                $["default state"].get().node,
                                                                                null,
                                                                            ),
                                                                        }],
                                                                    }]
                                                                })
                                                            case "value":
                                                                return cc($.type[1], ($): t.__strategy_type_expression_TU_Builder => {
                                                                    return ["literal", {
                                                                        "type": ((): t.__type_literal_TU_Builder => {
                                                                            const x = $["default value"]
                                                                            switch ($.type[0]) {
                                                                                case "boolean":
                                                                                    return cc($.type[1], ($): t.__type_literal_TU_Builder => {
                                                                                        return ["boolean", {
                                                                                            "value": x,
                                                                                        }]
                                                                                    })
                                                                                case "number":
                                                                                    return cc($.type[1], ($) => {
                                                                                        return ["number", {
                                                                                            "value": x,
                                                                                        }]
                                                                                    })
                                                                                case "string":
                                                                                    return cc($.type[1], ($) => {
                                                                                        return ["string", {
                                                                                            "value": x,
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
                    add(`build_${key}`, {
                        "declaration": {
                            "in": {
                                "type": key,
                            },
                            "out": {
                                "type": key,
                            },
                        },
                        "block": {
                            "expression": generateTypeBuilder(
                                $.node,
                                null,
                            ),
                        },
                    })
                    add(`buildDefault_${key}`, {
                        "declaration": {
                            "in": {
                                "namespace": {
                                    "namespace": ["other", {
                                        "namespace": {
                                            "namespace": "lang",
                                        },
                                    }],
                                },
                                "type": "nothing",
                            },
                            "out": {
                                "type": key,
                            },
                        },
                        "block": {
                            "expression": generateDefaultTypeBuilder(
                                $.node,
                                null,
                            ),
                        },
                    })
                })
            }),
            "expression": {
                "strategy": ["copy", {
                    "context": {
                        "start": {
                            "start": ["function", {
                                "context": ["local function", {
                                    "function": `build_${schema["root type"].name}`,
                                }],
                                "argument": {
                                    "strategy": ["copy", {

                                    }],
                                },
                            }],
                        },
                    },
                }],
            },
        },
    }
}