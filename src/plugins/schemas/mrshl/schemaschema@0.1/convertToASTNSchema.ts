import * as astn from "astn"
import { Schema, Node, Property } from "./types"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("Unreachable")
}


export function convertToASTNSchema(schema: Schema): astn.Schema {
    const resolveRegistry = astn.createResolveRegistry<null>()

    function convertToASTNSchemaValue(
        node: Node, componentTypes: astn.IReadonlyLookup<astn.TypeDefinition>,
        keyProperty: null | Property,
        resolveRegistry: astn.IResolveRegistry<null>,
    ): astn.ValueDefinition {
        const properties = astn.createDictionaryBuilder<astn.PropertyDefinition>()
        node.properties.forEach((prop, key) => {
            if (prop === keyProperty) {
                return
            }
            properties.add(key, {
                value: {
                    type: ((): astn.ValueTypeDefinition => {
                        switch (prop.type[0]) {
                            case "collection": {
                                const $ = prop.type[1]
                                switch ($.type[0]) {
                                    case "dictionary": {
                                        const $$ = $.type[1]
                                        const targetNode = convertToASTNSchemaValue($.node, componentTypes, $$["key property"].get(), resolveRegistry)
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
                                        const targetNode = convertToASTNSchemaValue($.node, componentTypes, null, resolveRegistry)
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
                                    type: astn.createReference(
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
                                const states = astn.createDictionaryBuilder<astn.OptionDefinition>()

                                $.states.forEach((state, key) => {
                                    states.add(key, {
                                        value: convertToASTNSchemaValue(state.node, componentTypes, null, resolveRegistry),
                                    })
                                })
                                return ["tagged union", {
                                    "options": states.toDictionary(),
                                    "default option": astn.createReference(
                                        "default option",
                                        {
                                            value: $["default state"].name,
                                            annotation: null,
                                        },
                                        "yes",
                                        null,
                                        states.toDictionary().getLookup(),
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

                },
            })
        })
        return {
            type: ["group", {
                properties: properties.toDictionary(),
            }],
        }
    }

    const types = astn.createDictionaryBuilder<astn.TypeDefinition>()
    schema["component types"].forEach((ct, ctName) => {
        types.add(ctName, {
            value: convertToASTNSchemaValue(ct.node, types.toDictionary().getLookup(), null, resolveRegistry),
        })
    })
    const rootType = astn.createReference(
        "root type",
        {
            value: schema["root type"].name,
            annotation: null,
        },
        "root",
        null,
        types.toDictionary().getLookup(),
        resolveRegistry.getRegistrater(),
    )
    const success = resolveRegistry.resolve(
        ($) => {
            throw new Error(`unexpected error: ${$.message}`)
        }
    )
    if (!success) {
        throw new Error("UNEXPECTED")
    }
    return {
        "types": types.toDictionary(),
        "root type": rootType,
    }
}