/* eslint
    quote-props: "off",

*/
import * as astn from "astn"
import * as t from "./types"

/**
 * this function is only calls back if the value is not null
 * @param value value
 * @param callback
 */
function assertNotNull<T>(value: T | null): T {
    if (value !== null) {
        return value
    }
    const err = new Error("unexpected null value")
    throw err
}

type AnnotatedString<TokenAnnotation> = {
    value: string
    annotation: TokenAnnotation
}

function createExpectedValueHandler<TokenAnnotation, NonTokenAnnotation>(
    context: astn.IExpectContext<TokenAnnotation, NonTokenAnnotation>,
    raiseValidationError: (message: string, annotation: TokenAnnotation) => void,
    componentTypes: astn.IReadonlyLookup<t.ComponentType>,
    callback: (node: t.Node) => void,
    resolveRegistry: astn.IResolveRegistry<TokenAnnotation>,
): astn.ExpectedProperty<TokenAnnotation, NonTokenAnnotation> {

    function wrap(handler: astn.IValueHandler<TokenAnnotation, NonTokenAnnotation>): astn.IRequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return {
            exists: handler,
            missing: () => {
                console.error("MISSING VALUE")
            },
        }
    }

    return {
        onExists: () => {
            const properties = astn.createDictionaryBuilder<t.Property>()
            return wrap(context.expectVerboseGroup({
                properties: {
                    "properties": {
                        onExists: () => wrap(context.expectDictionary({
                            onProperty: (propertyData) => {
                                let targetPropertyType: t.PropertyType | null = null
                                return wrap(context.expectVerboseGroup({
                                    properties: {
                                        "type": {
                                            onExists: () => wrap(context.expectTaggedUnion({
                                                options: {
                                                    "collection": () => {
                                                        let targetCollectionType: t.CollectionType | null = null
                                                        let targetNode: t.Node | null = null

                                                        return wrap(context.expectVerboseGroup({
                                                            properties: {
                                                                "node": createExpectedValueHandler(
                                                                    context,
                                                                    raiseValidationError,
                                                                    componentTypes,
                                                                    (node) => {
                                                                        targetNode = node
                                                                    },
                                                                    resolveRegistry,
                                                                ),
                                                                "type": {
                                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                                        options: {
                                                                            "dictionary": () => {
                                                                                let targetKeyProperty: AnnotatedString<TokenAnnotation> | null = null
                                                                                return wrap(context.expectVerboseGroup({
                                                                                    properties: {
                                                                                        "key property": {
                                                                                            onExists: () => wrap(context.expectQuotedString({
                                                                                                warningOnly: true,
                                                                                                callback: ($) => {
                                                                                                    targetKeyProperty = {
                                                                                                        value: $.token.data.value,
                                                                                                        annotation: $.token.annotation,
                                                                                                    }
                                                                                                },
                                                                                            })),
                                                                                            onNotExists: ($) => {
                                                                                                targetKeyProperty = {
                                                                                                    value: "name",
                                                                                                    annotation: $.beginToken.annotation,
                                                                                                }
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    onEnd: ($) => {
                                                                                        const assertedTargetNode = assertNotNull(targetNode)

                                                                                        const assertedTargetKeyProperty = assertNotNull(targetKeyProperty)
                                                                                        targetCollectionType = ["dictionary", {
                                                                                            "key property": astn.createReference(
                                                                                                "key property",
                                                                                                assertedTargetKeyProperty,
                                                                                                "name",
                                                                                                $.annotation,
                                                                                                assertedTargetNode.properties.getLookup(),
                                                                                                resolveRegistry.getRegistrater(),
                                                                                            ),
                                                                                        }]

                                                                                    },
                                                                                }))
                                                                            },
                                                                            "list": () => {
                                                                                targetCollectionType = ["list", {
                                                                                }]
                                                                                return wrap(context.expectVerboseGroup({}))
                                                                            },
                                                                        },
                                                                    })),
                                                                    onNotExists: () => {
                                                                        targetCollectionType = ["list", {}]
                                                                    },
                                                                },
                                                            },
                                                            onEnd: () => {
                                                                const assertedTargetNode = assertNotNull(targetNode)
                                                                const asserted = assertNotNull(targetCollectionType)
                                                                targetPropertyType = ["collection", {
                                                                    "type": asserted,
                                                                    "node": assertedTargetNode,
                                                                }]
                                                            },
                                                        }))
                                                    },
                                                    "component": () => {
                                                        let targetComponentTypeName: AnnotatedString<TokenAnnotation> | null = null
                                                        return wrap(context.expectVerboseGroup({
                                                            properties: {
                                                                "type": {
                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                        warningOnly: true,
                                                                        callback: ($) => {
                                                                            targetComponentTypeName = {
                                                                                value: $.token.data.value,
                                                                                annotation: $.token.annotation,
                                                                            }
                                                                        },
                                                                    })),
                                                                    onNotExists: (data) => {
                                                                        targetComponentTypeName = {
                                                                            value: "",
                                                                            annotation: data.beginToken.annotation,
                                                                        }
                                                                    },
                                                                },
                                                            },
                                                            onEnd: ($) => {
                                                                const assertedTargetComponentTypeName = assertNotNull(targetComponentTypeName)
                                                                targetPropertyType = ["component", {
                                                                    "type": astn.createReference(
                                                                        "type",
                                                                        assertedTargetComponentTypeName,
                                                                        "",
                                                                        $.annotation,
                                                                        componentTypes,
                                                                        resolveRegistry.getRegistrater(),
                                                                    ),
                                                                }]
                                                            },
                                                        }))
                                                    },
                                                    "state group": () => {
                                                        const states = astn.createDictionaryBuilder<t.State>()
                                                        let targetDefaultState: null | AnnotatedString<TokenAnnotation> = null
                                                        return wrap(context.expectVerboseGroup({
                                                            properties: {
                                                                "states": {
                                                                    onExists: () => wrap(context.expectDictionary({
                                                                        onProperty: (stateData) => {
                                                                            let targetNode: t.Node | null = null
                                                                            return wrap(context.expectVerboseGroup({
                                                                                properties: {
                                                                                    "node": createExpectedValueHandler(
                                                                                        context,
                                                                                        raiseValidationError,
                                                                                        componentTypes,
                                                                                        (node) => {
                                                                                            targetNode = node
                                                                                        },
                                                                                        resolveRegistry,
                                                                                    ),
                                                                                },
                                                                                onEnd: () => {
                                                                                    const asserted = assertNotNull(targetNode)
                                                                                    states.add(stateData.token.data.value, {
                                                                                        node: asserted,
                                                                                    })
                                                                                },
                                                                            }))
                                                                        },
                                                                    })),
                                                                    onNotExists: () => {
                                                                        //nothing to do, states dictionary already initialized
                                                                    },
                                                                },
                                                                "default state": {
                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                        warningOnly: true,
                                                                        callback: ($) => {
                                                                            targetDefaultState = {
                                                                                value: $.token.data.value,
                                                                                annotation: $.token.annotation,
                                                                            }
                                                                        },
                                                                    })),
                                                                    onNotExists: (data) => {
                                                                        targetDefaultState = {
                                                                            value: "yes",
                                                                            annotation: data.beginToken.annotation,
                                                                        }
                                                                    },
                                                                },
                                                            },
                                                            onEnd: ($) => {
                                                                const assertedTargetDefaultState = assertNotNull(targetDefaultState)
                                                                targetPropertyType = ["state group", {
                                                                    "states": states.toDictionary(),
                                                                    "default state": astn.createReference(
                                                                        "default state",
                                                                        assertedTargetDefaultState,
                                                                        "yes",
                                                                        $.annotation,
                                                                        states.toDictionary().getLookup(),
                                                                        resolveRegistry.getRegistrater(),
                                                                    ),
                                                                }]

                                                            },
                                                        }))
                                                    },
                                                    "value": () => {
                                                        let targetValueType: t.ValueType | null = null
                                                        let defaultValue: string | null = null
                                                        return wrap(context.expectVerboseGroup({
                                                            properties: {
                                                                "type": {
                                                                    onExists: () => wrap(context.expectTaggedUnion({
                                                                        options: {
                                                                            "number": () => {
                                                                                targetValueType = ["number", {}]
                                                                                return wrap(context.expectVerboseGroup({}))
                                                                            },
                                                                            "text": () => {
                                                                                targetValueType = ["string", {}]
                                                                                return wrap(context.expectVerboseGroup({}))
                                                                            },
                                                                        },
                                                                    })),
                                                                    onNotExists: () => {
                                                                        targetValueType = ["string", {}]
                                                                    },
                                                                },
                                                                "default value": {
                                                                    onExists: () => wrap(context.expectQuotedString({
                                                                        warningOnly: true,
                                                                        callback: ($) => {
                                                                            defaultValue = $.token.data.value
                                                                        },
                                                                    })),
                                                                    onNotExists: () => {
                                                                        defaultValue = ""
                                                                    },
                                                                },
                                                            },
                                                            onEnd: () => {
                                                                const assertedTargetValueType = assertNotNull(targetValueType)
                                                                const assertedDefaultValue = assertNotNull(defaultValue)
                                                                targetPropertyType = ["value", {
                                                                    "default value": assertedDefaultValue,
                                                                    "type": assertedTargetValueType,
                                                                }]
                                                            },
                                                        }))
                                                    },
                                                },
                                            })),
                                            onNotExists: () => {
                                                targetPropertyType = ["value", {
                                                    "default value": "",
                                                    "type": ["string", {}],
                                                }]
                                            },
                                        },
                                    },
                                    onEnd: () => {
                                        const asserted = assertNotNull(targetPropertyType)
                                        properties.add(propertyData.token.data.value, {
                                            type: asserted,
                                        })
                                    },
                                }))
                            },
                        })),
                        onNotExists: () => {
                            //nothing to do, properties dictionary already created
                        },
                    },
                },
                onEnd: () => {
                    callback({ properties: properties.toDictionary() })
                },
            }))
        },
        onNotExists: () => {
            callback({
                properties: astn.createDictionaryBuilder<t.Property>().toDictionary(),
            })
        },
    }
}

export function createDeserializer<TokenAnnotation, NonTokenAnnotation>(
    onExpectError: (error: astn.ExpectError, annotation: TokenAnnotation) => void,
    onValidationError: (message: string, annotation: TokenAnnotation) => void,
    callback: (metaData: null | t.Schema) => void,
    onEnd: () => void,
): astn.ITreeHandler<TokenAnnotation, NonTokenAnnotation> {
    const componentTypes = astn.createDictionaryBuilder<t.ComponentType>()
    let rootName: AnnotatedString<TokenAnnotation> | null = null

    const context = astn.createExpectContext<TokenAnnotation, NonTokenAnnotation>(
        ($) => {
            if ($.severity === astn.DiagnosticSeverity.error) {
                onExpectError($.issue, $.annotation)
            }
        },
        () => astn.createDummyValueHandler(),
        () => astn.createDummyValueHandler(),
        astn.ExpectSeverity.warning,
        astn.OnDuplicateEntry.ignore,
    )
    const resolveRegistry = astn.createResolveRegistry<TokenAnnotation>()

    function wrap(handler: astn.IValueHandler<TokenAnnotation, NonTokenAnnotation>): astn.IRequiredValueHandler<TokenAnnotation, NonTokenAnnotation> {
        return {
            exists: handler,
            missing: () => {
                console.error("MISSING VALUE")
            },
        }
    }
    return {
        onEnd: onEnd,
        root: {
            exists: context.expectVerboseGroup({
                properties: {
                    "component types": {
                        onExists: (_propertyData) => wrap(context.expectDictionary({
                            onBegin: () => {
                                //
                            },
                            onProperty: (propertyData) => {
                                let targetNode: t.Node | null = null
                                return wrap(context.expectVerboseGroup({
                                    properties: {
                                        "node": createExpectedValueHandler(
                                            context,
                                            onValidationError,
                                            componentTypes.toDictionary().getLookup(),
                                            (node) => {
                                                targetNode = node
                                            },
                                            resolveRegistry,
                                        ),
                                    },
                                    onEnd: () => {
                                        const asserted = assertNotNull(targetNode)
                                        componentTypes.add(propertyData.token.data.value, {
                                            node: asserted,
                                        })
                                    },
                                }))
                            },
                        })),
                        onNotExists: (): void => {
                            //nothing to do, component types already initialized
                        },
                    },
                    "root type": {
                        onExists: (_propertyData) => wrap(context.expectQuotedString({
                            warningOnly: true,
                            callback: ($) => {
                                rootName = {
                                    value: $.token.data.value,
                                    annotation: $.token.annotation,
                                }
                            },
                        })),
                        onNotExists: (data) => {
                            rootName = {
                                value: "root",
                                annotation: data.beginToken.annotation,
                            }
                        },
                    },
                },
                onEnd: ($) => {
                    let schema: t.Schema | null = null
                    const assertedRootName = assertNotNull(rootName)
                    schema = {
                        "component types": componentTypes.toDictionary(),
                        "root type": astn.createReference(
                            "root type",
                            assertedRootName,
                            "root",
                            $.annotation,
                            componentTypes.toDictionary().getLookup(),
                            resolveRegistry.getRegistrater(),
                        ),
                    }
                    const success = resolveRegistry.resolve(
                        ($) => onValidationError($.message, $.annotation)
                    )
                    if (success) {
                        callback(schema)
                    } else {
                        callback(null)
                    }
                },
            }),
            missing: () => {
                console.error("MISSING VALUE")
            },
        },
    }
}
