/* eslint
    "camelcase": "off",
    "max-len": "off",
    "@typescript-eslint/no-unused-vars": "off",
*/
import * as t from "../../../../../lowlevel/generated/lowlevel"

export function generateDeserializeAPI(
): t.__namespaces_B {
    return {
        "type parameters": {
            "TokenAnnotation": {},
            "NonTokenAnnotation": {},
        },
        "types": {
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
                                        // "type arguments": {
                                        //     "TokenAnnotation": {},
                                        //     "NonTokenAnnotation": {},
                                        // },
                                    }],
                                },
                            },
                            "missing": {
                                "definition": {
                                    "type": ["method", {
                                        "type": {
                                            "namespace selection": {
                                                "which": ["other", {
                                                    "namespace reference": {
                                                        "namespace": "lang",
                                                    },
                                                }],
                                            },
                                            "type": "nothing",
                                        },
                                    }],
                                },
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
                            "interfaces": {
                                "properties": {
                                    "interface": {
                                        "type": ["dictionary", {
                                            "entry": {
                                                "type": ["group", {
                                                    "members": {
                                                        "onExists": {
                                                            "definition": {
                                                                "type": ["method", {
                                                                    "type": {
                                                                        "namespace selection": {
                                                                            "which": ["other", {
                                                                                "namespace reference": {
                                                                                    "namespace": "lang",
                                                                                },
                                                                            }],
                                                                        },
                                                                        "type": "nothing",
                                                                    },
                                                                }],
                                                            },
                                                        },
                                                    },
                                                }],
                                            },
                                        }],
                                    },
                                },
                                "onEnd": {
                                    "interface": {
                                        "type": ["method", {
                                            "type": {
                                                "namespace selection": {
                                                    "which": ["other", {
                                                        "namespace reference": {
                                                            "namespace": "lang",
                                                        },
                                                    }],
                                                },
                                                "type": "nothing",
                                            },
                                        }],
                                    },
                                },
                            },
                        },
                    },
                    "expectDictionary": {
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
                            "interfaces": {
                                "onProperty": {
                                    "interface": {
                                        "type": ["method", {
                                            "type": {
                                                "type": "StringToken",
                                            },
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
                                        }],
                                    },
                                },
                            },
                        },
                    },
                    "expectQuotedString": {
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
                            "interfaces": {
                                "callback": {
                                    "interface": {
                                        "type": ["method", {
                                            "type": {
                                                "type": "StringToken",
                                            },
                                        }],
                                    },
                                },
                            },
                        },
                    },
                    "expectTaggedUnion": {
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
                            "interfaces": {
                                "options": {
                                    "interface": {
                                        "type": ["dictionary", {
                                            "entry": {
                                                "type": ["method", {
                                                    "type": {
                                                        "namespace selection": {
                                                            "which": ["other", {
                                                                "namespace reference": {
                                                                    "namespace": "lang",
                                                                },
                                                            }],
                                                        },
                                                        "type": "nothing",
                                                    },
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
                                                }],
                                            },
                                        }],
                                    },
                                },
                            },
                        },
                    },
                    "expectList": {
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
                            "interfaces": {
                                "onElement": {
                                    "interface": {
                                        "type": ["method", {
                                            "type": {
                                                "namespace selection": {
                                                    "which": ["other", {
                                                        "namespace reference": {
                                                            "namespace": "lang",
                                                        },
                                                    }],
                                                },
                                                "type": "nothing",
                                            },
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
                                        }],
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    }
}