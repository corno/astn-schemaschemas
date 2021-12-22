interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void;
}
declare type build_builder_procedure_declaration_G_interfaces_P_D = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_builder_procedure_declaration_G_interfaces_P = IDictionary<build_builder_procedure_declaration_G_interfaces_P_D>;
declare type build_builder_procedure_declaration_G_return_type_P_TU_interface_O = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_builder_procedure_declaration_G_return_type_P_TU_void_O = {};
declare type build_builder_procedure_declaration_G_return_type_P = ["interface", build_builder_procedure_declaration_G_return_type_P_TU_interface_O] | ["void", build_builder_procedure_declaration_G_return_type_P_TU_void_O];
declare type build_builder_procedure_declaration = {
    readonly "interfaces": undefined | build_builder_procedure_declaration_G_interfaces_P;
    readonly "return type": undefined | build_builder_procedure_declaration_G_return_type_P;
};
declare type build_builder_procedure_declaration_T = build_builder_procedure_declaration;
declare type build_context_selection_G_steps_P_L = {
    readonly "property": undefined | string;
};
declare type build_context_selection_G_steps_P = build_context_selection_G_steps_P_L[];
declare type build_context_selection = {
    readonly "start": undefined | build_context_start_T;
    readonly "steps": undefined | build_context_selection_G_steps_P;
};
declare type build_context_selection_T = build_context_selection;
declare type build_context_start_G_start_P_TU_context_O = {};
declare type build_context_start_G_start_P_TU_function_O_G_context_P_TU_argument_O = {
    readonly "function": undefined | string;
};
declare type build_context_start_G_start_P_TU_function_O_G_context_P_TU_local_function_O = {
    readonly "function": undefined | string;
};
declare type build_context_start_G_start_P_TU_function_O_G_context_P = ["argument", build_context_start_G_start_P_TU_function_O_G_context_P_TU_argument_O] | ["local function", build_context_start_G_start_P_TU_function_O_G_context_P_TU_local_function_O];
declare type build_context_start_G_start_P_TU_function_O = {
    readonly "argument": undefined | build_type_expression_T;
    readonly "context": undefined | build_context_start_G_start_P_TU_function_O_G_context_P;
};
declare type build_context_start_G_start_P_TU_marked_value_O = {
    readonly "marker": undefined | string;
};
declare type build_context_start_G_start_P_TU_state_O = {
    readonly "state": undefined | string;
};
declare type build_context_start_G_start_P = ["context", build_context_start_G_start_P_TU_context_O] | ["function", build_context_start_G_start_P_TU_function_O] | ["marked value", build_context_start_G_start_P_TU_marked_value_O] | ["state", build_context_start_G_start_P_TU_state_O];
declare type build_context_start = {
    readonly "start": undefined | build_context_start_G_start_P;
};
declare type build_context_start_T = build_context_start;
declare type build_function_declaration = {
    readonly "in": undefined | build_type_reference_T;
    readonly "out": undefined | build_type_reference_T;
};
declare type build_function_declaration_T = build_function_declaration;
declare type build_guaranteed_context_selection_G_steps_P_L = {
    readonly "missing handler": undefined | build_missing_handler_T;
    readonly "property": undefined | string;
};
declare type build_guaranteed_context_selection_G_steps_P = build_guaranteed_context_selection_G_steps_P_L[];
declare type build_guaranteed_context_selection = {
    readonly "missing handler": undefined | build_missing_handler_T;
    readonly "start": undefined | build_context_start_T;
    readonly "steps": undefined | build_guaranteed_context_selection_G_steps_P;
};
declare type build_guaranteed_context_selection_T = build_guaranteed_context_selection;
declare type build_interface_definition_G_type_P_TU_dictionary_O = {
    readonly "entry": undefined | build_interface_definition_T;
};
declare type build_interface_definition_G_type_P_TU_group_O_G_members_P_D = {
    readonly "definition": undefined | build_interface_definition_T;
};
declare type build_interface_definition_G_type_P_TU_group_O_G_members_P = IDictionary<build_interface_definition_G_type_P_TU_group_O_G_members_P_D>;
declare type build_interface_definition_G_type_P_TU_group_O = {
    readonly "members": undefined | build_interface_definition_G_type_P_TU_group_O_G_members_P;
};
declare type build_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_interface_O = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_void_O = {};
declare type build_interface_definition_G_type_P_TU_method_O_G_return_type_P = ["interface", build_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_interface_O] | ["void", build_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_void_O];
declare type build_interface_definition_G_type_P_TU_method_O = {
    readonly "return type": undefined | build_interface_definition_G_type_P_TU_method_O_G_return_type_P;
    readonly "type": undefined | build_type_reference_T;
};
declare type build_interface_definition_G_type_P_TU_reference_O = {
    readonly "interface": undefined | string;
    readonly "namespace selection": undefined | build_namespace_selection_T;
};
declare type build_interface_definition_G_type_P = ["dictionary", build_interface_definition_G_type_P_TU_dictionary_O] | ["group", build_interface_definition_G_type_P_TU_group_O] | ["method", build_interface_definition_G_type_P_TU_method_O] | ["reference", build_interface_definition_G_type_P_TU_reference_O];
declare type build_interface_definition = {
    readonly "type": undefined | build_interface_definition_G_type_P;
};
declare type build_interface_definition_T = build_interface_definition;
declare type build_interface_expression_G_type_P_TU_argument_O = {
    readonly "argument": undefined | string;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P_D = {
    readonly "expression": undefined | build_interface_expression_T;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P = IDictionary<build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P_D>;
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O = {
    readonly "entries": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P_D = {
    readonly "expression": undefined | build_interface_expression_T;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P = IDictionary<build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P_D>;
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O = {
    readonly "members": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P = ["inline", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O];
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O = {
    readonly "strategy": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_argument_O = {
    readonly "argument": undefined | string;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_inline_procedure_O = {
    readonly "call": undefined | build_procedure_call_T;
    readonly "specification": undefined | build_internal_procedure_specification_T;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_procedure_implementation_O = {
    readonly "block": undefined | build_procedure_block_T;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P = ["argument", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_argument_O] | ["inline procedure", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_inline_procedure_O] | ["procedure implementation", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_procedure_implementation_O];
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O = {
    readonly "strategy": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P_TU_procedure_call6_O = {
    readonly "procedure call": undefined | build_named_procedure_call_T;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P = ["procedure call6", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P_TU_procedure_call6_O];
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O = {
    readonly "strategy": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P;
};
declare type build_interface_expression_G_type_P_TU_initialize_O_G_type_P = ["dictionary", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O] | ["group", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O] | ["method", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O] | ["reference", build_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O];
declare type build_interface_expression_G_type_P_TU_initialize_O = {
    readonly "type": undefined | build_interface_expression_G_type_P_TU_initialize_O_G_type_P;
};
declare type build_interface_expression_G_type_P = ["argument", build_interface_expression_G_type_P_TU_argument_O] | ["initialize", build_interface_expression_G_type_P_TU_initialize_O];
declare type build_interface_expression = {
    readonly "type": undefined | build_interface_expression_G_type_P;
};
declare type build_interface_expression_T = build_interface_expression;
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P_D = {
    readonly "definition": undefined | build_interface_definition_T;
};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P = IDictionary<build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P_D>;
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O = {
    readonly "members": undefined | build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P;
};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_interface_O = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_void_O = {};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P = ["interface", build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_interface_O] | ["void", build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_void_O];
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O = {
    readonly "return type": undefined | build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P;
    readonly "type": undefined | build_nested_type_reference_T;
};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_reference_O = {
    readonly "interface": undefined | string;
    readonly "namespace selection": undefined | build_namespace_selection_T;
};
declare type build_internal_procedure_specification_G_parameters_P_D_G_type_P = ["group", build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O] | ["method", build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O] | ["reference", build_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_reference_O];
declare type build_internal_procedure_specification_G_parameters_P_D = {
    readonly "type": undefined | build_internal_procedure_specification_G_parameters_P_D_G_type_P;
};
declare type build_internal_procedure_specification_G_parameters_P = IDictionary<build_internal_procedure_specification_G_parameters_P_D>;
declare type build_internal_procedure_specification_G_return_type_P_TU_interface_O = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_internal_procedure_specification_G_return_type_P_TU_void_O = {};
declare type build_internal_procedure_specification_G_return_type_P = ["interface", build_internal_procedure_specification_G_return_type_P_TU_interface_O] | ["void", build_internal_procedure_specification_G_return_type_P_TU_void_O];
declare type build_internal_procedure_specification = {
    readonly "block": undefined | build_procedure_block_T;
    readonly "parameters": undefined | build_internal_procedure_specification_G_parameters_P;
    readonly "return type": undefined | build_internal_procedure_specification_G_return_type_P;
};
declare type build_internal_procedure_specification_T = build_internal_procedure_specification;
declare type build_missing_handler_G_guaranteed_P_TU_no_O = {
    readonly "on missing": undefined | build_type_expression_T;
};
declare type build_missing_handler_G_guaranteed_P_TU_yes_O = {};
declare type build_missing_handler_G_guaranteed_P = ["no", build_missing_handler_G_guaranteed_P_TU_no_O] | ["yes", build_missing_handler_G_guaranteed_P_TU_yes_O];
declare type build_missing_handler = {
    readonly "guaranteed": undefined | build_missing_handler_G_guaranteed_P;
};
declare type build_missing_handler_T = build_missing_handler;
declare type build_named_procedure_call_G_type_P_TU_external_O = {
    readonly "builder": undefined | string;
    readonly "method": undefined | string;
};
declare type build_named_procedure_call_G_type_P_TU_local_O = {
    readonly "procedure": undefined | string;
};
declare type build_named_procedure_call_G_type_P = ["external", build_named_procedure_call_G_type_P_TU_external_O] | ["local", build_named_procedure_call_G_type_P_TU_local_O];
declare type build_named_procedure_call = {
    readonly "procedure call": undefined | build_procedure_call_T;
    readonly "type": undefined | build_named_procedure_call_G_type_P;
};
declare type build_named_procedure_call_T = build_named_procedure_call;
declare type build_namespace_reference_G_type_arguments_P_D = {
    readonly "type": undefined | string;
};
declare type build_namespace_reference_G_type_arguments_P = IDictionary<build_namespace_reference_G_type_arguments_P_D>;
declare type build_namespace_reference = {
    readonly "namespace": undefined | string;
    readonly "type arguments": undefined | build_namespace_reference_G_type_arguments_P;
};
declare type build_namespace_reference_T = build_namespace_reference;
declare type build_namespace_selection_G_which_P_TU_current_O = {};
declare type build_namespace_selection_G_which_P_TU_other_O = {
    readonly "namespace reference": undefined | build_namespace_reference_T;
};
declare type build_namespace_selection_G_which_P = ["current", build_namespace_selection_G_which_P_TU_current_O] | ["other", build_namespace_selection_G_which_P_TU_other_O];
declare type build_namespace_selection = {
    readonly "which": undefined | build_namespace_selection_G_which_P;
};
declare type build_namespace_selection_T = build_namespace_selection;
declare type build_nested_type_reference_G_steps_P_L_G_type_P_TU_dictionary_O = {};
declare type build_nested_type_reference_G_steps_P_L_G_type_P_TU_group_O = {
    readonly "property": undefined | string;
};
declare type build_nested_type_reference_G_steps_P_L_G_type_P_TU_list_O = {};
declare type build_nested_type_reference_G_steps_P_L_G_type_P_TU_tagged_union_option_O = {
    readonly "option": undefined | string;
};
declare type build_nested_type_reference_G_steps_P_L_G_type_P = ["dictionary", build_nested_type_reference_G_steps_P_L_G_type_P_TU_dictionary_O] | ["group", build_nested_type_reference_G_steps_P_L_G_type_P_TU_group_O] | ["list", build_nested_type_reference_G_steps_P_L_G_type_P_TU_list_O] | ["tagged union option", build_nested_type_reference_G_steps_P_L_G_type_P_TU_tagged_union_option_O];
declare type build_nested_type_reference_G_steps_P_L = {
    readonly "type": undefined | build_nested_type_reference_G_steps_P_L_G_type_P;
};
declare type build_nested_type_reference_G_steps_P = build_nested_type_reference_G_steps_P_L[];
declare type build_nested_type_reference = {
    readonly "namespace reference": undefined | build_namespace_reference_T;
    readonly "steps": undefined | build_nested_type_reference_G_steps_P;
    readonly "type": undefined | string;
};
declare type build_nested_type_reference_T = build_nested_type_reference;
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_external_interface_call_O = {
    readonly "expression": undefined | build_type_expression_T;
    readonly "interface": undefined | string;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_internal_interface_call_O = {
    readonly "expression": undefined | build_type_expression_T;
    readonly "interface": undefined | string;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P_TU_add_entry_O = {
    readonly "expression": undefined | build_type_expression_T;
    readonly "key": undefined | build_string_expression_T;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P = ["add entry", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P_TU_add_entry_O];
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O = {
    readonly "strategy": undefined | build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P_TU_add_element_O = {
    readonly "expression": undefined | build_type_expression_T;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P = ["add element", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P_TU_add_element_O];
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O = {
    readonly "strategy": undefined | build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_string_O = {
    readonly "initializer": undefined | build_string_expression_T;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_type4_O = {
    readonly "expression": undefined | build_type_expression_T;
};
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P = ["dictionary", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O] | ["list", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O] | ["string", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_string_O] | ["type4", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_type4_O];
declare type build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O = {
    readonly "state": undefined | string;
    readonly "type": undefined | build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P;
};
declare type build_procedure_block_G_effects_P_L_G_type_P = ["external interface call", build_procedure_block_G_effects_P_L_G_type_P_TU_external_interface_call_O] | ["internal interface call", build_procedure_block_G_effects_P_L_G_type_P_TU_internal_interface_call_O] | ["state change", build_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O];
declare type build_procedure_block_G_effects_P_L = {
    readonly "type": undefined | build_procedure_block_G_effects_P_L_G_type_P;
};
declare type build_procedure_block_G_effects_P = build_procedure_block_G_effects_P_L[];
declare type build_procedure_block_G_markers_P_D = {
    readonly "selection": undefined | build_context_selection_T;
};
declare type build_procedure_block_G_markers_P = IDictionary<build_procedure_block_G_markers_P_D>;
declare type build_procedure_block_G_nested_procedures_P_D = {
    readonly "specification": undefined | build_internal_procedure_specification_T;
};
declare type build_procedure_block_G_nested_procedures_P = IDictionary<build_procedure_block_G_nested_procedures_P_D>;
declare type build_procedure_block_G_return_value_P_TU_interface_O = {
    readonly "expression": undefined | build_interface_expression_T;
};
declare type build_procedure_block_G_return_value_P_TU_void_O = {};
declare type build_procedure_block_G_return_value_P = ["interface", build_procedure_block_G_return_value_P_TU_interface_O] | ["void", build_procedure_block_G_return_value_P_TU_void_O];
declare type build_procedure_block_G_states_P_D_G_type_P_TU_dictionary_O = {
    readonly "type": undefined | build_nested_type_reference_T;
};
declare type build_procedure_block_G_states_P_D_G_type_P_TU_list_O = {
    readonly "type": undefined | build_nested_type_reference_T;
};
declare type build_procedure_block_G_states_P_D_G_type_P_TU_string_O = {
    readonly "initial value": undefined | string;
};
declare type build_procedure_block_G_states_P_D_G_type_P_TU_type5_O = {
    readonly "expression": undefined | build_type_expression_T;
    readonly "nested type": undefined | build_nested_type_reference_T;
};
declare type build_procedure_block_G_states_P_D_G_type_P = ["dictionary", build_procedure_block_G_states_P_D_G_type_P_TU_dictionary_O] | ["list", build_procedure_block_G_states_P_D_G_type_P_TU_list_O] | ["string", build_procedure_block_G_states_P_D_G_type_P_TU_string_O] | ["type5", build_procedure_block_G_states_P_D_G_type_P_TU_type5_O];
declare type build_procedure_block_G_states_P_D = {
    readonly "type": undefined | build_procedure_block_G_states_P_D_G_type_P;
};
declare type build_procedure_block_G_states_P = IDictionary<build_procedure_block_G_states_P_D>;
declare type build_procedure_block = {
    readonly "effects": undefined | build_procedure_block_G_effects_P;
    readonly "markers": undefined | build_procedure_block_G_markers_P;
    readonly "nested procedures": undefined | build_procedure_block_G_nested_procedures_P;
    readonly "return value": undefined | build_procedure_block_G_return_value_P;
    readonly "states": undefined | build_procedure_block_G_states_P;
};
declare type build_procedure_block_T = build_procedure_block;
declare type build_procedure_call_G_interface_arguments_P_D = {
    readonly "expression": undefined | build_interface_expression_T;
};
declare type build_procedure_call_G_interface_arguments_P = IDictionary<build_procedure_call_G_interface_arguments_P_D>;
declare type build_procedure_call = {
    readonly "interface arguments": undefined | build_procedure_call_G_interface_arguments_P;
};
declare type build_procedure_call_T = build_procedure_call;
declare type build_root_G_function_implementations_P_D_G_type_parameters_P_D = {};
declare type build_root_G_function_implementations_P_D_G_type_parameters_P = IDictionary<build_root_G_function_implementations_P_D_G_type_parameters_P_D>;
declare type build_root_G_function_implementations_P_D = {
    readonly "block": undefined | build_type_expression_block_T;
    readonly "declaration": undefined | string;
    readonly "namespace reference": undefined | build_namespace_reference_T;
    readonly "type parameters": undefined | build_root_G_function_implementations_P_D_G_type_parameters_P;
};
declare type build_root_G_function_implementations_P = IDictionary<build_root_G_function_implementations_P_D>;
declare type build_root_G_namespaces_P_D_G_function_declarations_P_D = {
    readonly "declaration": undefined | build_function_declaration_T;
};
declare type build_root_G_namespaces_P_D_G_function_declarations_P = IDictionary<build_root_G_namespaces_P_D_G_function_declarations_P_D>;
declare type build_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P_D = {
    readonly "declaration": undefined | build_builder_procedure_declaration_T;
};
declare type build_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P = IDictionary<build_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P_D>;
declare type build_root_G_namespaces_P_D_G_interface_builders_P_D = {
    readonly "methods": undefined | build_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P;
};
declare type build_root_G_namespaces_P_D_G_interface_builders_P = IDictionary<build_root_G_namespaces_P_D_G_interface_builders_P_D>;
declare type build_root_G_namespaces_P_D_G_interfaces_P_D = {
    readonly "definition": undefined | build_interface_definition_T;
};
declare type build_root_G_namespaces_P_D_G_interfaces_P = IDictionary<build_root_G_namespaces_P_D_G_interfaces_P_D>;
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P_D = {
    readonly "builder": undefined | string;
    readonly "namespace selection": undefined | build_namespace_selection_T;
};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P = IDictionary<build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P_D>;
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P_D = {
    readonly "declaration": undefined | build_function_declaration_T;
};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P = IDictionary<build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P_D>;
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P_D = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P = IDictionary<build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P_D>;
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_interface_O = {
    readonly "interface": undefined | build_interface_definition_T;
};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_void_O = {};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P = ["interface", build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_interface_O] | ["void", build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_void_O];
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P_D = {
    readonly "builders": undefined | build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P;
    readonly "context": undefined | build_type_reference_T;
    readonly "functions": undefined | build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P;
    readonly "interfaces": undefined | build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P;
    readonly "return type": undefined | build_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P;
};
declare type build_root_G_namespaces_P_D_G_procedure_declarations_P = IDictionary<build_root_G_namespaces_P_D_G_procedure_declarations_P_D>;
declare type build_root_G_namespaces_P_D_G_type_parameters_P_D = {};
declare type build_root_G_namespaces_P_D_G_type_parameters_P = IDictionary<build_root_G_namespaces_P_D_G_type_parameters_P_D>;
declare type build_root_G_namespaces_P_D_G_types_P_D = {
    readonly "type": undefined | build_type_T;
};
declare type build_root_G_namespaces_P_D_G_types_P = IDictionary<build_root_G_namespaces_P_D_G_types_P_D>;
declare type build_root_G_namespaces_P_D = {
    readonly "function declarations": undefined | build_root_G_namespaces_P_D_G_function_declarations_P;
    readonly "interface builders": undefined | build_root_G_namespaces_P_D_G_interface_builders_P;
    readonly "interfaces": undefined | build_root_G_namespaces_P_D_G_interfaces_P;
    readonly "procedure declarations": undefined | build_root_G_namespaces_P_D_G_procedure_declarations_P;
    readonly "type parameters": undefined | build_root_G_namespaces_P_D_G_type_parameters_P;
    readonly "types": undefined | build_root_G_namespaces_P_D_G_types_P;
};
declare type build_root_G_namespaces_P = IDictionary<build_root_G_namespaces_P_D>;
declare type build_root_G_procedure_implementations_P_D_G_type_parameters_P_D = {};
declare type build_root_G_procedure_implementations_P_D_G_type_parameters_P = IDictionary<build_root_G_procedure_implementations_P_D_G_type_parameters_P_D>;
declare type build_root_G_procedure_implementations_P_D = {
    readonly "block": undefined | build_procedure_block_T;
    readonly "declaration": undefined | string;
    readonly "namespace reference": undefined | build_namespace_reference_T;
    readonly "type parameters": undefined | build_root_G_procedure_implementations_P_D_G_type_parameters_P;
};
declare type build_root_G_procedure_implementations_P = IDictionary<build_root_G_procedure_implementations_P_D>;
declare type build_root = {
    readonly "function implementations": undefined | build_root_G_function_implementations_P;
    readonly "namespaces": undefined | build_root_G_namespaces_P;
    readonly "procedure implementations": undefined | build_root_G_procedure_implementations_P;
};
declare type build_root_T = build_root;
declare type build_string_expression_G_strategy_P_TU_literal_O = {
    readonly "value": undefined | string;
};
declare type build_string_expression_G_strategy_P_TU_select_O = {
    readonly "context": undefined | build_context_selection_T;
};
declare type build_string_expression_G_strategy_P_TU_state_O = {
    readonly "state": undefined | string;
};
declare type build_string_expression_G_strategy_P = ["literal", build_string_expression_G_strategy_P_TU_literal_O] | ["select", build_string_expression_G_strategy_P_TU_select_O] | ["state", build_string_expression_G_strategy_P_TU_state_O];
declare type build_string_expression = {
    readonly "strategy": undefined | build_string_expression_G_strategy_P;
};
declare type build_string_expression_T = build_string_expression;
declare type build_type_G_occurence_P_TU_optional_O = {};
declare type build_type_G_occurence_P_TU_required_O = {};
declare type build_type_G_occurence_P = ["optional", build_type_G_occurence_P_TU_optional_O] | ["required", build_type_G_occurence_P_TU_required_O];
declare type build_type_G_type_P_TU_boolean_O = {};
declare type build_type_G_type_P_TU_dictionary_O = {
    readonly "entry": undefined | build_type_T;
};
declare type build_type_G_type_P_TU_group_O_G_properties_P_D = {
    readonly "type": undefined | build_type_T;
};
declare type build_type_G_type_P_TU_group_O_G_properties_P = IDictionary<build_type_G_type_P_TU_group_O_G_properties_P_D>;
declare type build_type_G_type_P_TU_group_O = {
    readonly "properties": undefined | build_type_G_type_P_TU_group_O_G_properties_P;
};
declare type build_type_G_type_P_TU_list_O = {
    readonly "element": undefined | build_type_T;
};
declare type build_type_G_type_P_TU_number_O = {};
declare type build_type_G_type_P_TU_string_O = {};
declare type build_type_G_type_P_TU_tagged_union_O_G_options_P_D = {
    readonly "type": undefined | build_type_T;
};
declare type build_type_G_type_P_TU_tagged_union_O_G_options_P = IDictionary<build_type_G_type_P_TU_tagged_union_O_G_options_P_D>;
declare type build_type_G_type_P_TU_tagged_union_O = {
    readonly "options": undefined | build_type_G_type_P_TU_tagged_union_O_G_options_P;
};
declare type build_type_G_type_P_TU_type_argument_O = {
    readonly "argument": undefined | string;
};
declare type build_type_G_type_P_TU_type_reference_O = {
    readonly "type": undefined | build_type_reference_T;
};
declare type build_type_G_type_P = ["boolean", build_type_G_type_P_TU_boolean_O] | ["dictionary", build_type_G_type_P_TU_dictionary_O] | ["group", build_type_G_type_P_TU_group_O] | ["list", build_type_G_type_P_TU_list_O] | ["number", build_type_G_type_P_TU_number_O] | ["string", build_type_G_type_P_TU_string_O] | ["tagged union", build_type_G_type_P_TU_tagged_union_O] | ["type argument", build_type_G_type_P_TU_type_argument_O] | ["type reference", build_type_G_type_P_TU_type_reference_O];
declare type build_type = {
    readonly "occurence": undefined | build_type_G_occurence_P;
    readonly "type": undefined | build_type_G_type_P;
};
declare type build_type_T = build_type;
declare type build_type_expression_G_strategy_P_TU_copy_O = {
    readonly "context": undefined | build_guaranteed_context_selection_T;
};
declare type build_type_expression_G_strategy_P_TU_dictionary_from_state_O = {
    readonly "state": undefined | string;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_boolean_O = {
    readonly "value": undefined | string;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_dictionary_O = {};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P_D = {
    readonly "expression": undefined | build_type_expression_T;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P = IDictionary<build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P_D>;
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O = {
    readonly "properties": undefined | build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_list_O = {};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_number_O = {
    readonly "value": undefined | string;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_string_O = {
    readonly "value": undefined | string;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_tagged_union_O = {
    readonly "data": undefined | build_type_expression_T;
    readonly "option": undefined | string;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_argument_O = {};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_reference_O = {
    readonly "expression": undefined | build_type_expression_T;
};
declare type build_type_expression_G_strategy_P_TU_literal_O_G_type_P = ["boolean", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_boolean_O] | ["dictionary", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_dictionary_O] | ["group", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O] | ["list", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_list_O] | ["number", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_number_O] | ["string", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_string_O] | ["tagged union", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_tagged_union_O] | ["type argument", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_argument_O] | ["type reference", build_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_reference_O];
declare type build_type_expression_G_strategy_P_TU_literal_O = {
    readonly "type": undefined | build_type_expression_G_strategy_P_TU_literal_O_G_type_P;
};
declare type build_type_expression_G_strategy_P_TU_map_O = {
    readonly "context": undefined | build_guaranteed_context_selection_T;
    readonly "entry": undefined | build_type_expression_T;
};
declare type build_type_expression_G_strategy_P_TU_switch_O_G_options_P_D = {
    readonly "expression": undefined | build_type_expression_T;
};
declare type build_type_expression_G_strategy_P_TU_switch_O_G_options_P = IDictionary<build_type_expression_G_strategy_P_TU_switch_O_G_options_P_D>;
declare type build_type_expression_G_strategy_P_TU_switch_O = {
    readonly "context": undefined | build_guaranteed_context_selection_T;
    readonly "options": undefined | build_type_expression_G_strategy_P_TU_switch_O_G_options_P;
};
declare type build_type_expression_G_strategy_P = ["copy", build_type_expression_G_strategy_P_TU_copy_O] | ["dictionary from state", build_type_expression_G_strategy_P_TU_dictionary_from_state_O] | ["literal", build_type_expression_G_strategy_P_TU_literal_O] | ["map", build_type_expression_G_strategy_P_TU_map_O] | ["switch", build_type_expression_G_strategy_P_TU_switch_O];
declare type build_type_expression = {
    readonly "strategy": undefined | build_type_expression_G_strategy_P;
};
declare type build_type_expression_T = build_type_expression;
declare type build_type_expression_block_G_functions_P_D = {
    readonly "block": undefined | build_type_expression_block_T;
    readonly "declaration": undefined | build_function_declaration_T;
};
declare type build_type_expression_block_G_functions_P = IDictionary<build_type_expression_block_G_functions_P_D>;
declare type build_type_expression_block = {
    readonly "expression": undefined | build_type_expression_T;
    readonly "functions": undefined | build_type_expression_block_G_functions_P;
};
declare type build_type_expression_block_T = build_type_expression_block;
declare type build_type_reference = {
    readonly "namespace selection": undefined | build_namespace_selection_T;
    readonly "type": undefined | string;
};
declare type build_type_reference_T = build_type_reference;
export declare type build_build_PD = ($c: build_root_T) => core_root_T;
declare type core_builder_procedure_declaration_G_interfaces_P_D = {
    readonly "interface": core_interface_definition_T;
};
declare type core_builder_procedure_declaration_G_interfaces_P = IDictionary<core_builder_procedure_declaration_G_interfaces_P_D>;
declare type core_builder_procedure_declaration_G_return_type_P_TU_interface_O = {
    readonly "interface": core_interface_definition_T;
};
declare type core_builder_procedure_declaration_G_return_type_P_TU_void_O = {};
declare type core_builder_procedure_declaration_G_return_type_P = ["interface", core_builder_procedure_declaration_G_return_type_P_TU_interface_O] | ["void", core_builder_procedure_declaration_G_return_type_P_TU_void_O];
declare type core_builder_procedure_declaration = {
    readonly "interfaces": core_builder_procedure_declaration_G_interfaces_P;
    readonly "return type": core_builder_procedure_declaration_G_return_type_P;
};
declare type core_builder_procedure_declaration_T = core_builder_procedure_declaration;
declare type core_context_selection_G_steps_P_L = {
    readonly "property": string;
};
declare type core_context_selection_G_steps_P = core_context_selection_G_steps_P_L[];
declare type core_context_selection = {
    readonly "start": core_context_start_T;
    readonly "steps": core_context_selection_G_steps_P;
};
declare type core_context_selection_T = core_context_selection;
declare type core_context_start_G_start_P_TU_context_O = {};
declare type core_context_start_G_start_P_TU_function_O_G_context_P_TU_argument_O = {
    readonly "function": string;
};
declare type core_context_start_G_start_P_TU_function_O_G_context_P_TU_local_function_O = {
    readonly "function": string;
};
declare type core_context_start_G_start_P_TU_function_O_G_context_P = ["argument", core_context_start_G_start_P_TU_function_O_G_context_P_TU_argument_O] | ["local function", core_context_start_G_start_P_TU_function_O_G_context_P_TU_local_function_O];
declare type core_context_start_G_start_P_TU_function_O = {
    readonly "argument": core_type_expression_T;
    readonly "context": core_context_start_G_start_P_TU_function_O_G_context_P;
};
declare type core_context_start_G_start_P_TU_marked_value_O = {
    readonly "marker": string;
};
declare type core_context_start_G_start_P_TU_state_O = {
    readonly "state": string;
};
declare type core_context_start_G_start_P = ["context", core_context_start_G_start_P_TU_context_O] | ["function", core_context_start_G_start_P_TU_function_O] | ["marked value", core_context_start_G_start_P_TU_marked_value_O] | ["state", core_context_start_G_start_P_TU_state_O];
declare type core_context_start = {
    readonly "start": core_context_start_G_start_P;
};
declare type core_context_start_T = core_context_start;
declare type core_function_declaration = {
    readonly "in": core_type_reference_T;
    readonly "out": core_type_reference_T;
};
declare type core_function_declaration_T = core_function_declaration;
declare type core_guaranteed_context_selection_G_steps_P_L = {
    readonly "missing handler": core_missing_handler_T;
    readonly "property": string;
};
declare type core_guaranteed_context_selection_G_steps_P = core_guaranteed_context_selection_G_steps_P_L[];
declare type core_guaranteed_context_selection = {
    readonly "missing handler": core_missing_handler_T;
    readonly "start": core_context_start_T;
    readonly "steps": core_guaranteed_context_selection_G_steps_P;
};
declare type core_guaranteed_context_selection_T = core_guaranteed_context_selection;
declare type core_interface_definition_G_type_P_TU_dictionary_O = {
    readonly "entry": core_interface_definition_T;
};
declare type core_interface_definition_G_type_P_TU_group_O_G_members_P_D = {
    readonly "definition": core_interface_definition_T;
};
declare type core_interface_definition_G_type_P_TU_group_O_G_members_P = IDictionary<core_interface_definition_G_type_P_TU_group_O_G_members_P_D>;
declare type core_interface_definition_G_type_P_TU_group_O = {
    readonly "members": core_interface_definition_G_type_P_TU_group_O_G_members_P;
};
declare type core_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_interface_O = {
    readonly "interface": core_interface_definition_T;
};
declare type core_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_void_O = {};
declare type core_interface_definition_G_type_P_TU_method_O_G_return_type_P = ["interface", core_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_interface_O] | ["void", core_interface_definition_G_type_P_TU_method_O_G_return_type_P_TU_void_O];
declare type core_interface_definition_G_type_P_TU_method_O = {
    readonly "return type": core_interface_definition_G_type_P_TU_method_O_G_return_type_P;
    readonly "type": core_type_reference_T;
};
declare type core_interface_definition_G_type_P_TU_reference_O = {
    readonly "interface": string;
    readonly "namespace selection": core_namespace_selection_T;
};
declare type core_interface_definition_G_type_P = ["dictionary", core_interface_definition_G_type_P_TU_dictionary_O] | ["group", core_interface_definition_G_type_P_TU_group_O] | ["method", core_interface_definition_G_type_P_TU_method_O] | ["reference", core_interface_definition_G_type_P_TU_reference_O];
declare type core_interface_definition = {
    readonly "type": core_interface_definition_G_type_P;
};
declare type core_interface_definition_T = core_interface_definition;
declare type core_interface_expression_G_type_P_TU_argument_O = {
    readonly "argument": string;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P_D = {
    readonly "expression": core_interface_expression_T;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P = IDictionary<core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P_D>;
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O = {
    readonly "entries": core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O_G_entries_P;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P_D = {
    readonly "expression": core_interface_expression_T;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P = IDictionary<core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P_D>;
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O = {
    readonly "members": core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O_G_members_P;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P = ["inline", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P_TU_inline_O];
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O = {
    readonly "strategy": core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O_G_strategy_P;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_argument_O = {
    readonly "argument": string;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_inline_procedure_O = {
    readonly "call": core_procedure_call_T;
    readonly "specification": core_internal_procedure_specification_T;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_procedure_implementation_O = {
    readonly "block": core_procedure_block_T;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P = ["argument", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_argument_O] | ["inline procedure", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_inline_procedure_O] | ["procedure implementation", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P_TU_procedure_implementation_O];
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O = {
    readonly "strategy": core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O_G_strategy_P;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P_TU_procedure_call6_O = {
    readonly "procedure call": core_named_procedure_call_T;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P = ["procedure call6", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P_TU_procedure_call6_O];
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O = {
    readonly "strategy": core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O_G_strategy_P;
};
declare type core_interface_expression_G_type_P_TU_initialize_O_G_type_P = ["dictionary", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_dictionary_O] | ["group", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_group_O] | ["method", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_method_O] | ["reference", core_interface_expression_G_type_P_TU_initialize_O_G_type_P_TU_reference_O];
declare type core_interface_expression_G_type_P_TU_initialize_O = {
    readonly "type": core_interface_expression_G_type_P_TU_initialize_O_G_type_P;
};
declare type core_interface_expression_G_type_P = ["argument", core_interface_expression_G_type_P_TU_argument_O] | ["initialize", core_interface_expression_G_type_P_TU_initialize_O];
declare type core_interface_expression = {
    readonly "type": core_interface_expression_G_type_P;
};
declare type core_interface_expression_T = core_interface_expression;
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P_D = {
    readonly "definition": core_interface_definition_T;
};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P = IDictionary<core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P_D>;
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O = {
    readonly "members": core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O_G_members_P;
};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_interface_O = {
    readonly "interface": core_interface_definition_T;
};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_void_O = {};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P = ["interface", core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_interface_O] | ["void", core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P_TU_void_O];
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O = {
    readonly "return type": core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O_G_return_type_P;
    readonly "type": core_nested_type_reference_T;
};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_reference_O = {
    readonly "interface": string;
    readonly "namespace selection": core_namespace_selection_T;
};
declare type core_internal_procedure_specification_G_parameters_P_D_G_type_P = ["group", core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_group_O] | ["method", core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_method_O] | ["reference", core_internal_procedure_specification_G_parameters_P_D_G_type_P_TU_reference_O];
declare type core_internal_procedure_specification_G_parameters_P_D = {
    readonly "type": core_internal_procedure_specification_G_parameters_P_D_G_type_P;
};
declare type core_internal_procedure_specification_G_parameters_P = IDictionary<core_internal_procedure_specification_G_parameters_P_D>;
declare type core_internal_procedure_specification_G_return_type_P_TU_interface_O = {
    readonly "interface": core_interface_definition_T;
};
declare type core_internal_procedure_specification_G_return_type_P_TU_void_O = {};
declare type core_internal_procedure_specification_G_return_type_P = ["interface", core_internal_procedure_specification_G_return_type_P_TU_interface_O] | ["void", core_internal_procedure_specification_G_return_type_P_TU_void_O];
declare type core_internal_procedure_specification = {
    readonly "block": core_procedure_block_T;
    readonly "parameters": core_internal_procedure_specification_G_parameters_P;
    readonly "return type": core_internal_procedure_specification_G_return_type_P;
};
declare type core_internal_procedure_specification_T = core_internal_procedure_specification;
declare type core_missing_handler_G_guaranteed_P_TU_no_O = {
    readonly "on missing": core_type_expression_T;
};
declare type core_missing_handler_G_guaranteed_P_TU_yes_O = {};
declare type core_missing_handler_G_guaranteed_P = ["no", core_missing_handler_G_guaranteed_P_TU_no_O] | ["yes", core_missing_handler_G_guaranteed_P_TU_yes_O];
declare type core_missing_handler = {
    readonly "guaranteed": core_missing_handler_G_guaranteed_P;
};
declare type core_missing_handler_T = core_missing_handler;
declare type core_named_procedure_call_G_type_P_TU_external_O = {
    readonly "builder": string;
    readonly "method": string;
};
declare type core_named_procedure_call_G_type_P_TU_local_O = {
    readonly "procedure": string;
};
declare type core_named_procedure_call_G_type_P = ["external", core_named_procedure_call_G_type_P_TU_external_O] | ["local", core_named_procedure_call_G_type_P_TU_local_O];
declare type core_named_procedure_call = {
    readonly "procedure call": core_procedure_call_T;
    readonly "type": core_named_procedure_call_G_type_P;
};
declare type core_named_procedure_call_T = core_named_procedure_call;
declare type core_namespace_reference_G_type_arguments_P_D = {
    readonly "type": string;
};
declare type core_namespace_reference_G_type_arguments_P = IDictionary<core_namespace_reference_G_type_arguments_P_D>;
declare type core_namespace_reference = {
    readonly "namespace": string;
    readonly "type arguments": core_namespace_reference_G_type_arguments_P;
};
declare type core_namespace_reference_T = core_namespace_reference;
declare type core_namespace_selection_G_which_P_TU_current_O = {};
declare type core_namespace_selection_G_which_P_TU_other_O = {
    readonly "namespace reference": core_namespace_reference_T;
};
declare type core_namespace_selection_G_which_P = ["current", core_namespace_selection_G_which_P_TU_current_O] | ["other", core_namespace_selection_G_which_P_TU_other_O];
declare type core_namespace_selection = {
    readonly "which": core_namespace_selection_G_which_P;
};
declare type core_namespace_selection_T = core_namespace_selection;
declare type core_nested_type_reference_G_steps_P_L_G_type_P_TU_dictionary_O = {};
declare type core_nested_type_reference_G_steps_P_L_G_type_P_TU_group_O = {
    readonly "property": string;
};
declare type core_nested_type_reference_G_steps_P_L_G_type_P_TU_list_O = {};
declare type core_nested_type_reference_G_steps_P_L_G_type_P_TU_tagged_union_option_O = {
    readonly "option": string;
};
declare type core_nested_type_reference_G_steps_P_L_G_type_P = ["dictionary", core_nested_type_reference_G_steps_P_L_G_type_P_TU_dictionary_O] | ["group", core_nested_type_reference_G_steps_P_L_G_type_P_TU_group_O] | ["list", core_nested_type_reference_G_steps_P_L_G_type_P_TU_list_O] | ["tagged union option", core_nested_type_reference_G_steps_P_L_G_type_P_TU_tagged_union_option_O];
declare type core_nested_type_reference_G_steps_P_L = {
    readonly "type": core_nested_type_reference_G_steps_P_L_G_type_P;
};
declare type core_nested_type_reference_G_steps_P = core_nested_type_reference_G_steps_P_L[];
declare type core_nested_type_reference = {
    readonly "namespace reference": core_namespace_reference_T;
    readonly "steps": core_nested_type_reference_G_steps_P;
    readonly "type": string;
};
declare type core_nested_type_reference_T = core_nested_type_reference;
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_external_interface_call_O = {
    readonly "expression": core_type_expression_T;
    readonly "interface": string;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_internal_interface_call_O = {
    readonly "expression": core_type_expression_T;
    readonly "interface": string;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P_TU_add_entry_O = {
    readonly "expression": core_type_expression_T;
    readonly "key": core_string_expression_T;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P = ["add entry", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P_TU_add_entry_O];
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O = {
    readonly "strategy": core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O_G_strategy_P;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P_TU_add_element_O = {
    readonly "expression": core_type_expression_T;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P = ["add element", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P_TU_add_element_O];
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O = {
    readonly "strategy": core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O_G_strategy_P;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_string_O = {
    readonly "initializer": core_string_expression_T;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_type4_O = {
    readonly "expression": core_type_expression_T;
};
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P = ["dictionary", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_dictionary_O] | ["list", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_list_O] | ["string", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_string_O] | ["type4", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P_TU_type4_O];
declare type core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O = {
    readonly "state": string;
    readonly "type": core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O_G_type_P;
};
declare type core_procedure_block_G_effects_P_L_G_type_P = ["external interface call", core_procedure_block_G_effects_P_L_G_type_P_TU_external_interface_call_O] | ["internal interface call", core_procedure_block_G_effects_P_L_G_type_P_TU_internal_interface_call_O] | ["state change", core_procedure_block_G_effects_P_L_G_type_P_TU_state_change_O];
declare type core_procedure_block_G_effects_P_L = {
    readonly "type": core_procedure_block_G_effects_P_L_G_type_P;
};
declare type core_procedure_block_G_effects_P = core_procedure_block_G_effects_P_L[];
declare type core_procedure_block_G_markers_P_D = {
    readonly "selection": core_context_selection_T;
};
declare type core_procedure_block_G_markers_P = IDictionary<core_procedure_block_G_markers_P_D>;
declare type core_procedure_block_G_nested_procedures_P_D = {
    readonly "specification": core_internal_procedure_specification_T;
};
declare type core_procedure_block_G_nested_procedures_P = IDictionary<core_procedure_block_G_nested_procedures_P_D>;
declare type core_procedure_block_G_return_value_P_TU_interface_O = {
    readonly "expression": core_interface_expression_T;
};
declare type core_procedure_block_G_return_value_P_TU_void_O = {};
declare type core_procedure_block_G_return_value_P = ["interface", core_procedure_block_G_return_value_P_TU_interface_O] | ["void", core_procedure_block_G_return_value_P_TU_void_O];
declare type core_procedure_block_G_states_P_D_G_type_P_TU_dictionary_O = {
    readonly "type": core_nested_type_reference_T;
};
declare type core_procedure_block_G_states_P_D_G_type_P_TU_list_O = {
    readonly "type": core_nested_type_reference_T;
};
declare type core_procedure_block_G_states_P_D_G_type_P_TU_string_O = {
    readonly "initial value": string;
};
declare type core_procedure_block_G_states_P_D_G_type_P_TU_type5_O = {
    readonly "expression": core_type_expression_T;
    readonly "nested type": core_nested_type_reference_T;
};
declare type core_procedure_block_G_states_P_D_G_type_P = ["dictionary", core_procedure_block_G_states_P_D_G_type_P_TU_dictionary_O] | ["list", core_procedure_block_G_states_P_D_G_type_P_TU_list_O] | ["string", core_procedure_block_G_states_P_D_G_type_P_TU_string_O] | ["type5", core_procedure_block_G_states_P_D_G_type_P_TU_type5_O];
declare type core_procedure_block_G_states_P_D = {
    readonly "type": core_procedure_block_G_states_P_D_G_type_P;
};
declare type core_procedure_block_G_states_P = IDictionary<core_procedure_block_G_states_P_D>;
declare type core_procedure_block = {
    readonly "effects": core_procedure_block_G_effects_P;
    readonly "markers": core_procedure_block_G_markers_P;
    readonly "nested procedures": core_procedure_block_G_nested_procedures_P;
    readonly "return value": core_procedure_block_G_return_value_P;
    readonly "states": core_procedure_block_G_states_P;
};
declare type core_procedure_block_T = core_procedure_block;
declare type core_procedure_call_G_interface_arguments_P_D = {
    readonly "expression": core_interface_expression_T;
};
declare type core_procedure_call_G_interface_arguments_P = IDictionary<core_procedure_call_G_interface_arguments_P_D>;
declare type core_procedure_call = {
    readonly "interface arguments": core_procedure_call_G_interface_arguments_P;
};
declare type core_procedure_call_T = core_procedure_call;
declare type core_root_G_function_implementations_P_D_G_type_parameters_P_D = {};
declare type core_root_G_function_implementations_P_D_G_type_parameters_P = IDictionary<core_root_G_function_implementations_P_D_G_type_parameters_P_D>;
declare type core_root_G_function_implementations_P_D = {
    readonly "block": core_type_expression_block_T;
    readonly "declaration": string;
    readonly "namespace reference": core_namespace_reference_T;
    readonly "type parameters": core_root_G_function_implementations_P_D_G_type_parameters_P;
};
declare type core_root_G_function_implementations_P = IDictionary<core_root_G_function_implementations_P_D>;
declare type core_root_G_namespaces_P_D_G_function_declarations_P_D = {
    readonly "declaration": core_function_declaration_T;
};
declare type core_root_G_namespaces_P_D_G_function_declarations_P = IDictionary<core_root_G_namespaces_P_D_G_function_declarations_P_D>;
declare type core_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P_D = {
    readonly "declaration": core_builder_procedure_declaration_T;
};
declare type core_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P = IDictionary<core_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P_D>;
declare type core_root_G_namespaces_P_D_G_interface_builders_P_D = {
    readonly "methods": core_root_G_namespaces_P_D_G_interface_builders_P_D_G_methods_P;
};
declare type core_root_G_namespaces_P_D_G_interface_builders_P = IDictionary<core_root_G_namespaces_P_D_G_interface_builders_P_D>;
declare type core_root_G_namespaces_P_D_G_interfaces_P_D = {
    readonly "definition": core_interface_definition_T;
};
declare type core_root_G_namespaces_P_D_G_interfaces_P = IDictionary<core_root_G_namespaces_P_D_G_interfaces_P_D>;
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P_D = {
    readonly "builder": string;
    readonly "namespace selection": core_namespace_selection_T;
};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P = IDictionary<core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P_D>;
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P_D = {
    readonly "declaration": core_function_declaration_T;
};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P = IDictionary<core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P_D>;
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P_D = {
    readonly "interface": core_interface_definition_T;
};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P = IDictionary<core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P_D>;
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_interface_O = {
    readonly "interface": core_interface_definition_T;
};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_void_O = {};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P = ["interface", core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_interface_O] | ["void", core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P_TU_void_O];
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P_D = {
    readonly "builders": core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_builders_P;
    readonly "context": core_type_reference_T;
    readonly "functions": core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_functions_P;
    readonly "interfaces": core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_interfaces_P;
    readonly "return type": core_root_G_namespaces_P_D_G_procedure_declarations_P_D_G_return_type_P;
};
declare type core_root_G_namespaces_P_D_G_procedure_declarations_P = IDictionary<core_root_G_namespaces_P_D_G_procedure_declarations_P_D>;
declare type core_root_G_namespaces_P_D_G_type_parameters_P_D = {};
declare type core_root_G_namespaces_P_D_G_type_parameters_P = IDictionary<core_root_G_namespaces_P_D_G_type_parameters_P_D>;
declare type core_root_G_namespaces_P_D_G_types_P_D = {
    readonly "type": core_type_T;
};
declare type core_root_G_namespaces_P_D_G_types_P = IDictionary<core_root_G_namespaces_P_D_G_types_P_D>;
declare type core_root_G_namespaces_P_D = {
    readonly "function declarations": core_root_G_namespaces_P_D_G_function_declarations_P;
    readonly "interface builders": core_root_G_namespaces_P_D_G_interface_builders_P;
    readonly "interfaces": core_root_G_namespaces_P_D_G_interfaces_P;
    readonly "procedure declarations": core_root_G_namespaces_P_D_G_procedure_declarations_P;
    readonly "type parameters": core_root_G_namespaces_P_D_G_type_parameters_P;
    readonly "types": core_root_G_namespaces_P_D_G_types_P;
};
declare type core_root_G_namespaces_P = IDictionary<core_root_G_namespaces_P_D>;
declare type core_root_G_procedure_implementations_P_D_G_type_parameters_P_D = {};
declare type core_root_G_procedure_implementations_P_D_G_type_parameters_P = IDictionary<core_root_G_procedure_implementations_P_D_G_type_parameters_P_D>;
declare type core_root_G_procedure_implementations_P_D = {
    readonly "block": core_procedure_block_T;
    readonly "declaration": string;
    readonly "namespace reference": core_namespace_reference_T;
    readonly "type parameters": core_root_G_procedure_implementations_P_D_G_type_parameters_P;
};
declare type core_root_G_procedure_implementations_P = IDictionary<core_root_G_procedure_implementations_P_D>;
declare type core_root = {
    readonly "function implementations": core_root_G_function_implementations_P;
    readonly "namespaces": core_root_G_namespaces_P;
    readonly "procedure implementations": core_root_G_procedure_implementations_P;
};
declare type core_root_T = core_root;
declare type core_string_expression_G_strategy_P_TU_literal_O = {
    readonly "value": string;
};
declare type core_string_expression_G_strategy_P_TU_select_O = {
    readonly "context": core_context_selection_T;
};
declare type core_string_expression_G_strategy_P_TU_state_O = {
    readonly "state": string;
};
declare type core_string_expression_G_strategy_P = ["literal", core_string_expression_G_strategy_P_TU_literal_O] | ["select", core_string_expression_G_strategy_P_TU_select_O] | ["state", core_string_expression_G_strategy_P_TU_state_O];
declare type core_string_expression = {
    readonly "strategy": core_string_expression_G_strategy_P;
};
declare type core_string_expression_T = core_string_expression;
declare type core_type_G_occurence_P_TU_optional_O = {};
declare type core_type_G_occurence_P_TU_required_O = {};
declare type core_type_G_occurence_P = ["optional", core_type_G_occurence_P_TU_optional_O] | ["required", core_type_G_occurence_P_TU_required_O];
declare type core_type_G_type_P_TU_boolean_O = {};
declare type core_type_G_type_P_TU_dictionary_O = {
    readonly "entry": core_type_T;
};
declare type core_type_G_type_P_TU_group_O_G_properties_P_D = {
    readonly "type": core_type_T;
};
declare type core_type_G_type_P_TU_group_O_G_properties_P = IDictionary<core_type_G_type_P_TU_group_O_G_properties_P_D>;
declare type core_type_G_type_P_TU_group_O = {
    readonly "properties": core_type_G_type_P_TU_group_O_G_properties_P;
};
declare type core_type_G_type_P_TU_list_O = {
    readonly "element": core_type_T;
};
declare type core_type_G_type_P_TU_number_O = {};
declare type core_type_G_type_P_TU_string_O = {};
declare type core_type_G_type_P_TU_tagged_union_O_G_options_P_D = {
    readonly "type": core_type_T;
};
declare type core_type_G_type_P_TU_tagged_union_O_G_options_P = IDictionary<core_type_G_type_P_TU_tagged_union_O_G_options_P_D>;
declare type core_type_G_type_P_TU_tagged_union_O = {
    readonly "options": core_type_G_type_P_TU_tagged_union_O_G_options_P;
};
declare type core_type_G_type_P_TU_type_argument_O = {
    readonly "argument": string;
};
declare type core_type_G_type_P_TU_type_reference_O = {
    readonly "type": core_type_reference_T;
};
declare type core_type_G_type_P = ["boolean", core_type_G_type_P_TU_boolean_O] | ["dictionary", core_type_G_type_P_TU_dictionary_O] | ["group", core_type_G_type_P_TU_group_O] | ["list", core_type_G_type_P_TU_list_O] | ["number", core_type_G_type_P_TU_number_O] | ["string", core_type_G_type_P_TU_string_O] | ["tagged union", core_type_G_type_P_TU_tagged_union_O] | ["type argument", core_type_G_type_P_TU_type_argument_O] | ["type reference", core_type_G_type_P_TU_type_reference_O];
declare type core_type = {
    readonly "occurence": core_type_G_occurence_P;
    readonly "type": core_type_G_type_P;
};
declare type core_type_T = core_type;
declare type core_type_expression_G_strategy_P_TU_copy_O = {
    readonly "context": core_guaranteed_context_selection_T;
};
declare type core_type_expression_G_strategy_P_TU_dictionary_from_state_O = {
    readonly "state": string;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_boolean_O = {
    readonly "value": string;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_dictionary_O = {};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P_D = {
    readonly "expression": core_type_expression_T;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P = IDictionary<core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P_D>;
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O = {
    readonly "properties": core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O_G_properties_P;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_list_O = {};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_number_O = {
    readonly "value": string;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_string_O = {
    readonly "value": string;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_tagged_union_O = {
    readonly "data": core_type_expression_T;
    readonly "option": string;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_argument_O = {};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_reference_O = {
    readonly "expression": core_type_expression_T;
};
declare type core_type_expression_G_strategy_P_TU_literal_O_G_type_P = ["boolean", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_boolean_O] | ["dictionary", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_dictionary_O] | ["group", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_group_O] | ["list", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_list_O] | ["number", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_number_O] | ["string", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_string_O] | ["tagged union", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_tagged_union_O] | ["type argument", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_argument_O] | ["type reference", core_type_expression_G_strategy_P_TU_literal_O_G_type_P_TU_type_reference_O];
declare type core_type_expression_G_strategy_P_TU_literal_O = {
    readonly "type": core_type_expression_G_strategy_P_TU_literal_O_G_type_P;
};
declare type core_type_expression_G_strategy_P_TU_map_O = {
    readonly "context": core_guaranteed_context_selection_T;
    readonly "entry": core_type_expression_T;
};
declare type core_type_expression_G_strategy_P_TU_switch_O_G_options_P_D = {
    readonly "expression": core_type_expression_T;
};
declare type core_type_expression_G_strategy_P_TU_switch_O_G_options_P = IDictionary<core_type_expression_G_strategy_P_TU_switch_O_G_options_P_D>;
declare type core_type_expression_G_strategy_P_TU_switch_O = {
    readonly "context": core_guaranteed_context_selection_T;
    readonly "options": core_type_expression_G_strategy_P_TU_switch_O_G_options_P;
};
declare type core_type_expression_G_strategy_P = ["copy", core_type_expression_G_strategy_P_TU_copy_O] | ["dictionary from state", core_type_expression_G_strategy_P_TU_dictionary_from_state_O] | ["literal", core_type_expression_G_strategy_P_TU_literal_O] | ["map", core_type_expression_G_strategy_P_TU_map_O] | ["switch", core_type_expression_G_strategy_P_TU_switch_O];
declare type core_type_expression = {
    readonly "strategy": core_type_expression_G_strategy_P;
};
declare type core_type_expression_T = core_type_expression;
declare type core_type_expression_block_G_functions_P_D = {
    readonly "block": core_type_expression_block_T;
    readonly "declaration": core_function_declaration_T;
};
declare type core_type_expression_block_G_functions_P = IDictionary<core_type_expression_block_G_functions_P_D>;
declare type core_type_expression_block = {
    readonly "expression": core_type_expression_T;
    readonly "functions": core_type_expression_block_G_functions_P;
};
declare type core_type_expression_block_T = core_type_expression_block;
declare type core_type_reference = {
    readonly "namespace selection": core_namespace_selection_T;
    readonly "type": string;
};
declare type core_type_reference_T = core_type_reference;
export declare type deserialize_createDeserializer_PD<NonTokenAnnotation, TokenAnnotation> = ($c: lang_nothing_T, $i: {
    "callback": ($: core_root_T) => void;
    "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void;
}, $b: {
    "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>;
}, $f: {
    "stringToBoolean": ($c: lang_string_T) => lang_boolean_T;
    "stringToNumber": ($c: lang_string_T) => lang_number_T;
}) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
declare type deserialize_api_StringToken_G_token_P_G_data_P<NonTokenAnnotation, TokenAnnotation> = {
    readonly "value": string;
};
declare type deserialize_api_StringToken_G_token_P<NonTokenAnnotation, TokenAnnotation> = {
    readonly "data": deserialize_api_StringToken_G_token_P_G_data_P<NonTokenAnnotation, TokenAnnotation>;
};
declare type deserialize_api_StringToken<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation;
    readonly "token": deserialize_api_StringToken_G_token_P<NonTokenAnnotation, TokenAnnotation>;
};
declare type deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation> = deserialize_api_StringToken<NonTokenAnnotation, TokenAnnotation>;
declare type deserialize_api_ValidationError<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation;
    readonly "message": string;
};
declare type deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation> = deserialize_api_ValidationError<NonTokenAnnotation, TokenAnnotation>;
export declare type deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {
    "exists": deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    "missing": ($: lang_nothing_T) => void;
};
export declare type deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {};
export interface deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation> {
    "expectDictionary"($i: {
        "onProperty": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    "expectList"($i: {
        "onElement": ($: lang_nothing_T) => deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    "expectQuotedString"($i: {
        "callback": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => void;
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    "expectTaggedUnion"($i: {
        "options": {
            [key: string]: ($: lang_nothing_T) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
        };
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
    "expectVerboseGroup"($i: {
        "onEnd": ($: lang_nothing_T) => void;
        "properties": {
            [key: string]: {
                "onExists": ($: lang_nothing_T) => void;
            };
        };
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
}
declare type lang_boolean_T = boolean;
declare type lang_nothing = {};
declare type lang_nothing_T = lang_nothing;
declare type lang_number_T = number;
declare type lang_string_T = string;
export declare function build_fi($c: build_root_T): core_root_T;
export declare function createDeserializer_pi<NonTokenAnnotation, TokenAnnotation>($c: lang_nothing_T, $i: {
    "callback": ($: core_root_T) => void;
    "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void;
}, $b: {
    "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>;
}, $f: {
    "stringToBoolean": ($c: lang_string_T) => lang_boolean_T;
    "stringToNumber": ($c: lang_string_T) => lang_number_T;
}): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
export {};
