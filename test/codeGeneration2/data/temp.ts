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

type build_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type build_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = IDictionary<build_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G>

type build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | ["High", build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G]
    | ["Low", build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G]
    | ["Medium", build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G]

type build_root_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder"?: string
    readonly "cost"?: number
    readonly "description"?: string
    readonly "enddate"?: string
    readonly "involved team members"?: build_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority"?: build_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate"?: string
}

type build_root_T_G_projects_P_D_G_tasks_P_D = IDictionary<build_root_T_G_projects_P_D_G_tasks_P_D_G>

type build_root_T_G_projects_P_D_G = {
    readonly "tasks"?: build_root_T_G_projects_P_D_G_tasks_P_D
}

type build_root_T_G_projects_P_D = IDictionary<build_root_T_G_projects_P_D_G>

type build_root_T_G = {
    readonly "projects"?: build_root_T_G_projects_P_D
}

type build_root_T = build_root_T_G

type core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G = {}

type core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D = IDictionary<core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G>

type core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G = {}

type core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G = {}

type core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G = {}

type core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU =
    | ["High", core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O_G]
    | ["Low", core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O_G]
    | ["Medium", core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O_G]

type core_root_T_G_projects_P_D_G_tasks_P_D_G = {
    readonly "action holder": string
    readonly "cost": number
    readonly "description": string
    readonly "enddate": string
    readonly "involved team members": core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D
    readonly "priority": core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU
    readonly "startdate": string
}

type core_root_T_G_projects_P_D_G_tasks_P_D = IDictionary<core_root_T_G_projects_P_D_G_tasks_P_D_G>

type core_root_T_G_projects_P_D_G = {
    readonly "tasks": core_root_T_G_projects_P_D_G_tasks_P_D
}

type core_root_T_G_projects_P_D = IDictionary<core_root_T_G_projects_P_D_G>

type core_root_T_G = {
    readonly "projects": core_root_T_G_projects_P_D
}

type core_root_T = core_root_T_G

export type deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {
    "exists": deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "missing": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
}

export type deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> = {}

type deserialize_Empty_T_G<NonTokenAnnotation, TokenAnnotation> = {}

type deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation> = deserialize_Empty_T_G<NonTokenAnnotation, TokenAnnotation>

type deserialize_StringToken_T_G_token_P_G_data_P_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "value": string
}

type deserialize_StringToken_T_G_token_P_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "data": deserialize_StringToken_T_G_token_P_G_data_P_G<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_StringToken_T_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "token": deserialize_StringToken_T_G_token_P_G<NonTokenAnnotation, TokenAnnotation>
}

type deserialize_StringToken_T<NonTokenAnnotation, TokenAnnotation> = deserialize_StringToken_T_G<NonTokenAnnotation, TokenAnnotation>

type deserialize_ValidationError_T_G<NonTokenAnnotation, TokenAnnotation> = {
    readonly "annotation": TokenAnnotation
    readonly "message": string
}

type deserialize_ValidationError_T<NonTokenAnnotation, TokenAnnotation> = deserialize_ValidationError_T_G<NonTokenAnnotation, TokenAnnotation>

export interface deserialize_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation> {
    "expectDictionary"($f: {
        "onProperty": ($: deserialize_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectList"($f: {
        "onElement": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectQuotedString"($f: {
        "callback": ($: deserialize_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => void
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectTaggedUnion"($f: {
        "options": {
            [key: string]: ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
        }
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectVerboseGroup"($f: {
        "onEnd": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
        "properties": {
            [key: string]: {
                "onExists": ($: deserialize_Empty_T<NonTokenAnnotation, TokenAnnotation>) => void
            }
        }
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
}

export function deserialize_createDeserializer_IC<NonTokenAnnotation, TokenAnnotation>($f: {
    "callback": ($: core_root_T) => void
    "context": deserialize_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    "raiseValidationError": ($: deserialize_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
}): deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    const x = $f
    function root_NIC($f: {
        "callback": ($: core_root_T) => void
    }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        function temp_NIC($f: {
            "out": ($: core_root_T) => void
        }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
            const projects: { [key:string]: core_root_T_G_projects_P_D_G } = {}
            return x.context.expectVerboseGroup({
                "onEnd": ($cb) => {
                    $f.out({
                        "projects": createDictionary(projects),
                    })
                },
                "properties": {
                    "projects": {
                        "onExists": ($cb) => {
                            return wrap_NIC({
                                "handler": x.context.expectDictionary({
                                    "onProperty": ($cb) => {
                                        const y = $cb
                                        return wrap_NIC({
                                            "handler": (($f: {}): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                function temp_NIC($f: {
                                                    "out": ($: core_root_T_G_projects_P_D_G) => void
                                                }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                    const tasks: { [key:string]: core_root_T_G_projects_P_D_G_tasks_P_D_G } = {}
                                                    return x.context.expectVerboseGroup({
                                                        "onEnd": ($cb) => {
                                                            $f.out({
                                                                "tasks": createDictionary(tasks),
                                                            })
                                                        },
                                                        "properties": {
                                                            "tasks": {
                                                                "onExists": ($cb) => {
                                                                    return wrap_NIC({
                                                                        "handler": x.context.expectDictionary({
                                                                            "onProperty": ($cb) => {
                                                                                const y = $cb
                                                                                return wrap_NIC({
                                                                                    "handler": (($f: {}): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                        function temp_NIC($f: {
                                                                                            "out": ($: core_root_T_G_projects_P_D_G_tasks_P_D_G) => void
                                                                                        }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                            let action_holder = "ikke"
                                                                                            let cost = ""
                                                                                            let description = ""
                                                                                            let enddate = ""
                                                                                            const involved_team_members: { [key:string]: core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G } = {}
                                                                                            const priority: core_root_T_G_projects_P_D_G_tasks_P_D_G_priority_P_TU = ["Medium", {} ]
                                                                                            let startdate = ""
                                                                                            return x.context.expectVerboseGroup({
                                                                                                "onEnd": ($cb) => {
                                                                                                    $f.out({
                                                                                                        "action holder": action_holder,
                                                                                                        "cost": 0,
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
                                                                                                            return x.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    action_holder = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "cost": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    cost = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "description": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    description = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "enddate": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x.context.expectQuotedString({
                                                                                                                "callback": ($cb) => {
                                                                                                                    enddate = $cb.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "involved team members": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": x.context.expectDictionary({
                                                                                                                    "onProperty": ($cb) => {
                                                                                                                        const y = $cb
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($f: {}): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                function temp_NIC($f: {
                                                                                                                                    "out": ($: core_root_T_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D_G) => void
                                                                                                                                }): deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                    return x.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($cb) => {
                                                                                                                                            $f.out({})
                                                                                                                                        },
                                                                                                                                        "properties": {},
                                                                                                                                    })
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($cb) => {
                                                                                                                                        involved_team_members[y.token.data.value] = $cb
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
                                                                                                            return x.context.expectTaggedUnion({
                                                                                                                "options": {
                                                                                                                    "High": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": ($cb: void): void => {
                                                                                                                                throw new Error("X")
                                                                                                                            },
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Low": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": ($cb: void) => {
                                                                                                                                throw new Error("X")
                                                                                                                            },
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Medium": ($cb) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": ($cb: void) => {
                                                                                                                                throw new Error("X")
                                                                                                                            },
                                                                                                                        })
                                                                                                                    },
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "startdate": {
                                                                                                        "onExists": ($cb) => {
                                                                                                            return x.context.expectQuotedString({
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
                                                                                                tasks[y.token.data.value] = $cb
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
                                                        projects[y.token.data.value] = $cb
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
                $f.callback($cb)
            },
        })
    }
    function wrap_NIC($f: {
        "handler": deserialize_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        return {
            "exists": $f["handler"],
            "missing": ($cb) => {},
        }
    }
    return wrap_NIC({
        "handler": root_NIC({
            "callback": $f["callback"],
        }),
    })
}