import * as astncore from "astn"
import {
    createDictionary, MutableDictionary,
} from "./Dictionary"
import { Schema, Node, Property } from "./types"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("Unreachable")
}

function convertToGenericNode(
    node: Node, componentTypes: astncore.IReadonlyLookup<astncore.TypeDefinition>,
    keyProperty: null | Property,
    resolveRegistry: astncore.IResolveRegistry<null>,
): astncore.ValueDefinition {
    const properties = createDictionary<astncore.ValueDefinition>({})
    node.properties.forEach((prop, key) => {
        if (prop === keyProperty) {
            return
        }
        properties.add(key, {
            type: ((): astncore.ValueTypeDefinition => {
                switch (prop.type[0]) {
                    case "collection": {
                        const $ = prop.type[1]
                        switch ($.type[0]) {
                            case "dictionary": {
                                const $$ = $.type[1]
                                const targetNode = convertToGenericNode($.node, componentTypes, $$["key property"].get(), resolveRegistry)
                                const foo = $$["key property"].get()
                                if (foo.type[0] !== "value") {
                                    throw new Error("unexpected")
                                }
                                return ["dictionary", {
                                    "value": targetNode,
                                    "key": {
                                        "default value": foo.type[1]["default value"],
                                        "quoted": ((): boolean => {
                                            switch (foo.type[1].type[0]) {
                                                case "boolean":
                                                    return false
                                                case "number":
                                                    return false
                                                case "string":
                                                    return true

                                                default:
                                                    return assertUnreachable(foo.type[1].type[0])
                                            }
                                        })(),

                                    },
                                    // "key property": createReference($$["key property"].name, targetNode.properties, resolveRegistry, keys => {
                                    //     throw new Error(`UNEXPECTED: KEY Property not found: ${$$["key property"].name}, available keys: ${keys.join()}`);
                                    // }),
                                }]
                            }
                            case "list": {
                                const targetNode = convertToGenericNode($.node, componentTypes, null, resolveRegistry)
                                return ["list", {
                                    value: targetNode,
                                }]
                            }
                            default:
                                return assertUnreachable($.type[0])
                        }
                    }
                    case "component": {
                        const $ = prop.type[1]
                        return ["type reference", {
                            type: astncore.createReference(
                                "type",
                                {
                                    value: $.type.name,
                                    annotation: null,
                                },
                                "",
                                null,
                                componentTypes,
                                resolveRegistry.getRegistrater(),
                            ),
                        }]
                    }
                    case "state group": {
                        const $ = prop.type[1]
                        const tmp: { [key: string]: astncore.OptionDefinition } = {}
                        $.states.forEach((state, key) => {
                            tmp[key] = {
                                value: convertToGenericNode(state.node, componentTypes, null, resolveRegistry),
                            }
                        })
                        const states = createDictionary(tmp)
                        return ["tagged union", {
                            "options": states,
                            "default option": astncore.createReference(
                                "default option",
                                {
                                    value: $["default state"].name,
                                    annotation: null,
                                },
                                "yes",
                                null,
                                states,
                                resolveRegistry.getRegistrater(),
                            ),
                        }]
                    }
                    case "value": {
                        const $ = prop.type[1]
                        return ["simple string", {
                            "default value": $["default value"],
                            "quoted": ((): boolean => {
                                switch ($.type[0]) {
                                    case "boolean":
                                        return false
                                    case "number":
                                        return false
                                    case "string":
                                        return true

                                    default:
                                        return assertUnreachable($.type[0])
                                }
                            })(),
                        }]
                    }
                    default:
                        return assertUnreachable(prop.type[0])
                }
            })(),
        })
    })
    return {
        type: ["group", {
            properties: properties,
        }],
    }
}

export function convertToGenericSchema(schema: Schema): astncore.Schema {
    const resolveRegistry = astncore.createResolveRegistry<null>()
    const types: MutableDictionary<astncore.TypeDefinition> = createDictionary({})
    schema["component types"].forEach((ct, ctName) => {
        types.add(ctName, {
            value: convertToGenericNode(ct.node, types, null, resolveRegistry),
        })
    })
    const rootType = astncore.createReference(
        "root type",
        {
         value: schema["root type"].name,
         annotation: null,
        },
        "root",
        null,
        types,
        resolveRegistry.getRegistrater(),
    )
    const success = resolveRegistry.resolve(
        $ => {
            throw new Error(`unexpected error: ${$.message}`)
        }
    )
    if (!success) {
        throw new Error("UNEXPECTED")
    }
    return {
        "types": types,
        "root type": rootType,
    }
}