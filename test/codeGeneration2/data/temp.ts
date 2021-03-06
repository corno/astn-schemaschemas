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

import * as pr from "pareto-runtime"

interface IDictionary<T> {
    forEach(callback: (e: T, key: string) => void): void
}

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

function createDictionary<T>(raw: { [key: string]: T }): IDictionary<T> {
    return {
        forEach: (callback: (e: T, key: string) => void) => { pr.Objectkeys(raw).sort().forEach((key) => { callback(raw[key], key) }) },
    }
}

function mapDictionary<T, RT>(source: IDictionary<T>, convert: (v: T) => RT): IDictionary<RT> {
    return {
        forEach: (callback: (e: RT, key: string) => void) => { source.forEach((e, key) => { callback(convert(e), key) }) },
    }
}

function step<T, RT>(source: T | undefined, nav: ($: T) => RT | undefined): RT | undefined {
    if (source === undefined) {
        return undefined
    }
    return nav(source)
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
    readonly "action holder": undefined | string
    readonly "cost": undefined | number
    readonly "description": undefined | string
    readonly "enddate": undefined | string
    readonly "involved team members": undefined | build_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P
    readonly "priority": undefined | build_root_G_projects_P_D_G_tasks_P_D_G_priority_P
    readonly "startdate": undefined | string
}

type build_root_G_projects_P_D_G_tasks_P = IDictionary<build_root_G_projects_P_D_G_tasks_P_D>

type build_root_G_projects_P_D = {
    readonly "tasks": undefined | build_root_G_projects_P_D_G_tasks_P
}

type build_root_G_projects_P = IDictionary<build_root_G_projects_P_D>

type build_root = {
    readonly "projects": undefined | build_root_G_projects_P
}

type build_root_T = build_root

export type build_build_PD = ($c: build_root_T) => core_root_T

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

export type deserialize_createDeserializer_PD<NonTokenAnnotation, TokenAnnotation> = (
    $i: {
        "callback": ($: core_root_T) => void
        "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
    },
    $b: {
        "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    },
    $f: {
        "stringToBoolean": ($c: lang_string_T) => lang_boolean_T
        "stringToNumber": ($c: lang_string_T) => lang_number_T
    },
) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>

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
    "expectDictionary"(
        $i: {
            "onProperty": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
        },
    ): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectList"(
        $i: {
            "onElement": ($: lang_nothing_T) => deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
        },
    ): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectQuotedString"(
        $i: {
            "callback": ($: deserialize_api_StringToken_T<NonTokenAnnotation, TokenAnnotation>) => void
        },
    ): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectTaggedUnion"(
        $i: {
            "options": {
                [key: string]: ($: lang_nothing_T) => deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation>
            }
        },
    ): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    "expectVerboseGroup"(
        $i: {
            "onEnd": ($: lang_nothing_T) => void
            "properties": {
                [key: string]: {
                    "onExists": ($: lang_nothing_T) => void
                }
            }
        },
    ): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
}

type lang_boolean_T = boolean

type lang_nothing = {}

type lang_nothing_T = lang_nothing

type lang_number_T = number

type lang_string_T = string

export function build_fi($c: build_root_T): core_root_T {

    function buildDefault_root_fi() {
        return {
            "projects": {},
        }
    }

    function build_root_fi($c: build_root): core_root_T {
        return {
            "projects": (
                $c.projects === undefined
                    ? createDictionary({})
                    : mapDictionary($c.projects, ($c) => {
                        return {
                            "tasks": (
                                $c.tasks === undefined
                                    ? createDictionary({})
                                    : mapDictionary($c.tasks, ($c) => {
                                        return {
                                            "action holder": ($c["action holder"] === undefined
                                                ? "ikke"
                                                : $c["action holder"]
                                            ),
                                            "cost": ($c.cost === undefined
                                                ? 0
                                                : $c.cost
                                            ),
                                            "description": ($c.description === undefined
                                                ? ""
                                                : $c.description
                                            ),
                                            "enddate": ($c.enddate === undefined
                                                ? ""
                                                : $c.enddate
                                            ),
                                            "involved team members": (
                                                $c["involved team members"] === undefined
                                                    ? createDictionary({})
                                                    : mapDictionary($c["involved team members"], ($c) => {
                                                        return {
                                                        }
                                                    })
                                            ),
                                            "priority": ((): core_root_G_projects_P_D_G_tasks_P_D_G_priority_P => {
                                                return cc($c.priority, ($c) => {
                                                    if ($c === undefined) {
                                                        return ["Medium", {}]
                                                    }
                                                    switch ($c[0]) {
                                                        case "High": {
                                                            return cc($c[1], ($c) => {
                                                                return ["High", ""]
                                                            })
                                                        }
                                                        case "Low": {
                                                            return cc($c[1], ($c) => {
                                                                return ["Low", ""]
                                                            })
                                                        }
                                                        case "Medium": {
                                                            return cc($c[1], ($c) => {
                                                                return ["Medium", ""]
                                                            })
                                                        }
                                                        default: return assertUnreachable($c[0])
                                                    }
                                                })
                                            })(),
                                            "startdate": ($c.startdate === undefined
                                                ? ""
                                                : $c.startdate
                                            ),

                                        }
                                    })
                            ),
                        }
                        // "tasks": $c.priorityMEMAP{

                        // },
                    })
            ),
        }
    }
    return build_root_fi($c)
}

export function createDeserializer_pi<NonTokenAnnotation, TokenAnnotation>(
    $i: {
        "callback": ($: core_root_T) => void
        "raiseValidationError": ($: deserialize_api_ValidationError_T<NonTokenAnnotation, TokenAnnotation>) => void
    },
    $b: {
        "context": deserialize_api_ExpectContext_IB<NonTokenAnnotation, TokenAnnotation>
    },
    $f: {
        "stringToBoolean": ($c: lang_string_T) => lang_boolean_T
        "stringToNumber": ($c: lang_string_T) => lang_number_T
    },
): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
    function root_NIC($ip: {
        "callback": ($: core_root) => void
    }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        function temp_NIC($ip: {
            "out": ($: core_root) => void
        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
            const projects: { [key: string]: core_root_G_projects_P_D } = {}
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "projects": createDictionary(projects),
                    })
                },
                "properties": {
                    "projects": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = $c
                                        return wrap_NIC({
                                            "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                function temp_NIC($ip: {
                                                    "out": ($: core_root_G_projects_P_D) => void
                                                }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                    const tasks: { [key: string]: core_root_G_projects_P_D_G_tasks_P_D } = {}
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "tasks": createDictionary(tasks),
                                                            })
                                                        },
                                                        "properties": {
                                                            "tasks": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = $c
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                        function temp_NIC($ip: {
                                                                                            "out": ($: core_root_G_projects_P_D_G_tasks_P_D) => void
                                                                                        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                            let action_holder = "ikke"
                                                                                            let cost = ""
                                                                                            let description = ""
                                                                                            let enddate = ""
                                                                                            const involved_team_members: { [key: string]: core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D } = {}
                                                                                            let priority: core_root_G_projects_P_D_G_tasks_P_D_G_priority_P = ["Medium", {}]
                                                                                            let startdate = ""
                                                                                            return $b.context.expectVerboseGroup({
                                                                                                "onEnd": ($c) => {
                                                                                                    $ip.out({
                                                                                                        "action holder": action_holder,
                                                                                                        "cost": $f["stringToNumber"](cost),
                                                                                                        "description": description,
                                                                                                        "enddate": enddate,
                                                                                                        "involved team members": createDictionary(involved_team_members),
                                                                                                        "priority": priority,
                                                                                                        "startdate": startdate,
                                                                                                    })
                                                                                                },
                                                                                                "properties": {
                                                                                                    "action holder": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    action_holder = $c.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "cost": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    cost = $c.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "description": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    description = $c.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "enddate": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    enddate = $c.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "involved team members": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = $c
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                function temp_NIC($ip: {
                                                                                                                                    "out": ($: core_root_G_projects_P_D_G_tasks_P_D_G_involved_team_members_P_D) => void
                                                                                                                                }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                    return $b.context.expectVerboseGroup({
                                                                                                                                        "onEnd": ($c) => {
                                                                                                                                            $ip.out({})
                                                                                                                                        },
                                                                                                                                        "properties": {},
                                                                                                                                    })
                                                                                                                                }
                                                                                                                                return temp_NIC({
                                                                                                                                    "out": ($c) => {
                                                                                                                                        involved_team_members[y_m.token.data.value] = $c
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
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectTaggedUnion({
                                                                                                                "options": {
                                                                                                                    "High": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                        function temp_NIC($ip: {
                                                                                                                                            "out": ($: core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_High_O) => void
                                                                                                                                        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({})
                                                                                                                                                },
                                                                                                                                                "properties": {},
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                priority = ["High", $c]
                                                                                                                                            },
                                                                                                                                        })
                                                                                                                                    })({}),
                                                                                                                                })
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Low": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                        function temp_NIC($ip: {
                                                                                                                                            "out": ($: core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Low_O) => void
                                                                                                                                        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({})
                                                                                                                                                },
                                                                                                                                                "properties": {},
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                priority = ["Low", $c]
                                                                                                                                            },
                                                                                                                                        })
                                                                                                                                    })({}),
                                                                                                                                })
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                    "Medium": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($c) => {
                                                                                                                                return wrap_NIC({
                                                                                                                                    "handler": (($ip: {}): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> => {
                                                                                                                                        function temp_NIC($ip: {
                                                                                                                                            "out": ($: core_root_G_projects_P_D_G_tasks_P_D_G_priority_P_TU_Medium_O) => void
                                                                                                                                        }): deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
                                                                                                                                            return $b.context.expectVerboseGroup({
                                                                                                                                                "onEnd": ($c) => {
                                                                                                                                                    $ip.out({})
                                                                                                                                                },
                                                                                                                                                "properties": {},
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                        return temp_NIC({
                                                                                                                                            "out": ($c) => {
                                                                                                                                                priority = ["Medium", $c]
                                                                                                                                            },
                                                                                                                                        })
                                                                                                                                    })({}),
                                                                                                                                })
                                                                                                                            })(),
                                                                                                                        })
                                                                                                                    },
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                    "startdate": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    startdate = $c.token.data.value
                                                                                                                },
                                                                                                            })
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            })
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                tasks[y_m.token.data.value] = $c
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
                                                    "out": ($c) => {
                                                        projects[y_m.token.data.value] = $c
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
            "out": ($c) => {
                $ip.callback($c)
            },
        })
    }
    function wrap_NIC($ip: {
        "handler": deserialize_api_ValueHandler_I<NonTokenAnnotation, TokenAnnotation>
    }): deserialize_api_RequiredValueHandler_I<NonTokenAnnotation, TokenAnnotation> {
        return {
            "exists": $ip["handler"],
            "missing": ($c) => { },
        }
    }
    return wrap_NIC({
        "handler": root_NIC({
            "callback": $i["callback"],
        }),
    })
}