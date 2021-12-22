interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void;
}
declare type build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = {};
declare type build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P = IDictionary<build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D>;
declare type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O = {};
declare type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O = {};
declare type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O = {};
declare type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P = ["High", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O] | ["Low", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O] | ["Medium", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O];
declare type build_root_G_projects_P_D_G_tasks_P_D = {
    readonly "action holder": undefined | string;
    readonly "cost": undefined | number;
    readonly "description": undefined | string;
    readonly "enddate": undefined | string;
    readonly "involved team members": undefined | build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P;
    readonly "priority": undefined | build_root_G_projects_P_D_G_tasks_P_D_G_priority_P;
    readonly "startdate": undefined | string;
};
declare type build_root_G_projects_P_D_G_tasks_P = IDictionary<build_root_G_projects_P_D_G_tasks_P_D>;
declare type build_root_G_projects_P_D = {
    readonly "tasks": undefined | build_root_G_projects_P_D_G_tasks_P;
};
declare type build_root_G_projects_P = IDictionary<build_root_G_projects_P_D>;
declare type build_root = {
    readonly "projects": undefined | build_root_G_projects_P;
};
declare type build_root_T = build_root;
export declare type build_build_PD = ($c: build_root_T) => core_root_T;
declare type core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = {};
declare type core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P = IDictionary<core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D>;
declare type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O = {};
declare type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O = {};
declare type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O = {};
declare type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P = ["High", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O] | ["Low", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O] | ["Medium", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O];
declare type core_root_G_projects_P_D_G_tasks_P_D = {
    readonly "action holder": string;
    readonly "cost": number;
    readonly "description": string;
    readonly "enddate": string;
    readonly "involved team members": core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P;
    readonly "priority": core_root_G_projects_P_D_G_tasks_P_D_G_priority_P;
    readonly "startdate": string;
};
declare type core_root_G_projects_P_D_G_tasks_P = IDictionary<core_root_G_projects_P_D_G_tasks_P_D>;
declare type core_root_G_projects_P_D = {
    readonly "tasks": core_root_G_projects_P_D_G_tasks_P;
};
declare type core_root_G_projects_P = IDictionary<core_root_G_projects_P_D>;
declare type core_root = {
    readonly "projects": core_root_G_projects_P;
};
declare type core_root_T = core_root;
export declare type deserialize_createDeserializer_PD<NonTokenAnnotation, TokenAnnotation> = ($i: {
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
export declare function createDeserializer_pi<NonTokenAnnotation, TokenAnnotation>($i: {
    "callback": ($: core_root_T) => void;
    "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void;
}, $b: {
    "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>;
}, $f: {
    "stringToBoolean": ($c: lang_string_T) => lang_boolean_T;
    "stringToNumber": ($c: lang_string_T) => lang_number_T;
}): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>;
export {};
