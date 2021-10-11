
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

export type __dictionary_reference_T = {
    readonly "dictionary": string
    readonly "nested type reference": __nested_type_reference_T
}

export type __interface_call_T = {
    readonly "initializer": __type_initializer_T
    readonly "interface": string
}

export type __add_entry_T = {
    readonly "context property": string
    readonly "key": string
    readonly "state": string
}

export type __set_string_T = {
    readonly "context property": string
    readonly "state": string
}

export type __type_TU =
    | ["add entry", __add_entry_T]
    | ["set string", __set_string_T]

export type __state_change_T = {
    readonly "type": __type_TU
}

export type __type_effects_TU =
    | ["interface call", __interface_call_T]
    | ["state change", __state_change_T]

export type __effects_T = {
    readonly "type": __type_effects_TU
}

export type __nested_functions_T = {
    readonly "specification": __function_specification_T
}

export type __interface_T = {
    readonly "initializer": __interface_initializer_T
}

export type __void_T = {
}

export type __return_value_TU =
    | ["interface", __interface_T]
    | ["void", __void_T]

export type __dictionary_T = {
    readonly "type": __dictionary_reference_T
}

export type __list_T = {
    readonly "type": __list_reference_T
}

export type __string_T = {
    readonly "initial value": string
}

export type __type5_T = {
    readonly "initializer": __type_initializer_T
    readonly "type": __type_reference_T
}

export type __type_states_TU =
    | ["dictionary", __dictionary_T]
    | ["list", __list_T]
    | ["string", __string_T]
    | ["type5", __type5_T]

export type __states_T = {
    readonly "type": __type_states_TU
}

export type __function_block_T = {
    readonly "effects": IArray<__effects_T>
    readonly "nested functions": IDictionary<__nested_functions_T>
    readonly "return value": __return_value_TU
    readonly "states": IDictionary<__states_T>
}

export type __builder_T = {
    readonly "argument": string
}

export type __entries_T = {
    readonly "initializer": __interface_initializer_T
}

export type __dictionary_type_T = {
    readonly "entries": IDictionary<__entries_T>
}

export type __interface_initializer_type_T = {
    readonly "initializer": __interface_initializer_T
}

export type __type_arguments_TU =
    | ["builder", __builder_T]
    | ["dictionary", __dictionary_type_T]
    | ["interface initializer", __interface_initializer_type_T]

export type __arguments_T = {
    readonly "type": __type_arguments_TU
}

export type __function_call_T = {
    readonly "arguments": IDictionary<__arguments_T>
}

export type __type_arguments_T = {
    readonly "type": string
}

export type __builder_type_T = {
    readonly "builder": string
    readonly "type arguments": IDictionary<__type_arguments_T>
}

export type __dictionary_type_parameters_T = {
    readonly "entry": __interface_definition_T
}

export type __interface_type_T = {
    readonly "interface": __interface_definition_T
}

export type __type_parameters_TU =
    | ["builder", __builder_type_T]
    | ["dictionary", __dictionary_type_parameters_T]
    | ["interface", __interface_type_T]

export type __parameters_T = {
    readonly "type": __type_parameters_TU
}

export type __function_declaration_T = {
    readonly "interface": __interface_definition_T
    readonly "parameters": IDictionary<__parameters_T>
}

export type __function_specification_T = {
    readonly "block": __function_block_T
    readonly "declaration": __function_declaration_T
}

export type __members_T = {
    readonly "definition": __interface_definition_T
}

export type __group_T = {
    readonly "members": IDictionary<__members_T>
}

export type __interface_return_type_T = {
    readonly "interface": __interface_definition_T
}

export type __void_return_type_T = {
}

export type __return_type_TU =
    | ["interface", __interface_return_type_T]
    | ["void", __void_return_type_T]

export type __method_T = {
    readonly "return type": __return_type_TU
    readonly "type": __type_reference_T
}

export type __type_arguments_reference_T = {
    readonly "type": string
}

export type __reference_T = {
    readonly "interface": string
    readonly "type arguments": IDictionary<__type_arguments_reference_T>
}

export type __type_interface_definition_TU =
    | ["group", __group_T]
    | ["method", __method_T]
    | ["reference", __reference_T]

export type __interface_definition_T = {
    readonly "type": __type_interface_definition_TU
}

export type __members_inline_T = {
    readonly "initializer": __interface_initializer_T
}

export type __inline_T = {
    readonly "members": IDictionary<__members_inline_T>
}

export type __strategy_TU =
    | ["inline", __inline_T]

export type __group_type_T = {
    readonly "strategy": __strategy_TU
}

export type __argument_T = {
    readonly "argument": string
}

export type __function_implementation_T = {
    readonly "block": __function_block_T
}

export type __inline_function_T = {
    readonly "call": __function_call_T
    readonly "specification": __function_specification_T
}

export type __strategy_method_TU =
    | ["argument", __argument_T]
    | ["function implementation", __function_implementation_T]
    | ["inline function", __inline_function_T]

export type __method_type_T = {
    readonly "strategy": __strategy_method_TU
}

export type __function_call6_T = {
    readonly "function call": __named_function_call_T
}

export type __strategy_reference_TU =
    | ["function call6", __function_call6_T]

export type __reference_type_T = {
    readonly "strategy": __strategy_reference_TU
}

export type __type_interface_initializer_TU =
    | ["group", __group_type_T]
    | ["method", __method_type_T]
    | ["reference", __reference_type_T]

export type __interface_initializer_T = {
    readonly "type": __type_interface_initializer_TU
}

export type __list_reference_T = {
    readonly "list": string
    readonly "nested type reference": __nested_type_reference_T
}

export type __external_T = {
    readonly "builder": string
    readonly "method": string
}

export type __local_T = {
    readonly "function": string
}

export type __type_named_function_call_TU =
    | ["external", __external_T]
    | ["local", __local_T]

export type __named_function_call_T = {
    readonly "function call": __function_call_T
    readonly "type": __type_named_function_call_TU
}

export type __functions_T = {
    readonly "specification": __function_specification_T
}

export type __methods_T = {
    readonly "declaration": __function_declaration_T
}

export type __interface_builders_T = {
    readonly "methods": IDictionary<__methods_T>
}

export type __interfaces_T = {
    readonly "definition": __interface_definition_T
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
    readonly "interface builders": IDictionary<__interface_builders_T>
    readonly "interfaces": IDictionary<__interfaces_T>
    readonly "namespaces": IDictionary<__namespaces_T>
    readonly "type parameters": IDictionary<__type_parameters_T>
    readonly "types": IDictionary<__types_T>
}

export type __dictionary_type_steps_T = {
}

export type __group_type_steps_T = {
    readonly "property": string
}

export type __list_type_T = {
}

export type __tagged_union_option_T = {
    readonly "option": string
}

export type __type_steps_TU =
    | ["dictionary", __dictionary_type_steps_T]
    | ["group", __group_type_steps_T]
    | ["list", __list_type_T]
    | ["tagged union option", __tagged_union_option_T]

export type __steps_T = {
    readonly "type": __type_steps_TU
}

export type __nested_type_reference_T = {
    readonly "steps": IArray<__steps_T>
    readonly "type": __type_reference_T
}

export type __root_T = {
    readonly "namespace": __namespace_T
}

export type __boolean_T = {
}

export type __dictionary_type_type_T = {
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

export type __group_type_type_T = {
    readonly "properties": IDictionary<__properties_T>
}

export type __list_type_type_T = {
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

export type __type_argument_T = {
    readonly "argument": string
}

export type __type_reference_type_T = {
    readonly "type": __type_reference_T
}

export type __type_type_TU =
    | ["boolean", __boolean_T]
    | ["dictionary", __dictionary_type_type_T]
    | ["group", __group_type_type_T]
    | ["list", __list_type_type_T]
    | ["number", __number_T]
    | ["string", __string_type_T]
    | ["tagged union", __tagged_union_T]
    | ["type argument", __type_argument_T]
    | ["type reference", __type_reference_type_T]

export type __type_T = {
    readonly "type": __type_type_TU
}

export type __from_state_T = {
    readonly "state": string
}

export type __literal_T = {
    readonly "value": string
}

export type __strategy_boolean_TU =
    | ["from state", __from_state_T]
    | ["literal", __literal_T]

export type __boolean_type_T = {
    readonly "strategy": __strategy_boolean_TU
}

export type __from_state_strategy_T = {
    readonly "state": string
}

export type __literal_strategy_T = {
}

export type __strategy_dictionary_TU =
    | ["from state", __from_state_strategy_T]
    | ["literal", __literal_strategy_T]

export type __dictionary_type_type_initializer_T = {
    readonly "strategy": __strategy_dictionary_TU
}

export type __from_state_strategy_group_T = {
    readonly "state": string
}

export type __properties_literal_T = {
    readonly "initializer": __type_initializer_T
}

export type __literal_strategy_group_T = {
    readonly "properties": IDictionary<__properties_literal_T>
}

export type __strategy_group_TU =
    | ["from state", __from_state_strategy_group_T]
    | ["literal", __literal_strategy_group_T]

export type __group_type_type_initializer_T = {
    readonly "strategy": __strategy_group_TU
}

export type __from_state_strategy_list_T = {
    readonly "state": string
}

export type __literal_strategy_list_T = {
}

export type __strategy_list_TU =
    | ["from state", __from_state_strategy_list_T]
    | ["literal", __literal_strategy_list_T]

export type __list_type_type_initializer_T = {
    readonly "strategy": __strategy_list_TU
}

export type __from_state_strategy_number_T = {
    readonly "state": string
}

export type __literal_strategy_number_T = {
    readonly "value": string
}

export type __strategy_number_TU =
    | ["from state", __from_state_strategy_number_T]
    | ["literal", __literal_strategy_number_T]

export type __number_type_T = {
    readonly "strategy": __strategy_number_TU
}

export type __from_state_strategy_string_T = {
    readonly "state": string
}

export type __literal_strategy_string_T = {
    readonly "value": string
}

export type __strategy_string_TU =
    | ["from state", __from_state_strategy_string_T]
    | ["literal", __literal_strategy_string_T]

export type __string_type_type_initializer_T = {
    readonly "strategy": __strategy_string_TU
}

export type __from_state_strategy_tagged_union_T = {
    readonly "state": string
}

export type __literal_strategy_tagged_union_T = {
    readonly "data": __type_initializer_T
    readonly "option": string
}

export type __strategy_tagged_union_TU =
    | ["from state", __from_state_strategy_tagged_union_T]
    | ["literal", __literal_strategy_tagged_union_T]

export type __tagged_union_type_T = {
    readonly "strategy": __strategy_tagged_union_TU
}

export type __type_type_initializer_TU =
    | ["boolean", __boolean_type_T]
    | ["dictionary", __dictionary_type_type_initializer_T]
    | ["group", __group_type_type_initializer_T]
    | ["list", __list_type_type_initializer_T]
    | ["number", __number_type_T]
    | ["string", __string_type_type_initializer_T]
    | ["tagged union", __tagged_union_type_T]

export type __type_initializer_T = {
    readonly "type": __type_type_initializer_TU
}

export type __type_reference_T = {
    readonly "type": string
}

export type __dictionary_reference_B = {
    readonly "dictionary" ?: string
    readonly "nested type reference" ?: __nested_type_reference_B
}

export type __interface_call_B = {
    readonly "initializer" ?: __type_initializer_B
    readonly "interface" ?: string
}

export type __add_entry_B = {
    readonly "context property" ?: string
    readonly "key" ?: string
    readonly "state" ?: string
}

export type __set_string_B = {
    readonly "context property" ?: string
    readonly "state" ?: string
}

export type __type_TU_Builder =
    | ["add entry", __add_entry_B]
    | ["set string", __set_string_B]

export type __state_change_B = {
    readonly "type" ?: __type_TU_Builder
}

export type __type_effects_TU_Builder =
    | ["interface call", __interface_call_B]
    | ["state change", __state_change_B]

export type __effects_B = {
    readonly "type" ?: __type_effects_TU_Builder
}

export type __nested_functions_B = {
    readonly "specification" ?: __function_specification_B
}

export type __interface_B = {
    readonly "initializer" ?: __interface_initializer_B
}

export type __void_B = {
}

export type __return_value_TU_Builder =
    | ["interface", __interface_B]
    | ["void", __void_B]

export type __dictionary_B = {
    readonly "type" ?: __dictionary_reference_B
}

export type __list_B = {
    readonly "type" ?: __list_reference_B
}

export type __string_B = {
    readonly "initial value" ?: string
}

export type __type5_B = {
    readonly "initializer" ?: __type_initializer_B
    readonly "type" ?: __type_reference_B
}

export type __type_states_TU_Builder =
    | ["dictionary", __dictionary_B]
    | ["list", __list_B]
    | ["string", __string_B]
    | ["type5", __type5_B]

export type __states_B = {
    readonly "type" ?: __type_states_TU_Builder
}

export type __function_block_B = {
    readonly "effects" ?: __effects_B[] //| { callback: (value: __effects_B ) => void }
    readonly "nested functions" ?: { [key:string]: __nested_functions_B } //| (add: (key: string, entry: __nested_functions_B ) => void )
    readonly "return value" ?: __return_value_TU_Builder
    readonly "states" ?: { [key:string]: __states_B } //| (add: (key: string, entry: __states_B ) => void )
}

export type __builder_B = {
    readonly "argument" ?: string
}

export type __entries_B = {
    readonly "initializer" ?: __interface_initializer_B
}

export type __dictionary_type_B = {
    readonly "entries" ?: { [key:string]: __entries_B } //| (add: (key: string, entry: __entries_B ) => void )
}

export type __interface_initializer_type_B = {
    readonly "initializer" ?: __interface_initializer_B
}

export type __type_arguments_TU_Builder =
    | ["builder", __builder_B]
    | ["dictionary", __dictionary_type_B]
    | ["interface initializer", __interface_initializer_type_B]

export type __arguments_B = {
    readonly "type" ?: __type_arguments_TU_Builder
}

export type __function_call_B = {
    readonly "arguments" ?: { [key:string]: __arguments_B } //| (add: (key: string, entry: __arguments_B ) => void )
}

export type __type_arguments_B = {
    readonly "type" ?: string
}

export type __builder_type_B = {
    readonly "builder" ?: string
    readonly "type arguments" ?: { [key:string]: __type_arguments_B } //| (add: (key: string, entry: __type_arguments_B ) => void )
}

export type __dictionary_type_parameters_B = {
    readonly "entry" ?: __interface_definition_B
}

export type __interface_type_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __type_parameters_TU_Builder =
    | ["builder", __builder_type_B]
    | ["dictionary", __dictionary_type_parameters_B]
    | ["interface", __interface_type_B]

export type __parameters_B = {
    readonly "type" ?: __type_parameters_TU_Builder
}

export type __function_declaration_B = {
    readonly "interface" ?: __interface_definition_B
    readonly "parameters" ?: { [key:string]: __parameters_B } //| (add: (key: string, entry: __parameters_B ) => void )
}

export type __function_specification_B = {
    readonly "block" ?: __function_block_B
    readonly "declaration" ?: __function_declaration_B
}

export type __members_B = {
    readonly "definition" ?: __interface_definition_B
}

export type __group_B = {
    readonly "members" ?: { [key:string]: __members_B } //| (add: (key: string, entry: __members_B ) => void )
}

export type __interface_return_type_B = {
    readonly "interface" ?: __interface_definition_B
}

export type __void_return_type_B = {
}

export type __return_type_TU_Builder =
    | ["interface", __interface_return_type_B]
    | ["void", __void_return_type_B]

export type __method_B = {
    readonly "return type" ?: __return_type_TU_Builder
    readonly "type" ?: __type_reference_B
}

export type __type_arguments_reference_B = {
    readonly "type" ?: string
}

export type __reference_B = {
    readonly "interface" ?: string
    readonly "type arguments" ?: { [key:string]: __type_arguments_reference_B } //| (add: (key: string, entry: __type_arguments_reference_B ) => void )
}

export type __type_interface_definition_TU_Builder =
    | ["group", __group_B]
    | ["method", __method_B]
    | ["reference", __reference_B]

export type __interface_definition_B = {
    readonly "type" ?: __type_interface_definition_TU_Builder
}

export type __members_inline_B = {
    readonly "initializer" ?: __interface_initializer_B
}

export type __inline_B = {
    readonly "members" ?: { [key:string]: __members_inline_B } //| (add: (key: string, entry: __members_inline_B ) => void )
}

export type __strategy_TU_Builder =
    | ["inline", __inline_B]

export type __group_type_B = {
    readonly "strategy" ?: __strategy_TU_Builder
}

export type __argument_B = {
    readonly "argument" ?: string
}

export type __function_implementation_B = {
    readonly "block" ?: __function_block_B
}

export type __inline_function_B = {
    readonly "call" ?: __function_call_B
    readonly "specification" ?: __function_specification_B
}

export type __strategy_method_TU_Builder =
    | ["argument", __argument_B]
    | ["function implementation", __function_implementation_B]
    | ["inline function", __inline_function_B]

export type __method_type_B = {
    readonly "strategy" ?: __strategy_method_TU_Builder
}

export type __function_call6_B = {
    readonly "function call" ?: __named_function_call_B
}

export type __strategy_reference_TU_Builder =
    | ["function call6", __function_call6_B]

export type __reference_type_B = {
    readonly "strategy" ?: __strategy_reference_TU_Builder
}

export type __type_interface_initializer_TU_Builder =
    | ["group", __group_type_B]
    | ["method", __method_type_B]
    | ["reference", __reference_type_B]

export type __interface_initializer_B = {
    readonly "type" ?: __type_interface_initializer_TU_Builder
}

export type __list_reference_B = {
    readonly "list" ?: string
    readonly "nested type reference" ?: __nested_type_reference_B
}

export type __external_B = {
    readonly "builder" ?: string
    readonly "method" ?: string
}

export type __local_B = {
    readonly "function" ?: string
}

export type __type_named_function_call_TU_Builder =
    | ["external", __external_B]
    | ["local", __local_B]

export type __named_function_call_B = {
    readonly "function call" ?: __function_call_B
    readonly "type" ?: __type_named_function_call_TU_Builder
}

export type __functions_B = {
    readonly "specification" ?: __function_specification_B
}

export type __methods_B = {
    readonly "declaration" ?: __function_declaration_B
}

export type __interface_builders_B = {
    readonly "methods" ?: { [key:string]: __methods_B } //| (add: (key: string, entry: __methods_B ) => void )
}

export type __interfaces_B = {
    readonly "definition" ?: __interface_definition_B
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
    readonly "interface builders" ?: { [key:string]: __interface_builders_B } //| (add: (key: string, entry: __interface_builders_B ) => void )
    readonly "interfaces" ?: { [key:string]: __interfaces_B } //| (add: (key: string, entry: __interfaces_B ) => void )
    readonly "namespaces" ?: { [key:string]: __namespaces_B } //| (add: (key: string, entry: __namespaces_B ) => void )
    readonly "type parameters" ?: { [key:string]: __type_parameters_B } //| (add: (key: string, entry: __type_parameters_B ) => void )
    readonly "types" ?: { [key:string]: __types_B } //| (add: (key: string, entry: __types_B ) => void )
}

export type __dictionary_type_steps_B = {
}

export type __group_type_steps_B = {
    readonly "property" ?: string
}

export type __list_type_B = {
}

export type __tagged_union_option_B = {
    readonly "option" ?: string
}

export type __type_steps_TU_Builder =
    | ["dictionary", __dictionary_type_steps_B]
    | ["group", __group_type_steps_B]
    | ["list", __list_type_B]
    | ["tagged union option", __tagged_union_option_B]

export type __steps_B = {
    readonly "type" ?: __type_steps_TU_Builder
}

export type __nested_type_reference_B = {
    readonly "steps" ?: __steps_B[] //| { callback: (value: __steps_B ) => void }
    readonly "type" ?: __type_reference_B
}

export type __root_B = {
    readonly "namespace" ?: __namespace_B
}

export type __boolean_B = {
}

export type __dictionary_type_type_B = {
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

export type __group_type_type_B = {
    readonly "properties" ?: { [key:string]: __properties_B } //| (add: (key: string, entry: __properties_B ) => void )
}

export type __list_type_type_B = {
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

export type __type_argument_B = {
    readonly "argument" ?: string
}

export type __type_reference_type_B = {
    readonly "type" ?: __type_reference_B
}

export type __type_type_TU_Builder =
    | ["boolean", __boolean_B]
    | ["dictionary", __dictionary_type_type_B]
    | ["group", __group_type_type_B]
    | ["list", __list_type_type_B]
    | ["number", __number_B]
    | ["string", __string_type_B]
    | ["tagged union", __tagged_union_B]
    | ["type argument", __type_argument_B]
    | ["type reference", __type_reference_type_B]

export type __type_B = {
    readonly "type" ?: __type_type_TU_Builder
}

export type __from_state_B = {
    readonly "state" ?: string
}

export type __literal_B = {
    readonly "value" ?: string
}

export type __strategy_boolean_TU_Builder =
    | ["from state", __from_state_B]
    | ["literal", __literal_B]

export type __boolean_type_B = {
    readonly "strategy" ?: __strategy_boolean_TU_Builder
}

export type __from_state_strategy_B = {
    readonly "state" ?: string
}

export type __literal_strategy_B = {
}

export type __strategy_dictionary_TU_Builder =
    | ["from state", __from_state_strategy_B]
    | ["literal", __literal_strategy_B]

export type __dictionary_type_type_initializer_B = {
    readonly "strategy" ?: __strategy_dictionary_TU_Builder
}

export type __from_state_strategy_group_B = {
    readonly "state" ?: string
}

export type __properties_literal_B = {
    readonly "initializer" ?: __type_initializer_B
}

export type __literal_strategy_group_B = {
    readonly "properties" ?: { [key:string]: __properties_literal_B } //| (add: (key: string, entry: __properties_literal_B ) => void )
}

export type __strategy_group_TU_Builder =
    | ["from state", __from_state_strategy_group_B]
    | ["literal", __literal_strategy_group_B]

export type __group_type_type_initializer_B = {
    readonly "strategy" ?: __strategy_group_TU_Builder
}

export type __from_state_strategy_list_B = {
    readonly "state" ?: string
}

export type __literal_strategy_list_B = {
}

export type __strategy_list_TU_Builder =
    | ["from state", __from_state_strategy_list_B]
    | ["literal", __literal_strategy_list_B]

export type __list_type_type_initializer_B = {
    readonly "strategy" ?: __strategy_list_TU_Builder
}

export type __from_state_strategy_number_B = {
    readonly "state" ?: string
}

export type __literal_strategy_number_B = {
    readonly "value" ?: string
}

export type __strategy_number_TU_Builder =
    | ["from state", __from_state_strategy_number_B]
    | ["literal", __literal_strategy_number_B]

export type __number_type_B = {
    readonly "strategy" ?: __strategy_number_TU_Builder
}

export type __from_state_strategy_string_B = {
    readonly "state" ?: string
}

export type __literal_strategy_string_B = {
    readonly "value" ?: string
}

export type __strategy_string_TU_Builder =
    | ["from state", __from_state_strategy_string_B]
    | ["literal", __literal_strategy_string_B]

export type __string_type_type_initializer_B = {
    readonly "strategy" ?: __strategy_string_TU_Builder
}

export type __from_state_strategy_tagged_union_B = {
    readonly "state" ?: string
}

export type __literal_strategy_tagged_union_B = {
    readonly "data" ?: __type_initializer_B
    readonly "option" ?: string
}

export type __strategy_tagged_union_TU_Builder =
    | ["from state", __from_state_strategy_tagged_union_B]
    | ["literal", __literal_strategy_tagged_union_B]

export type __tagged_union_type_B = {
    readonly "strategy" ?: __strategy_tagged_union_TU_Builder
}

export type __type_type_initializer_TU_Builder =
    | ["boolean", __boolean_type_B]
    | ["dictionary", __dictionary_type_type_initializer_B]
    | ["group", __group_type_type_initializer_B]
    | ["list", __list_type_type_initializer_B]
    | ["number", __number_type_B]
    | ["string", __string_type_type_initializer_B]
    | ["tagged union", __tagged_union_type_B]

export type __type_initializer_B = {
    readonly "type" ?: __type_type_initializer_TU_Builder
}

export type __type_reference_B = {
    readonly "type" ?: string
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
    function _generateHandler_dictionary_reference(
        callback: (out: __dictionary_reference_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __dictionary_reference_T) => void) => {
            let _dictionary_v: string | null = null
            let _nested_type_reference_v: __nested_type_reference_T | null = null
            return context.expectVerboseGroup({
                properties: {
                    "dictionary": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectQuotedString({
                            warningOnly: true,
                            callback: ($) => {
                                _dictionary_v = $.token.data.value
                            },
                        })),
                    },
                    "nested type reference": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_nested_type_reference(
                            (node) => _nested_type_reference_v = node
                        )),
                    },
                },
                onEnd: () => {
                    if (_dictionary_v === null) {
                        _dictionary_v = "*dictionary*"
                    }
                    if (_nested_type_reference_v === null) {
                        _nested_type_reference_v = {
                            "steps": [],
                            "type": {
                                "type": "*type reference*",
                            },
                        }
                    }
                    callback({
                        "dictionary": _dictionary_v,
                        "nested type reference": _nested_type_reference_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_function_block(
        callback: (out: __function_block_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __function_block_T) => void) => {
            const _effects_v: __effects_T[] = []
            const _nested_functions_v: { [key: string]: __nested_functions_T } = {}
            let _return_value_v: __return_value_TU | null = null
            const _states_v: { [key: string]: __states_T } = {}
            return context.expectVerboseGroup({
                properties: {
                    "effects": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectList({
                            onElement: () => {
                                return ((callback: (out: __effects_T) => void) => {
                                    let _type_v: __type_effects_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "interface call": () => {
                                                            return wrap(((callback: (out: __interface_call_T) => void) => {
                                                                let _initializer_v: __type_initializer_T | null = null
                                                                let _interface_v: string | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "initializer": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_type_initializer(
                                                                                (node) => _initializer_v = node
                                                                            )),
                                                                        },
                                                                        "interface": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _interface_v = $.token.data.value
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_initializer_v === null) {
                                                                            _initializer_v = {
                                                                                "type": [ "string", {
                                                                                    "strategy": [ "literal", {
                                                                                        "value": "",
                                                                                    } ],
                                                                                } ],
                                                                            }
                                                                        }
                                                                        if (_interface_v === null) {
                                                                            _interface_v = "*interface*"
                                                                        }
                                                                        callback({
                                                                            "initializer": _initializer_v,
                                                                            "interface": _interface_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["interface call", node]))
                                                        },
                                                        "state change": () => {
                                                            return wrap(((callback: (out: __state_change_T) => void) => {
                                                                let _type_v: __type_TU | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectTaggedUnion({
                                                                                options: {
                                                                                    "add entry": () => {
                                                                                        return wrap(((callback: (out: __add_entry_T) => void) => {
                                                                                            let _context_property_v: string | null = null
                                                                                            let _key_v: string | null = null
                                                                                            let _state_v: string | null = null
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                    "context property": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                                                            warningOnly: true,
                                                                                                            callback: ($) => {
                                                                                                                _context_property_v = $.token.data.value
                                                                                                            },
                                                                                                        })),
                                                                                                    },
                                                                                                    "key": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                                                            warningOnly: true,
                                                                                                            callback: ($) => {
                                                                                                                _key_v = $.token.data.value
                                                                                                            },
                                                                                                        })),
                                                                                                    },
                                                                                                    "state": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                                                            warningOnly: true,
                                                                                                            callback: ($) => {
                                                                                                                _state_v = $.token.data.value
                                                                                                            },
                                                                                                        })),
                                                                                                    },
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    if (_context_property_v === null) {
                                                                                                        _context_property_v = "*context property*"
                                                                                                    }
                                                                                                    if (_key_v === null) {
                                                                                                        _key_v = "*key*"
                                                                                                    }
                                                                                                    if (_state_v === null) {
                                                                                                        _state_v = "*state*"
                                                                                                    }
                                                                                                    callback({
                                                                                                        "context property": _context_property_v,
                                                                                                        "key": _key_v,
                                                                                                        "state": _state_v,
                                                                                                    })
                                                                                                },
                                                                                            })
                                                                                        })((node) => _type_v = ["add entry", node]))
                                                                                    },
                                                                                    "set string": () => {
                                                                                        return wrap(((callback: (out: __set_string_T) => void) => {
                                                                                            let _context_property_v: string | null = null
                                                                                            let _state_v: string | null = null
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                    "context property": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                                                            warningOnly: true,
                                                                                                            callback: ($) => {
                                                                                                                _context_property_v = $.token.data.value
                                                                                                            },
                                                                                                        })),
                                                                                                    },
                                                                                                    "state": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                                                            warningOnly: true,
                                                                                                            callback: ($) => {
                                                                                                                _state_v = $.token.data.value
                                                                                                            },
                                                                                                        })),
                                                                                                    },
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    if (_context_property_v === null) {
                                                                                                        _context_property_v = "*context property*"
                                                                                                    }
                                                                                                    if (_state_v === null) {
                                                                                                        _state_v = "*state*"
                                                                                                    }
                                                                                                    callback({
                                                                                                        "context property": _context_property_v,
                                                                                                        "state": _state_v,
                                                                                                    })
                                                                                                },
                                                                                            })
                                                                                        })((node) => _type_v = ["set string", node]))
                                                                                    },
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_type_v === null) {
                                                                            _type_v = ["set string", {
                                                                                "context property": "*context property*",
                                                                                "state": "*state*",
                                                                            }]
                                                                        }
                                                                        callback({
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["state change", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["interface call", {
                                                    "initializer": {
                                                        "type": [ "string", {
                                                            "strategy": [ "literal", {
                                                                "value": "",
                                                            } ],
                                                        } ],
                                                    },
                                                    "interface": "*interface*",
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _effects_v.push(node))
                            },
                        })),
                    },
                    "nested functions": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __nested_functions_T) => void) => {
                                    let _specification_v: __function_specification_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "specification": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_function_specification(
                                                    (node) => _specification_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_specification_v === null) {
                                                _specification_v = {
                                                    "block": {
                                                        "effects": [],
                                                        "nested functions": createDictionary({}),
                                                        "return value": [ "void", {
                                                        } ],
                                                        "states": createDictionary({}),
                                                    },
                                                    "declaration": {
                                                        "interface": {
                                                            "type": [ "group", {
                                                                "members": createDictionary({}),
                                                            } ],
                                                        },
                                                        "parameters": createDictionary({}),
                                                    },
                                                }
                                            }
                                            callback({
                                                "specification": _specification_v,
                                            })
                                        },
                                    })
                                })((node) => _nested_functions_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "return value": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "interface": () => {
                                    return wrap(((callback: (out: __interface_T) => void) => {
                                        let _initializer_v: __interface_initializer_T | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "initializer": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(_generateHandler_interface_initializer(
                                                        (node) => _initializer_v = node
                                                    )),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_initializer_v === null) {
                                                    _initializer_v = {
                                                        "type": [ "method", {
                                                            "strategy": [ "function implementation", {
                                                                "block": {
                                                                    "effects": [],
                                                                    "nested functions": createDictionary({}),
                                                                    "return value": [ "void", {
                                                                    } ],
                                                                    "states": createDictionary({}),
                                                                },
                                                            } ],
                                                        } ],
                                                    }
                                                }
                                                callback({
                                                    "initializer": _initializer_v,
                                                })
                                            },
                                        })
                                    })((node) => _return_value_v = ["interface", node]))
                                },
                                "void": () => {
                                    return wrap(((callback: (out: __void_T) => void) => {
                                        return context.expectVerboseGroup({
                                            properties: {
                                            },
                                            onEnd: () => {
                                                callback({
                                                })
                                            },
                                        })
                                    })((node) => _return_value_v = ["void", node]))
                                },
                            },
                        })),
                    },
                    "states": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __states_T) => void) => {
                                    let _type_v: __type_states_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "dictionary": () => {
                                                            return wrap(((callback: (out: __dictionary_T) => void) => {
                                                                let _type_v: __dictionary_reference_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_dictionary_reference(
                                                                                (node) => _type_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_type_v === null) {
                                                                            _type_v = {
                                                                                "dictionary": "*dictionary*",
                                                                                "nested type reference": {
                                                                                    "steps": [],
                                                                                    "type": {
                                                                                        "type": "*type reference*",
                                                                                    },
                                                                                },
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["dictionary", node]))
                                                        },
                                                        "list": () => {
                                                            return wrap(((callback: (out: __list_T) => void) => {
                                                                let _type_v: __list_reference_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_list_reference(
                                                                                (node) => _type_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_type_v === null) {
                                                                            _type_v = {
                                                                                "list": "*list*",
                                                                                "nested type reference": {
                                                                                    "steps": [],
                                                                                    "type": {
                                                                                        "type": "*type reference*",
                                                                                    },
                                                                                },
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["list", node]))
                                                        },
                                                        "string": () => {
                                                            return wrap(((callback: (out: __string_T) => void) => {
                                                                let _initial_value_v: string | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "initial value": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _initial_value_v = $.token.data.value
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_initial_value_v === null) {
                                                                            _initial_value_v = ""
                                                                        }
                                                                        callback({
                                                                            "initial value": _initial_value_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["string", node]))
                                                        },
                                                        "type5": () => {
                                                            return wrap(((callback: (out: __type5_T) => void) => {
                                                                let _initializer_v: __type_initializer_T | null = null
                                                                let _type_v: __type_reference_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "initializer": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_type_initializer(
                                                                                (node) => _initializer_v = node
                                                                            )),
                                                                        },
                                                                        "type": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_type_reference(
                                                                                (node) => _type_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_initializer_v === null) {
                                                                            _initializer_v = {
                                                                                "type": [ "string", {
                                                                                    "strategy": [ "literal", {
                                                                                        "value": "",
                                                                                    } ],
                                                                                } ],
                                                                            }
                                                                        }
                                                                        if (_type_v === null) {
                                                                            _type_v = {
                                                                                "type": "*type reference*",
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "initializer": _initializer_v,
                                                                            "type": _type_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["type5", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["string", {
                                                    "initial value": "",
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _states_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_return_value_v === null) {
                        _return_value_v = ["void", {
                        }]
                    }
                    callback({
                        "effects": _effects_v,
                        "nested functions": createDictionary(_nested_functions_v),
                        "return value": _return_value_v,
                        "states": createDictionary(_states_v),
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_function_call(
        callback: (out: __function_call_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __function_call_T) => void) => {
            const _arguments_v: { [key: string]: __arguments_T } = {}
            return context.expectVerboseGroup({
                properties: {
                    "arguments": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __arguments_T) => void) => {
                                    let _type_v: __type_arguments_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "builder": () => {
                                                            return wrap(((callback: (out: __builder_T) => void) => {
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
                                                                            _argument_v = "*argument*"
                                                                        }
                                                                        callback({
                                                                            "argument": _argument_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["builder", node]))
                                                        },
                                                        "dictionary": () => {
                                                            return wrap(((callback: (out: __dictionary_type_T) => void) => {
                                                                const _entries_v: { [key: string]: __entries_T } = {}
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "entries": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectDictionary({
                                                                                onProperty: (propertyData) => {
                                                                                    return wrap(((callback: (out: __entries_T) => void) => {
                                                                                        let _initializer_v: __interface_initializer_T | null = null
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {
                                                                                                "initializer": {
                                                                                                    onNotExists: () => { /**/ },
                                                                                                    onExists: () => wrap(_generateHandler_interface_initializer(
                                                                                                        (node) => _initializer_v = node
                                                                                                    )),
                                                                                                },
                                                                                            },
                                                                                            onEnd: () => {
                                                                                                if (_initializer_v === null) {
                                                                                                    _initializer_v = {
                                                                                                        "type": [ "method", {
                                                                                                            "strategy": [ "function implementation", {
                                                                                                                "block": {
                                                                                                                    "effects": [],
                                                                                                                    "nested functions": createDictionary({}),
                                                                                                                    "return value": [ "void", {
                                                                                                                    } ],
                                                                                                                    "states": createDictionary({}),
                                                                                                                },
                                                                                                            } ],
                                                                                                        } ],
                                                                                                    }
                                                                                                }
                                                                                                callback({
                                                                                                    "initializer": _initializer_v,
                                                                                                })
                                                                                            },
                                                                                        })
                                                                                    })((node) => _entries_v[propertyData.token.data.value] = node))
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        callback({
                                                                            "entries": createDictionary(_entries_v),
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["dictionary", node]))
                                                        },
                                                        "interface initializer": () => {
                                                            return wrap(((callback: (out: __interface_initializer_type_T) => void) => {
                                                                let _initializer_v: __interface_initializer_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "initializer": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_interface_initializer(
                                                                                (node) => _initializer_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_initializer_v === null) {
                                                                            _initializer_v = {
                                                                                "type": [ "method", {
                                                                                    "strategy": [ "function implementation", {
                                                                                        "block": {
                                                                                            "effects": [],
                                                                                            "nested functions": createDictionary({}),
                                                                                            "return value": [ "void", {
                                                                                            } ],
                                                                                            "states": createDictionary({}),
                                                                                        },
                                                                                    } ],
                                                                                } ],
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "initializer": _initializer_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["interface initializer", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["interface initializer", {
                                                    "initializer": {
                                                        "type": [ "method", {
                                                            "strategy": [ "function implementation", {
                                                                "block": {
                                                                    "effects": [],
                                                                    "nested functions": createDictionary({}),
                                                                    "return value": [ "void", {
                                                                    } ],
                                                                    "states": createDictionary({}),
                                                                },
                                                            } ],
                                                        } ],
                                                    },
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _arguments_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                },
                onEnd: () => {
                    callback({
                        "arguments": createDictionary(_arguments_v),
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_function_declaration(
        callback: (out: __function_declaration_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __function_declaration_T) => void) => {
            let _interface_v: __interface_definition_T | null = null
            const _parameters_v: { [key: string]: __parameters_T } = {}
            return context.expectVerboseGroup({
                properties: {
                    "interface": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_interface_definition(
                            (node) => _interface_v = node
                        )),
                    },
                    "parameters": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __parameters_T) => void) => {
                                    let _type_v: __type_parameters_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "builder": () => {
                                                            return wrap(((callback: (out: __builder_type_T) => void) => {
                                                                let _builder_v: string | null = null
                                                                const _type_arguments_v: { [key: string]: __type_arguments_T } = {}
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "builder": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _builder_v = $.token.data.value
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
                                                                        if (_builder_v === null) {
                                                                            _builder_v = "*referenced builder*"
                                                                        }
                                                                        callback({
                                                                            "builder": _builder_v,
                                                                            "type arguments": createDictionary(_type_arguments_v),
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["builder", node]))
                                                        },
                                                        "dictionary": () => {
                                                            return wrap(((callback: (out: __dictionary_type_parameters_T) => void) => {
                                                                let _entry_v: __interface_definition_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "entry": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_interface_definition(
                                                                                (node) => _entry_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_entry_v === null) {
                                                                            _entry_v = {
                                                                                "type": [ "group", {
                                                                                    "members": createDictionary({}),
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
                                                        "interface": () => {
                                                            return wrap(((callback: (out: __interface_type_T) => void) => {
                                                                let _interface_v: __interface_definition_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "interface": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_interface_definition(
                                                                                (node) => _interface_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_interface_v === null) {
                                                                            _interface_v = {
                                                                                "type": [ "group", {
                                                                                    "members": createDictionary({}),
                                                                                } ],
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "interface": _interface_v,
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
                                                    "interface": {
                                                        "type": [ "group", {
                                                            "members": createDictionary({}),
                                                        } ],
                                                    },
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
                    if (_interface_v === null) {
                        _interface_v = {
                            "type": [ "group", {
                                "members": createDictionary({}),
                            } ],
                        }
                    }
                    callback({
                        "interface": _interface_v,
                        "parameters": createDictionary(_parameters_v),
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_function_specification(
        callback: (out: __function_specification_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __function_specification_T) => void) => {
            let _block_v: __function_block_T | null = null
            let _declaration_v: __function_declaration_T | null = null
            return context.expectVerboseGroup({
                properties: {
                    "block": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_function_block(
                            (node) => _block_v = node
                        )),
                    },
                    "declaration": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_function_declaration(
                            (node) => _declaration_v = node
                        )),
                    },
                },
                onEnd: () => {
                    if (_block_v === null) {
                        _block_v = {
                            "effects": [],
                            "nested functions": createDictionary({}),
                            "return value": [ "void", {
                            } ],
                            "states": createDictionary({}),
                        }
                    }
                    if (_declaration_v === null) {
                        _declaration_v = {
                            "interface": {
                                "type": [ "group", {
                                    "members": createDictionary({}),
                                } ],
                            },
                            "parameters": createDictionary({}),
                        }
                    }
                    callback({
                        "block": _block_v,
                        "declaration": _declaration_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_interface_definition(
        callback: (out: __interface_definition_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __interface_definition_T) => void) => {
            let _type_v: __type_interface_definition_TU | null = null
            return context.expectVerboseGroup({
                properties: {
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "group": () => {
                                    return wrap(((callback: (out: __group_T) => void) => {
                                        const _members_v: { [key: string]: __members_T } = {}
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "members": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectDictionary({
                                                        onProperty: (propertyData) => {
                                                            return wrap(((callback: (out: __members_T) => void) => {
                                                                let _definition_v: __interface_definition_T | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "definition": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(_generateHandler_interface_definition(
                                                                                (node) => _definition_v = node
                                                                            )),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_definition_v === null) {
                                                                            _definition_v = {
                                                                                "type": [ "group", {
                                                                                    "members": createDictionary({}),
                                                                                } ],
                                                                            }
                                                                        }
                                                                        callback({
                                                                            "definition": _definition_v,
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
                                    })((node) => _type_v = ["group", node]))
                                },
                                "method": () => {
                                    return wrap(((callback: (out: __method_T) => void) => {
                                        let _return_type_v: __return_type_TU | null = null
                                        let _type_v: __type_reference_T | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "return type": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "interface": () => {
                                                                return wrap(((callback: (out: __interface_return_type_T) => void) => {
                                                                    let _interface_v: __interface_definition_T | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "interface": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_interface_definition(
                                                                                    (node) => _interface_v = node
                                                                                )),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_interface_v === null) {
                                                                                _interface_v = {
                                                                                    "type": [ "group", {
                                                                                        "members": createDictionary({}),
                                                                                    } ],
                                                                                }
                                                                            }
                                                                            callback({
                                                                                "interface": _interface_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _return_type_v = ["interface", node]))
                                                            },
                                                            "void": () => {
                                                                return wrap(((callback: (out: __void_return_type_T) => void) => {
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                        },
                                                                        onEnd: () => {
                                                                            callback({
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _return_type_v = ["void", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                                "type": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(_generateHandler_type_reference(
                                                        (node) => _type_v = node
                                                    )),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_return_type_v === null) {
                                                    _return_type_v = ["void", {
                                                    }]
                                                }
                                                if (_type_v === null) {
                                                    _type_v = {
                                                        "type": "*type reference*",
                                                    }
                                                }
                                                callback({
                                                    "return type": _return_type_v,
                                                    "type": _type_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["method", node]))
                                },
                                "reference": () => {
                                    return wrap(((callback: (out: __reference_T) => void) => {
                                        let _interface_v: string | null = null
                                        const _type_arguments_v: { [key: string]: __type_arguments_reference_T } = {}
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
                                                            return wrap(((callback: (out: __type_arguments_reference_T) => void) => {
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
                                                    _interface_v = "*referenced interface*"
                                                }
                                                callback({
                                                    "interface": _interface_v,
                                                    "type arguments": createDictionary(_type_arguments_v),
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["reference", node]))
                                },
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_type_v === null) {
                        _type_v = ["group", {
                            "members": createDictionary({}),
                        }]
                    }
                    callback({
                        "type": _type_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_interface_initializer(
        callback: (out: __interface_initializer_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __interface_initializer_T) => void) => {
            let _type_v: __type_interface_initializer_TU | null = null
            return context.expectVerboseGroup({
                properties: {
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "group": () => {
                                    return wrap(((callback: (out: __group_type_T) => void) => {
                                        let _strategy_v: __strategy_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "inline": () => {
                                                                return wrap(((callback: (out: __inline_T) => void) => {
                                                                    const _members_v: { [key: string]: __members_inline_T } = {}
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "members": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectDictionary({
                                                                                    onProperty: (propertyData) => {
                                                                                        return wrap(((callback: (out: __members_inline_T) => void) => {
                                                                                            let _initializer_v: __interface_initializer_T | null = null
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                    "initializer": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(_generateHandler_interface_initializer(
                                                                                                            (node) => _initializer_v = node
                                                                                                        )),
                                                                                                    },
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    if (_initializer_v === null) {
                                                                                                        _initializer_v = {
                                                                                                            "type": [ "method", {
                                                                                                                "strategy": [ "function implementation", {
                                                                                                                    "block": {
                                                                                                                        "effects": [],
                                                                                                                        "nested functions": createDictionary({}),
                                                                                                                        "return value": [ "void", {
                                                                                                                        } ],
                                                                                                                        "states": createDictionary({}),
                                                                                                                    },
                                                                                                                } ],
                                                                                                            } ],
                                                                                                        }
                                                                                                    }
                                                                                                    callback({
                                                                                                        "initializer": _initializer_v,
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
                                                                })((node) => _strategy_v = ["inline", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["inline", {
                                                        "members": createDictionary({}),
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["group", node]))
                                },
                                "method": () => {
                                    return wrap(((callback: (out: __method_type_T) => void) => {
                                        let _strategy_v: __strategy_method_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "argument": () => {
                                                                return wrap(((callback: (out: __argument_T) => void) => {
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
                                                                                _argument_v = "*argument*"
                                                                            }
                                                                            callback({
                                                                                "argument": _argument_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["argument", node]))
                                                            },
                                                            "function implementation": () => {
                                                                return wrap(((callback: (out: __function_implementation_T) => void) => {
                                                                    let _block_v: __function_block_T | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "block": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_function_block(
                                                                                    (node) => _block_v = node
                                                                                )),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_block_v === null) {
                                                                                _block_v = {
                                                                                    "effects": [],
                                                                                    "nested functions": createDictionary({}),
                                                                                    "return value": [ "void", {
                                                                                    } ],
                                                                                    "states": createDictionary({}),
                                                                                }
                                                                            }
                                                                            callback({
                                                                                "block": _block_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["function implementation", node]))
                                                            },
                                                            "inline function": () => {
                                                                return wrap(((callback: (out: __inline_function_T) => void) => {
                                                                    let _call_v: __function_call_T | null = null
                                                                    let _specification_v: __function_specification_T | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "call": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_function_call(
                                                                                    (node) => _call_v = node
                                                                                )),
                                                                            },
                                                                            "specification": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_function_specification(
                                                                                    (node) => _specification_v = node
                                                                                )),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_call_v === null) {
                                                                                _call_v = {
                                                                                    "arguments": createDictionary({}),
                                                                                }
                                                                            }
                                                                            if (_specification_v === null) {
                                                                                _specification_v = {
                                                                                    "block": {
                                                                                        "effects": [],
                                                                                        "nested functions": createDictionary({}),
                                                                                        "return value": [ "void", {
                                                                                        } ],
                                                                                        "states": createDictionary({}),
                                                                                    },
                                                                                    "declaration": {
                                                                                        "interface": {
                                                                                            "type": [ "group", {
                                                                                                "members": createDictionary({}),
                                                                                            } ],
                                                                                        },
                                                                                        "parameters": createDictionary({}),
                                                                                    },
                                                                                }
                                                                            }
                                                                            callback({
                                                                                "call": _call_v,
                                                                                "specification": _specification_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["inline function", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["function implementation", {
                                                        "block": {
                                                            "effects": [],
                                                            "nested functions": createDictionary({}),
                                                            "return value": [ "void", {
                                                            } ],
                                                            "states": createDictionary({}),
                                                        },
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["method", node]))
                                },
                                "reference": () => {
                                    return wrap(((callback: (out: __reference_type_T) => void) => {
                                        let _strategy_v: __strategy_reference_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "function call6": () => {
                                                                return wrap(((callback: (out: __function_call6_T) => void) => {
                                                                    let _function_call_v: __named_function_call_T | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "function call": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_named_function_call(
                                                                                    (node) => _function_call_v = node
                                                                                )),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_function_call_v === null) {
                                                                                _function_call_v = {
                                                                                    "function call": {
                                                                                        "arguments": createDictionary({}),
                                                                                    },
                                                                                    "type": [ "local", {
                                                                                        "function": "*function*",
                                                                                    } ],
                                                                                }
                                                                            }
                                                                            callback({
                                                                                "function call": _function_call_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["function call6", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["function call6", {
                                                        "function call": {
                                                            "function call": {
                                                                "arguments": createDictionary({}),
                                                            },
                                                            "type": [ "local", {
                                                                "function": "*function*",
                                                            } ],
                                                        },
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["reference", node]))
                                },
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_type_v === null) {
                        _type_v = ["method", {
                            "strategy": [ "function implementation", {
                                "block": {
                                    "effects": [],
                                    "nested functions": createDictionary({}),
                                    "return value": [ "void", {
                                    } ],
                                    "states": createDictionary({}),
                                },
                            } ],
                        }]
                    }
                    callback({
                        "type": _type_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_list_reference(
        callback: (out: __list_reference_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __list_reference_T) => void) => {
            let _list_v: string | null = null
            let _nested_type_reference_v: __nested_type_reference_T | null = null
            return context.expectVerboseGroup({
                properties: {
                    "list": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectQuotedString({
                            warningOnly: true,
                            callback: ($) => {
                                _list_v = $.token.data.value
                            },
                        })),
                    },
                    "nested type reference": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_nested_type_reference(
                            (node) => _nested_type_reference_v = node
                        )),
                    },
                },
                onEnd: () => {
                    if (_list_v === null) {
                        _list_v = "*list*"
                    }
                    if (_nested_type_reference_v === null) {
                        _nested_type_reference_v = {
                            "steps": [],
                            "type": {
                                "type": "*type reference*",
                            },
                        }
                    }
                    callback({
                        "list": _list_v,
                        "nested type reference": _nested_type_reference_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_named_function_call(
        callback: (out: __named_function_call_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __named_function_call_T) => void) => {
            let _function_call_v: __function_call_T | null = null
            let _type_v: __type_named_function_call_TU | null = null
            return context.expectVerboseGroup({
                properties: {
                    "function call": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_function_call(
                            (node) => _function_call_v = node
                        )),
                    },
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "external": () => {
                                    return wrap(((callback: (out: __external_T) => void) => {
                                        let _builder_v: string | null = null
                                        let _method_v: string | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "builder": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectQuotedString({
                                                        warningOnly: true,
                                                        callback: ($) => {
                                                            _builder_v = $.token.data.value
                                                        },
                                                    })),
                                                },
                                                "method": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectQuotedString({
                                                        warningOnly: true,
                                                        callback: ($) => {
                                                            _method_v = $.token.data.value
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_builder_v === null) {
                                                    _builder_v = "*builder*"
                                                }
                                                if (_method_v === null) {
                                                    _method_v = "*method*"
                                                }
                                                callback({
                                                    "builder": _builder_v,
                                                    "method": _method_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["external", node]))
                                },
                                "local": () => {
                                    return wrap(((callback: (out: __local_T) => void) => {
                                        let _function_v: string | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "function": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectQuotedString({
                                                        warningOnly: true,
                                                        callback: ($) => {
                                                            _function_v = $.token.data.value
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_function_v === null) {
                                                    _function_v = "*function*"
                                                }
                                                callback({
                                                    "function": _function_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["local", node]))
                                },
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_function_call_v === null) {
                        _function_call_v = {
                            "arguments": createDictionary({}),
                        }
                    }
                    if (_type_v === null) {
                        _type_v = ["local", {
                            "function": "*function*",
                        }]
                    }
                    callback({
                        "function call": _function_call_v,
                        "type": _type_v,
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
            const _interface_builders_v: { [key: string]: __interface_builders_T } = {}
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
                                    let _specification_v: __function_specification_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "specification": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_function_specification(
                                                    (node) => _specification_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_specification_v === null) {
                                                _specification_v = {
                                                    "block": {
                                                        "effects": [],
                                                        "nested functions": createDictionary({}),
                                                        "return value": [ "void", {
                                                        } ],
                                                        "states": createDictionary({}),
                                                    },
                                                    "declaration": {
                                                        "interface": {
                                                            "type": [ "group", {
                                                                "members": createDictionary({}),
                                                            } ],
                                                        },
                                                        "parameters": createDictionary({}),
                                                    },
                                                }
                                            }
                                            callback({
                                                "specification": _specification_v,
                                            })
                                        },
                                    })
                                })((node) => _functions_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "interface builders": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __interface_builders_T) => void) => {
                                    const _methods_v: { [key: string]: __methods_T } = {}
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "methods": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectDictionary({
                                                    onProperty: (propertyData) => {
                                                        return wrap(((callback: (out: __methods_T) => void) => {
                                                            let _declaration_v: __function_declaration_T | null = null
                                                            return context.expectVerboseGroup({
                                                                properties: {
                                                                    "declaration": {
                                                                        onNotExists: () => { /**/ },
                                                                        onExists: () => wrap(_generateHandler_function_declaration(
                                                                            (node) => _declaration_v = node
                                                                        )),
                                                                    },
                                                                },
                                                                onEnd: () => {
                                                                    if (_declaration_v === null) {
                                                                        _declaration_v = {
                                                                            "interface": {
                                                                                "type": [ "group", {
                                                                                    "members": createDictionary({}),
                                                                                } ],
                                                                            },
                                                                            "parameters": createDictionary({}),
                                                                        }
                                                                    }
                                                                    callback({
                                                                        "declaration": _declaration_v,
                                                                    })
                                                                },
                                                            })
                                                        })((node) => _methods_v[propertyData.token.data.value] = node))
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            callback({
                                                "methods": createDictionary(_methods_v),
                                            })
                                        },
                                    })
                                })((node) => _interface_builders_v[propertyData.token.data.value] = node))
                            },
                        })),
                    },
                    "interfaces": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback: (out: __interfaces_T) => void) => {
                                    let _definition_v: __interface_definition_T | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "definition": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(_generateHandler_interface_definition(
                                                    (node) => _definition_v = node
                                                )),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_definition_v === null) {
                                                _definition_v = {
                                                    "type": [ "group", {
                                                        "members": createDictionary({}),
                                                    } ],
                                                }
                                            }
                                            callback({
                                                "definition": _definition_v,
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
                                                    "interface builders": createDictionary({}),
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
                        "interface builders": createDictionary(_interface_builders_v),
                        "interfaces": createDictionary(_interfaces_v),
                        "namespaces": createDictionary(_namespaces_v),
                        "type parameters": createDictionary(_type_parameters_v),
                        "types": createDictionary(_types_v),
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_nested_type_reference(
        callback: (out: __nested_type_reference_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __nested_type_reference_T) => void) => {
            const _steps_v: __steps_T[] = []
            let _type_v: __type_reference_T | null = null
            return context.expectVerboseGroup({
                properties: {
                    "steps": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectList({
                            onElement: () => {
                                return ((callback: (out: __steps_T) => void) => {
                                    let _type_v: __type_steps_TU | null = null
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "type": {
                                                onNotExists: () => { /**/ },
                                                onExists: () => wrap(context.expectTaggedUnion({
                                                    options: {
                                                        "dictionary": () => {
                                                            return wrap(((callback: (out: __dictionary_type_steps_T) => void) => {
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                    },
                                                                    onEnd: () => {
                                                                        callback({
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["dictionary", node]))
                                                        },
                                                        "group": () => {
                                                            return wrap(((callback: (out: __group_type_steps_T) => void) => {
                                                                let _property_v: string | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "property": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _property_v = $.token.data.value
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_property_v === null) {
                                                                            _property_v = "*property*"
                                                                        }
                                                                        callback({
                                                                            "property": _property_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["group", node]))
                                                        },
                                                        "list": () => {
                                                            return wrap(((callback: (out: __list_type_T) => void) => {
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                    },
                                                                    onEnd: () => {
                                                                        callback({
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["list", node]))
                                                        },
                                                        "tagged union option": () => {
                                                            return wrap(((callback: (out: __tagged_union_option_T) => void) => {
                                                                let _option_v: string | null = null
                                                                return context.expectVerboseGroup({
                                                                    properties: {
                                                                        "option": {
                                                                            onNotExists: () => { /**/ },
                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                warningOnly: true,
                                                                                callback: ($) => {
                                                                                    _option_v = $.token.data.value
                                                                                },
                                                                            })),
                                                                        },
                                                                    },
                                                                    onEnd: () => {
                                                                        if (_option_v === null) {
                                                                            _option_v = "*option*"
                                                                        }
                                                                        callback({
                                                                            "option": _option_v,
                                                                        })
                                                                    },
                                                                })
                                                            })((node) => _type_v = ["tagged union option", node]))
                                                        },
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            if (_type_v === null) {
                                                _type_v = ["dictionary", {
                                                }]
                                            }
                                            callback({
                                                "type": _type_v,
                                            })
                                        },
                                    })
                                })((node) => _steps_v.push(node))
                            },
                        })),
                    },
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(_generateHandler_type_reference(
                            (node) => _type_v = node
                        )),
                    },
                },
                onEnd: () => {
                    if (_type_v === null) {
                        _type_v = {
                            "type": "*type reference*",
                        }
                    }
                    callback({
                        "steps": _steps_v,
                        "type": _type_v,
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
                            "interface builders": createDictionary({}),
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
                                    return wrap(((callback: (out: __dictionary_type_type_T) => void) => {
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
                                    return wrap(((callback: (out: __group_type_type_T) => void) => {
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
                                    return wrap(((callback: (out: __list_type_type_T) => void) => {
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
                                "type reference": () => {
                                    return wrap(((callback: (out: __type_reference_type_T) => void) => {
                                        let _type_v: __type_reference_T | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "type": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(_generateHandler_type_reference(
                                                        (node) => _type_v = node
                                                    )),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_type_v === null) {
                                                    _type_v = {
                                                        "type": "*type reference*",
                                                    }
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

    function _generateHandler_type_initializer(
        callback: (out: __type_initializer_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __type_initializer_T) => void) => {
            let _type_v: __type_type_initializer_TU | null = null
            return context.expectVerboseGroup({
                properties: {
                    "type": {
                        onNotExists: () => { /**/ },
                        onExists: () => wrap(context.expectTaggedUnion({
                            options: {
                                "boolean": () => {
                                    return wrap(((callback: (out: __boolean_type_T) => void) => {
                                        let _strategy_v: __strategy_boolean_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_T) => void) => {
                                                                    let _value_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "value": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _value_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_value_v === null) {
                                                                                _value_v = "true"
                                                                            }
                                                                            callback({
                                                                                "value": _value_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                        "value": "true",
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["boolean", node]))
                                },
                                "dictionary": () => {
                                    return wrap(((callback: (out: __dictionary_type_type_initializer_T) => void) => {
                                        let _strategy_v: __strategy_dictionary_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_T) => void) => {
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                        },
                                                                        onEnd: () => {
                                                                            callback({
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["dictionary", node]))
                                },
                                "group": () => {
                                    return wrap(((callback: (out: __group_type_type_initializer_T) => void) => {
                                        let _strategy_v: __strategy_group_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_group_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_group_T) => void) => {
                                                                    const _properties_v: { [key: string]: __properties_literal_T } = {}
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "properties": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectDictionary({
                                                                                    onProperty: (propertyData) => {
                                                                                        return wrap(((callback: (out: __properties_literal_T) => void) => {
                                                                                            let _initializer_v: __type_initializer_T | null = null
                                                                                            return context.expectVerboseGroup({
                                                                                                properties: {
                                                                                                    "initializer": {
                                                                                                        onNotExists: () => { /**/ },
                                                                                                        onExists: () => wrap(_generateHandler_type_initializer(
                                                                                                            (node) => _initializer_v = node
                                                                                                        )),
                                                                                                    },
                                                                                                },
                                                                                                onEnd: () => {
                                                                                                    if (_initializer_v === null) {
                                                                                                        _initializer_v = {
                                                                                                            "type": [ "string", {
                                                                                                                "strategy": [ "literal", {
                                                                                                                    "value": "",
                                                                                                                } ],
                                                                                                            } ],
                                                                                                        }
                                                                                                    }
                                                                                                    callback({
                                                                                                        "initializer": _initializer_v,
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
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                        "properties": createDictionary({}),
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["group", node]))
                                },
                                "list": () => {
                                    return wrap(((callback: (out: __list_type_type_initializer_T) => void) => {
                                        let _strategy_v: __strategy_list_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_list_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_list_T) => void) => {
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                        },
                                                                        onEnd: () => {
                                                                            callback({
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["list", node]))
                                },
                                "number": () => {
                                    return wrap(((callback: (out: __number_type_T) => void) => {
                                        let _strategy_v: __strategy_number_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_number_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_number_T) => void) => {
                                                                    let _value_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "value": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _value_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_value_v === null) {
                                                                                _value_v = "0"
                                                                            }
                                                                            callback({
                                                                                "value": _value_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                        "value": "0",
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["number", node]))
                                },
                                "string": () => {
                                    return wrap(((callback: (out: __string_type_type_initializer_T) => void) => {
                                        let _strategy_v: __strategy_string_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_string_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_string_T) => void) => {
                                                                    let _value_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "value": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _value_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_value_v === null) {
                                                                                _value_v = ""
                                                                            }
                                                                            callback({
                                                                                "value": _value_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                        "value": "",
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["string", node]))
                                },
                                "tagged union": () => {
                                    return wrap(((callback: (out: __tagged_union_type_T) => void) => {
                                        let _strategy_v: __strategy_tagged_union_TU | null = null
                                        return context.expectVerboseGroup({
                                            properties: {
                                                "strategy": {
                                                    onNotExists: () => { /**/ },
                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                        options: {
                                                            "from state": () => {
                                                                return wrap(((callback: (out: __from_state_strategy_tagged_union_T) => void) => {
                                                                    let _state_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "state": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _state_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_state_v === null) {
                                                                                _state_v = "*state*"
                                                                            }
                                                                            callback({
                                                                                "state": _state_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["from state", node]))
                                                            },
                                                            "literal": () => {
                                                                return wrap(((callback: (out: __literal_strategy_tagged_union_T) => void) => {
                                                                    let _data_v: __type_initializer_T | null = null
                                                                    let _option_v: string | null = null
                                                                    return context.expectVerboseGroup({
                                                                        properties: {
                                                                            "data": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(_generateHandler_type_initializer(
                                                                                    (node) => _data_v = node
                                                                                )),
                                                                            },
                                                                            "option": {
                                                                                onNotExists: () => { /**/ },
                                                                                onExists: () => wrap(context.expectQuotedString({
                                                                                    warningOnly: true,
                                                                                    callback: ($) => {
                                                                                        _option_v = $.token.data.value
                                                                                    },
                                                                                })),
                                                                            },
                                                                        },
                                                                        onEnd: () => {
                                                                            if (_data_v === null) {
                                                                                _data_v = {
                                                                                    "type": [ "string", {
                                                                                        "strategy": [ "literal", {
                                                                                            "value": "",
                                                                                        } ],
                                                                                    } ],
                                                                                }
                                                                            }
                                                                            if (_option_v === null) {
                                                                                _option_v = "*option*"
                                                                            }
                                                                            callback({
                                                                                "data": _data_v,
                                                                                "option": _option_v,
                                                                            })
                                                                        },
                                                                    })
                                                                })((node) => _strategy_v = ["literal", node]))
                                                            },
                                                        },
                                                    })),
                                                },
                                            },
                                            onEnd: () => {
                                                if (_strategy_v === null) {
                                                    _strategy_v = ["literal", {
                                                        "data": {
                                                            "type": [ "string", {
                                                                "strategy": [ "literal", {
                                                                    "value": "",
                                                                } ],
                                                            } ],
                                                        },
                                                        "option": "*option*",
                                                    }]
                                                }
                                                callback({
                                                    "strategy": _strategy_v,
                                                })
                                            },
                                        })
                                    })((node) => _type_v = ["tagged union", node]))
                                },
                            },
                        })),
                    },
                },
                onEnd: () => {
                    if (_type_v === null) {
                        _type_v = ["string", {
                            "strategy": [ "literal", {
                                "value": "",
                            } ],
                        }]
                    }
                    callback({
                        "type": _type_v,
                    })
                },
            })
        })((node) => callback(node))
    }

    function _generateHandler_type_reference(
        callback: (out: __type_reference_T) => void,
    ): astn.IValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return ((callback: (out: __type_reference_T) => void) => {
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
                        _type_v = "*type reference*"
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
    function _generateBuilder_dictionary_reference(
        intermediate: __dictionary_reference_B,
    ): __dictionary_reference_T {
        return {
            "dictionary": intermediate["dictionary"] === undefined ? "*dictionary*" : intermediate["dictionary"],
            "nested type reference": intermediate["nested type reference"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(intermediate["nested type reference"]),
        }
    }

    function _default_generateBuilder_dictionary_reference(
    ): __dictionary_reference_T {
        return {
            "dictionary": "*dictionary*",
            "nested type reference": _default_generateBuilder_nested_type_reference(),
        }
    }

    function _generateBuilder_function_block(
        intermediate: __function_block_B,
    ): __function_block_T {
        return {
            "effects": intermediate["effects"] === undefined ? [] : ((): __effects_T[] => {{
                const source = intermediate["effects"]
                const target: __effects_T[] = []
                source.forEach((entry) => {
                    target.push({
                        "type": entry["type"] === undefined ? [ "interface call", {
                            "initializer": _default_generateBuilder_type_initializer(),
                            "interface": "*interface*",
                        } ] : ((): __type_effects_TU => {
                            switch (entry["type"][0]) {
                                case "interface call":
                                    return [ "interface call", {
                                        "initializer": entry["type"][1]["initializer"] === undefined ? _default_generateBuilder_type_initializer() : _generateBuilder_type_initializer(entry["type"][1]["initializer"]),
                                        "interface": entry["type"][1]["interface"] === undefined ? "*interface*" : entry["type"][1]["interface"],
                                    } ]
                                case "state change":
                                    return [ "state change", {
                                        "type": entry["type"][1]["type"] === undefined ? [ "set string", {
                                            "context property": "*context property*",
                                            "state": "*state*",
                                        } ] : ((): __type_TU => {
                                            switch (entry["type"][1]["type"][0]) {
                                                case "add entry":
                                                    return [ "add entry", {
                                                        "context property": entry["type"][1]["type"][1]["context property"] === undefined ? "*context property*" : entry["type"][1]["type"][1]["context property"],
                                                        "key": entry["type"][1]["type"][1]["key"] === undefined ? "*key*" : entry["type"][1]["type"][1]["key"],
                                                        "state": entry["type"][1]["type"][1]["state"] === undefined ? "*state*" : entry["type"][1]["type"][1]["state"],
                                                    } ]
                                                case "set string":
                                                    return [ "set string", {
                                                        "context property": entry["type"][1]["type"][1]["context property"] === undefined ? "*context property*" : entry["type"][1]["type"][1]["context property"],
                                                        "state": entry["type"][1]["type"][1]["state"] === undefined ? "*state*" : entry["type"][1]["type"][1]["state"],
                                                    } ]
                                                default: return assertUnreachable(entry["type"][1]["type"][0])
                                            }
                                        })(),
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    })
                })
                return target
            }})(),
            "nested functions": intermediate["nested functions"] === undefined ? createDictionary({}) : ((): IDictionary<__nested_functions_T> => {{
                const source = intermediate["nested functions"]
                const target: { [key:string]: __nested_functions_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "specification": entry["specification"] === undefined ? _default_generateBuilder_function_specification() : _generateBuilder_function_specification(entry["specification"]),
                    }
                })
                return createDictionary(target)
            }})(),
            "return value": intermediate["return value"] === undefined ? [ "void", {
            } ] : ((): __return_value_TU => {
                switch (intermediate["return value"][0]) {
                    case "interface":
                        return [ "interface", {
                            "initializer": intermediate["return value"][1]["initializer"] === undefined ? _default_generateBuilder_interface_initializer() : _generateBuilder_interface_initializer(intermediate["return value"][1]["initializer"]),
                        } ]
                    case "void":
                        return [ "void", {
                        } ]
                    default: return assertUnreachable(intermediate["return value"][0])
                }
            })(),
            "states": intermediate["states"] === undefined ? createDictionary({}) : ((): IDictionary<__states_T> => {{
                const source = intermediate["states"]
                const target: { [key:string]: __states_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "type": entry["type"] === undefined ? [ "string", {
                            "initial value": "",
                        } ] : ((): __type_states_TU => {
                            switch (entry["type"][0]) {
                                case "dictionary":
                                    return [ "dictionary", {
                                        "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_dictionary_reference() : _generateBuilder_dictionary_reference(entry["type"][1]["type"]),
                                    } ]
                                case "list":
                                    return [ "list", {
                                        "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_list_reference() : _generateBuilder_list_reference(entry["type"][1]["type"]),
                                    } ]
                                case "string":
                                    return [ "string", {
                                        "initial value": entry["type"][1]["initial value"] === undefined ? "" : entry["type"][1]["initial value"],
                                    } ]
                                case "type5":
                                    return [ "type5", {
                                        "initializer": entry["type"][1]["initializer"] === undefined ? _default_generateBuilder_type_initializer() : _generateBuilder_type_initializer(entry["type"][1]["initializer"]),
                                        "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(entry["type"][1]["type"]),
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    }
                })
                return createDictionary(target)
            }})(),
        }
    }

    function _default_generateBuilder_function_block(
    ): __function_block_T {
        return {
            "effects": [],
            "nested functions": createDictionary({}),
            "return value": [ "void", {
            } ],
            "states": createDictionary({}),
        }
    }

    function _generateBuilder_function_call(
        intermediate: __function_call_B,
    ): __function_call_T {
        return {
            "arguments": intermediate["arguments"] === undefined ? createDictionary({}) : ((): IDictionary<__arguments_T> => {{
                const source = intermediate["arguments"]
                const target: { [key:string]: __arguments_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "type": entry["type"] === undefined ? [ "interface initializer", {
                            "initializer": _default_generateBuilder_interface_initializer(),
                        } ] : ((): __type_arguments_TU => {
                            switch (entry["type"][0]) {
                                case "builder":
                                    return [ "builder", {
                                        "argument": entry["type"][1]["argument"] === undefined ? "*argument*" : entry["type"][1]["argument"],
                                    } ]
                                case "dictionary":
                                    return [ "dictionary", {
                                        "entries": entry["type"][1]["entries"] === undefined ? createDictionary({}) : ((): IDictionary<__entries_T> => {{
                                            const source = entry["type"][1]["entries"]
                                            const target: { [key:string]: __entries_T} = {}
                                            Object.keys(source).forEach((key) => {
                                                const entry = source[key]
                                                target[key] = {
                                                    "initializer": entry["initializer"] === undefined ? _default_generateBuilder_interface_initializer() : _generateBuilder_interface_initializer(entry["initializer"]),
                                                }
                                            })
                                            return createDictionary(target)
                                        }})(),
                                    } ]
                                case "interface initializer":
                                    return [ "interface initializer", {
                                        "initializer": entry["type"][1]["initializer"] === undefined ? _default_generateBuilder_interface_initializer() : _generateBuilder_interface_initializer(entry["type"][1]["initializer"]),
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    }
                })
                return createDictionary(target)
            }})(),
        }
    }

    function _default_generateBuilder_function_call(
    ): __function_call_T {
        return {
            "arguments": createDictionary({}),
        }
    }

    function _generateBuilder_function_declaration(
        intermediate: __function_declaration_B,
    ): __function_declaration_T {
        return {
            "interface": intermediate["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["interface"]),
            "parameters": intermediate["parameters"] === undefined ? createDictionary({}) : ((): IDictionary<__parameters_T> => {{
                const source = intermediate["parameters"]
                const target: { [key:string]: __parameters_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "type": entry["type"] === undefined ? [ "interface", {
                            "interface": _default_generateBuilder_interface_definition(),
                        } ] : ((): __type_parameters_TU => {
                            switch (entry["type"][0]) {
                                case "builder":
                                    return [ "builder", {
                                        "builder": entry["type"][1]["builder"] === undefined ? "*referenced builder*" : entry["type"][1]["builder"],
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
                                case "dictionary":
                                    return [ "dictionary", {
                                        "entry": entry["type"][1]["entry"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["type"][1]["entry"]),
                                    } ]
                                case "interface":
                                    return [ "interface", {
                                        "interface": entry["type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["type"][1]["interface"]),
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    }
                })
                return createDictionary(target)
            }})(),
        }
    }

    function _default_generateBuilder_function_declaration(
    ): __function_declaration_T {
        return {
            "interface": _default_generateBuilder_interface_definition(),
            "parameters": createDictionary({}),
        }
    }

    function _generateBuilder_function_specification(
        intermediate: __function_specification_B,
    ): __function_specification_T {
        return {
            "block": intermediate["block"] === undefined ? _default_generateBuilder_function_block() : _generateBuilder_function_block(intermediate["block"]),
            "declaration": intermediate["declaration"] === undefined ? _default_generateBuilder_function_declaration() : _generateBuilder_function_declaration(intermediate["declaration"]),
        }
    }

    function _default_generateBuilder_function_specification(
    ): __function_specification_T {
        return {
            "block": _default_generateBuilder_function_block(),
            "declaration": _default_generateBuilder_function_declaration(),
        }
    }

    function _generateBuilder_interface_definition(
        intermediate: __interface_definition_B,
    ): __interface_definition_T {
        return {
            "type": intermediate["type"] === undefined ? [ "group", {
                "members": createDictionary({}),
            } ] : ((): __type_interface_definition_TU => {
                switch (intermediate["type"][0]) {
                    case "group":
                        return [ "group", {
                            "members": intermediate["type"][1]["members"] === undefined ? createDictionary({}) : ((): IDictionary<__members_T> => {{
                                const source = intermediate["type"][1]["members"]
                                const target: { [key:string]: __members_T} = {}
                                Object.keys(source).forEach((key) => {
                                    const entry = source[key]
                                    target[key] = {
                                        "definition": entry["definition"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["definition"]),
                                    }
                                })
                                return createDictionary(target)
                            }})(),
                        } ]
                    case "method":
                        return [ "method", {
                            "return type": intermediate["type"][1]["return type"] === undefined ? [ "void", {
                            } ] : ((): __return_type_TU => {
                                switch (intermediate["type"][1]["return type"][0]) {
                                    case "interface":
                                        return [ "interface", {
                                            "interface": intermediate["type"][1]["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["type"][1]["return type"][1]["interface"]),
                                        } ]
                                    case "void":
                                        return [ "void", {
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["return type"][0])
                                }
                            })(),
                            "type": intermediate["type"][1]["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["type"][1]["type"]),
                        } ]
                    case "reference":
                        return [ "reference", {
                            "interface": intermediate["type"][1]["interface"] === undefined ? "*referenced interface*" : intermediate["type"][1]["interface"],
                            "type arguments": intermediate["type"][1]["type arguments"] === undefined ? createDictionary({}) : ((): IDictionary<__type_arguments_reference_T> => {{
                                const source = intermediate["type"][1]["type arguments"]
                                const target: { [key:string]: __type_arguments_reference_T} = {}
                                Object.keys(source).forEach((key) => {
                                    const entry = source[key]
                                    target[key] = {
                                        "type": entry["type"] === undefined ? "*type argument type*" : entry["type"],
                                    }
                                })
                                return createDictionary(target)
                            }})(),
                        } ]
                    default: return assertUnreachable(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_interface_definition(
    ): __interface_definition_T {
        return {
            "type": [ "group", {
                "members": createDictionary({}),
            } ],
        }
    }

    function _generateBuilder_interface_initializer(
        intermediate: __interface_initializer_B,
    ): __interface_initializer_T {
        return {
            "type": intermediate["type"] === undefined ? [ "method", {
                "strategy": [ "function implementation", {
                    "block": _default_generateBuilder_function_block(),
                } ],
            } ] : ((): __type_interface_initializer_TU => {
                switch (intermediate["type"][0]) {
                    case "group":
                        return [ "group", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "inline", {
                                "members": createDictionary({}),
                            } ] : ((): __strategy_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "inline":
                                        return [ "inline", {
                                            "members": intermediate["type"][1]["strategy"][1]["members"] === undefined ? createDictionary({}) : ((): IDictionary<__members_inline_T> => {{
                                                const source = intermediate["type"][1]["strategy"][1]["members"]
                                                const target: { [key:string]: __members_inline_T} = {}
                                                Object.keys(source).forEach((key) => {
                                                    const entry = source[key]
                                                    target[key] = {
                                                        "initializer": entry["initializer"] === undefined ? _default_generateBuilder_interface_initializer() : _generateBuilder_interface_initializer(entry["initializer"]),
                                                    }
                                                })
                                                return createDictionary(target)
                                            }})(),
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "method":
                        return [ "method", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "function implementation", {
                                "block": _default_generateBuilder_function_block(),
                            } ] : ((): __strategy_method_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "argument":
                                        return [ "argument", {
                                            "argument": intermediate["type"][1]["strategy"][1]["argument"] === undefined ? "*argument*" : intermediate["type"][1]["strategy"][1]["argument"],
                                        } ]
                                    case "function implementation":
                                        return [ "function implementation", {
                                            "block": intermediate["type"][1]["strategy"][1]["block"] === undefined ? _default_generateBuilder_function_block() : _generateBuilder_function_block(intermediate["type"][1]["strategy"][1]["block"]),
                                        } ]
                                    case "inline function":
                                        return [ "inline function", {
                                            "call": intermediate["type"][1]["strategy"][1]["call"] === undefined ? _default_generateBuilder_function_call() : _generateBuilder_function_call(intermediate["type"][1]["strategy"][1]["call"]),
                                            "specification": intermediate["type"][1]["strategy"][1]["specification"] === undefined ? _default_generateBuilder_function_specification() : _generateBuilder_function_specification(intermediate["type"][1]["strategy"][1]["specification"]),
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "reference":
                        return [ "reference", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "function call6", {
                                "function call": _default_generateBuilder_named_function_call(),
                            } ] : ((): __strategy_reference_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "function call6":
                                        return [ "function call6", {
                                            "function call": intermediate["type"][1]["strategy"][1]["function call"] === undefined ? _default_generateBuilder_named_function_call() : _generateBuilder_named_function_call(intermediate["type"][1]["strategy"][1]["function call"]),
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    default: return assertUnreachable(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_interface_initializer(
    ): __interface_initializer_T {
        return {
            "type": [ "method", {
                "strategy": [ "function implementation", {
                    "block": _default_generateBuilder_function_block(),
                } ],
            } ],
        }
    }

    function _generateBuilder_list_reference(
        intermediate: __list_reference_B,
    ): __list_reference_T {
        return {
            "list": intermediate["list"] === undefined ? "*list*" : intermediate["list"],
            "nested type reference": intermediate["nested type reference"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(intermediate["nested type reference"]),
        }
    }

    function _default_generateBuilder_list_reference(
    ): __list_reference_T {
        return {
            "list": "*list*",
            "nested type reference": _default_generateBuilder_nested_type_reference(),
        }
    }

    function _generateBuilder_named_function_call(
        intermediate: __named_function_call_B,
    ): __named_function_call_T {
        return {
            "function call": intermediate["function call"] === undefined ? _default_generateBuilder_function_call() : _generateBuilder_function_call(intermediate["function call"]),
            "type": intermediate["type"] === undefined ? [ "local", {
                "function": "*function*",
            } ] : ((): __type_named_function_call_TU => {
                switch (intermediate["type"][0]) {
                    case "external":
                        return [ "external", {
                            "builder": intermediate["type"][1]["builder"] === undefined ? "*builder*" : intermediate["type"][1]["builder"],
                            "method": intermediate["type"][1]["method"] === undefined ? "*method*" : intermediate["type"][1]["method"],
                        } ]
                    case "local":
                        return [ "local", {
                            "function": intermediate["type"][1]["function"] === undefined ? "*function*" : intermediate["type"][1]["function"],
                        } ]
                    default: return assertUnreachable(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_named_function_call(
    ): __named_function_call_T {
        return {
            "function call": _default_generateBuilder_function_call(),
            "type": [ "local", {
                "function": "*function*",
            } ],
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
                        "specification": entry["specification"] === undefined ? _default_generateBuilder_function_specification() : _generateBuilder_function_specification(entry["specification"]),
                    }
                })
                return createDictionary(target)
            }})(),
            "interface builders": intermediate["interface builders"] === undefined ? createDictionary({}) : ((): IDictionary<__interface_builders_T> => {{
                const source = intermediate["interface builders"]
                const target: { [key:string]: __interface_builders_T} = {}
                Object.keys(source).forEach((key) => {
                    const entry = source[key]
                    target[key] = {
                        "methods": entry["methods"] === undefined ? createDictionary({}) : ((): IDictionary<__methods_T> => {{
                            const source = entry["methods"]
                            const target: { [key:string]: __methods_T} = {}
                            Object.keys(source).forEach((key) => {
                                const entry = source[key]
                                target[key] = {
                                    "declaration": entry["declaration"] === undefined ? _default_generateBuilder_function_declaration() : _generateBuilder_function_declaration(entry["declaration"]),
                                }
                            })
                            return createDictionary(target)
                        }})(),
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
                        "definition": entry["definition"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["definition"]),
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
            "interface builders": createDictionary({}),
            "interfaces": createDictionary({}),
            "namespaces": createDictionary({}),
            "type parameters": createDictionary({}),
            "types": createDictionary({}),
        }
    }

    function _generateBuilder_nested_type_reference(
        intermediate: __nested_type_reference_B,
    ): __nested_type_reference_T {
        return {
            "steps": intermediate["steps"] === undefined ? [] : ((): __steps_T[] => {{
                const source = intermediate["steps"]
                const target: __steps_T[] = []
                source.forEach((entry) => {
                    target.push({
                        "type": entry["type"] === undefined ? [ "dictionary", {
                        } ] : ((): __type_steps_TU => {
                            switch (entry["type"][0]) {
                                case "dictionary":
                                    return [ "dictionary", {
                                    } ]
                                case "group":
                                    return [ "group", {
                                        "property": entry["type"][1]["property"] === undefined ? "*property*" : entry["type"][1]["property"],
                                    } ]
                                case "list":
                                    return [ "list", {
                                    } ]
                                case "tagged union option":
                                    return [ "tagged union option", {
                                        "option": entry["type"][1]["option"] === undefined ? "*option*" : entry["type"][1]["option"],
                                    } ]
                                default: return assertUnreachable(entry["type"][0])
                            }
                        })(),
                    })
                })
                return target
            }})(),
            "type": intermediate["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["type"]),
        }
    }

    function _default_generateBuilder_nested_type_reference(
    ): __nested_type_reference_T {
        return {
            "steps": [],
            "type": _default_generateBuilder_type_reference(),
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
                    case "type argument":
                        return [ "type argument", {
                            "argument": intermediate["type"][1]["argument"] === undefined ? "*type argument*" : intermediate["type"][1]["argument"],
                        } ]
                    case "type reference":
                        return [ "type reference", {
                            "type": intermediate["type"][1]["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["type"][1]["type"]),
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

    function _generateBuilder_type_initializer(
        intermediate: __type_initializer_B,
    ): __type_initializer_T {
        return {
            "type": intermediate["type"] === undefined ? [ "string", {
                "strategy": [ "literal", {
                    "value": "",
                } ],
            } ] : ((): __type_type_initializer_TU => {
                switch (intermediate["type"][0]) {
                    case "boolean":
                        return [ "boolean", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                                "value": "true",
                            } ] : ((): __strategy_boolean_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                            "value": intermediate["type"][1]["strategy"][1]["value"] === undefined ? "true" : intermediate["type"][1]["strategy"][1]["value"],
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "dictionary":
                        return [ "dictionary", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                            } ] : ((): __strategy_dictionary_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "group":
                        return [ "group", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                                "properties": createDictionary({}),
                            } ] : ((): __strategy_group_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                            "properties": intermediate["type"][1]["strategy"][1]["properties"] === undefined ? createDictionary({}) : ((): IDictionary<__properties_literal_T> => {{
                                                const source = intermediate["type"][1]["strategy"][1]["properties"]
                                                const target: { [key:string]: __properties_literal_T} = {}
                                                Object.keys(source).forEach((key) => {
                                                    const entry = source[key]
                                                    target[key] = {
                                                        "initializer": entry["initializer"] === undefined ? _default_generateBuilder_type_initializer() : _generateBuilder_type_initializer(entry["initializer"]),
                                                    }
                                                })
                                                return createDictionary(target)
                                            }})(),
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "list":
                        return [ "list", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                            } ] : ((): __strategy_list_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "number":
                        return [ "number", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                                "value": "0",
                            } ] : ((): __strategy_number_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                            "value": intermediate["type"][1]["strategy"][1]["value"] === undefined ? "0" : intermediate["type"][1]["strategy"][1]["value"],
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "string":
                        return [ "string", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                                "value": "",
                            } ] : ((): __strategy_string_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                            "value": intermediate["type"][1]["strategy"][1]["value"] === undefined ? "" : intermediate["type"][1]["strategy"][1]["value"],
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    case "tagged union":
                        return [ "tagged union", {
                            "strategy": intermediate["type"][1]["strategy"] === undefined ? [ "literal", {
                                "data": _default_generateBuilder_type_initializer(),
                                "option": "*option*",
                            } ] : ((): __strategy_tagged_union_TU => {
                                switch (intermediate["type"][1]["strategy"][0]) {
                                    case "from state":
                                        return [ "from state", {
                                            "state": intermediate["type"][1]["strategy"][1]["state"] === undefined ? "*state*" : intermediate["type"][1]["strategy"][1]["state"],
                                        } ]
                                    case "literal":
                                        return [ "literal", {
                                            "data": intermediate["type"][1]["strategy"][1]["data"] === undefined ? _default_generateBuilder_type_initializer() : _generateBuilder_type_initializer(intermediate["type"][1]["strategy"][1]["data"]),
                                            "option": intermediate["type"][1]["strategy"][1]["option"] === undefined ? "*option*" : intermediate["type"][1]["strategy"][1]["option"],
                                        } ]
                                    default: return assertUnreachable(intermediate["type"][1]["strategy"][0])
                                }
                            })(),
                        } ]
                    default: return assertUnreachable(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_type_initializer(
    ): __type_initializer_T {
        return {
            "type": [ "string", {
                "strategy": [ "literal", {
                    "value": "",
                } ],
            } ],
        }
    }

    function _generateBuilder_type_reference(
        intermediate: __type_reference_B,
    ): __type_reference_T {
        return {
            "type": intermediate["type"] === undefined ? "*type reference*" : intermediate["type"],
        }
    }

    function _default_generateBuilder_type_reference(
    ): __type_reference_T {
        return {
            "type": "*type reference*",
        }
    }

    return _generateBuilder_root(intermediate)
}
