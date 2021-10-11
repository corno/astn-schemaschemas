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

interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void
}

function createDictionary<T>(raw: { [key: string]: T }): IDictionary<T> {
    return {
        forEach: (callback: (e: T, key: string) => void) => { Object.keys(raw).sort().forEach((key) => { callback(raw[key], key) }) },
    }
}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = {
    [key: string]: root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G
}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G
    | root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G

type root_B_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder"?: string
    readonly "cost"?: number
    readonly "description"?: string
    readonly "enddate"?: string
    readonly "involved team members"?: root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority"?: root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate"?: string
}

type root_B_T_G_projects_P_D_G_tasks_P_D = {
    [key: string]: root_B_T_G_projects_P_D_G_tasks_P_D_G
}

type root_B_T_G_projects_P_D_G = {
    readonly "tasks"?: root_B_T_G_projects_P_D_G_tasks_P_D
}

type root_B_T_G_projects_P_D = {
    [key: string]: root_B_T_G_projects_P_D_G
}

type root_B_T_G = {
    readonly "projects"?: root_B_T_G_projects_P_D
}

type root_B_T = root_B_T_G

type root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = IDictionary<root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G>

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | ["High", root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G]
    | ["Low", root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G]
    | ["Medium", root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G]

type root_T_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder": string
    readonly "cost": number
    readonly "description": string
    readonly "enddate": string
    readonly "involved team members": root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority": root_T_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate": string
}

type root_T_T_G_projects_P_D_G_tasks_P_D = IDictionary<root_T_T_G_projects_P_D_G_tasks_P_D_G>

type root_T_T_G_projects_P_D_G = {
    readonly "tasks": root_T_T_G_projects_P_D_G_tasks_P_D
}

type root_T_T_G_projects_P_D = IDictionary<root_T_T_G_projects_P_D_G>

type root_T_T_G = {
    readonly "projects": root_T_T_G_projects_P_D
}

type root_T_T = root_T_T_G

export type deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {
    "exists": deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "missing": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
}

export type deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {
    foo: number
}

type deserialize_Empty_T_G<NonTokenAnnotation, TokenAnnotation> = {}

type deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation> = deserialize_Empty_T_G<NonTokenAnnotation, TokenAnnotation>

type deserialize_QuotedStringToken_T_G_token_P_G_data_P_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "value": string
}

type deserialize_QuotedStringToken_T_G_token_P_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "data": deserialize_QuotedStringToken_T_G_token_P_G_data_P_G<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_QuotedStringToken_T_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "token": deserialize_QuotedStringToken_T_G_token_P_G<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_QuotedStringToken_T<NonTokenAnnotation, TokenAnnotation> = deserialize_QuotedStringToken_T_G<NonTokenAnnotation, TokenAnnotation>

type deserialize_ValidationError_T_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "message": string
}

type deserialize_ValidationError_T<NonTokenAnnotation, TokenAnnotation> = deserialize_ValidationError_T_G<NonTokenAnnotation, TokenAnnotation>

export interface deserialize_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation> {
    "expectDictionary": ($: {
        "onProperty": ($: deserialize_QuotedStringToken_T_G<NonTokenAnnotation, TokenAnnotation>) => deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectList": ($: {
        "onElement": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectQuotedString": ($: {
        "callback": ($: deserialize_QuotedStringToken_T<NonTokenAnnotation, TokenAnnotation>) => void
    }) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectTaggedUnion": ($: {
        "options": {
            [key: string]: ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
        }
    }) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectVerboseGroup": ($: {
        "onEnd": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
        "properties": {
            [key: string]: {
                "onExists": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
            }
        }
    }) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
}

export function deserialize_createDeserializer_IC<NonTokenAnnotation, TokenAnnotation>($: {
    "callback": ($: root_T_T) => void
    "context": deserialize_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    "raiseValidationError": ($: deserialize_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
}): deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    const context = $.context
    function root_NIC($$: {
        "callback": ($: root_T_T) => void
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        function temp_NIC($$: {
            "out": ($: root_T_T) => void
        }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
            const projects: { [key: string]: root_T_T_G_projects_P_D_G } = {}
            return context.expectVerboseGroup({
                "onEnd": ($) => {
                    $$.out({
                        "projects": createDictionary(projects),
                    })
                    return {}
                },
                "properties": {
                    "projects": {
                        "onExists": ($) => {
                            return wrap_NIC({
                                "handler": context.expectDictionary({
                                    "onProperty": ($$) => {
                                        return wrap_NIC({
                                            "handler": (() => {
                                                function temp_NIC($$: {
                                                    "out": ($: root_T_T_G_projects_P_D_G) => void
                                                }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                    const tasks: { [key: string]: root_T_T_G_projects_P_D_G_tasks_P_D_G } = {}
                                                    return context.expectVerboseGroup({
                                                        "onEnd": ($) => {
                                                            $$.out({
                                                                "tasks": createDictionary(tasks),
                                                            })
                                                            return {}
                                                        },
                                                        "properties": {
                                                            "tasks": {
                                                                "onExists": ($) => {
                                                                    return wrap_NIC({
                                                                        "handler": context.expectDictionary({
                                                                            "onProperty": ($$) => {
                                                                                return wrap_NIC({
                                                                                    "handler": (() => {
                                                                                        function temp_NIC($$: {
                                                                                            "out": ($: root_T_T_G_projects_P_D_G_tasks_P_D_G) => void
                                                                                        }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                            let action_holder = "ikke"
                                                                                            let cost = ""
                                                                                            let description = ""
                                                                                            let enddate = ""
                                                                                            const involved_team_members: { [key: string]: root_B_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D } = {}
                                                                                            const priority: root_B_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU = {}
                                                                                            let startdate = ""
                                                                                            return context.expectVerboseGroup({
                                                                                                "onEnd": ($) => {
                                                                                                    $$.out({
                                                                                                        "action holder": "",
                                                                                                        "cost": 0,
                                                                                                        "description": "",
                                                                                                        "enddate": "",
                                                                                                        "involved team members": createDictionary({}),
                                                                                                        "priority": ["High", {}],
                                                                                                        "startdate": "",
                                                                                                    })
                                                                                                    return {}
                                                                                                },
                                                                                                "properties": {
                                                                                                    "action holder": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectQuotedString({
                                                                                                                "callback": ($) => {
                                                                                                                    action_holder = $.token.data.value
                                                                                                                    return {}
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "cost": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectQuotedString({
                                                                                                                "callback": ($) => {
                                                                                                                    cost = $.token.data.value
                                                                                                                    return {}
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "description": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectQuotedString({
                                                                                                                "callback": ($) => {
                                                                                                                    description = $.token.data.value
                                                                                                                    return {}
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "enddate": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectQuotedString({
                                                                                                                "callback": ($) => {
                                                                                                                    enddate = $.token.data.value
                                                                                                                    return {}
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "involved team members": {
                                                                                                        "onExists": ($) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": context.expectDictionary({
                                                                                                                    "onProperty": ($$) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (() => {
                                                                                                                                function temp_NIC($$: {
                                                                                                                                    "out": ($: root_T_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G) => void
                                                                                                                                }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                    return context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($) => {
                                                                                                                                            $$.out({})
                                                                                                                                            return {}
                                                                                                                                        },
                                                                                                                                        "properties": {},
                                                                                                                                    })
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($) => {
                                                                                                                                        involved_team_members[$$.token.data.value] = $
                                                                                                                                    },
                                                                                                                                })
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                }),
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "priority": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectTaggedUnion({
                                                                                                                "options": {
                                                                                                                    // "High": {},
                                                                                                                    // "Low": {},
                                                                                                                    // "Medium": {},
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "startdate": {
                                                                                                        "onExists": ($) => {
                                                                                                            return context.expectQuotedString({
                                                                                                                "callback": ($) => {
                                                                                                                    startdate = $.token.data.value
                                                                                                                    return {}
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            })
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($) => {
                                                                                                tasks[$$.token.data.value] = $
                                                                                            },
                                                                                        })
                                                                                    })(),
                                                                                })
                                                                            },
                                                                        }),
                                                                    })
                                                                },
                                                            },
                                                        },
                                                    })
                                                }
                                                return temp_NIC({
                                                    "out": ($) => {
                                                        projects[$$.token.data.value] = $
                                                    },
                                                })
                                            })(),
                                        })
                                    },
                                }),
                            })
                        },
                    },
                },
            })
        }
        return temp_NIC({
            "out": ($) => {
                $$.callback($)
            },
        })
    }
    function wrap_NIC($: {
        "handler": deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        return {
            "exists": $["handler"],
            "missing": ($) => {
                return {}
            },
        }
    }
    return wrap_NIC({
        "handler": root_NIC({
            "callback": $["callback"],
        }),
    })
}