
/*eslint
    "@typescript-eslint/no-unused-vars": 0,
    "camelcase": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "quote-props": 0,
    "max-len": 0
*/
import * as astn from "astn"
function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void
}

interface IArray<T> {
    forEach(callback: (e: T) => void): void
}

function createDictionary<T>(raw: { [key: string]: T }): IDictionary<T> {
    return {
        forEach: (callback: (e: T, key: string) => void) => { Object.keys(raw).sort().forEach((key) => { callback(raw[key], key) }) },
    }
}

export type __string_T = {
}

export type __type_argument_T = {
    readonly "argument": string
}

export type __upsteps_T = {
}

export type __typex_T = {
    readonly "type": string
    readonly "upsteps": IArray<__upsteps_T>
}

export type __type_TU =
    | ["string", __string_T]
    | ["type argument", __type_argument_T]
    | ["typex", __typex_T]

export type __parameters_T = {
    readonly "type": __type_TU
}

export type __callback_T = {
    readonly "parameters": IDictionary<__parameters_T>
}

export type __type_arguments_T = {
    readonly "type": string
}

export type __interface_T = {
    readonly "interface": string
    readonly "type arguments": IDictionary<__type_arguments_T>
}

export type __type_parameters_TU =
    | ["callback", __callback_T]
    | ["interface", __interface_T]

export type __parameters_function_T = {
    readonly "type": __type_parameters_TU
}

export type __function_T = {
    readonly "block": __statement_block_T
    readonly "parameters": IDictionary<__parameters_function_T>
    readonly "return type": string
}

export type __functions_T = {
    readonly "function": __function_T
}

export type __parameters_method_T = {
    readonly "type": string
}

export type __method_T = {
    readonly "parameters": IDictionary<__parameters_method_T>
    readonly "return type": string
}

export type __type_arguments_sub_interface_T = {
    readonly "type": string
}

export type __sub_interface_T = {
    readonly "interface": string
    readonly "type arguments": IDictionary<__type_arguments_sub_interface_T>
}

export type __type_members_TU =
    | ["method", __method_T]
    | ["sub interface", __sub_interface_T]

export type __members_T = {
    readonly "type": __type_members_TU
}

export type __interfaces_T = {
    readonly "members": IDictionary<__members_T>
}

export type __namespaces_T = {
    readonly "namespace": __namespace_T
}

export type __type_parameters_T = {
}

export type __types_T = {
    readonly "type": __type_T
}

export type __namespace_T = {
    readonly "functions": IDictionary<__functions_T>
    readonly "interfaces": IDictionary<__interfaces_T>
    readonly "namespaces": IDictionary<__namespaces_T>
    readonly "type parameters": IDictionary<__type_parameters_T>
    readonly "types": IDictionary<__types_T>
}

export type __root_T = {
    readonly "namespace": __namespace_T
}

export type __nested_functions_T = {
    readonly "function": __function_T
}

export type __if_T = {
}

export type __type_statements_TU =
    | ["if", __if_T]

export type __statements_T = {
    readonly "type": __type_statements_TU
}

export type __statement_block_T = {
    readonly "nested functions": IDictionary<__nested_functions_T>
    readonly "statements": IArray<__statements_T>
}

export type __boolean_T = {
}

export type __dictionary_T = {
    readonly "entry": __type_T
}

export type __optional_T = {
}

export type __required_T = {
}

export type __occurence_TU =
    | ["optional", __optional_T]
    | ["required", __required_T]

export type __properties_T = {
    readonly "occurence": __occurence_TU
    readonly "type": __type_T
}

export type __group_T = {
    readonly "properties": IDictionary<__properties_T>
}

export type __list_T = {
    readonly "element": __type_T
}

export type __number_T = {
}

export type __string_type_T = {
}

export type __options_T = {
    readonly "type": __type_T
}

export type __tagged_union_T = {
    readonly "options": IDictionary<__options_T>
}

export type __type_reference_T = {
    readonly "type": string
}

export type __type_type_TU =
    | ["boolean", __boolean_T]
    | ["dictionary", __dictionary_T]
    | ["group", __group_T]
    | ["list", __list_T]
    | ["number", __number_T]
    | ["string", __string_type_T]
    | ["tagged union", __tagged_union_T]
    | ["type reference", __type_reference_T]

export type __type_T = {
    readonly "type": __type_type_TU
}

export type __string_B = {
}

export type __type_argument_B = {
    readonly "argument" ?: string
}

export type __upsteps_B = {
}

export type __typex_B = {
    readonly "type" ?: string
    readonly "upsteps" ?: __upsteps_B[] //| { callback: (value: __upsteps_B ) => void }
}

export type __type_TU_Builder =
    | ["string", __string_B]
    | ["type argument", __type_argument_B]
    | ["typex", __typex_B]

export type __parameters_B = {
    readonly "type" ?: __type_TU_Builder
}

export type __callback_B = {
    readonly "parameters" ?: { [key:string]: __parameters_B } //| (add: (key: string, entry: __parameters_B ) => void )
}

export type __type_arguments_B = {
    readonly "type" ?: string
}

export type __interface_B = {
    readonly "interface" ?: string
    readonly "type arguments" ?: { [key:string]: __type_arguments_B } //| (add: (key: string, entry: __type_arguments_B ) => void )
}

export type __type_parameters_TU_Builder =
    | ["callback", __callback_B]
    | ["interface", __interface_B]

export type __parameters_function_B = {
    readonly "type" ?: __type_parameters_TU_Builder
}

export type __function_B = {
    readonly "block" ?: __statement_block_B
    readonly "parameters" ?: { [key:string]: __parameters_function_B } //| (add: (key: string, entry: __parameters_function_B ) => void )
    readonly "return type" ?: string
}

export type __functions_B = {
    readonly "function" ?: __function_B
}

export type __parameters_method_B = {
    readonly "type" ?: string
}

export type __method_B = {
    readonly "parameters" ?: { [key:string]: __parameters_method_B } //| (add: (key: string, entry: __parameters_method_B ) => void )
    readonly "return type" ?: string
}

export type __type_arguments_sub_interface_B = {
    readonly "type" ?: string
}

export type __sub_interface_B = {
    readonly "interface" ?: string
    readonly "type arguments" ?: { [key:string]: __type_arguments_sub_interface_B } //| (add: (key: string, entry: __type_arguments_sub_interface_B ) => void )
}

export type __type_members_TU_Builder =
    | ["method", __method_B]
    | ["sub interface", __sub_interface_B]

export type __members_B = {
    readonly "type" ?: __type_members_TU_Builder
}

export type __interfaces_B = {
    readonly "members" ?: { [key:string]: __members_B } //| (add: (key: string, entry: __members_B ) => void )
}

export type __namespaces_B = {
    readonly "namespace" ?: __namespace_B
}

export type __type_parameters_B = {
}

export type __types_B = {
    readonly "type" ?: __type_B
}

export type __namespace_B = {
    readonly "functions" ?: { [key:string]: __functions_B } //| (add: (key: string, entry: __functions_B ) => void )
    readonly "interfaces" ?: { [key:string]: __interfaces_B } //| (add: (key: string, entry: __interfaces_B ) => void )
    readonly "namespaces" ?: { [key:string]: __namespaces_B } //| (add: (key: string, entry: __namespaces_B ) => void )
    readonly "type parameters" ?: { [key:string]: __type_parameters_B } //| (add: (key: string, entry: __type_parameters_B ) => void )
    readonly "types" ?: { [key:string]: __types_B } //| (add: (key: string, entry: __types_B ) => void )
}

export type __root_B = {
    readonly "namespace" ?: __namespace_B
}

export type __nested_functions_B = {
    readonly "function" ?: __function_B
}

export type __if_B = {
}

export type __type_statements_TU_Builder =
    | ["if", __if_B]

export type __statements_B = {
    readonly "type" ?: __type_statements_TU_Builder
}

export type __statement_block_B = {
    readonly "nested functions" ?: { [key:string]: __nested_functions_B } //| (add: (key: string, entry: __nested_functions_B ) => void )
    readonly "statements" ?: __statements_B[] //| { callback: (value: __statements_B ) => void }
}

export type __boolean_B = {
}

export type __dictionary_B = {
    readonly "entry" ?: __type_B
}

export type __optional_B = {
}

export type __required_B = {
}

export type __occurence_TU_Builder =
    | ["optional", __optional_B]
    | ["required", __required_B]

export type __properties_B = {
    readonly "occurence" ?: __occurence_TU_Builder
    readonly "type" ?: __type_B
}

export type __group_B = {
    readonly "properties" ?: { [key:string]: __properties_B } //| (add: (key: string, entry: __properties_B ) => void )
}

export type __list_B = {
    readonly "element" ?: __type_B
}

export type __number_B = {
}

export type __string_type_B = {
}

export type __options_B = {
    readonly "type" ?: __type_B
}

export type __tagged_union_B = {
    readonly "options" ?: { [key:string]: __options_B } //| (add: (key: string, entry: __options_B ) => void )
}

export type __type_reference_B = {
    readonly "type" ?: string
}

export type __type_type_TU_Builder =
    | ["boolean", __boolean_B]
    | ["dictionary", __dictionary_B]
    | ["group", __group_B]
    | ["list", __list_B]
    | ["number", __number_B]
    | ["string", __string_type_B]
    | ["tagged union", __tagged_union_B]
    | ["type reference", __type_reference_B]

export type __type_B = {
    readonly "type" ?: __type_type_TU_Builder
}

export function createDeserializer<TokenAnnotation, NonTokenAnnotation>(
    context: astn.IExpectContext<TokenAnnotation, NonTokenAnnotation>,
    raiseValidationError: (message: string, annotation: TokenAnnotation) => void,
    callback: (result: __root_T) => void,
): astn.IRequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {
    function wrap(handler: astn.IValueHandler<TokenAnnotation, NonTokenAnnotation>): astn.IRequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return {
            exists: handler,
            missing: () => {
                //
            },
        }
    }
    function _generateHandler_function(
        callback: (out: __function_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __function_T) => void) => {
            let _block_v: __statement_block_T | null = null
            const _parameters_v: { [key: string]: __parameters_function_T } = {}
            let _return_type_v: string | null = null
            return context.expectVerboseGroup({
                properties: {
                    "block": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_statement_block(
                            (node) => _block_v = node
                        )),
                    },
                    "parameters": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __parameters_function_T) => void) => {
                                    let _type_v: __type_parameters_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "callback": () => {
                                                            return wrap(((callback: (out: __callback_T) => void) => {
                                                                const _parameters_v: { [key: string]: __parameters_T } = {}
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "parameters": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectDictionary({
                                                                                onProperty: (propertyData) => {
                                                                                    return wrap(((callback: (out: __parameters_T) => void) => {
                                                                                        let _type_v: __type_TU | null = null
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {
                                                                                                "type": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                                                                        options: {
                                                                                                            "string": () => {
                                                                                                                return wrap(((callback: (out: __string_T) => void) => {
                                                                                                                    return context.expectVerboseGroup({
                                                                                                                        properties: {
                                                                                                                        },
                                                                                                                        onEnd: () => {
                                                                                                                            callback({
                                                                                                                            })
                                                                                                                        },
                                                                                                                    })
                                                                                                                })((node) => _type_v = ["string", node]))
                                                                                                            },
                                                                                                            "type argument": () => {
                                                                                                                return wrap(((callback: (out: __type_argument_T) => void) => {
                                                                                                                    let _argument_v: string | null = null
                                                                                                                    return context.expectVerboseGroup({
                                                                                                                        properties: {
                                                                                                                            "argument": {
                                                                                                                                onNotExists: () => { /**/ },
                                                                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                                                                    warningOnly: true,
                                                                                                                                    callback: ($) => {
                                                                                                                                        _argument_v = $.token.data.value
                                                                                                                                    },
                                                                                                                                })),
                                                                                                                            },
                                                                                                                        },
                                                                                                                        onEnd: () => {
                                                                                                                            if (_argument_v === null) {
                                                                                                                                _argument_v = "*type argument*"
                                                                                                                            }
                                                                                                                            callback({
                                                                                                                                "argument": _argument_v,
                                                                                                                            })
                                                                                                                        },
                                                                                                                    })
                                                                                                                })((node) => _type_v = ["type argument", node]))
                                                                                                            },
                                                                                                            "typex": () => {
                                                                                                                return wrap(((callback: (out: __typex_T) => void) => {
                                                                                                                    let _type_v: string | null = null
                                                                                                                    const _upsteps_v: __upsteps_T[] = []
                                                                                                                    return context.expectVerboseGroup({
                                                                                                                        properties: {
                                                                                                                            "type": {
                                                                                                                                onNotExists: () => { /**/ },
                                                                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                                                                    warningOnly: true,
                                                                                                                                    callback: ($) => {
                                                                                                                                        _type_v = $.token.data.value
                                                                                                                                    },
                                                                                                                                })),
                                                                                                                            },
                                                                                                                            "upsteps": {
                                                                                                                                onNotExists: () => { /**/ },
                                                                                                                                onExists: () => wrap(context.expectList({
                                                                                                                                    onElement: () => {
                                                                                                                                        return ((callback: (out: __upsteps_T) => void) => {
                                                                                                                                            return context.expectVerboseGroup({
                                                                                                                                                properties: {
                                                                                                                                                },
                                                                                                                                                onEnd: () => {
                                                                                                                                                    callback({
                                                                                                                                                    })
                                                                                                                                                },
                                                                                                                                            })
                                                                                                                                        })((node) => _upsteps_v.push(node))
                                                                                                                                    },
                                                                                                                                })),
                                                                                                                            },
                                                                                                                        },
                                                                                                                        onEnd: () => {
                                                                                                                            if (_type_v === null) {
                                                                                                                                _type_v = "*type*"
                                                                                                                            }
                                                                                                                            callback({
                                                                                                                                "type": _type_v,
                                                                                                                                "upsteps": _upsteps_v,
                                                                                                                            })
                                                                                                                        },
                                                                                                                    })
                                                                                                                })((node) => _type_v = ["typex", node]))
                                                                                                            },
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                            },
                                                                                            onEnd: () => {
                                                                                                if (_type_v === null) {
                                                                                                    _type_v = ["string", {
                                                                                                    }]
                                                                                                }
                                                                                                callback({
                                                                                                    "type": _type_v,
                                                                                                })
                                                                                            },
                                                                                        })
                                                                                    })((node) => _parameters_v[propertyData.token.data.value] = node))
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        callback({
                                                                            "parameters": createDictionary(_parameters_v),
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["callback", node]))
                                                        },
                                                        "interface": () => {
                                                            return wrap(((callback: (out: __interface_T) => void) => {
                                                                let _interface_v: string | null = null
                                                                const _type_arguments_v: { [key: string]: __type_arguments_T } = {}
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "interface": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _interface_v = $.token.data.value
                                                                                },
                                                                            })),
                                                                        },
                                                                        "type arguments": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectDictionary({
                                                                                onProperty: (propertyData) => {
                                                                                    return wrap(((callback: (out: __type_arguments_T) => void) => {
                                                                                        let _type_v: string | null = null
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {
                                                                                                "type": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                                                        warningOnly: true,
                                                                                                        callback: ($) => {
                                                                                                            _type_v = $.token.data.value
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                            },
                                                                                            onEnd: () => {
                                                                                                if (_type_v === null) {
                                                                                                    _type_v = "*type argument type*"
                                                                                                }
                                                                                                callback({
                                                                                                    "type": _type_v,
                                                                                                })
                                                                                            },
                                                                                        })
                                                                                    })((node) => _type_arguments_v[propertyData.token.data.value] = node))
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_interface_v === null) {
                                                                            _interface_v = "*interface*"
                                                                        }
                                                                        callback({
                                                                            "interface": _interface_v,
                                                                            "type arguments": createDictionary(_type_arguments_v),
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["interface", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["interface", {
                                                    "interface": "*interface*",
                                                    "type arguments": createDictionary({}),
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _parameters_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "return type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectQuotedString({
                            warningOnly: true,
                            callback: ($) => {
                                _return_type_v = $.token.data.value
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_block_v === null) {
                        _block_v = {
                            "nested functions": createDictionary({}),
                            "statements": [],
                        }
                    }
                    if (_return_type_v === null) {
                        _return_type_v = "*return type*"
                    }
                    callback({
                        "block": _block_v,
                        "parameters": createDictionary(_parameters_v),
                        "return type": _return_type_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_namespace(
        callback: (out: __namespace_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __namespace_T) => void) => {
            const _functions_v: { [key: string]: __functions_T } = {}
            const _interfaces_v: { [key: string]: __interfaces_T } = {}
            const _namespaces_v: { [key: string]: __namespaces_T } = {}
            const _type_parameters_v: { [key: string]: __type_parameters_T } = {}
            const _types_v: { [key: string]: __types_T } = {}
            return context.expectVerboseGroup({
                properties: {
                    "functions": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __functions_T) => void) => {
                                    let _function_v: __function_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "function": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_function(
                                                    (node) => _function_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_function_v === null) {
                                                _function_v = {
                                                    "block": {
                                                        "nested functions": createDictionary({}),
                                                        "statements": [],
                                                    },
                                                    "parameters": createDictionary({}),
                                                    "return type": "*return type*",
                                                }
                                            }
                                            callback({
                                                "function": _function_v,
                                            })
                                        },
                                    })
                                })((node) => _functions_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "interfaces": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __interfaces_T) => void) => {
                                    const _members_v: { [key: string]: __members_T } = {}
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "members": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectDictionary({
                                                    onProperty: (propertyData) => {
                                                        return wrap(((callback: (out: __members_T) => void) => {
                                                            let _type_v: __type_members_TU | null = null
                                                            return context.expectVerboseGroup({
                                                                properties: {
                                                                    "type": {
                                                                        onNotExists: () => { /**/ },
                                                                        onExists: () => wrap(context.expectTaggedUnion({
                                                                            options: {
                                                                                "method": () => {
                                                                                    return wrap(((callback: (out: __method_T) => void) => {
                                                                                        const _parameters_v: { [key: string]: __parameters_method_T } = {}
                                                                                        let _return_type_v: string | null = null
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {
                                                                                                "parameters": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectDictionary({
                                                                                                        onProperty: (propertyData) => {
                                                                                                            return wrap(((callback: (out: __parameters_method_T) => void) => {
                                                                                                                let _type_v: string | null = null
                                                                                                                return context.expectVerboseGroup({
                                                                                                                    properties: {
                                                                                                                        "type": {
                                                                                                                            onNotExists: () => { /**/ },
                                                                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                                                                warningOnly: true,
                                                                                                                                callback: ($) => {
                                                                                                                                    _type_v = $.token.data.value
                                                                                                                                },
                                                                                                                            })),
                                                                                                                        },
                                                                                                                    },
                                                                                                                    onEnd: () => {
                                                                                                                        if (_type_v === null) {
                                                                                                                            _type_v = "*parameter type*"
                                                                                                                        }
                                                                                                                        callback({
                                                                                                                            "type": _type_v,
                                                                                                                        })
                                                                                                                    },
                                                                                                                })
                                                                                                            })((node) => _parameters_v[propertyData.token.data.value] = node))
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                                "return type": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                                                        warningOnly: true,
                                                                                                        callback: ($) => {
                                                                                                            _return_type_v = $.token.data.value
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                            },
                                                                                            onEnd: () => {
                                                                                                if (_return_type_v === null) {
                                                                                                    _return_type_v = "*return type*"
                                                                                                }
                                                                                                callback({
                                                                                                    "parameters": createDictionary(_parameters_v),
                                                                                                    "return type": _return_type_v,
                                                                                                })
                                                                                            },
                                                                                        })
                                                                                    })((node) => _type_v = ["method", node]))
                                                                                },
                                                                                "sub interface": () => {
                                                                                    return wrap(((callback: (out: __sub_interface_T) => void) => {
                                                                                        let _interface_v: string | null = null
                                                                                        const _type_arguments_v: { [key: string]: __type_arguments_sub_interface_T } = {}
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {
                                                                                                "interface": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                                                        warningOnly: true,
                                                                                                        callback: ($) => {
                                                                                                            _interface_v = $.token.data.value
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                                "type arguments": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(context.expectDictionary({
                                                                                                        onProperty: (propertyData) => {
                                                                                                            return wrap(((callback: (out: __type_arguments_sub_interface_T) => void) => {
                                                                                                                let _type_v: string | null = null
                                                                                                                return context.expectVerboseGroup({
                                                                                                                    properties: {
                                                                                                                        "type": {
                                                                                                                            onNotExists: () => { /**/ },
                                                                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                                                                warningOnly: true,
                                                                                                                                callback: ($) => {
                                                                                                                                    _type_v = $.token.data.value
                                                                                                                                },
                                                                                                                            })),
                                                                                                                        },
                                                                                                                    },
                                                                                                                    onEnd: () => {
                                                                                                                        if (_type_v === null) {
                                                                                                                            _type_v = "*type argument type*"
                                                                                                                        }
                                                                                                                        callback({
                                                                                                                            "type": _type_v,
                                                                                                                        })
                                                                                                                    },
                                                                                                                })
                                                                                                            })((node) => _type_arguments_v[propertyData.token.data.value] = node))
                                                                                                        },
                                                                                                    })),
                                                                                                },
                                                                                            },
                                                                                            onEnd: () => {
                                                                                                if (_interface_v === null) {
                                                                                                    _interface_v = "*interface*"
                                                                                                }
                                                                                                callback({
                                                                                                    "interface": _interface_v,
                                                                                                    "type arguments": createDictionary(_type_arguments_v),
                                                                                                })
                                                                                            },
                                                                                        })
                                                                                    })((node) => _type_v = ["sub interface", node]))
                                                                                },
                                                                            },
                                                                        })),
                                                                    },
                                                                },
                                                                onEnd: () => {
                                                                    if (_type_v === null) {
                                                                        _type_v = ["method", {
                                                                            "parameters": createDictionary({}),
                                                                            "return type": "*return type*",
                                                                        }]
                                                                    }
                                                                    callback({
                                                                        "type": _type_v,
                                                                    })
                                                                },
                                                            })
                                                        })((node) => _members_v[propertyData.token.data.value] = node))
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            callback({
                                                "members": createDictionary(_members_v),
                                            })
                                        },
                                    })
                                })((node) => _interfaces_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "namespaces": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __namespaces_T) => void) => {
                                    let _namespace_v: __namespace_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "namespace": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_namespace(
                                                    (node) => _namespace_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_namespace_v === null) {
                                                _namespace_v = {
                                                    "functions": createDictionary({}),
                                                    "interfaces": createDictionary({}),
                                                    "namespaces": createDictionary({}),
                                                    "type parameters": createDictionary({}),
                                                    "types": createDictionary({}),
                                                }
                                            }
                                            callback({
                                                "namespace": _namespace_v,
                                            })
                                        },
                                    })
                                })((node) => _namespaces_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "type parameters": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __type_parameters_T) => void) => {
                                    return context.expectVerboseGroup({
                                        properties: {
                                        },
                                        onEnd: () => {
                                            callback({
                                            })
                                        },
                                    })
                                })((node) => _type_parameters_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "types": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __types_T) => void) => {
                                    let _type_v: __type_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_type(
                                                    (node) => _type_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = {
                                                    "type": [ "string", {
                                                    } ],
                                                }
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _types_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                },
                onEnd: () => {
                    callback({
                        "functions": createDictionary(_functions_v),
                        "interfaces": createDictionary(_interfaces_v),
                        "namespaces": createDictionary(_namespaces_v),
                        "type parameters": createDictionary(_type_parameters_v),
                        "types": createDictionary(_types_v),
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_root(
        callback: (out: __root_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __root_T) => void) => {
            let _namespace_v: __namespace_T | null = null
            return context.expectVerboseGroup({
                properties: {
                    "namespace": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_namespace(
                            (node) => _namespace_v = node
                        )),
                    },
                },
                onEnd: () => {
                    if (_namespace_v === null) {
                        _namespace_v = {
                            "functions": createDictionary({}),
                            "interfaces": createDictionary({}),
                            "namespaces": createDictionary({}),
                            "type parameters": createDictionary({}),
                            "types": createDictionary({}),
                        }
                    }
                    callback({
                        "namespace": _namespace_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_statement_block(
        callback: (out: __statement_block_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __statement_block_T) => void) => {
            const _nested_functions_v: { [key: string]: __nested_functions_T } = {}
            const _statements_v: __statements_T[] = []
            return context.expectVerboseGroup({
                properties: {
                    "nested functions": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __nested_functions_T) => void) => {
                                    let _function_v: __function_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "function": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_function(
                                                    (node) => _function_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_function_v === null) {
                                                _function_v = {
                                                    "block": {
                                                        "nested functions": createDictionary({}),
                                                        "statements": [],
                                                    },
                                                    "parameters": createDictionary({}),
                                                    "return type": "*return type*",
                                                }
                                            }
                                            callback({
                                                "function": _function_v,
                                            })
                                        },
                                    })
                                })((node) => _nested_functions_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "statements": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectList({
                            onElement: () => {
                                return ((callback: (out: __statements_T) => void) => {
                                    let _type_v: __type_statements_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "if": () => {
                                                            return wrap(((callback: (out: __if_T) => void) => {
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                    },
                                                                    onEnd: () => {
                                                                        callback({
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["if", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["if", {
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _statements_v.push(node))
                            },
                        })),
                    },
                },
                onEnd: () => {
                    callback({
                        "nested functions": createDictionary(_nested_functions_v),
                        "statements": _statements_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_type(
        callback: (out: __type_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __type_T) => void) => {
            let _type_v: __type_type_TU | null = null
            return context.expectVerboseGroup({
                properties: {
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "boolean": () => {
                                    return wrap(((callback: (out: __boolean_T) => void) => {
                                        return context.expectVerboseGroup({
                                            properties: {
                                            },
                                            onEnd: () => {
                                                callback({
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["boolean", node]))
                                },
                                "dictionary": () => {
                                    return wrap(((callback: (out: __dictionary_T) => void) => {
                                        let _entry_v: __type_T | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "entry": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(_generateHandler_type(
                                                        (node) => _entry_v = node
                                                    )),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_entry_v === null) {
                                                    _entry_v = {
                                                        "type": [ "string", {
                                                        } ],
                                                    }
                                                }
                                                callback({
                                                    "entry": _entry_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["dictionary", node]))
                                },
                                "group": () => {
                                    return wrap(((callback: (out: __group_T) => void) => {
                                        const _properties_v: { [key: string]: __properties_T } = {}
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "properties": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectDictionary({
                                                        onProperty: (propertyData) => {
                                                            return wrap(((callback: (out: __properties_T) => void) => {
                                                                let _occurence_v: __occurence_TU | null = null
                                                                let _type_v: __type_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "occurence": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectTaggedUnion({
                                                                                options: {
                                                                                    "optional": () => {
                                                                                        return wrap(((callback: (out: __optional_T) => void) => {
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    callback({
                                                                                                    })
                                                                                                },
                                                                                            })
                                                                                        })((node) => _occurence_v = ["optional", node]))
                                                                                    },
                                                                                    "required": () => {
                                                                                        return wrap(((callback: (out: __required_T) => void) => {
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    callback({
                                                                                                    })
                                                                                                },
                                                                                            })
                                                                                        })((node) => _occurence_v = ["required", node]))
                                                                                    },
                                                                                },
                                                                            })),
                                                                        },
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_type(
                                                                                (node) => _type_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_occurence_v === null) {
                                                                            _occurence_v = ["required", {
                                                                            }]
                                                                        }
                                                                        if (_type_v === null) {
                                                                            _type_v = {
                                                                                "type": [ "string", {
                                                                                } ],
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "occurence": _occurence_v,
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _properties_v[propertyData.token.data.value] = node))
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                callback({
                                                    "properties": createDictionary(_properties_v),
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["group", node]))
                                },
                                "list": () => {
                                    return wrap(((callback: (out: __list_T) => void) => {
                                        let _element_v: __type_T | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "element": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(_generateHandler_type(
                                                        (node) => _element_v = node
                                                    )),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_element_v === null) {
                                                    _element_v = {
                                                        "type": [ "string", {
                                                        } ],
                                                    }
                                                }
                                                callback({
                                                    "element": _element_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["list", node]))
                                },
                                "number": () => {
                                    return wrap(((callback: (out: __number_T) => void) => {
                                        return context.expectVerboseGroup({
                                            properties: {
                                            },
                                            onEnd: () => {
                                                callback({
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["number", node]))
                                },
                                "string": () => {
                                    return wrap(((callback: (out: __string_type_T) => void) => {
                                        return context.expectVerboseGroup({
                                            properties: {
                                            },
                                            onEnd: () => {
                                                callback({
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["string", node]))
                                },
                                "tagged union": () => {
                                    return wrap(((callback: (out: __tagged_union_T) => void) => {
                                        const _options_v: { [key: string]: __options_T } = {}
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "options": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectDictionary({
                                                        onProperty: (propertyData) => {
                                                            return wrap(((callback: (out: __options_T) => void) => {
                                                                let _type_v: __type_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_type(
                                                                                (node) => _type_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_type_v === null) {
                                                                            _type_v = {
                                                                                "type": [ "string", {
                                                                                } ],
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _options_v[propertyData.token.data.value] = node))
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                callback({
                                                    "options": createDictionary(_options_v),
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["tagged union", node]))
                                },
                                "type reference": () => {
                                    return wrap(((callback: (out: __type_reference_T) => void) => {
                                        let _type_v: string | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "type": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectQuotedString({
                                                        warningOnly: true,
                                                        callback: ($) => {
                                                            _type_v = $.token.data.value
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_type_v === null) {
                                                    _type_v = "*type*"
                                                }
                                                callback({
                                                    "type": _type_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["type reference", node]))
                                },
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_type_v === null) {
                        _type_v = ["string", {
                        }]
                    }
                    callback({
                        "type": _type_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    return wrap(_generateHandler_root(callback))
}

export function createBuilder<TokenAnnotation, NonTokenAnnotation>(
    intermediate: __root_B,
): __root_T {
    function _generateBuilder_function(
        intermediate: __function_B,
    ): __function_T {
        return {
            "block": intermediate["block"] === undefined ? _default_generateBuilder_statement_block() : _generateBuilder_statement_block(intermediate["block"]),
            "parameters": intermediate["parameters"] === undefined ? createDictionary({}) : ((): IDictionary<__parameters_function_T> => {{
                const source = intermediate["parameters"]
                const target: { [key:string]: __parameters_function_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "type": entry["type"] === undefined ? [ "interface", {
                            "interface": "*interface*",
                            "type arguments": createDictionary({}),
                        } ] : ((): __type_parameters_TU => {
                            switch (entry["type"][0]) {
                                case "callback":
                                    return [ "callback", {
                                        "parameters": entry["type"][1]["parameters"] === undefined ? createDictionary({}) : ((): IDictionary<__parameters_T> => {{
                                            const source = entry["type"][1]["parameters"]
                                            const target: { [key:string]: __parameters_T} = {}
                                            Object.keys(source).forEach((key) => {
                                                const entry = source[key]
                                                target[key] = {
                                                    "type": entry["type"] === undefined ? [ "string", {
                                                    } ] : ((): __type_TU => {
                                                        switch (entry["type"][0]) {
                                                            case "string":
                                                                return [ "string", {
                                                                } ]
                                                            case "type argument":
                                                                return [ "type argument", {
                                                                    "argument": entry["type"][1]["argument"] === undefined ? "*type argument*" : entry["type"][1]["argument"],
                                                                } ]
                                                            case "typex":
                                                                return [ "typex", {
                                                                    "type": entry["type"][1]["type"] === undefined ? "*type*" : entry["type"][1]["type"],
                                                                    "upsteps": entry["type"][1]["upsteps"] === undefined ? [] : ((): __upsteps_T[] => {{
                                                                        const source = entry["type"][1]["upsteps"]
                                                                        const target: __upsteps_T[] = []
                                                                        source.forEach((entry) => {
                                                                            target.push({
                                                                            })
                                                                        })
                                                                        return target
                                                                    }})(),
                                                                } ]
                                                            default: return assertUnreachable(entry["type"][0])
                                                        }
                                                    })(),
                                                }
                                            })
                                            return createDictionary(target)
                                        }})(),
                                    } ]
                                case "interface":
                                    return [ "interface", {
                                        "interface": entry["type"][1]["interface"] === undefined ? "*interface*" : entry["type"][1]["interface"],
                                        "type arguments": entry["type"][1]["type arguments"] === undefined ? createDictionary({}) : ((): IDictionary<__type_arguments_T> => {{
                                            const source = entry["type"][1]["type arguments"]
                                            const target: { [key:string]: __type_arguments_T} = {}
                                            Object.keys(source).forEach((key) => {
                                                const entry = source[key]
                                                target[key] = {
                                                    "type": entry["type"] === undefined ? "*type argument type*" : entry["type"],
                                                }
                                            })
                                            return createDictionary(target)
                                        }})(),
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    }
                })
                return createDictionary(target)
            }})(),
            "return type": intermediate["return type"] === undefined ? "*return type*" : intermediate["return type"],
        }
    }

    function _default_generateBuilder_function(
    ): __function_T {
        return {
            "block": _default_generateBuilder_statement_block(),
            "parameters": createDictionary({}),
            "return type": "*return type*",
        }
    }

    function _generateBuilder_namespace(
        intermediate: __namespace_B,
    ): __namespace_T {
        return {
            "functions": intermediate["functions"] === undefined ? createDictionary({}) : ((): IDictionary<__functions_T> => {{
                const source = intermediate["functions"]
                const target: { [key:string]: __functions_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "function": entry["function"] === undefined ? _default_generateBuilder_function() : _generateBuilder_function(entry["function"]),
                    }
                })
                return createDictionary(target)
            }})(),
            "interfaces": intermediate["interfaces"] === undefined ? createDictionary({}) : ((): IDictionary<__interfaces_T> => {{
                const source = intermediate["interfaces"]
                const target: { [key:string]: __interfaces_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "members": entry["members"] === undefined ? createDictionary({}) : ((): IDictionary<__members_T> => {{
                            const source = entry["members"]
                            const target: { [key:string]: __members_T} = {}
                            Object.keys(source).forEach((key) => {
                                const entry = source[key]
                                target[key] = {
                                    "type": entry["type"] === undefined ? [ "method", {
                                        "parameters": createDictionary({}),
                                        "return type": "*return type*",
                                    } ] : ((): __type_members_TU => {
                                        switch (entry["type"][0]) {
                                            case "method":
                                                return [ "method", {
                                                    "parameters": entry["type"][1]["parameters"] === undefined ? createDictionary({}) : ((): IDictionary<__parameters_method_T> => {{
                                                        const source = entry["type"][1]["parameters"]
                                                        const target: { [key:string]: __parameters_method_T} = {}
                                                        Object.keys(source).forEach((key) => {
                                                            const entry = source[key]
                                                            target[key] = {
                                                                "type": entry["type"] === undefined ? "*parameter type*" : entry["type"],
                                                            }
                                                        })
                                                        return createDictionary(target)
                                                    }})(),
                                                    "return type": entry["type"][1]["return type"] === undefined ? "*return type*" : entry["type"][1]["return type"],
                                                } ]
                                            case "sub interface":
                                                return [ "sub interface", {
                                                    "interface": entry["type"][1]["interface"] === undefined ? "*interface*" : entry["type"][1]["interface"],
                                                    "type arguments": entry["type"][1]["type arguments"] === undefined ? createDictionary({}) : ((): IDictionary<__type_arguments_sub_interface_T> => {{
                                                        const source = entry["type"][1]["type arguments"]
                                                        const target: { [key:string]: __type_arguments_sub_interface_T} = {}
                                                        Object.keys(source).forEach((key) => {
                                                            const entry = source[key]
                                                            target[key] = {
                                                                "type": entry["type"] === undefined ? "*type argument type*" : entry["type"],
                                                            }
                                                        })
                                                        return createDictionary(target)
                                                    }})(),
                                                } ]
                                            default: return assertUnreachable(entry["type"][0])
                                        }
                                    })(),
                                }
                            })
                            return createDictionary(target)
                        }})(),
                    }
                })
                return createDictionary(target)
            }})(),
            "namespaces": intermediate["namespaces"] === undefined ? createDictionary({}) : ((): IDictionary<__namespaces_T> => {{
                const source = intermediate["namespaces"]
                const target: { [key:string]: __namespaces_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "namespace": entry["namespace"] === undefined ? _default_generateBuilder_namespace() : _generateBuilder_namespace(entry["namespace"]),
                    }
                })
                return createDictionary(target)
            }})(),
            "type parameters": intermediate["type parameters"] === undefined ? createDictionary({}) : ((): IDictionary<__type_parameters_T> => {{
                const source = intermediate["type parameters"]
                const target: { [key:string]: __type_parameters_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                    }
                })
                return createDictionary(target)
            }})(),
            "types": intermediate["types"] === undefined ? createDictionary({}) : ((): IDictionary<__types_T> => {{
                const source = intermediate["types"]
                const target: { [key:string]: __types_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                    }
                })
                return createDictionary(target)
            }})(),
        }
    }

    function _default_generateBuilder_namespace(
    ): __namespace_T {
        return {
            "functions": createDictionary({}),
            "interfaces": createDictionary({}),
            "namespaces": createDictionary({}),
            "type parameters": createDictionary({}),
            "types": createDictionary({}),
        }
    }

    function _generateBuilder_root(
        intermediate: __root_B,
    ): __root_T {
        return {
            "namespace": intermediate["namespace"] === undefined ? _default_generateBuilder_namespace() : _generateBuilder_namespace(intermediate["namespace"]),
        }
    }

    function _default_generateBuilder_root(
    ): __root_T {
        return {
            "namespace": _default_generateBuilder_namespace(),
        }
    }

    function _generateBuilder_statement_block(
        intermediate: __statement_block_B,
    ): __statement_block_T {
        return {
            "nested functions": intermediate["nested functions"] === undefined ? createDictionary({}) : ((): IDictionary<__nested_functions_T> => {{
                const source = intermediate["nested functions"]
                const target: { [key:string]: __nested_functions_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "function": entry["function"] === undefined ? _default_generateBuilder_function() : _generateBuilder_function(entry["function"]),
                    }
                })
                return createDictionary(target)
            }})(),
            "statements": intermediate["statements"] === undefined ? [] : ((): __statements_T[] => {{
                const source = intermediate["statements"]
                const target: __statements_T[] = []
                source.forEach((entry) => {
                    target.push({
                        "type": entry["type"] === undefined ? [ "if", {
                        } ] : ((): __type_statements_TU => {
                            switch (entry["type"][0]) {
                                case "if":
                                    return [ "if", {
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    })
                })
                return target
            }})(),
        }
    }

    function _default_generateBuilder_statement_block(
    ): __statement_block_T {
        return {
            "nested functions": createDictionary({}),
            "statements": [],
        }
    }

    function _generateBuilder_type(
        intermediate: __type_B,
    ): __type_T {
        return {
            "type": intermediate["type"] === undefined ? [ "string", {
            } ] : ((): __type_type_TU => {
                switch (intermediate["type"][0]) {
                    case "boolean":
                        return [ "boolean", {
                        } ]
                    case "dictionary":
                        return [ "dictionary", {
                            "entry": intermediate["type"][1]["entry"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(intermediate["type"][1]["entry"]),
                        } ]
                    case "group":
                        return [ "group", {
                            "properties": intermediate["type"][1]["properties"] === undefined ? createDictionary({}) : ((): IDictionary<__properties_T> => {{
                                const source = intermediate["type"][1]["properties"]
                                const target: { [key:string]: __properties_T} = {}
                                Object.keys(source).forEach((key) => {
                                    const entry = source[key]
                                    target[key] = {
                                        "occurence": entry["occurence"] === undefined ? [ "required", {
                                        } ] : ((): __occurence_TU => {
                                            switch (entry["occurence"][0]) {
                                                case "optional":
                                                    return [ "optional", {
                                                    } ]
                                                case "required":
                                                    return [ "required", {
                                                    } ]
                                                default: return assertUnreachable(entry["occurence"][0])
                                            }
                                        })(),
                                        "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                                    }
                                })
                                return createDictionary(target)
                            }})(),
                        } ]
                    case "list":
                        return [ "list", {
                            "element": intermediate["type"][1]["element"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(intermediate["type"][1]["element"]),
                        } ]
                    case "number":
                        return [ "number", {
                        } ]
                    case "string":
                        return [ "string", {
                        } ]
                    case "tagged union":
                        return [ "tagged union", {
                            "options": intermediate["type"][1]["options"] === undefined ? createDictionary({}) : ((): IDictionary<__options_T> => {{
                                const source = intermediate["type"][1]["options"]
                                const target: { [key:string]: __options_T} = {}
                                Object.keys(source).forEach((key) => {
                                    const entry = source[key]
                                    target[key] = {
                                        "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                                    }
                                })
                                return createDictionary(target)
                            }})(),
                        } ]
                    case "type reference":
                        return [ "type reference", {
                            "type": intermediate["type"][1]["type"] === undefined ? "*type*" : intermediate["type"][1]["type"],
                        } ]
                    default: return assertUnreachable(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_type(
    ): __type_T {
        return {
            "type": [ "string", {
            } ],
        }
    }

    return _generateBuilder_root(intermediate)
}