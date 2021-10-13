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

type build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = {}

type build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P = IDictionary<build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D>

type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O = {}

type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O = {}

type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O = {}

type build_root_G_projects_P_D_G_tasks_P_D_G_priority_P =
    | ["High", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O]
    | ["Low", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O]
    | ["Medium", build_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O]

type build_root_G_projects_P_D_G_tasks_P_D = {
    readonly "action holder"?: string
    readonly "cost"?: number
    readonly "description"?: string
    readonly "enddate"?: string
    readonly "involved team members"?: build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P
    readonly "priority"?: build_root_G_projects_P_D_G_tasks_P_D_G_priority_P
    readonly "startdate"?: string
}

type build_root_G_projects_P_D_G_tasks_P = IDictionary<build_root_G_projects_P_D_G_tasks_P_D>

type build_root_G_projects_P_D = {
    readonly "tasks"?: build_root_G_projects_P_D_G_tasks_P
}

type build_root_G_projects_P = IDictionary<build_root_G_projects_P_D>

type build_root = {
    readonly "projects"?: build_root_G_projects_P
}

type build_root_T = build_root

type core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = {}

type core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P = IDictionary<core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D>

type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O = {}

type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O = {}

type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O = {}

type core_root_G_projects_P_D_G_tasks_P_D_G_priority_P =
    | ["High", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O]
    | ["Low", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O]
    | ["Medium", core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O]

type core_root_G_projects_P_D_G_tasks_P_D = {
    readonly "action holder": string
    readonly "cost": number
    readonly "description": string
    readonly "enddate": string
    readonly "involved team members": core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P
    readonly "priority": core_root_G_projects_P_D_G_tasks_P_D_G_priority_P
    readonly "startdate": string
}

type core_root_G_projects_P_D_G_tasks_P = IDictionary<core_root_G_projects_P_D_G_tasks_P_D>

type core_root_G_projects_P_D = {
    readonly "tasks": core_root_G_projects_P_D_G_tasks_P
}

type core_root_G_projects_P = IDictionary<core_root_G_projects_P_D>

type core_root = {
    readonly "projects": core_root_G_projects_P
}

type core_root_T = core_root

export type deserialize_createDeserializer_PD<NonTokenAnnotation, TokenAnnotation> = ($p: {
    "callback": ($: core_root_T) => void
    "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
    "stringToBoolean": ($p: lang_string_T) => lang_boolean_T
    "stringToNumber": ($p: lang_string_T) => lang_number_T
}) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>

type deserialize_api_StringToken_G_token_P_G_data_P<NonTokenAnnotation, TokenAnnotation> = {
    readonly "value": string
}

type deserialize_api_StringToken_G_token_P<NonTokenAnnotation, TokenAnnotation> = {
    readonly "data": deserialize_api_StringToken_G_token_P_G_data_P<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_api_StringToken<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "token": deserialize_api_StringToken_G_token_P<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation> = deserialize_api_StringToken<NonTokenAnnotation, TokenAnnotation>

type deserialize_api_ValidationError<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "message": string
}

type deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation> = deserialize_api_ValidationError<NonTokenAnnotation, TokenAnnotation>

export type deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {
    "exists": deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "missing": ($: lang_nothing_T) => void
}

export type deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {}

export interface deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation> {
    "expectDictionary"($p: {
        "onProperty": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectList"($p: {
        "onElement": ($: lang_nothing_T) => deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectQuotedString"($p: {
        "callback": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => void
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectTaggedUnion"($p: {
        "options": {
            [key: string]: ($: lang_nothing_T) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
        }
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectVerboseGroup"($p: {
        "onEnd": ($: lang_nothing_T) => void
        "properties": {
            [key: string]: {
                "onExists": ($: lang_nothing_T) => void
            }
        }
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
}

type lang_boolean_T = boolean

type lang_nothing = {}

type lang_nothing_T = lang_nothing

type lang_number_T = number

type lang_string_T = string

export function deserialize_createDeserializer_pi<NonTokenAnnotation, TokenAnnotation>($p: {
    "callback": ($: core_root_T) => void
    "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
    "stringToBoolean": ($p: lang_string_T) => lang_boolean_T
    "stringToNumber": ($p: lang_string_T) => lang_number_T
}): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    const x_v = $p
    function root_NIC($p: {
        "callback": ($: core_root) => void
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        function temp_NIC($p: {
            "out": ($: core_root) => void
        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
            const projects: { [key: string]: core_root_G_projects_P_D } = {}
            return x_v.context.expectVerboseGroup({
                "onEnd": ($cb) => {
                    $p.out({
                        "projects": createDictionary(projects),
                    })
                },
                "properties": {
                    "projects": {
                        "onExists": ($cb) => {
                            return wrap_NIC({
                                "handler": x_v.context.expectDictionary({
                                    "onProperty": ($cb) => {
                                        const y_v = $cb
                                        return wrap_NIC({
                                            "handler": (($p: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                function temp_NIC($p: {
                                                    "out": ($: core_root_G_projects_P_D) => void
                                                }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                    const tasks: { [key: string]: core_root_G_projects_P_D_G_tasks_P_D } = {}
                                                    return x_v.context.expectVerboseGroup({
                                                        "onEnd": ($cb) => {
                                                            $p.out({
                                                                "tasks": createDictionary(tasks),
                                                            })
                                                        },
                                                        "properties": {
                                                            "tasks": {
                                                                "onExists": ($cb) => {
                                                                    return wrap_NIC({
                                                                        "handler": x_v.context.expectDictionary({
                                                                            "onProperty": ($cb) => {
                                                                                const y_v = $cb
                                                                                return wrap_NIC({
                                                                                    "handler": (($p: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                        function temp_NIC($p: {
                                                                                            "out": ($: core_root_G_projects_P_D_G_tasks_P_D) => void
                                                                                        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                            let action_holder = "ikke"
                                                                                            let cost = ""
                                                                                            let description = ""
                                                                                            let enddate = ""
                                                                                            const involved_team_members: { [key: string]: core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D } = {}
                                                                                            const priority: core_root_G_projects_P_D_G_tasks_P_D_G_priority_P = ["Medium", {} ]
                                                                                            let startdate = ""
                                                                                            return x_v.context.expectVerboseGroup({
                                                                                                "onEnd": ($cb) => {
                                                                                                    $p.out({
                                                                                                        "action holder": action_holder,
                                                                                                        "cost": x_v.stringToNumber(cost),
                                                                                                        "description": description,
                                                                                                        "enddate": enddate,
                                                                                                        "involved team members": createDictionary(involved_team_members),
                                                                                                        "priority": priority,
                                                                                                        "startdate": startdate,
                                                                                                    })
                                                                                                },
                                                                                                "properties": {
                                                                                                    "action holder": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    action_holder = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "cost": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    cost = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "description": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    description = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "enddate": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    enddate = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "involved team members": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": x_v.context.expectDictionary({
                                                                                                                    "onProperty": ($cb) => {
                                                                                                                        const y_v = $cb
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($p: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                function temp_NIC($p: {
                                                                                                                                    "out": ($: core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D) => void
                                                                                                                                }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                    return x_v.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($cb) => {
                                                                                                                                            $p.out({})
                                                                                                                                        },
                                                                                                                                        "properties": {},
                                                                                                                                    })
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($cb) => {
                                                                                                                                        involved_team_members[y_v.token.data.value] = $cb
                                                                                                                                    },
                                                                                                                                })
                                                                                                                            })({}),
                                                                                                                        })
                                                                                                                    },
                                                                                                                }),
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "priority": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectTaggedUnion({
                                                                                                                "options": {
                                                                                                                    "High": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($cb) => {
                                                                                                                                throw new Error("")
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Low": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($cb) => {
                                                                                                                                throw new Error("")
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Medium": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($cb) => {
                                                                                                                                throw new Error("")
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "startdate": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x_v.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    startdate = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            })
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($cb) => {
                                                                                                tasks[y_v.token.data.value] = $cb
                                                                                            },
                                                                                        })
                                                                                    })({}),
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
                                                    "out": ($cb) => {
                                                        projects[y_v.token.data.value] = $cb
                                                    },
                                                })
                                            })({}),
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
            "out": ($cb) => {
                $p.callback($cb)
            },
        })
    }
    function wrap_NIC($p: {
        "handler": deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        return {
            "exists": $p["handler"],
            "missing": ($cb) => {},
        }
    }
    return wrap_NIC({
        "handler": root_NIC({
            "callback": $p["callback"],
        }),
    })
}