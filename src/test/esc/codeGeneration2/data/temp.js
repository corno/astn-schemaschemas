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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeserializer_pi = exports.build_fi = void 0;
const pr = __importStar(require("pareto-runtime"));
function assertUnreachable(_x) {
    throw new Error("unreachable");
}
function cc(input, callback) {
    return callback(input);
}
function createDictionary(raw) {
    return {
        forEach: (callback) => { pr.Objectkeys(raw).sort().forEach((key) => { callback(raw[key], key); }); },
    };
}
function mapDictionary(source, convert) {
    return {
        forEach: (callback) => { source.forEach((e, key) => { callback(convert(e), key); }); },
    };
}
function step(source, nav) {
    if (source === undefined) {
        return undefined;
    }
    return nav(source);
}
function build_fi($c) {
    function buildDefault_root_fi() {
        return {
            "projects": {},
        };
    }
    function build_root_fi($c) {
        return {
            "projects": ($c.projects === undefined
                ? createDictionary({})
                : mapDictionary($c.projects, ($c) => {
                    return {
                        "tasks": ($c.tasks === undefined
                            ? createDictionary({})
                            : mapDictionary($c.tasks, ($c) => {
                                return {
                                    "action holder": ($c["action holder"] === undefined
                                        ? "ikke"
                                        : $c["action holder"]),
                                    "cost": ($c.cost === undefined
                                        ? 0
                                        : $c.cost),
                                    "description": ($c.description === undefined
                                        ? ""
                                        : $c.description),
                                    "enddate": ($c.enddate === undefined
                                        ? ""
                                        : $c.enddate),
                                    "involved team members": ($c["involved team members"] === undefined
                                        ? createDictionary({})
                                        : mapDictionary($c["involved team members"], ($c) => {
                                            return {};
                                        })),
                                    "priority": (() => {
                                        return cc($c.priority, ($c) => {
                                            if ($c === undefined) {
                                                return ["Medium", {}];
                                            }
                                            switch ($c[0]) {
                                                case "High": {
                                                    return cc($c[1], ($c) => {
                                                        return ["High", ""];
                                                    });
                                                }
                                                case "Low": {
                                                    return cc($c[1], ($c) => {
                                                        return ["Low", ""];
                                                    });
                                                }
                                                case "Medium": {
                                                    return cc($c[1], ($c) => {
                                                        return ["Medium", ""];
                                                    });
                                                }
                                                default: return assertUnreachable($c[0]);
                                            }
                                        });
                                    })(),
                                    "startdate": ($c.startdate === undefined
                                        ? ""
                                        : $c.startdate),
                                };
                            })),
                    };
                    // "tasks": $c.priorityMEMAP{
                    // },
                })),
        };
    }
    return build_root_fi($c);
}
exports.build_fi = build_fi;
function createDeserializer_pi($i, $b, $f) {
    function root_NIC($ip) {
        function temp_NIC($ip) {
            const projects = {};
            return $b.context.expectVerboseGroup({
                "onEnd": ($c) => {
                    $ip.out({
                        "projects": createDictionary(projects),
                    });
                },
                "properties": {
                    "projects": {
                        "onExists": ($c) => {
                            return wrap_NIC({
                                "handler": $b.context.expectDictionary({
                                    "onProperty": ($c) => {
                                        const y_m = $c;
                                        return wrap_NIC({
                                            "handler": (($ip) => {
                                                function temp_NIC($ip) {
                                                    const tasks = {};
                                                    return $b.context.expectVerboseGroup({
                                                        "onEnd": ($c) => {
                                                            $ip.out({
                                                                "tasks": createDictionary(tasks),
                                                            });
                                                        },
                                                        "properties": {
                                                            "tasks": {
                                                                "onExists": ($c) => {
                                                                    return wrap_NIC({
                                                                        "handler": $b.context.expectDictionary({
                                                                            "onProperty": ($c) => {
                                                                                const y_m = $c;
                                                                                return wrap_NIC({
                                                                                    "handler": (($ip) => {
                                                                                        function temp_NIC($ip) {
                                                                                            let action_holder = "ikke";
                                                                                            let cost = "";
                                                                                            let description = "";
                                                                                            let enddate = "";
                                                                                            const involved_team_members = {};
                                                                                            let priority = ["Medium", {}];
                                                                                            let startdate = "";
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
                                                                                                    });
                                                                                                },
                                                                                                "properties": {
                                                                                                    "action holder": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    action_holder = $c.token.data.value;
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "cost": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    cost = $c.token.data.value;
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "description": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    description = $c.token.data.value;
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "enddate": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    enddate = $c.token.data.value;
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "involved team members": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return wrap_NIC({
                                                                                                                "handler": $b.context.expectDictionary({
                                                                                                                    "onProperty": ($c) => {
                                                                                                                        const y_m = $c;
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
                                                                                                                                        involved_team_members[y_m.token.data.value] = $c;
                                                                                                                                    },
                                                                                                                                });
                                                                                                                            })({}),
                                                                                                                        });
                                                                                                                    },
                                                                                                                }),
                                                                                                            });
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
                                                                                                                                                priority = ["High", $c];
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            })(),
                                                                                                                        });
                                                                                                                    },
                                                                                                                    "Low": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($c) => {
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
                                                                                                                                                priority = ["Low", $c];
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            })(),
                                                                                                                        });
                                                                                                                    },
                                                                                                                    "Medium": ($c) => {
                                                                                                                        return wrap_NIC({
                                                                                                                            "handler": (($c) => {
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
                                                                                                                                                priority = ["Medium", $c];
                                                                                                                                            },
                                                                                                                                        });
                                                                                                                                    })({}),
                                                                                                                                });
                                                                                                                            })(),
                                                                                                                        });
                                                                                                                    },
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                    "startdate": {
                                                                                                        "onExists": ($c) => {
                                                                                                            return $b.context.expectQuotedString({
                                                                                                                "callback": ($c) => {
                                                                                                                    startdate = $c.token.data.value;
                                                                                                                },
                                                                                                            });
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                        return temp_NIC({
                                                                                            "out": ($c) => {
                                                                                                tasks[y_m.token.data.value] = $c;
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
                                                        projects[y_m.token.data.value] = $c;
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
                $ip.callback($c);
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
