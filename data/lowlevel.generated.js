"use strict";
/* eslint
    "camelcase": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "max-len": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": 0,
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeserializer_pi = exports.build_fi = void 0;
function assertUnreachable(_x) {
    throw new Error("unreachable");
}
function cc(input, callback) {
    return callback(input);
}
function createDictionary(raw) {
    return {
        forEach: (callback) => { Object.keys(raw).sort().forEach((key) => { callback(raw[key], key); }); },
    };
}
function mapDictionary(source, convert) {
    return {
        forEach: (callback) => { source.forEach((e, key) => { callback(convert(e), key); }); },
    };
}
function build_fi($c) {
    function buildDefault_builder_procedure_declaration_fi() {
        return {
            "interfaces": {},
            "return type": ["void", {}],
        };
    }
    function buildDefault_context_selection_fi() {
        return {
            "start": (() => {
                const FOO = buildDefault_context_start_fi("");
            })(), FIXME, COPY,
            "steps": [],
        };
    }
    function buildDefault_context_start_fi() {
        return {
            "start": ["context", {}],
        };
    }
    function buildDefault_function_declaration_fi() {
        return {
            "in": (() => {
                const FOO = buildDefault_type_reference_fi("");
            })(), FIXME, COPY,
            "out": (() => {
                const FOO = buildDefault_type_reference_fi("");
            })(), FIXME, COPY,
        };
    }
    function buildDefault_guaranteed_context_selection_fi() {
        return {
            "missing handler": (() => {
                const FOO = buildDefault_missing_handler_fi("");
            })(), FIXME, COPY,
            "start": (() => {
                const FOO = buildDefault_context_start_fi("");
            })(), FIXME, COPY,
            "steps": [],
        };
    }
    function buildDefault_interface_definition_fi() {
        return {
            "type": ["group", {
                    "members": (() => {
                        const FOO = $c;
                    })(), FIXMEMAP
                }, {
                    "definition": (() => {
                        const FOO = build_interface_definition_fi("");
                    })(), FIXME, COPY,
                },]
        };
    }
}
exports.build_fi = build_fi;
function buildDefault_interface_expression_fi() {
    return {
        "type": ["initialize", {
                "type": (() => {
                    if ($c === undefined) {
                        return ["method", {
                                "strategy": (() => {
                                    if ($c === undefined) {
                                        return ["procedure implementation", {
                                                "block": (() => {
                                                    const FOO = build_procedure_block_fi("");
                                                })(), FIXME, COPY,
                                            }];
                                    }
                                    const FOO = $c;
                                })(), switch($c, [], ) { }
                            }];
                        {
                        }
                    }
                }),
                case: "argument"
            }, {
                return: cc($c[1], ($c) => {
                    return ["argument", ""];
                })
            }],
        case: "inline procedure"
    };
    {
        return cc($c[1], ($c) => {
            return ["inline procedure", ""];
        });
    }
    "procedure implementation";
    {
        return cc($c[1], ($c) => {
            return ["procedure implementation", ""];
        });
    }
    return assertUnreachable($c[0]);
}
const FOO = $c;
();
switch ($c[0]) {
    case "dictionary": {
        return cc($c[1], ($c) => {
            return ["dictionary", ""];
        });
    }
    case "group": {
        return cc($c[1], ($c) => {
            return ["group", ""];
        });
    }
    case "method": {
        return cc($c[1], ($c) => {
            return ["method", ""];
        });
    }
    case "reference": {
        return cc($c[1], ($c) => {
            return ["reference", ""];
        });
    }
    default: return assertUnreachable($c[0]);
}
function buildDefault_internal_procedure_specification_fi() {
    return {
        "block": (() => {
            const FOO = buildDefault_procedure_block_fi("");
        })(), FIXME, COPY,
        "parameters": {},
        "return type": ["void", {}],
    };
}
function buildDefault_missing_handler_fi() {
    return {
        "guaranteed": ["yes", {}],
    };
}
function buildDefault_named_procedure_call_fi() {
    return {
        "procedure call": (() => {
            const FOO = buildDefault_procedure_call_fi("");
        })(), FIXME, COPY,
        "type": ["local", {
                "procedure": (() => {
                    const FOO = $c;
                    FIXME;
                    STEP;
                    procedure;
                })(), FIXME, COPY,
            }],
    };
}
function buildDefault_namespace_reference_fi() {
    return {
        "namespace": "*namespace*",
        "type arguments": {},
    };
}
function buildDefault_namespace_selection_fi() {
    return {
        "which": ["current", {}],
    };
}
function buildDefault_nested_type_reference_fi() {
    return {
        "namespace reference": (() => {
            const FOO = buildDefault_namespace_reference_fi("");
        })(), FIXME, COPY,
        "steps": [],
        "type": "*type reference*",
    };
}
function buildDefault_procedure_block_fi() {
    return {
        "effects": [],
        "markers": {},
        "nested procedures": {},
        "return value": ["void", {}],
        "states": {},
    };
}
function buildDefault_procedure_call_fi() {
    return {
        "interface arguments": {},
    };
}
function buildDefault_root_fi() {
    return {
        "function implementations": {},
        "namespaces": {},
        "procedure implementations": {},
    };
}
function buildDefault_string_expression_fi() {
    return {
        "strategy": ["literal", {
                "value": (() => {
                    const FOO = $c;
                    FIXME;
                    STEP;
                    value;
                })(), FIXME, COPY,
            }],
    };
}
function buildDefault_type_fi() {
    return {
        "occurence": ["required", {}],
        "type": ["string", {}],
    };
}
function buildDefault_type_expression_fi() {
    return {
        "strategy": ["literal", {
                "type": (() => {
                    if ($c === undefined) {
                        return ["string", {
                                "value": (() => {
                                    const FOO = $c;
                                    FIXME;
                                    STEP;
                                    value;
                                })(), FIXME, COPY,
                            }];
                    }
                    const FOO = $c;
                })(), switch($c, [], ) { }
            }]
    };
    {
        "boolean";
        {
            return cc($c[1], ($c) => {
                return ["boolean", ""];
            });
        }
        "dictionary";
        {
            return cc($c[1], ($c) => {
                return ["dictionary", ""];
            });
        }
        "group";
        {
            return cc($c[1], ($c) => {
                return ["group", ""];
            });
        }
        "list";
        {
            return cc($c[1], ($c) => {
                return ["list", ""];
            });
        }
        "number";
        {
            return cc($c[1], ($c) => {
                return ["number", ""];
            });
        }
        "string";
        {
            return cc($c[1], ($c) => {
                return ["string", ""];
            });
        }
        "tagged union";
        {
            return cc($c[1], ($c) => {
                return ["tagged union", ""];
            });
        }
        "type argument";
        {
            return cc($c[1], ($c) => {
                return ["type argument", ""];
            });
        }
        "type reference";
        {
            return cc($c[1], ($c) => {
                return ["type reference", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function buildDefault_type_expression_block_fi() {
    return {
        "expression": (() => {
            const FOO = buildDefault_type_expression_fi("");
        })(), FIXME, COPY,
        "functions": {},
    };
}
function buildDefault_type_reference_fi() {
    return {
        "namespace selection": (() => {
            const FOO = buildDefault_namespace_selection_fi("");
        })(), FIXME, COPY,
        "type": "*type reference*",
    };
}
function build_builder_procedure_declaration_fi() {
    return {
        "interfaces": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "interface";
        (() => {
            const FOO = build_interface_definition_fi("");
        })();
        FIXME;
        COPY,
        ;
    }
    "return type";
    (() => {
        if ($c === undefined) {
            return ["void", {}];
        }
        const FOO = $c;
    })();
    switch ($c[0]) {
        case "interface": {
            return cc($c[1], ($c) => {
                return ["interface", ""];
            });
        }
        case "void": {
            return cc($c[1], ($c) => {
                return ["void", ""];
            });
        }
        default: return assertUnreachable($c[0]);
    }
}
function build_context_selection_fi() {
    return {
        "start": (() => {
            const FOO = build_context_start_fi("");
        })(), FIXME, COPY,
        "steps": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "property";
        (() => {
            const FOO = $c;
            FIXME;
            STEP;
            property;
        })();
        FIXME;
        COPY,
        ;
    }
}
function build_context_start_fi() {
    return {
        "start": (() => {
            if ($c === undefined) {
                return ["context", {}];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "context";
        {
            return cc($c[1], ($c) => {
                return ["context", ""];
            });
        }
        "function";
        {
            return cc($c[1], ($c) => {
                return ["function", ""];
            });
        }
        "marked value";
        {
            return cc($c[1], ($c) => {
                return ["marked value", ""];
            });
        }
        "state";
        {
            return cc($c[1], ($c) => {
                return ["state", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function build_function_declaration_fi() {
    return {
        "in": (() => {
            const FOO = build_type_reference_fi("");
        })(), FIXME, COPY,
        "out": (() => {
            const FOO = build_type_reference_fi("");
        })(), FIXME, COPY,
    };
}
function build_guaranteed_context_selection_fi() {
    return {
        "missing handler": (() => {
            const FOO = build_missing_handler_fi("");
        })(), FIXME, COPY,
        "start": (() => {
            const FOO = build_context_start_fi("");
        })(), FIXME, COPY,
        "steps": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "missing handler";
        (() => {
            const FOO = build_missing_handler_fi("");
        })();
        FIXME;
        COPY,
            "property";
        (() => {
            const FOO = $c;
            FIXME;
            STEP;
            property;
        })();
        FIXME;
        COPY,
        ;
    }
}
function build_interface_definition_fi() {
    return {
        "type": (() => {
            if ($c === undefined) {
                return ["group", {
                        "members": (() => {
                            const FOO = $c;
                        })(), FIXMEMAP
                    }, {
                        "definition": (() => {
                            const FOO = build_interface_definition_fi("");
                        })(), FIXME, COPY,
                    },];
            }
        }),
        const: FOO = $c
    };
    ();
    switch ($c[0]) {
        case "dictionary": {
            return cc($c[1], ($c) => {
                return ["dictionary", ""];
            });
        }
        case "group": {
            return cc($c[1], ($c) => {
                return ["group", ""];
            });
        }
        case "method": {
            return cc($c[1], ($c) => {
                return ["method", ""];
            });
        }
        case "reference": {
            return cc($c[1], ($c) => {
                return ["reference", ""];
            });
        }
        default: return assertUnreachable($c[0]);
    }
}
function build_interface_expression_fi() {
    return {
        "type": (() => {
            if ($c === undefined) {
                return ["initialize", {
                        "type": (() => {
                            if ($c === undefined) {
                                return ["method", {
                                        "strategy": (() => {
                                            if ($c === undefined) {
                                                return ["procedure implementation", {
                                                        "block": (() => {
                                                            const FOO = build_procedure_block_fi("");
                                                        })(), FIXME, COPY,
                                                    }];
                                            }
                                            const FOO = $c;
                                        })(), switch($c, [], ) { }
                                    }];
                                {
                                }
                            }
                        }),
                        case: "argument"
                    }, {
                        return: cc($c[1], ($c) => {
                            return ["argument", ""];
                        })
                    }];
            }
        }),
        case: "inline procedure"
    };
    {
        return cc($c[1], ($c) => {
            return ["inline procedure", ""];
        });
    }
    "procedure implementation";
    {
        return cc($c[1], ($c) => {
            return ["procedure implementation", ""];
        });
    }
    return assertUnreachable($c[0]);
}
const FOO = $c;
();
switch ($c[0]) {
    case "dictionary": {
        return cc($c[1], ($c) => {
            return ["dictionary", ""];
        });
    }
    case "group": {
        return cc($c[1], ($c) => {
            return ["group", ""];
        });
    }
    case "method": {
        return cc($c[1], ($c) => {
            return ["method", ""];
        });
    }
    case "reference": {
        return cc($c[1], ($c) => {
            return ["reference", ""];
        });
    }
    default: return assertUnreachable($c[0]);
}
const FOO = $c;
();
switch ($c[0]) {
    case "argument": {
        return cc($c[1], ($c) => {
            return ["argument", ""];
        });
    }
    case "initialize": {
        return cc($c[1], ($c) => {
            return ["initialize", ""];
        });
    }
    default: return assertUnreachable($c[0]);
}
function build_internal_procedure_specification_fi() {
    return {
        "block": (() => {
            const FOO = build_procedure_block_fi("");
        })(), FIXME, COPY,
        "parameters": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "type";
        (() => {
            if ($c === undefined) {
                return ["group", {
                        "members": (() => {
                            const FOO = $c;
                        })(), FIXMEMAP
                    }, {
                        "definition": (() => {
                            const FOO = build_interface_definition_fi("");
                        })(), FIXME, COPY,
                    },];
            }
        });
        const FOO = $c;
    }
    ();
    switch ($c[0]) {
        case "group": {
            return cc($c[1], ($c) => {
                return ["group", ""];
            });
        }
        case "method": {
            return cc($c[1], ($c) => {
                return ["method", ""];
            });
        }
        case "reference": {
            return cc($c[1], ($c) => {
                return ["reference", ""];
            });
        }
        default: return assertUnreachable($c[0]);
    }
}
"return type";
(() => {
    if ($c === undefined) {
        return ["void", {}];
    }
    const FOO = $c;
})();
switch ($c[0]) {
    case "interface": {
        return cc($c[1], ($c) => {
            return ["interface", ""];
        });
    }
    case "void": {
        return cc($c[1], ($c) => {
            return ["void", ""];
        });
    }
    default: return assertUnreachable($c[0]);
}
function build_missing_handler_fi() {
    return {
        "guaranteed": (() => {
            if ($c === undefined) {
                return ["yes", {}];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "no";
        {
            return cc($c[1], ($c) => {
                return ["no", ""];
            });
        }
        "yes";
        {
            return cc($c[1], ($c) => {
                return ["yes", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function build_named_procedure_call_fi() {
    return {
        "procedure call": (() => {
            const FOO = build_procedure_call_fi("");
        })(), FIXME, COPY,
        "type": (() => {
            if ($c === undefined) {
                return ["local", {
                        "procedure": (() => {
                            const FOO = $c;
                            FIXME;
                            STEP;
                            procedure;
                        })(), FIXME, COPY,
                    }];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "external";
        {
            return cc($c[1], ($c) => {
                return ["external", ""];
            });
        }
        "local";
        {
            return cc($c[1], ($c) => {
                return ["local", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function build_namespace_reference_fi() {
    return {
        "namespace": (() => {
            const FOO = $c;
            FIXME;
            STEP;
            namespace;
        })(), FIXME, COPY,
        "type arguments": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "type";
        (() => {
            const FOO = $c;
            FIXME;
            STEP;
            type;
        })();
        FIXME;
        COPY,
        ;
    }
}
function build_namespace_selection_fi() {
    return {
        "which": (() => {
            if ($c === undefined) {
                return ["current", {}];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "current";
        {
            return cc($c[1], ($c) => {
                return ["current", ""];
            });
        }
        "other";
        {
            return cc($c[1], ($c) => {
                return ["other", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function build_nested_type_reference_fi() {
    return {
        "namespace reference": (() => {
            const FOO = build_namespace_reference_fi("");
        })(), FIXME, COPY,
        "steps": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "type";
        (() => {
            if ($c === undefined) {
                return ["dictionary", {}];
            }
            const FOO = $c;
        })();
        switch ($c[0]) {
            case "dictionary": {
                return cc($c[1], ($c) => {
                    return ["dictionary", ""];
                });
            }
            case "group": {
                return cc($c[1], ($c) => {
                    return ["group", ""];
                });
            }
            case "list": {
                return cc($c[1], ($c) => {
                    return ["list", ""];
                });
            }
            case "tagged union option": {
                return cc($c[1], ($c) => {
                    return ["tagged union option", ""];
                });
            }
            default: return assertUnreachable($c[0]);
        }
    }
    "type";
    (() => {
        const FOO = $c;
        FIXME;
        STEP;
        type;
    })();
    FIXME;
    COPY,
    ;
}
function build_procedure_block_fi() {
    return {
        "effects": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "type";
        (() => {
            if ($c === undefined) {
                return ["external interface call", {
                        "expression": (() => {
                            const FOO = build_type_expression_fi("");
                        })(), FIXME, COPY,
                        "interface": (() => {
                            const FOO = $c;
                            FIXME;
                            STEP;
                            interface;
                        })(), FIXME, COPY,
                    }];
            }
            const FOO = $c;
        })();
        switch ($c[0]) {
            case "external interface call": {
                return cc($c[1], ($c) => {
                    return ["external interface call", ""];
                });
            }
            case "internal interface call": {
                return cc($c[1], ($c) => {
                    return ["internal interface call", ""];
                });
            }
            case "state change": {
                return cc($c[1], ($c) => {
                    return ["state change", ""];
                });
            }
            default: return assertUnreachable($c[0]);
        }
    }
    "markers";
    (() => {
        const FOO = $c;
    })();
    FIXMEMAP;
    {
        "selection";
        (() => {
            const FOO = build_context_selection_fi("");
        })();
        FIXME;
        COPY,
        ;
    }
    "nested procedures";
    (() => {
        const FOO = $c;
    })();
    FIXMEMAP;
    {
        "specification";
        (() => {
            const FOO = build_internal_procedure_specification_fi("");
        })();
        FIXME;
        COPY,
        ;
    }
    "return value";
    (() => {
        if ($c === undefined) {
            return ["void", {}];
        }
        const FOO = $c;
    })();
    switch ($c[0]) {
        case "interface": {
            return cc($c[1], ($c) => {
                return ["interface", ""];
            });
        }
        case "void": {
            return cc($c[1], ($c) => {
                return ["void", ""];
            });
        }
        default: return assertUnreachable($c[0]);
    }
    "states";
    (() => {
        const FOO = $c;
    })();
    FIXMEMAP;
    {
        "type";
        (() => {
            if ($c === undefined) {
                return ["string", {
                        "initial value": (() => {
                            const FOO = $c;
                            FIXME;
                            STEP;
                            initial;
                            value;
                        })(), FIXME, COPY,
                    }];
            }
            const FOO = $c;
        })();
        switch ($c[0]) {
            case "dictionary": {
                return cc($c[1], ($c) => {
                    return ["dictionary", ""];
                });
            }
            case "list": {
                return cc($c[1], ($c) => {
                    return ["list", ""];
                });
            }
            case "string": {
                return cc($c[1], ($c) => {
                    return ["string", ""];
                });
            }
            case "type5": {
                return cc($c[1], ($c) => {
                    return ["type5", ""];
                });
            }
            default: return assertUnreachable($c[0]);
        }
    }
}
function build_procedure_call_fi() {
    return {
        "interface arguments": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "expression";
        (() => {
            const FOO = build_interface_expression_fi("");
        })();
        FIXME;
        COPY,
        ;
    }
}
function build_root_fi() {
    return {
        "function implementations": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "block";
        (() => {
            const FOO = build_type_expression_block_fi("");
        })();
        FIXME;
        COPY,
            "declaration";
        (() => {
            const FOO = $c;
            FIXME;
            STEP;
            declaration;
        })();
        FIXME;
        COPY,
            "namespace reference";
        (() => {
            const FOO = build_namespace_reference_fi("");
        })();
        FIXME;
        COPY,
            "type parameters";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        { }
    }
    "namespaces";
    (() => {
        const FOO = $c;
    })();
    FIXMEMAP;
    {
        "function declarations";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        {
            "declaration";
            (() => {
                const FOO = build_function_declaration_fi("");
            })();
            FIXME;
            COPY,
            ;
        }
        "interface builders";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        {
            "methods";
            (() => {
                const FOO = $c;
            })();
            FIXMEMAP;
            {
                "declaration";
                (() => {
                    const FOO = build_builder_procedure_declaration_fi("");
                })();
                FIXME;
                COPY,
                ;
            }
        }
        "interfaces";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        {
            "definition";
            (() => {
                const FOO = build_interface_definition_fi("");
            })();
            FIXME;
            COPY,
            ;
        }
        "procedure declarations";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        {
            "builders";
            (() => {
                const FOO = $c;
            })();
            FIXMEMAP;
            {
                "builder";
                (() => {
                    const FOO = $c;
                    FIXME;
                    STEP;
                    builder;
                })();
                FIXME;
                COPY,
                    "namespace selection";
                (() => {
                    const FOO = build_namespace_selection_fi("");
                })();
                FIXME;
                COPY,
                ;
            }
            "context";
            (() => {
                const FOO = build_type_reference_fi("");
            })();
            FIXME;
            COPY,
                "functions";
            (() => {
                const FOO = $c;
            })();
            FIXMEMAP;
            {
                "declaration";
                (() => {
                    const FOO = build_function_declaration_fi("");
                })();
                FIXME;
                COPY,
                ;
            }
            "interfaces";
            (() => {
                const FOO = $c;
            })();
            FIXMEMAP;
            {
                "interface";
                (() => {
                    const FOO = build_interface_definition_fi("");
                })();
                FIXME;
                COPY,
                ;
            }
            "return type";
            (() => {
                if ($c === undefined) {
                    return ["void", {}];
                }
                const FOO = $c;
            })();
            switch ($c[0]) {
                case "interface": {
                    return cc($c[1], ($c) => {
                        return ["interface", ""];
                    });
                }
                case "void": {
                    return cc($c[1], ($c) => {
                        return ["void", ""];
                    });
                }
                default: return assertUnreachable($c[0]);
            }
        }
        "type parameters";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        { }
        "types";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        {
            "type";
            (() => {
                const FOO = build_type_fi("");
            })();
            FIXME;
            COPY,
            ;
        }
    }
    "procedure implementations";
    (() => {
        const FOO = $c;
    })();
    FIXMEMAP;
    {
        "block";
        (() => {
            const FOO = build_procedure_block_fi("");
        })();
        FIXME;
        COPY,
            "declaration";
        (() => {
            const FOO = $c;
            FIXME;
            STEP;
            declaration;
        })();
        FIXME;
        COPY,
            "namespace reference";
        (() => {
            const FOO = build_namespace_reference_fi("");
        })();
        FIXME;
        COPY,
            "type parameters";
        (() => {
            const FOO = $c;
        })();
        FIXMEMAP;
        { }
    }
}
function build_string_expression_fi() {
    return {
        "strategy": (() => {
            if ($c === undefined) {
                return ["literal", {
                        "value": (() => {
                            const FOO = $c;
                            FIXME;
                            STEP;
                            value;
                        })(), FIXME, COPY,
                    }];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "literal";
        {
            return cc($c[1], ($c) => {
                return ["literal", ""];
            });
        }
        "select";
        {
            return cc($c[1], ($c) => {
                return ["select", ""];
            });
        }
        "state";
        {
            return cc($c[1], ($c) => {
                return ["state", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
}
function build_type_fi() {
    return {
        "occurence": (() => {
            if ($c === undefined) {
                return ["required", {}];
            }
            const FOO = $c;
        })(), switch($c, [], ) { }
    };
    {
        "optional";
        {
            return cc($c[1], ($c) => {
                return ["optional", ""];
            });
        }
        "required";
        {
            return cc($c[1], ($c) => {
                return ["required", ""];
            });
        }
        return assertUnreachable($c[0]);
    }
    "type";
    (() => {
        if ($c === undefined) {
            return ["string", {}];
        }
        const FOO = $c;
    })();
    switch ($c[0]) {
        case "boolean": {
            return cc($c[1], ($c) => {
                return ["boolean", ""];
            });
        }
        case "dictionary": {
            return cc($c[1], ($c) => {
                return ["dictionary", ""];
            });
        }
        case "group": {
            return cc($c[1], ($c) => {
                return ["group", ""];
            });
        }
        case "list": {
            return cc($c[1], ($c) => {
                return ["list", ""];
            });
        }
        case "number": {
            return cc($c[1], ($c) => {
                return ["number", ""];
            });
        }
        case "string": {
            return cc($c[1], ($c) => {
                return ["string", ""];
            });
        }
        case "tagged union": {
            return cc($c[1], ($c) => {
                return ["tagged union", ""];
            });
        }
        case "type argument": {
            return cc($c[1], ($c) => {
                return ["type argument", ""];
            });
        }
        case "type reference": {
            return cc($c[1], ($c) => {
                return ["type reference", ""];
            });
        }
        default: return assertUnreachable($c[0]);
    }
}
function build_type_expression_fi() {
    return {
        "strategy": (() => {
            if ($c === undefined) {
                return ["literal", {
                        "type": (() => {
                            if ($c === undefined) {
                                return ["string", {
                                        "value": (() => {
                                            const FOO = $c;
                                            FIXME;
                                            STEP;
                                            value;
                                        })(), FIXME, COPY,
                                    }];
                            }
                            const FOO = $c;
                        })(), switch($c, [], ) { }
                    }];
                {
                }
            }
        }),
        case: "boolean"
    };
    {
        return cc($c[1], ($c) => {
            return ["boolean", ""];
        });
    }
    "dictionary";
    {
        return cc($c[1], ($c) => {
            return ["dictionary", ""];
        });
    }
    "group";
    {
        return cc($c[1], ($c) => {
            return ["group", ""];
        });
    }
    "list";
    {
        return cc($c[1], ($c) => {
            return ["list", ""];
        });
    }
    "number";
    {
        return cc($c[1], ($c) => {
            return ["number", ""];
        });
    }
    "string";
    {
        return cc($c[1], ($c) => {
            return ["string", ""];
        });
    }
    "tagged union";
    {
        return cc($c[1], ($c) => {
            return ["tagged union", ""];
        });
    }
    "type argument";
    {
        return cc($c[1], ($c) => {
            return ["type argument", ""];
        });
    }
    "type reference";
    {
        return cc($c[1], ($c) => {
            return ["type reference", ""];
        });
    }
    return assertUnreachable($c[0]);
}
const FOO = $c;
();
switch ($c[0]) {
    case "copy": {
        return cc($c[1], ($c) => {
            return ["copy", ""];
        });
    }
    case "dictionary from state": {
        return cc($c[1], ($c) => {
            return ["dictionary from state", ""];
        });
    }
    case "literal": {
        return cc($c[1], ($c) => {
            return ["literal", ""];
        });
    }
    case "map": {
        return cc($c[1], ($c) => {
            return ["map", ""];
        });
    }
    case "switch": {
        return cc($c[1], ($c) => {
            return ["switch", ""];
        });
    }
    default: return assertUnreachable($c[0]);
}
function build_type_expression_block_fi() {
    return {
        "expression": (() => {
            const FOO = build_type_expression_fi("");
        })(), FIXME, COPY,
        "functions": (() => {
            const FOO = $c;
        })(), FIXMEMAP
    };
    {
        "block";
        (() => {
            const FOO = build_type_expression_block_fi("");
        })();
        FIXME;
        COPY,
            "declaration";
        (() => {
            const FOO = build_function_declaration_fi("");
        })();
        FIXME;
        COPY,
        ;
    }
}
function build_type_reference_fi() {
    return {
        "namespace selection": (() => {
            const FOO = build_namespace_selection_fi("");
        })(), FIXME, COPY,
        "type": (() => {
            const FOO = $c;
            FIXME;
            STEP;
            type;
        })(), FIXME, COPY,
    };
}
return (() => {
    const FOO = build_root_fi((() => {
        const FOO = $c;
    })(), FIXME, COPY);
})();
FIXME;
COPY;
function createDeserializer_pi($c, $i, $b, $f) {
    function builder_procedure_declaration_NIC($ip) {
        function temp_NIC($ip) {
            const interfaces_s = {};
            let return_type_s = ["void", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "interfaces": createDictionary(interfaces),
                        "return type": (() => {
                            const FOO = return_type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "interfaces": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let interface_s = {
                                                        "type": ["group", {
                                                                "members": {},
                                                            }],
                                                    };
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "interface": (() => {
                                                                    const FOO = interface_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "interface": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        interfaces[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "return type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "interface": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let interface_s = {
                                                                "type": ["group", {
                                                                        "members": {},
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "interface": (() => {
                                                                            const FOO = interface_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "interface": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_type = ["interface", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "void": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_type = ["void", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function context_selection_NIC($ip) {
        function temp_NIC($ip) {
            let start_s = {
                "start": ["context", {}],
            };
            const steps_s = [];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "start": (() => {
                            const FOO = start_s;
                        })(), FIXME, COPY,
                        "steps": (() => {
                            const FOO = steps_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "start": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "steps": {
                        "onExists": ($c) => {
                            return wrap_NIC({});
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function context_start_NIC($ip) {
        function temp_NIC($ip) {
            let start_s = ["context", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "start": (() => {
                            const FOO = start_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "start": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "context": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                start = ["context", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "function": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let argument_s = {
                                                                "strategy": ["literal", {
                                                                        "type": ["string", {
                                                                                "value": "",
                                                                            }],
                                                                    }],
                                                            };
                                                            let context_s = ["argument", {
                                                                    "function": "*function*",
                                                                }];
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "argument": (() => {
                                                                            const FOO = argument_s;
                                                                        })(), FIXME, COPY,
                                                                        "context": (() => {
                                                                            const FOO = context_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "argument": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                    "context": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectTaggedUnion({
                                                                                "options": {
                                                                                    "argument": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let function_s = "*function*";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "function": (() => {
                                                                                                                            const FOO = function_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "function": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    function () { }
                                                                                                                                    (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                context = ["argument", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "local function": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let function_s = "*function*";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "function": (() => {
                                                                                                                            const FOO = function_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "function": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    function () { }
                                                                                                                                    (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                context = ["local function", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                start = ["function", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "marked value": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let marker_s = "*marker*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "marker": (() => {
                                                                            const FOO = marker_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "marker": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    marker = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                start = ["marked value", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "state": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let state_s = "*state*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "state": (() => {
                                                                            const FOO = state_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "state": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    state = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                start = ["state", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function function_declaration_NIC($ip) {
        function temp_NIC($ip) {
            let in_s = {
                "namespace selection": "FIXME COMP",
                "type": "*type reference*",
            };
            let out_s = {
                "namespace selection": "FIXME COMP",
                "type": "*type reference*",
            };
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "in": (() => {
                            const FOO = in_s;
                        })(), FIXME, COPY,
                        "out": (() => {
                            const FOO = out_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "in": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "out": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function guaranteed_context_selection_NIC($ip) {
        function temp_NIC($ip) {
            let missing_handler_s = {
                "guaranteed": ["yes", {}],
            };
            let start_s = {
                "start": ["context", {}],
            };
            const steps_s = [];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "missing handler": (() => {
                            const FOO = missing_handler_s;
                        })(), FIXME, COPY,
                        "start": (() => {
                            const FOO = start_s;
                        })(), FIXME, COPY,
                        "steps": (() => {
                            const FOO = steps_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "missing handler": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "start": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "steps": {
                        "onExists": ($c) => {
                            return wrap_NIC({});
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function interface_definition_NIC($ip) {
        function temp_NIC($ip) {
            let type_s = ["group", {
                    "members": {},
                }];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "dictionary": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let entry_s = {
                                                                "type": ["group", {
                                                                        "members": {},
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "entry": (() => {
                                                                            const FOO = entry_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "entry": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["dictionary", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "group": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            const members_s = {};
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "members": createDictionary(members),
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "members": {
                                                                        "onExists": ($c) => {
                                                                            return wrap_NIC({
                                                                                "handler": $b.context.expectDictionary({
                                                                                    "onProperty": ($c) => {
                                                                                        const y_m = (() => {
                                                                                            const FOO = $c;
                                                                                        })();
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let definition_s = {
                                                                                                        "type": ["group", {
                                                                                                                "members": {},
                                                                                                            }],
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "definition": (() => {
                                                                                                                    const FOO = definition_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "definition": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        members[(() => {
                                                                                                            const FOO = y_m;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            token;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            data;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            value;
                                                                                                        })()];
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                        STRING;
                                                                                                        (() => {
                                                                                                            const FOO = $c;
                                                                                                        })();
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                }),
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["group", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "method": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let return_type_s = ["void", {}];
                                                            let type_s = {
                                                                "namespace selection": "FIXME COMP",
                                                                "type": "*type reference*",
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "return type": (() => {
                                                                            const FOO = return_type_s;
                                                                        })(), FIXME, COPY,
                                                                        "type": (() => {
                                                                            const FOO = type_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "return type": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectTaggedUnion({
                                                                                "options": {
                                                                                    "interface": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let interface_s = {
                                                                                                                "type": ["group", {
                                                                                                                        "members": {},
                                                                                                                    }],
                                                                                                            };
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "interface": (() => {
                                                                                                                            const FOO = interface_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "interface": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectFoo({});
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                return_type = ["interface", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "void": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({});
                                                                                                                },
                                                                                                                "properties": {},
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                return_type = ["void", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                    "type": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["method", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "reference": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let interface_s = "*referenced interface*";
                                                            let namespace_selection_s = {
                                                                "which": ["current", {}],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "interface": (() => {
                                                                            const FOO = interface_s;
                                                                        })(), FIXME, COPY,
                                                                        "namespace selection": (() => {
                                                                            const FOO = namespace_selection_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "interface": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    interface = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                    "namespace selection": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["reference", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function interface_expression_NIC($ip) {
        function temp_NIC($ip) {
            let type_s = ["initialize", {
                    "type": ["method", {
                            "strategy": ["procedure implementation", {
                                    "block": "FIXME COMP",
                                }],
                        }],
                }];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "argument": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let argument_s = "*argument*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "argument": (() => {
                                                                            const FOO = argument_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "argument": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    argument = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["argument", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "initialize": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let type_s = ["method", {
                                                                    "strategy": ["procedure implementation", {
                                                                            "block": "FIXME COMP",
                                                                        }],
                                                                }];
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "type": (() => {
                                                                            const FOO = type_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "type": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectTaggedUnion({
                                                                                "options": {
                                                                                    "dictionary": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            const entries_s = {};
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "entries": createDictionary(entries),
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "entries": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return wrap_NIC({
                                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                                    "onProperty": ($c) => {
                                                                                                                                        const y_m = (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": (($ip) => {
                                                                                                                                                function temp_NIC($ip) {
                                                                                                                                                    let expression_s = {
                                                                                                                                                        "type": ["initialize", {
                                                                                                                                                                "type": ["method", {
                                                                                                                                                                        "strategy": ["procedure implementation", {
                                                                                                                                                                                "block": "FIXME COMP",
                                                                                                                                                                            }],
                                                                                                                                                                    }],
                                                                                                                                                            }],
                                                                                                                                                    };
                                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                                            $ip.out({
                                                                                                                                                                "expression": (() => {
                                                                                                                                                                    const FOO = expression_s;
                                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                                            });
                                                                                                                                                        },
                                                                                                                                                        "properties": {
                                                                                                                                                            "expression": {
                                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    });
                                                                                                                                                }
                                                                                                                                                return temp_NIC({
                                                                                                                                                    "out": ($c) => {
                                                                                                                                                        entries[(() => {
                                                                                                                                                            const FOO = y_m;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            token;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            data;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            value;
                                                                                                                                                        })()];
                                                                                                                                                        FIXME;
                                                                                                                                                        COPY;
                                                                                                                                                        STRING;
                                                                                                                                                        (() => {
                                                                                                                                                            const FOO = $c;
                                                                                                                                                        })();
                                                                                                                                                        FIXME;
                                                                                                                                                        COPY;
                                                                                                                                                    },
                                                                                                                                                });
                                                                                                                                            })({}),
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                }),
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["dictionary", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "group": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let strategy_s = ["inline", {
                                                                                                                    "members": {},
                                                                                                                }];
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "strategy": (() => {
                                                                                                                            const FOO = strategy_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "strategy": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectTaggedUnion({
                                                                                                                                "options": {
                                                                                                                                    "inline": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": ($c) => {
                                                                                                                                                return wrap_NIC({
                                                                                                                                                    "handler": (($ip) => {
                                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                                            const members_s = {};
                                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                                    $ip.out({
                                                                                                                                                                        "members": createDictionary(members),
                                                                                                                                                                    });
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                    "members": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return wrap_NIC({
                                                                                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                                                                                    "onProperty": ($c) => {
                                                                                                                                                                                        const y_m = (() => {
                                                                                                                                                                                            const FOO = $c;
                                                                                                                                                                                        })();
                                                                                                                                                                                        return wrap_NIC({
                                                                                                                                                                                            "handler": (($ip) => {
                                                                                                                                                                                                function temp_NIC($ip) {
                                                                                                                                                                                                    let expression_s = {
                                                                                                                                                                                                        "type": ["initialize", {
                                                                                                                                                                                                                "type": ["method", {
                                                                                                                                                                                                                        "strategy": ["procedure implementation", {
                                                                                                                                                                                                                                "block": "FIXME COMP",
                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                            }],
                                                                                                                                                                                                    };
                                                                                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                                                                                            $ip.out({
                                                                                                                                                                                                                "expression": (() => {
                                                                                                                                                                                                                    const FOO = expression_s;
                                                                                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                                                                                            });
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "properties": {
                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                                                                                },
                                                                                                                                                                                                            },
                                                                                                                                                                                                        },
                                                                                                                                                                                                    });
                                                                                                                                                                                                }
                                                                                                                                                                                                return temp_NIC({
                                                                                                                                                                                                    "out": ($c) => {
                                                                                                                                                                                                        members[(() => {
                                                                                                                                                                                                            const FOO = y_m;
                                                                                                                                                                                                            FIXME;
                                                                                                                                                                                                            STEP;
                                                                                                                                                                                                            token;
                                                                                                                                                                                                            FIXME;
                                                                                                                                                                                                            STEP;
                                                                                                                                                                                                            data;
                                                                                                                                                                                                            FIXME;
                                                                                                                                                                                                            STEP;
                                                                                                                                                                                                            value;
                                                                                                                                                                                                        })()];
                                                                                                                                                                                                        FIXME;
                                                                                                                                                                                                        COPY;
                                                                                                                                                                                                        STRING;
                                                                                                                                                                                                        (() => {
                                                                                                                                                                                                            const FOO = $c;
                                                                                                                                                                                                        })();
                                                                                                                                                                                                        FIXME;
                                                                                                                                                                                                        COPY;
                                                                                                                                                                                                    },
                                                                                                                                                                                                });
                                                                                                                                                                                            })({}),
                                                                                                                                                                                        });
                                                                                                                                                                                    },
                                                                                                                                                                                }),
                                                                                                                                                                            });
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                        return temp_NIC({
                                                                                                                                                            "out": ($c) => {
                                                                                                                                                                strategy = ["inline", (() => {
                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                                            },
                                                                                                                                                        });
                                                                                                                                                    })({}),
                                                                                                                                                });
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["group", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "method": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let strategy_s = ["procedure implementation", {
                                                                                                                    "block": "FIXME COMP",
                                                                                                                }];
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "strategy": (() => {
                                                                                                                            const FOO = strategy_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "strategy": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectTaggedUnion({
                                                                                                                                "options": {
                                                                                                                                    "argument": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": ($c) => {
                                                                                                                                                return wrap_NIC({
                                                                                                                                                    "handler": (($ip) => {
                                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                                            let argument_s = "*argument*";
                                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                                    $ip.out({
                                                                                                                                                                        "argument": (() => {
                                                                                                                                                                            const FOO = argument_s;
                                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                                    });
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                    "argument": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                                                                "callback": ($c) => {
                                                                                                                                                                                    argument = (() => {
                                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                                        FIXME;
                                                                                                                                                                                        STEP;
                                                                                                                                                                                        token;
                                                                                                                                                                                        FIXME;
                                                                                                                                                                                        STEP;
                                                                                                                                                                                        data;
                                                                                                                                                                                        FIXME;
                                                                                                                                                                                        STEP;
                                                                                                                                                                                        value;
                                                                                                                                                                                    })();
                                                                                                                                                                                    FIXME;
                                                                                                                                                                                    COPY;
                                                                                                                                                                                    STRING;
                                                                                                                                                                                },
                                                                                                                                                                            });
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                        return temp_NIC({
                                                                                                                                                            "out": ($c) => {
                                                                                                                                                                strategy = ["argument", (() => {
                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                                            },
                                                                                                                                                        });
                                                                                                                                                    })({}),
                                                                                                                                                });
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                    "inline procedure": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": ($c) => {
                                                                                                                                                return wrap_NIC({
                                                                                                                                                    "handler": (($ip) => {
                                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                                            let call_s = {
                                                                                                                                                                "interface arguments": {},
                                                                                                                                                            };
                                                                                                                                                            let specification_s = {
                                                                                                                                                                "block": "FIXME COMP",
                                                                                                                                                                "parameters": {},
                                                                                                                                                                "return type": ["void", {}],
                                                                                                                                                            };
                                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                                    $ip.out({
                                                                                                                                                                        "call": (() => {
                                                                                                                                                                            const FOO = call_s;
                                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                                        "specification": (() => {
                                                                                                                                                                            const FOO = specification_s;
                                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                                    });
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                    "call": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                    "specification": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                        return temp_NIC({
                                                                                                                                                            "out": ($c) => {
                                                                                                                                                                strategy = ["inline procedure", (() => {
                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                                            },
                                                                                                                                                        });
                                                                                                                                                    })({}),
                                                                                                                                                });
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                    "procedure implementation": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": ($c) => {
                                                                                                                                                return wrap_NIC({
                                                                                                                                                    "handler": (($ip) => {
                                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                                            let block_s = {
                                                                                                                                                                "effects": [],
                                                                                                                                                                "markers": {},
                                                                                                                                                                "nested procedures": {},
                                                                                                                                                                "return value": ["void", {}],
                                                                                                                                                                "states": {},
                                                                                                                                                            };
                                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                                    $ip.out({
                                                                                                                                                                        "block": (() => {
                                                                                                                                                                            const FOO = block_s;
                                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                                    });
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                    "block": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                        return temp_NIC({
                                                                                                                                                            "out": ($c) => {
                                                                                                                                                                strategy = ["procedure implementation", (() => {
                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                                            },
                                                                                                                                                        });
                                                                                                                                                    })({}),
                                                                                                                                                });
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["method", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "reference": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let strategy_s = ["procedure call6", {
                                                                                                                    "procedure call": "FIXME COMP",
                                                                                                                }];
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "strategy": (() => {
                                                                                                                            const FOO = strategy_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "strategy": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectTaggedUnion({
                                                                                                                                "options": {
                                                                                                                                    "procedure call6": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": ($c) => {
                                                                                                                                                return wrap_NIC({
                                                                                                                                                    "handler": (($ip) => {
                                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                                            let procedure_call_s = {
                                                                                                                                                                "procedure call": "FIXME COMP",
                                                                                                                                                                "type": ["local", {
                                                                                                                                                                        "procedure": "*procedure*",
                                                                                                                                                                    }],
                                                                                                                                                            };
                                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                                    $ip.out({
                                                                                                                                                                        "procedure call": (() => {
                                                                                                                                                                            const FOO = procedure_call_s;
                                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                                    });
                                                                                                                                                                },
                                                                                                                                                                "properties": {
                                                                                                                                                                    "procedure call": {
                                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                                        },
                                                                                                                                                                    },
                                                                                                                                                                },
                                                                                                                                                            });
                                                                                                                                                        }
                                                                                                                                                        return temp_NIC({
                                                                                                                                                            "out": ($c) => {
                                                                                                                                                                strategy = ["procedure call6", (() => {
                                                                                                                                                                        const FOO = $c;
                                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                                            },
                                                                                                                                                        });
                                                                                                                                                    })({}),
                                                                                                                                                });
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["reference", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["initialize", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function internal_procedure_specification_NIC($ip) {
        function temp_NIC($ip) {
            let block_s = {
                "effects": [],
                "markers": {},
                "nested procedures": {},
                "return value": ["void", {}],
                "states": {},
            };
            const parameters_s = {};
            let return_type_s = ["void", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "block": (() => {
                            const FOO = block_s;
                        })(), FIXME, COPY,
                        "parameters": createDictionary(parameters),
                        "return type": (() => {
                            const FOO = return_type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "block": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "parameters": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let type_s = ["group", {
                                                            "members": {},
                                                        }];
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "type": (() => {
                                                                    const FOO = type_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "type": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectTaggedUnion({
                                                                        "options": {
                                                                            "group": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    const members_s = {};
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "members": createDictionary(members),
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "members": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return wrap_NIC({
                                                                                                                        "handler": $b.context.expectDictionary({
                                                                                                                            "onProperty": ($c) => {
                                                                                                                                const y_m = (() => {
                                                                                                                                    const FOO = $c;
                                                                                                                                })();
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip) => {
                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                            let definition_s = {
                                                                                                                                                "type": ["group", {
                                                                                                                                                        "members": {},
                                                                                                                                                    }],
                                                                                                                                            };
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({
                                                                                                                                                        "definition": (() => {
                                                                                                                                                            const FOO = definition_s;
                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                    });
                                                                                                                                                },
                                                                                                                                                "properties": {
                                                                                                                                                    "definition": {
                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                members[(() => {
                                                                                                                                                    const FOO = y_m;
                                                                                                                                                    FIXME;
                                                                                                                                                    STEP;
                                                                                                                                                    token;
                                                                                                                                                    FIXME;
                                                                                                                                                    STEP;
                                                                                                                                                    data;
                                                                                                                                                    FIXME;
                                                                                                                                                    STEP;
                                                                                                                                                    value;
                                                                                                                                                })()];
                                                                                                                                                FIXME;
                                                                                                                                                COPY;
                                                                                                                                                STRING;
                                                                                                                                                (() => {
                                                                                                                                                    const FOO = $c;
                                                                                                                                                })();
                                                                                                                                                FIXME;
                                                                                                                                                COPY;
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    });
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["group", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                            "method": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let return_type_s = ["void", {}];
                                                                                                    let type_s = {
                                                                                                        "namespace reference": "FIXME COMP",
                                                                                                        "steps": [],
                                                                                                        "type": "*type reference*",
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "return type": (() => {
                                                                                                                    const FOO = return_type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                                "type": (() => {
                                                                                                                    const FOO = type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "return type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectTaggedUnion({
                                                                                                                        "options": {
                                                                                                                            "interface": ($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": (($ip) => {
                                                                                                                                                function temp_NIC($ip) {
                                                                                                                                                    let interface_s = {
                                                                                                                                                        "type": ["group", {
                                                                                                                                                                "members": {},
                                                                                                                                                            }],
                                                                                                                                                    };
                                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                                            $ip.out({
                                                                                                                                                                "interface": (() => {
                                                                                                                                                                    const FOO = interface_s;
                                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                                            });
                                                                                                                                                        },
                                                                                                                                                        "properties": {
                                                                                                                                                            "interface": {
                                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    });
                                                                                                                                                }
                                                                                                                                                return temp_NIC({
                                                                                                                                                    "out": ($c) => {
                                                                                                                                                        return_type = ["interface", (() => {
                                                                                                                                                                const FOO = $c;
                                                                                                                                                            })(), FIXME, COPY];
                                                                                                                                                    },
                                                                                                                                                });
                                                                                                                                            })({}),
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            },
                                                                                                                            "void": ($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": ($c) => {
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": (($ip) => {
                                                                                                                                                function temp_NIC($ip) {
                                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                                            $ip.out({});
                                                                                                                                                        },
                                                                                                                                                        "properties": {},
                                                                                                                                                    });
                                                                                                                                                }
                                                                                                                                                return temp_NIC({
                                                                                                                                                    "out": ($c) => {
                                                                                                                                                        return_type = ["void", (() => {
                                                                                                                                                                const FOO = $c;
                                                                                                                                                            })(), FIXME, COPY];
                                                                                                                                                    },
                                                                                                                                                });
                                                                                                                                            })({}),
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            },
                                                                                                                        },
                                                                                                                    });
                                                                                                                },
                                                                                                            },
                                                                                                            "type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["method", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                            "reference": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let interface_s = "*referenced interface*";
                                                                                                    let namespace_selection_s = {
                                                                                                        "which": ["current", {}],
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "interface": (() => {
                                                                                                                    const FOO = interface_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                                "namespace selection": (() => {
                                                                                                                    const FOO = namespace_selection_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "interface": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectQuotedString({
                                                                                                                        "callback": ($c) => {
                                                                                                                            interface = (() => {
                                                                                                                                const FOO = $c;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                token;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                data;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                value;
                                                                                                                            })();
                                                                                                                            FIXME;
                                                                                                                            COPY;
                                                                                                                            STRING;
                                                                                                                        },
                                                                                                                    });
                                                                                                                },
                                                                                                            },
                                                                                                            "namespace selection": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["reference", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        parameters[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "return type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "interface": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let interface_s = {
                                                                "type": ["group", {
                                                                        "members": {},
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "interface": (() => {
                                                                            const FOO = interface_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "interface": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_type = ["interface", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "void": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_type = ["void", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function missing_handler_NIC($ip) {
        function temp_NIC($ip) {
            let guaranteed_s = ["yes", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "guaranteed": (() => {
                            const FOO = guaranteed_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "guaranteed": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "no": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let on_missing_s = {
                                                                "strategy": ["literal", {
                                                                        "type": ["string", {
                                                                                "value": "",
                                                                            }],
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "on missing": (() => {
                                                                            const FOO = on_missing_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "on missing": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                guaranteed = ["no", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "yes": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                guaranteed = ["yes", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function named_procedure_call_NIC($ip) {
        function temp_NIC($ip) {
            let procedure_call_s = {
                "interface arguments": {},
            };
            let type_s = ["local", {
                    "procedure": "*procedure*",
                }];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "procedure call": (() => {
                            const FOO = procedure_call_s;
                        })(), FIXME, COPY,
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "procedure call": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "external": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let builder_s = "*builder*";
                                                            let method_s = "*method*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "builder": (() => {
                                                                            const FOO = builder_s;
                                                                        })(), FIXME, COPY,
                                                                        "method": (() => {
                                                                            const FOO = method_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "builder": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    builder = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                    "method": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    method = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["external", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "local": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let procedure_s = "*procedure*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "procedure": (() => {
                                                                            const FOO = procedure_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "procedure": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    procedure = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["local", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function namespace_reference_NIC($ip) {
        function temp_NIC($ip) {
            let namespace_s = "*namespace*";
            const type_arguments_s = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "namespace": (() => {
                            const FOO = namespace_s;
                        })(), FIXME, COPY,
                        "type arguments": createDictionary(type_arguments),
                    });
                },
                "properties": {
                    "namespace": {
                        "onExists": ($c) => {
                            return $b.context.expectQuotedString({
                                "callback": ($c) => {
                                    namespace = (() => {
                                        const FOO = $c;
                                        FIXME;
                                        STEP;
                                        token;
                                        FIXME;
                                        STEP;
                                        data;
                                        FIXME;
                                        STEP;
                                        value;
                                    })();
                                    FIXME;
                                    COPY;
                                    STRING;
                                },
                            });
                        },
                    },
                    "type arguments": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let type_s = "*type argument type*";
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "type": (() => {
                                                                    const FOO = type_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "type": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectQuotedString({
                                                                        "callback": ($c) => {
                                                                            type = (() => {
                                                                                const FOO = $c;
                                                                                FIXME;
                                                                                STEP;
                                                                                token;
                                                                                FIXME;
                                                                                STEP;
                                                                                data;
                                                                                FIXME;
                                                                                STEP;
                                                                                value;
                                                                            })();
                                                                            FIXME;
                                                                            COPY;
                                                                            STRING;
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        type_arguments[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function namespace_selection_NIC($ip) {
        function temp_NIC($ip) {
            let which_s = ["current", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "which": (() => {
                            const FOO = which_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "which": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "current": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                which = ["current", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "other": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let namespace_reference_s = {
                                                                "namespace": "*namespace*",
                                                                "type arguments": {},
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "namespace reference": (() => {
                                                                            const FOO = namespace_reference_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "namespace reference": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                which = ["other", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function nested_type_reference_NIC($ip) {
        function temp_NIC($ip) {
            let namespace_reference_s = {
                "namespace": "*namespace*",
                "type arguments": {},
            };
            const steps_s = [];
            let type_s = "*type reference*";
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "namespace reference": (() => {
                            const FOO = namespace_reference_s;
                        })(), FIXME, COPY,
                        "steps": (() => {
                            const FOO = steps_s;
                        })(), FIXME, COPY,
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "namespace reference": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "steps": {
                        "onExists": ($c) => {
                            return wrap_NIC({});
                        },
                    },
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectQuotedString({
                                "callback": ($c) => {
                                    type = (() => {
                                        const FOO = $c;
                                        FIXME;
                                        STEP;
                                        token;
                                        FIXME;
                                        STEP;
                                        data;
                                        FIXME;
                                        STEP;
                                        value;
                                    })();
                                    FIXME;
                                    COPY;
                                    STRING;
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function procedure_block_NIC($ip) {
        function temp_NIC($ip) {
            const effects_s = [];
            const markers_s = {};
            const nested_procedures_s = {};
            let return_value_s = ["void", {}];
            const states_s = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "effects": (() => {
                            const FOO = effects_s;
                        })(), FIXME, COPY,
                        "markers": createDictionary(markers),
                        "nested procedures": createDictionary(nested_procedures),
                        "return value": (() => {
                            const FOO = return_value_s;
                        })(), FIXME, COPY,
                        "states": createDictionary(states),
                    });
                },
                "properties": {
                    "effects": {
                        "onExists": ($c) => {
                            return wrap_NIC({});
                        },
                    },
                    "markers": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let selection_s = {
                                                        "start": "FIXME COMP",
                                                        "steps": [],
                                                    };
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "selection": (() => {
                                                                    const FOO = selection_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "selection": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        markers[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "nested procedures": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let specification_s = {
                                                        "block": "FIXME COMP",
                                                        "parameters": {},
                                                        "return type": ["void", {}],
                                                    };
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "specification": (() => {
                                                                    const FOO = specification_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "specification": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        nested_procedures[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "return value": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "interface": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let expression_s = {
                                                                "type": ["initialize", {
                                                                        "type": ["method", {
                                                                                "strategy": ["procedure implementation", {
                                                                                        "block": "FIXME COMP",
                                                                                    }],
                                                                            }],
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "expression": (() => {
                                                                            const FOO = expression_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "expression": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_value = ["interface", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "void": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                return_value = ["void", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                    "states": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let type_s = ["string", {
                                                            "initial value": "",
                                                        }];
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "type": (() => {
                                                                    const FOO = type_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "type": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectTaggedUnion({
                                                                        "options": {
                                                                            "dictionary": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let type_s = {
                                                                                                        "namespace reference": "FIXME COMP",
                                                                                                        "steps": [],
                                                                                                        "type": "*type reference*",
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "type": (() => {
                                                                                                                    const FOO = type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["dictionary", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                            "list": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let type_s = {
                                                                                                        "namespace reference": "FIXME COMP",
                                                                                                        "steps": [],
                                                                                                        "type": "*type reference*",
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "type": (() => {
                                                                                                                    const FOO = type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["list", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                            "string": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let initial_value_s = "";
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "initial value": (() => {
                                                                                                                    const FOO = initial_value_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "initial value": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectQuotedString({
                                                                                                                        "callback": ($c) => {
                                                                                                                            initial_value = (() => {
                                                                                                                                const FOO = $c;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                token;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                data;
                                                                                                                                FIXME;
                                                                                                                                STEP;
                                                                                                                                value;
                                                                                                                            })();
                                                                                                                            FIXME;
                                                                                                                            COPY;
                                                                                                                            STRING;
                                                                                                                        },
                                                                                                                    });
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["string", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                            "type5": ($c) => {
                                                                                return wrap_NIC({
                                                                                    "handler": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let expression_s = {
                                                                                                        "strategy": ["literal", {
                                                                                                                "type": ["string", {
                                                                                                                        "value": "",
                                                                                                                    }],
                                                                                                            }],
                                                                                                    };
                                                                                                    let nested_type_s = {
                                                                                                        "namespace reference": "FIXME COMP",
                                                                                                        "steps": [],
                                                                                                        "type": "*type reference*",
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "expression": (() => {
                                                                                                                    const FOO = expression_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                                "nested type": (() => {
                                                                                                                    const FOO = nested_type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "expression": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                            "nested type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        type = ["type5", (() => {
                                                                                                                const FOO = $c;
                                                                                                            })(), FIXME, COPY];
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                });
                                                                            },
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        states[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function procedure_call_NIC($ip) {
        function temp_NIC($ip) {
            const interface_arguments_s = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "interface arguments": createDictionary(interface_arguments),
                    });
                },
                "properties": {
                    "interface arguments": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let expression_s = {
                                                        "type": ["initialize", {
                                                                "type": ["method", {
                                                                        "strategy": ["procedure implementation", {
                                                                                "block": "FIXME COMP",
                                                                            }],
                                                                    }],
                                                            }],
                                                    };
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "expression": (() => {
                                                                    const FOO = expression_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "expression": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        interface_arguments[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function root_NIC($ip) {
        function temp_NIC($ip) {
            const function_implementations_s = {};
            const namespaces_s = {};
            const procedure_implementations_s = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "function implementations": createDictionary(function_implementations),
                        "namespaces": createDictionary(namespaces),
                        "procedure implementations": createDictionary(procedure_implementations),
                    });
                },
                "properties": {
                    "function implementations": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let block_s = {
                                                        "expression": "FIXME COMP",
                                                        "functions": {},
                                                    };
                                                    let declaration_s = "*function declaration*";
                                                    let namespace_reference_s = {
                                                        "namespace": "*namespace*",
                                                        "type arguments": {},
                                                    };
                                                    const type_parameters_s = {};
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "block": (() => {
                                                                    const FOO = block_s;
                                                                })(), FIXME, COPY,
                                                                "declaration": (() => {
                                                                    const FOO = declaration_s;
                                                                })(), FIXME, COPY,
                                                                "namespace reference": (() => {
                                                                    const FOO = namespace_reference_s;
                                                                })(), FIXME, COPY,
                                                                "type parameters": createDictionary(type_parameters),
                                                            });
                                                        },
                                                        "properties": {
                                                            "block": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                            "declaration": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectQuotedString({
                                                                        "callback": ($c) => {
                                                                            declaration = (() => {
                                                                                const FOO = $c;
                                                                                FIXME;
                                                                                STEP;
                                                                                token;
                                                                                FIXME;
                                                                                STEP;
                                                                                data;
                                                                                FIXME;
                                                                                STEP;
                                                                                value;
                                                                            })();
                                                                            FIXME;
                                                                            COPY;
                                                                            STRING;
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                            "namespace reference": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                            "type parameters": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({});
                                                                                                },
                                                                                                "properties": {},
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                type_parameters[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        function_implementations[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "namespaces": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    const function_declarations_s = {};
                                                    const interface_builders_s = {};
                                                    const interfaces_s = {};
                                                    const procedure_declarations_s = {};
                                                    const type_parameters_s = {};
                                                    const types_s = {};
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "function declarations": createDictionary(function_declarations),
                                                                "interface builders": createDictionary(interface_builders),
                                                                "interfaces": createDictionary(interfaces),
                                                                "procedure declarations": createDictionary(procedure_declarations),
                                                                "type parameters": createDictionary(type_parameters),
                                                                "types": createDictionary(types),
                                                            });
                                                        },
                                                        "properties": {
                                                            "function declarations": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            let declaration_s = {
                                                                                                "in": "FIXME COMP",
                                                                                                "out": "FIXME COMP",
                                                                                            };
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "declaration": (() => {
                                                                                                            const FOO = declaration_s;
                                                                                                        })(), FIXME, COPY,
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "declaration": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectFoo({});
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                function_declarations[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                            "interface builders": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            const methods_s = {};
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "methods": createDictionary(methods),
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "methods": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = (() => {
                                                                                                                            const FOO = $c;
                                                                                                                        })();
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($ip) => {
                                                                                                                                function temp_NIC($ip) {
                                                                                                                                    let declaration_s = {
                                                                                                                                        "interfaces": {},
                                                                                                                                        "return type": ["void", {}],
                                                                                                                                    };
                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                            $ip.out({
                                                                                                                                                "declaration": (() => {
                                                                                                                                                    const FOO = declaration_s;
                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                            });
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                            "declaration": {
                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    });
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($c) => {
                                                                                                                                        methods[(() => {
                                                                                                                                            const FOO = y_m;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            token;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            data;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            value;
                                                                                                                                        })()];
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                        STRING;
                                                                                                                                        (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            })({}),
                                                                                                                        });
                                                                                                                    },
                                                                                                                }),
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                interface_builders[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                            "interfaces": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            let definition_s = {
                                                                                                "type": ["group", {
                                                                                                        "members": {},
                                                                                                    }],
                                                                                            };
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "definition": (() => {
                                                                                                            const FOO = definition_s;
                                                                                                        })(), FIXME, COPY,
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "definition": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectFoo({});
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                interfaces[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                            "procedure declarations": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            const builders_s = {};
                                                                                            let context_s = {
                                                                                                "namespace selection": "FIXME COMP",
                                                                                                "type": "*type reference*",
                                                                                            };
                                                                                            const functions_s = {};
                                                                                            const interfaces_s = {};
                                                                                            let return_type_s = ["void", {}];
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "builders": createDictionary(builders),
                                                                                                        "context": (() => {
                                                                                                            const FOO = context_s;
                                                                                                        })(), FIXME, COPY,
                                                                                                        "functions": createDictionary(functions),
                                                                                                        "interfaces": createDictionary(interfaces),
                                                                                                        "return type": (() => {
                                                                                                            const FOO = return_type_s;
                                                                                                        })(), FIXME, COPY,
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "builders": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = (() => {
                                                                                                                            const FOO = $c;
                                                                                                                        })();
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($ip) => {
                                                                                                                                function temp_NIC($ip) {
                                                                                                                                    let builder_s = "*referenced builder*";
                                                                                                                                    let namespace_selection_s = {
                                                                                                                                        "which": ["current", {}],
                                                                                                                                    };
                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                            $ip.out({
                                                                                                                                                "builder": (() => {
                                                                                                                                                    const FOO = builder_s;
                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                                "namespace selection": (() => {
                                                                                                                                                    const FOO = namespace_selection_s;
                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                            });
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                            "builder": {
                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                    return $b.context.expectQuotedString({
                                                                                                                                                        "callback": ($c) => {
                                                                                                                                                            builder = (() => {
                                                                                                                                                                const FOO = $c;
                                                                                                                                                                FIXME;
                                                                                                                                                                STEP;
                                                                                                                                                                token;
                                                                                                                                                                FIXME;
                                                                                                                                                                STEP;
                                                                                                                                                                data;
                                                                                                                                                                FIXME;
                                                                                                                                                                STEP;
                                                                                                                                                                value;
                                                                                                                                                            })();
                                                                                                                                                            FIXME;
                                                                                                                                                            COPY;
                                                                                                                                                            STRING;
                                                                                                                                                        },
                                                                                                                                                    });
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            "namespace selection": {
                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    });
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($c) => {
                                                                                                                                        builders[(() => {
                                                                                                                                            const FOO = y_m;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            token;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            data;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            value;
                                                                                                                                        })()];
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                        STRING;
                                                                                                                                        (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            })({}),
                                                                                                                        });
                                                                                                                    },
                                                                                                                }),
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "context": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectFoo({});
                                                                                                        },
                                                                                                    },
                                                                                                    "functions": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = (() => {
                                                                                                                            const FOO = $c;
                                                                                                                        })();
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($ip) => {
                                                                                                                                function temp_NIC($ip) {
                                                                                                                                    let declaration_s = {
                                                                                                                                        "in": "FIXME COMP",
                                                                                                                                        "out": "FIXME COMP",
                                                                                                                                    };
                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                            $ip.out({
                                                                                                                                                "declaration": (() => {
                                                                                                                                                    const FOO = declaration_s;
                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                            });
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                            "declaration": {
                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    });
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($c) => {
                                                                                                                                        functions[(() => {
                                                                                                                                            const FOO = y_m;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            token;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            data;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            value;
                                                                                                                                        })()];
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                        STRING;
                                                                                                                                        (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            })({}),
                                                                                                                        });
                                                                                                                    },
                                                                                                                }),
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "interfaces": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = (() => {
                                                                                                                            const FOO = $c;
                                                                                                                        })();
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($ip) => {
                                                                                                                                function temp_NIC($ip) {
                                                                                                                                    let interface_s = {
                                                                                                                                        "type": ["group", {
                                                                                                                                                "members": {},
                                                                                                                                            }],
                                                                                                                                    };
                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                            $ip.out({
                                                                                                                                                "interface": (() => {
                                                                                                                                                    const FOO = interface_s;
                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                            });
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                            "interface": {
                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    });
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($c) => {
                                                                                                                                        interfaces[(() => {
                                                                                                                                            const FOO = y_m;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            token;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            data;
                                                                                                                                            FIXME;
                                                                                                                                            STEP;
                                                                                                                                            value;
                                                                                                                                        })()];
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                        STRING;
                                                                                                                                        (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        FIXME;
                                                                                                                                        COPY;
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            })({}),
                                                                                                                        });
                                                                                                                    },
                                                                                                                }),
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "return type": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectTaggedUnion({
                                                                                                                "options": {
                                                                                                                    "interface": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": ($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip) => {
                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                            let interface_s = {
                                                                                                                                                "type": ["group", {
                                                                                                                                                        "members": {},
                                                                                                                                                    }],
                                                                                                                                            };
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({
                                                                                                                                                        "interface": (() => {
                                                                                                                                                            const FOO = interface_s;
                                                                                                                                                        })(), FIXME, COPY,
                                                                                                                                                    });
                                                                                                                                                },
                                                                                                                                                "properties": {
                                                                                                                                                    "interface": {
                                                                                                                                                        "onExists": ($c) => {
                                                                                                                                                            return $b.context.expectFoo({});
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                return_type = ["interface", (() => {
                                                                                                                                                        const FOO = $c;
                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            },
                                                                                                                        });
                                                                                                                    },
                                                                                                                    "void": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": ($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip) => {
                                                                                                                                        function temp_NIC($ip) {
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({});
                                                                                                                                                },
                                                                                                                                                "properties": {},
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                return_type = ["void", (() => {
                                                                                                                                                        const FOO = $c;
                                                                                                                                                    })(), FIXME, COPY];
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            },
                                                                                                                        });
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                procedure_declarations[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                            "type parameters": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({});
                                                                                                },
                                                                                                "properties": {},
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                type_parameters[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                            "types": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            let type_s = {
                                                                                                "occurence": ["required", {}],
                                                                                                "type": ["string", {}],
                                                                                            };
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "type": (() => {
                                                                                                            const FOO = type_s;
                                                                                                        })(), FIXME, COPY,
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "type": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectFoo({});
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                types[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        namespaces[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                    "procedure implementations": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let block_s = {
                                                        "effects": [],
                                                        "markers": {},
                                                        "nested procedures": {},
                                                        "return value": ["void", {}],
                                                        "states": {},
                                                    };
                                                    let declaration_s = "*procedure declaration*";
                                                    let namespace_reference_s = {
                                                        "namespace": "*namespace*",
                                                        "type arguments": {},
                                                    };
                                                    const type_parameters_s = {};
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "block": (() => {
                                                                    const FOO = block_s;
                                                                })(), FIXME, COPY,
                                                                "declaration": (() => {
                                                                    const FOO = declaration_s;
                                                                })(), FIXME, COPY,
                                                                "namespace reference": (() => {
                                                                    const FOO = namespace_reference_s;
                                                                })(), FIXME, COPY,
                                                                "type parameters": createDictionary(type_parameters),
                                                            });
                                                        },
                                                        "properties": {
                                                            "block": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                            "declaration": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectQuotedString({
                                                                        "callback": ($c) => {
                                                                            declaration = (() => {
                                                                                const FOO = $c;
                                                                                FIXME;
                                                                                STEP;
                                                                                token;
                                                                                FIXME;
                                                                                STEP;
                                                                                data;
                                                                                FIXME;
                                                                                STEP;
                                                                                value;
                                                                            })();
                                                                            FIXME;
                                                                            COPY;
                                                                            STRING;
                                                                        },
                                                                    });
                                                                },
                                                            },
                                                            "namespace reference": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                            "type parameters": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = (() => {
                                                                                    const FOO = $c;
                                                                                })();
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({});
                                                                                                },
                                                                                                "properties": {},
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                type_parameters[(() => {
                                                                                                    const FOO = y_m;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    token;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    data;
                                                                                                    FIXME;
                                                                                                    STEP;
                                                                                                    value;
                                                                                                })()];
                                                                                                FIXME;
                                                                                                COPY;
                                                                                                STRING;
                                                                                                (() => {
                                                                                                    const FOO = $c;
                                                                                                })();
                                                                                                FIXME;
                                                                                                COPY;
                                                                                            },
                                                                                        });
                                                                                    })({}),
                                                                                });
                                                                            },
                                                                        }),
                                                                    });
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        procedure_implementations[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function string_expression_NIC($ip) {
        function temp_NIC($ip) {
            let strategy_s = ["literal", {
                    "value": "",
                }];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "strategy": (() => {
                            const FOO = strategy_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "strategy": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "literal": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let value_s = "";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "value": (() => {
                                                                            const FOO = value_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "value": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    value = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["literal", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "select": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let context_s = {
                                                                "start": "FIXME COMP",
                                                                "steps": [],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "context": (() => {
                                                                            const FOO = context_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "context": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["select", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "state": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let state_s = "*state*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "state": (() => {
                                                                            const FOO = state_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "state": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    state = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["state", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function type_NIC($ip) {
        function temp_NIC($ip) {
            let occurence_s = ["required", {}];
            let type_s = ["string", {}];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "occurence": (() => {
                            const FOO = occurence_s;
                        })(), FIXME, COPY,
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "occurence": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "optional": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                occurence = ["optional", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "required": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                occurence = ["required", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "boolean": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["boolean", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "dictionary": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let entry_s = {
                                                                "occurence": ["required", {}],
                                                                "type": ["string", {}],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "entry": (() => {
                                                                            const FOO = entry_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "entry": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["dictionary", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "group": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            const properties_s = {};
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "properties": createDictionary(properties),
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "properties": {
                                                                        "onExists": ($c) => {
                                                                            return wrap_NIC({
                                                                                "handler": $b.context.expectDictionary({
                                                                                    "onProperty": ($c) => {
                                                                                        const y_m = (() => {
                                                                                            const FOO = $c;
                                                                                        })();
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let type_s = {
                                                                                                        "occurence": ["required", {}],
                                                                                                        "type": ["string", {}],
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "type": (() => {
                                                                                                                    const FOO = type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        properties[(() => {
                                                                                                            const FOO = y_m;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            token;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            data;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            value;
                                                                                                        })()];
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                        STRING;
                                                                                                        (() => {
                                                                                                            const FOO = $c;
                                                                                                        })();
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                }),
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["group", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "list": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let element_s = {
                                                                "occurence": ["required", {}],
                                                                "type": ["string", {}],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "element": (() => {
                                                                            const FOO = element_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "element": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["list", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "number": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["number", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "string": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({});
                                                                },
                                                                "properties": {},
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["string", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "tagged union": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            const options_s = {};
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "options": createDictionary(options),
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "options": {
                                                                        "onExists": ($c) => {
                                                                            return wrap_NIC({
                                                                                "handler": $b.context.expectDictionary({
                                                                                    "onProperty": ($c) => {
                                                                                        const y_m = (() => {
                                                                                            const FOO = $c;
                                                                                        })();
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let type_s = {
                                                                                                        "occurence": ["required", {}],
                                                                                                        "type": ["string", {}],
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "type": (() => {
                                                                                                                    const FOO = type_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "type": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        options[(() => {
                                                                                                            const FOO = y_m;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            token;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            data;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            value;
                                                                                                        })()];
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                        STRING;
                                                                                                        (() => {
                                                                                                            const FOO = $c;
                                                                                                        })();
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                }),
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["tagged union", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "type argument": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let argument_s = "*type argument*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "argument": (() => {
                                                                            const FOO = argument_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "argument": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    argument = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["type argument", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "type reference": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let type_s = {
                                                                "namespace selection": "FIXME COMP",
                                                                "type": "*type reference*",
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "type": (() => {
                                                                            const FOO = type_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "type": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                type = ["type reference", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function type_expression_NIC($ip) {
        function temp_NIC($ip) {
            let strategy_s = ["literal", {
                    "type": ["string", {
                            "value": "",
                        }],
                }];
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "strategy": (() => {
                            const FOO = strategy_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "strategy": {
                        "onExists": ($c) => {
                            return $b.context.expectTaggedUnion({
                                "options": {
                                    "copy": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let context_s = {
                                                                "missing handler": "FIXME COMP",
                                                                "start": "FIXME COMP",
                                                                "steps": [],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "context": (() => {
                                                                            const FOO = context_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "context": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["copy", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "dictionary from state": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let state_s = "*state*";
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "state": (() => {
                                                                            const FOO = state_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "state": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectQuotedString({
                                                                                "callback": ($c) => {
                                                                                    state = (() => {
                                                                                        const FOO = $c;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        token;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        data;
                                                                                        FIXME;
                                                                                        STEP;
                                                                                        value;
                                                                                    })();
                                                                                    FIXME;
                                                                                    COPY;
                                                                                    STRING;
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["dictionary from state", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "literal": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let type_s = ["string", {
                                                                    "value": "",
                                                                }];
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "type": (() => {
                                                                            const FOO = type_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "type": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectTaggedUnion({
                                                                                "options": {
                                                                                    "boolean": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let value_s = "true";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "value": (() => {
                                                                                                                            const FOO = value_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "value": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    value = (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["boolean", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "dictionary": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({});
                                                                                                                },
                                                                                                                "properties": {},
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["dictionary", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "group": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            const properties_s = {};
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "properties": createDictionary(properties),
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "properties": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return wrap_NIC({
                                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                                    "onProperty": ($c) => {
                                                                                                                                        const y_m = (() => {
                                                                                                                                            const FOO = $c;
                                                                                                                                        })();
                                                                                                                                        return wrap_NIC({
                                                                                                                                            "handler": (($ip) => {
                                                                                                                                                function temp_NIC($ip) {
                                                                                                                                                    let expression_s = {
                                                                                                                                                        "strategy": ["literal", {
                                                                                                                                                                "type": ["string", {
                                                                                                                                                                        "value": "",
                                                                                                                                                                    }],
                                                                                                                                                            }],
                                                                                                                                                    };
                                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                                            $ip.out({
                                                                                                                                                                "expression": (() => {
                                                                                                                                                                    const FOO = expression_s;
                                                                                                                                                                })(), FIXME, COPY,
                                                                                                                                                            });
                                                                                                                                                        },
                                                                                                                                                        "properties": {
                                                                                                                                                            "expression": {
                                                                                                                                                                "onExists": ($c) => {
                                                                                                                                                                    return $b.context.expectFoo({});
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    });
                                                                                                                                                }
                                                                                                                                                return temp_NIC({
                                                                                                                                                    "out": ($c) => {
                                                                                                                                                        properties[(() => {
                                                                                                                                                            const FOO = y_m;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            token;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            data;
                                                                                                                                                            FIXME;
                                                                                                                                                            STEP;
                                                                                                                                                            value;
                                                                                                                                                        })()];
                                                                                                                                                        FIXME;
                                                                                                                                                        COPY;
                                                                                                                                                        STRING;
                                                                                                                                                        (() => {
                                                                                                                                                            const FOO = $c;
                                                                                                                                                        })();
                                                                                                                                                        FIXME;
                                                                                                                                                        COPY;
                                                                                                                                                    },
                                                                                                                                                });
                                                                                                                                            })({}),
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                }),
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["group", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "list": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({});
                                                                                                                },
                                                                                                                "properties": {},
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["list", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "number": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let value_s = "0";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "value": (() => {
                                                                                                                            const FOO = value_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "value": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    value = (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["number", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "string": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let value_s = "";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "value": (() => {
                                                                                                                            const FOO = value_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "value": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    value = (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["string", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "tagged union": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let data_s = {
                                                                                                                "strategy": ["literal", {
                                                                                                                        "type": ["string", {
                                                                                                                                "value": "",
                                                                                                                            }],
                                                                                                                    }],
                                                                                                            };
                                                                                                            let option_s = "*option*";
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "data": (() => {
                                                                                                                            const FOO = data_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                        "option": (() => {
                                                                                                                            const FOO = option_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "data": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectFoo({});
                                                                                                                        },
                                                                                                                    },
                                                                                                                    "option": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectQuotedString({
                                                                                                                                "callback": ($c) => {
                                                                                                                                    option = (() => {
                                                                                                                                        const FOO = $c;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        token;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        data;
                                                                                                                                        FIXME;
                                                                                                                                        STEP;
                                                                                                                                        value;
                                                                                                                                    })();
                                                                                                                                    FIXME;
                                                                                                                                    COPY;
                                                                                                                                    STRING;
                                                                                                                                },
                                                                                                                            });
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["tagged union", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "type argument": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({});
                                                                                                                },
                                                                                                                "properties": {},
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["type argument", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                    "type reference": ($c) => {
                                                                                        return wrap_NIC({
                                                                                            "handler": ($c) => {
                                                                                                return wrap_NIC({
                                                                                                    "handler": (($ip) => {
                                                                                                        function temp_NIC($ip) {
                                                                                                            let expression_s = {
                                                                                                                "strategy": ["literal", {
                                                                                                                        "type": ["string", {
                                                                                                                                "value": "",
                                                                                                                            }],
                                                                                                                    }],
                                                                                                            };
                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                "onEnd": ($c) => {
                                                                                                                    $ip.out({
                                                                                                                        "expression": (() => {
                                                                                                                            const FOO = expression_s;
                                                                                                                        })(), FIXME, COPY,
                                                                                                                    });
                                                                                                                },
                                                                                                                "properties": {
                                                                                                                    "expression": {
                                                                                                                        "onExists": ($c) => {
                                                                                                                            return $b.context.expectFoo({});
                                                                                                                        },
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        }
                                                                                                        return temp_NIC({
                                                                                                            "out": ($c) => {
                                                                                                                type = ["type reference", (() => {
                                                                                                                        const FOO = $c;
                                                                                                                    })(), FIXME, COPY];
                                                                                                            },
                                                                                                        });
                                                                                                    })({}),
                                                                                                });
                                                                                            },
                                                                                        });
                                                                                    },
                                                                                },
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["literal", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "map": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let context_s = {
                                                                "missing handler": "FIXME COMP",
                                                                "start": "FIXME COMP",
                                                                "steps": [],
                                                            };
                                                            let entry_s = {
                                                                "strategy": ["literal", {
                                                                        "type": ["string", {
                                                                                "value": "",
                                                                            }],
                                                                    }],
                                                            };
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "context": (() => {
                                                                            const FOO = context_s;
                                                                        })(), FIXME, COPY,
                                                                        "entry": (() => {
                                                                            const FOO = entry_s;
                                                                        })(), FIXME, COPY,
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "context": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                    "entry": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["map", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                    "switch": ($c) => {
                                        return wrap_NIC({
                                            "handler": ($c) => {
                                                return wrap_NIC({
                                                    "handler": (($ip) => {
                                                        function temp_NIC($ip) {
                                                            let context_s = {
                                                                "missing handler": "FIXME COMP",
                                                                "start": "FIXME COMP",
                                                                "steps": [],
                                                            };
                                                            const options_s = {};
                                                            return $b.context.expectVerboseGroup({
                                                                "onEnd": ($c) => {
                                                                    $ip.out({
                                                                        "context": (() => {
                                                                            const FOO = context_s;
                                                                        })(), FIXME, COPY,
                                                                        "options": createDictionary(options),
                                                                    });
                                                                },
                                                                "properties": {
                                                                    "context": {
                                                                        "onExists": ($c) => {
                                                                            return $b.context.expectFoo({});
                                                                        },
                                                                    },
                                                                    "options": {
                                                                        "onExists": ($c) => {
                                                                            return wrap_NIC({
                                                                                "handler": $b.context.expectDictionary({
                                                                                    "onProperty": ($c) => {
                                                                                        const y_m = (() => {
                                                                                            const FOO = $c;
                                                                                        })();
                                                                                        return wrap_NIC({
                                                                                            "handler": (($ip) => {
                                                                                                function temp_NIC($ip) {
                                                                                                    let expression_s = {
                                                                                                        "strategy": ["literal", {
                                                                                                                "type": ["string", {
                                                                                                                        "value": "",
                                                                                                                    }],
                                                                                                            }],
                                                                                                    };
                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                        "onEnd": ($c) => {
                                                                                                            $ip.out({
                                                                                                                "expression": (() => {
                                                                                                                    const FOO = expression_s;
                                                                                                                })(), FIXME, COPY,
                                                                                                            });
                                                                                                        },
                                                                                                        "properties": {
                                                                                                            "expression": {
                                                                                                                "onExists": ($c) => {
                                                                                                                    return $b.context.expectFoo({});
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                                return temp_NIC({
                                                                                                    "out": ($c) => {
                                                                                                        options[(() => {
                                                                                                            const FOO = y_m;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            token;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            data;
                                                                                                            FIXME;
                                                                                                            STEP;
                                                                                                            value;
                                                                                                        })()];
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                        STRING;
                                                                                                        (() => {
                                                                                                            const FOO = $c;
                                                                                                        })();
                                                                                                        FIXME;
                                                                                                        COPY;
                                                                                                    },
                                                                                                });
                                                                                            })({}),
                                                                                        });
                                                                                    },
                                                                                }),
                                                                            });
                                                                        },
                                                                    },
                                                                },
                                                            });
                                                        }
                                                        return temp_NIC({
                                                            "out": ($c) => {
                                                                strategy = ["switch", (() => {
                                                                        const FOO = $c;
                                                                    })(), FIXME, COPY];
                                                            },
                                                        });
                                                    })({}),
                                                });
                                            },
                                        });
                                    },
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function type_expression_block_NIC($ip) {
        function temp_NIC($ip) {
            let expression_s = {
                "strategy": ["literal", {
                        "type": ["string", {
                                "value": "",
                            }],
                    }],
            };
            const functions_s = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "expression": (() => {
                            const FOO = expression_s;
                        })(), FIXME, COPY,
                        "functions": createDictionary(functions),
                    });
                },
                "properties": {
                    "expression": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "functions": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = (() => {
                                            const FOO = $c;
                                        })();
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    let block_s = {
                                                        "expression": "FIXME COMP",
                                                        "functions": {},
                                                    };
                                                    let declaration_s = {
                                                        "in": "FIXME COMP",
                                                        "out": "FIXME COMP",
                                                    };
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "block": (() => {
                                                                    const FOO = block_s;
                                                                })(), FIXME, COPY,
                                                                "declaration": (() => {
                                                                    const FOO = declaration_s;
                                                                })(), FIXME, COPY,
                                                            });
                                                        },
                                                        "properties": {
                                                            "block": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                            "declaration": {
                                                                "onExists": ($c) => {
                                                                    return $b.context.expectFoo({});
                                                                },
                                                            },
                                                        },
                                                    });
                                                }
                                                return temp_NIC({
                                                    "out": ($c) => {
                                                        functions[(() => {
                                                            const FOO = y_m;
                                                            FIXME;
                                                            STEP;
                                                            token;
                                                            FIXME;
                                                            STEP;
                                                            data;
                                                            FIXME;
                                                            STEP;
                                                            value;
                                                        })()];
                                                        FIXME;
                                                        COPY;
                                                        STRING;
                                                        (() => {
                                                            const FOO = $c;
                                                        })();
                                                        FIXME;
                                                        COPY;
                                                    },
                                                });
                                            })({}),
                                        });
                                    },
                                }),
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function type_reference_NIC($ip) {
        function temp_NIC($ip) {
            let namespace_selection_s = {
                "which": ["current", {}],
            };
            let type_s = "*type reference*";
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "namespace selection": (() => {
                            const FOO = namespace_selection_s;
                        })(), FIXME, COPY,
                        "type": (() => {
                            const FOO = type_s;
                        })(), FIXME, COPY,
                    });
                },
                "properties": {
                    "namespace selection": {
                        "onExists": ($c) => {
                            return $b.context.expectFoo({});
                        },
                    },
                    "type": {
                        "onExists": ($c) => {
                            return $b.context.expectQuotedString({
                                "callback": ($c) => {
                                    type = (() => {
                                        const FOO = $c;
                                        FIXME;
                                        STEP;
                                        token;
                                        FIXME;
                                        STEP;
                                        data;
                                        FIXME;
                                        STEP;
                                        value;
                                    })();
                                    FIXME;
                                    COPY;
                                    STRING;
                                },
                            });
                        },
                    },
                },
            });
        }
        return temp_NIC({
            "out": ($c) => {
                $ip.callback((() => {
                    const FOO = $c;
                })(), FIXME, COPY);
            },
        });
    }
    function wrap_NIC($ip) {
        return {
            "exists": $ip["handler"],
            "missing": ($c) => { },
        };
    }
    return wrap_NIC({
        "handler": root_NIC({
            "callback": $i["callback"],
        }),
    });
}
exports.createDeserializer_pi = createDeserializer_pi;
