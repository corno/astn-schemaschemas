"use strict";
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
exports.createBuilder = exports.createDeserializer = void 0;
/*eslint
    "@typescript-eslint/no-unused-vars": 0,
    "camelcase": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "quote-props": 0,
    "max-len": 0
*/
const pr = __importStar(require("pareto-runtime"));
function assertUnreachable(_x) {
    throw new Error("unreachable");
}
function createDictionary(raw) {
    return {
        forEach: (callback) => { pr.Objectkeys(raw).sort().forEach((key) => { callback(raw[key], key); }); },
    };
}
function createDeserializer(context, raiseValidationError, callback) {
    function wrap(handler) {
        return {
            exists: handler,
            missing: () => {
                //
            },
        };
    }
    function _generateHandler_root(callback) {
        return ((callback) => {
            const _projects_v = {};
            return context.expectVerboseGroup({
                properties: {
                    "projects": {
                        onNotExists: () => { },
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                return wrap(((callback) => {
                                    const _tasks_v = {};
                                    return context.expectVerboseGroup({
                                        properties: {
                                            "tasks": {
                                                onNotExists: () => { },
                                                onExists: () => wrap(context.expectDictionary({
                                                    onProperty: (propertyData) => {
                                                        return wrap(((callback) => {
                                                            let _action_holder_v = null;
                                                            let _cost_v = null;
                                                            let _description_v = null;
                                                            let _enddate_v = null;
                                                            const _involved_team_members_v = {};
                                                            let _priority_v = null;
                                                            let _startdate_v = null;
                                                            return context.expectVerboseGroup({
                                                                properties: {
                                                                    "action holder": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                            warningOnly: true,
                                                                            callback: ($) => {
                                                                                _action_holder_v = $.token.data.value;
                                                                            },
                                                                        })),
                                                                    },
                                                                    "cost": {
                                                                        onNotExists: () => { },
                                                                    },
                                                                    "description": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                            warningOnly: true,
                                                                            callback: ($) => {
                                                                                _description_v = $.token.data.value;
                                                                            },
                                                                        })),
                                                                    },
                                                                    "enddate": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                            warningOnly: true,
                                                                            callback: ($) => {
                                                                                _enddate_v = $.token.data.value;
                                                                            },
                                                                        })),
                                                                    },
                                                                    "involved team members": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectDictionary({
                                                                            onProperty: (propertyData) => {
                                                                                return wrap(((callback) => {
                                                                                    return context.expectVerboseGroup({
                                                                                        properties: {},
                                                                                        onEnd: () => {
                                                                                            callback({});
                                                                                        },
                                                                                    });
                                                                                })((node) => _involved_team_members_v[propertyData.token.data.value] = node));
                                                                            },
                                                                        })),
                                                                    },
                                                                    "priority": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectTaggedUnion({
                                                                            options: {
                                                                                "High": () => {
                                                                                    return wrap(((callback) => {
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {},
                                                                                            onEnd: () => {
                                                                                                callback({});
                                                                                            },
                                                                                        });
                                                                                    })((node) => _priority_v = ["High", node]));
                                                                                },
                                                                                "Low": () => {
                                                                                    return wrap(((callback) => {
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {},
                                                                                            onEnd: () => {
                                                                                                callback({});
                                                                                            },
                                                                                        });
                                                                                    })((node) => _priority_v = ["Low", node]));
                                                                                },
                                                                                "Medium": () => {
                                                                                    return wrap(((callback) => {
                                                                                        return context.expectVerboseGroup({
                                                                                            properties: {},
                                                                                            onEnd: () => {
                                                                                                callback({});
                                                                                            },
                                                                                        });
                                                                                    })((node) => _priority_v = ["Medium", node]));
                                                                                },
                                                                            },
                                                                        })),
                                                                    },
                                                                    "startdate": {
                                                                        onNotExists: () => { },
                                                                        onExists: () => wrap(context.expectQuotedString({
                                                                            warningOnly: true,
                                                                            callback: ($) => {
                                                                                _startdate_v = $.token.data.value;
                                                                            },
                                                                        })),
                                                                    },
                                                                },
                                                                onEnd: () => {
                                                                    if (_action_holder_v === null) {
                                                                        _action_holder_v = "";
                                                                    }
                                                                    if (_cost_v === null) {
                                                                        _cost_v = "";
                                                                    }
                                                                    if (_description_v === null) {
                                                                        _description_v = "";
                                                                    }
                                                                    if (_enddate_v === null) {
                                                                        _enddate_v = "";
                                                                    }
                                                                    if (_priority_v === null) {
                                                                        _priority_v = ["Medium", {}];
                                                                    }
                                                                    if (_startdate_v === null) {
                                                                        _startdate_v = "";
                                                                    }
                                                                    callback({
                                                                        "action holder": _action_holder_v,
                                                                        "cost": _cost_v,
                                                                        "description": _description_v,
                                                                        "enddate": _enddate_v,
                                                                        "involved team members": createDictionary(_involved_team_members_v),
                                                                        "priority": _priority_v,
                                                                        "startdate": _startdate_v,
                                                                    });
                                                                },
                                                            });
                                                        })((node) => _tasks_v[propertyData.token.data.value] = node));
                                                    },
                                                })),
                                            },
                                        },
                                        onEnd: () => {
                                            callback({
                                                "tasks": createDictionary(_tasks_v),
                                            });
                                        },
                                    });
                                })((node) => _projects_v[propertyData.token.data.value] = node));
                            },
                        })),
                    },
                },
                onEnd: () => {
                    callback({
                        "projects": createDictionary(_projects_v),
                    });
                },
            });
        })((node) => callback(node));
    }
    return wrap(_generateHandler_root(callback));
}
exports.createDeserializer = createDeserializer;
function createBuilder(intermediate) {
    function _generateBuilder_root(intermediate) {
        return {
            "projects": intermediate["projects"] === undefined ? createDictionary({}) : (() => {
                {
                    const source = intermediate["projects"];
                    const target = {};
                    pr.Objectkeys(source).forEach((key) => {
                        const entry = source[key];
                        target[key] = {
                            "tasks": entry["tasks"] === undefined ? createDictionary({}) : (() => {
                                {
                                    const source = entry["tasks"];
                                    const target = {};
                                    pr.Objectkeys(source).forEach((key) => {
                                        const entry = source[key];
                                        target[key] = {
                                            "action holder": entry["action holder"] === undefined ? "" : entry["action holder"],
                                            "cost": entry["cost"] === undefined ? "" : entry["cost"],
                                            "description": entry["description"] === undefined ? "" : entry["description"],
                                            "enddate": entry["enddate"] === undefined ? "" : entry["enddate"],
                                            "involved team members": entry["involved team members"] === undefined ? createDictionary({}) : (() => {
                                                {
                                                    const source = entry["involved team members"];
                                                    const target = {};
                                                    pr.Objectkeys(source).forEach((key) => {
                                                        const entry = source[key];
                                                        target[key] = {};
                                                    });
                                                    return createDictionary(target);
                                                }
                                            })(),
                                            "priority": entry["priority"] === undefined ? ["Medium", {}] : (() => {
                                                switch (entry["priority"][0]) {
                                                    case "High":
                                                        return ["High", {}];
                                                    case "Low":
                                                        return ["Low", {}];
                                                    case "Medium":
                                                        return ["Medium", {}];
                                                    default: return assertUnreachable(entry["priority"][0]);
                                                }
                                            })(),
                                            "startdate": entry["startdate"] === undefined ? "" : entry["startdate"],
                                        };
                                    });
                                    return createDictionary(target);
                                }
                            })(),
                        };
                    });
                    return createDictionary(target);
                }
            })(),
        };
    }
    function _default_generateBuilder_root() {
        return {
            "projects": createDictionary({}),
        };
    }
    return _generateBuilder_root(intermediate);
}
exports.createBuilder = createBuilder;
