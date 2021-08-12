/* eslint
    "max-classes-per-file": off,
*/

import * as t from "./types"
import * as astncore from "astn"
import * as p from "pareto"
export * from "./types"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

function createDictionary<TokenAnnotation, NonTokenAnnotation>(
    _definition: t.Dictionary,
    collectionDefinition: t.Collection,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void,
): astncore.DictionaryHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        onClose: () => {
            //
        },
        onEntry: () => {
            return createNode(collectionDefinition.node, onError)
        },
    }
}

function createList<TokenAnnotation, NonTokenAnnotation>(
    _definition: t.List,
    collectionDefinition: t.Collection,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void,
): astncore.ListHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        onElement: () => {
            return createNode(collectionDefinition.node, onError)
        },
        onClose: () => {
            //
        },
    }
}

function createStateGroup<TokenAnnotation, NonTokenAnnotation>(
    definition: t.StateGroup,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void,
): astncore.TypedTaggedUnionHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        onUnexpectedOption: $ => {
            const state = definition.states.getUnsafe($.defaultOption)
            return createNode(state.node, onError)
        },
        onOption: $ => {
            const state = definition.states.getUnsafe($.name)
            return createNode(state.node, onError)
        },
        onEnd: () => {
            //
        },
        // onUnexpectedOption: () => {
        //     //
        // },
    }
}

function createProp<TokenAnnotation, NonTokenAnnotation>(
    name: string,
    nodedefinition: t.Node,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void,
): astncore.TypedValueHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        onDictionary: () => {
            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "collection") {
                throw new Error("unexpected")
            }
            const $ = prop.type[1]
            if ($.type[0] !== "dictionary") {
                throw new Error("unexpected")
            }
            return createDictionary($.type[1], $, onError)
        },
        onList: () => {
            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "collection") {
                throw new Error("unexpected")
            }
            const $ = prop.type[1]
            if ($.type[0] !== "list") {
                throw new Error("unexpected")
            }
            return createList($.type[1], $, onError)
        },
        onTaggedUnion: () => {

            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "state group") {
                throw new Error("unexpected")
            }
            const $ = prop.type[1]
            return createStateGroup($, onError)
        },
        onTypeReference: () => {
            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "component") {
                throw new Error("unexpected")
            }
            const $ = prop.type[1]
            return createNode($.type.get().node, onError)
        },
        onMultilineString: _$ => {
            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "value") {
                throw new Error("unexpected")
            }
        },
        onSimpleString: $ => {
            const prop = nodedefinition.properties.getUnsafe(name)
            if (prop.type[0] !== "value") {
                throw new Error("unexpected")
            }
            const $$ = prop.type[1]
            if ($.token !== null) {
                switch ($$.type[0]) {
                    case "boolean": {
                        if ($.token.data.wrapping[0] !== "none") {
                            onError(`expected a boolean, found a quoted string`, $.token.annotation, astncore.DiagnosticSeverity.error)
                        } else {
                            const val = $.value
                            if (val !== "true" && val !== "false") {
                                onError(`value '${val}' is not a boolean`, $.token.annotation, astncore.DiagnosticSeverity.error)
                            }
                        }
                        break
                    }
                    case "number": {
                        if ($.token.data.wrapping[0] !== "none") {
                            onError(`expected a number, found a wrapped string`, $.token.annotation, astncore.DiagnosticSeverity.error)
                        } else {
                            const val = $.value
                            //eslint-disable-next-line no-new-wrappers
                            if (isNaN(new Number(val).valueOf())) {
                                onError(`value '${val}' is not a number`, $.token.annotation, astncore.DiagnosticSeverity.error)
                            }
                        }
                        break
                    }
                    case "string": {
                        if ($.token.data.wrapping[0] === "none") {
                            onError(`expected a quoted string`, $.token.annotation, astncore.DiagnosticSeverity.error)
                        }
                        break
                    }
                    default:
                        assertUnreachable($$.type[0])
                }
            }
        },
        onGroup: () => {
            throw new Error("unexpected")
        },
    }
}

function createNode<TokenAnnotation, NonTokenAnnotation>(
    definition: t.Node,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void,
): astncore.TypedValueHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        onDictionary: () => {
            throw new Error("unexpected")
        },
        onList: () => {
            throw new Error("unexpected")
        },
        onTaggedUnion: () => {
            throw new Error("unexpected")
        },
        onTypeReference: () => {
            throw new Error("unexpected")
        },
        onMultilineString: _$ => {
            throw new Error("unexpected")
        },
        onSimpleString: _$ => {
            throw new Error("unexpected")
        },
        onGroup: () => {
            return {
                onUnexpectedProperty: () => {
                    //
                },
                onProperty: $ => {
                    return createProp($.key, definition, onError)
                },
                // onUnexpectedProperty: () => {
                //     //
                // },
                onClose: () => {
                    //
                },
            }
        },
    }
}

export function createRoot<TokenAnnotation, NonTokenAnnotation>(
    schema: t.Schema,
    onError: (message: string, annotation: TokenAnnotation, severity: astncore.DiagnosticSeverity) => void
): astncore.TypedTreeHandler<TokenAnnotation, NonTokenAnnotation> {
    return {
        root: createNode(schema["root type"].get().node, onError),
        onEnd: () => {
            return p.value(null)
        },
    }
}