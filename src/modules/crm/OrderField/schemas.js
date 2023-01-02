

const OrderFieldFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "rank": {
            "type": "number",
            "title": "Rank",
            "propertyOrder": 1
        },
        "visible": {
            "type": "boolean",
            "title": "Visible",
            "widget": "checkbox",
            "propertyOrder": 2
        },
        "field": {
            "type": "poly",
            "oneOf": [
                {
                    "$ref": "#text_dynamic_field"
                },
                {
                    "$ref": "#number_dynamic_field"
                },
                {
                    "$ref": "#choice_dynamic_field"
                }
            ],
            "title": "Field",
            "poly_type_name": "_type",
            "propertyOrder": 3
        }
    },
    "required": [
        "rank",
        "visible",
        "field"
    ],
    "definitions": {
        "text_dynamic_field": {
            "title": "Text field",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name",
                    "attr": {
                        "maxlength": "40",
                        "pattern": ".{1,}"
                    },
                    "pattern": ".{1,}",
                    "maxLength": "40",
                    "minLength": "1",
                    "propertyOrder": 1
                },
                "required": {
                    "type": "boolean",
                    "title": "Required",
                    "widget": "checkbox",
                    "propertyOrder": 2
                },
                "_type": {
                    "const": "text_dynamic_field"
                }
            },
            "required": [
                "name",
                "required"
            ],
            "id": "#text_dynamic_field"
        },
        "number_dynamic_field": {
            "title": "Number field",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name",
                    "attr": {
                        "maxlength": "40",
                        "pattern": ".{1,}"
                    },
                    "pattern": ".{1,}",
                    "maxLength": "40",
                    "minLength": "1",
                    "propertyOrder": 1
                },
                "required": {
                    "type": "boolean",
                    "title": "Required",
                    "widget": "checkbox",
                    "propertyOrder": 2
                },
                "_type": {
                    "const": "number_dynamic_field"
                }
            },
            "required": [
                "name",
                "required"
            ],
            "id": "#number_dynamic_field"
        },
        "choice_dynamic_field": {
            "title": "Choice field",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name",
                    "attr": {
                        "maxlength": "40",
                        "pattern": ".{1,}"
                    },
                    "pattern": ".{1,}",
                    "maxLength": "40",
                    "minLength": "1",
                    "propertyOrder": 1
                },
                "required": {
                    "type": "boolean",
                    "title": "Required",
                    "widget": "checkbox",
                    "propertyOrder": 2
                },
                "choices": {
                    "type": "array",
                    "title": "Choices",
                    "items": {
                        "title": "prototype",
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "hidden",
                                "title": "id",
                                "propertyOrder": 1
                            },
                            "order": {
                                "type": "integer",
                                "title": "Order",
                                "attr": {
                                    "help": "High values means high priority. You can sort the fields as you wish."
                                },
                                "propertyOrder": 2
                            },
                            "name": {
                                "type": "string",
                                "title": "Value",
                                "minLength": "1",
                                "propertyOrder": 3
                            },
                            "description": {
                                "type": "string",
                                "title": "Description",
                                "propertyOrder": 4
                            }
                        },
                        "required": [
                            "name"
                        ]
                    },
                    "attr": {
                        "custom_widget": {
                            "type": "array_collection"
                        }
                    },
                    "propertyOrder": 3
                },
                "_type": {
                    "const": "choice_dynamic_field"
                }
            },
            "required": [
                "name",
                "required",
                "choices"
            ],
            "id": "#choice_dynamic_field"
        }
    },
    "operations": [
        {
            "title": "Edit",
            "is_standard": true,
            "method": "PATCH",
            "key": "edit",
            "route_suffix": "",
            "visible": true
        },
        {
            "title": "Delete",
            "is_standard": false,
            "key": "delete",
            "visible": true
        }
    ]
}
const OrderFieldTableSchema = {
    "type": "OrderFieldPresence",
    "columns": [
        {
            "type": "int",
            "label": "ID",
            "property_name": "id",
            "filterable": true,
            "sortable": true,
            "visible": false,
            "order": 1
        },
        {
            "type": "Field|null",
            "label": "field",
            "property_name": "field.name",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "number",
            "label": "Rank",
            "property_name": "rank",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "bool",
            "label": "Visibility",
            "property_name": "visible",
            "filterable": false,
            "sortable": false,
            "visible": true
        }
    ],
    "operations": [
        {
            "title": "Create",
            "is_standard": true,
            "method": "POST",
            "key": "create",
            "route_suffix": "",
            "visible": false
        },
        {
            "title": "Bulk delete",
            "is_standard": false,
            "key": "bulk_delete",
            "visible": false
        },
        {
            "title": "Bulk edit",
            "is_standard": false,
            "key": "bulk_edit",
            "visible": false
        }
    ],
    "size": 4,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const OrderFields = {
    type: "array",
    $ref: "#/components/schemas/OrderFieldTableSchema",
};
module.exports = {
    OrderFieldFormSchema,
    OrderFieldTableSchema,
    OrderFields,
};