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

export function generateDeserializeNamespace(
    schema: def.Schema,
): t.__namespaces_B {
    return {
        "type parameters": {
            "TokenAnnotation": {},
            "NonTokenAnnotation": {},
        },
        "procedure declarations": {
            "createDeserializer": {
                "context": {
                    "namespace": {
                        "namespace": ["other", {
                            "namespace": {
                                "namespace": "lang",
                            },
                        }],
                    },
                    "type": "nothing",
                },
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
                "functions": {
                    "stringToBoolean": {
                        "declaration": {

                            "in": {
                                "namespace": {
                                    "namespace": ["other", {
                                        "namespace": {
                                            "namespace": "lang",
                                        },
                                    }],
                                },
                                "type": "string",
                            },
                            "out": {
                                "namespace": {
                                    "namespace": ["other", {
                                        "namespace": {
                                            "namespace": "lang",
                                        },
                                    }],
                                },
                                "type": "boolean",
                            },
                        },
                    },
                    "stringToNumber": {
                        "declaration": {
                            "in": {
                                "namespace": {
                                    "namespace": ["other", {
                                        "namespace": {
                                            "namespace": "lang",
                                        },
                                    }],
                                },
                                "type": "string",
                            },
                            "out": {
                                "namespace": {
                                    "namespace": ["other", {
                                        "namespace": {
                                            "namespace": "lang",
                                        },
                                    }],
                                },
                                "type": "number",
                            },
                        },
                    },

                },
                "interfaces": {
                    "raiseValidationError": {
                        "interface": {
                            "type": ["method", {
                                "type": {
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
                                    "type": "ValidationError",
                                },
                            }],
                        },
                    },
                    "callback": {
                        "interface": {
                            "type": ["method", {
                                "type": {
                                    "namespace": {
                                        "namespace": ["other", {
                                            "namespace": {
                                                "namespace": "core",
                                            },
                                        }],
                                    },
                                    "type": schema["root type"].name,
                                },
                            }],
                        },
                    },

                },
                "builders": {
                    "context": {
                        "builder": "ExpectContext",
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
                    },
                },
            },
        },
    }
}