const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const OrderFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Order Name",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Order Description",
            "propertyOrder": 2
        },
        "carrier": {
            "enum": [
                "1"
            ],
            "enum_titles": [
                "asdf1"
            ],
            "type": "string",
            "title": "Carrier",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 3
        },
        "customer": {
            "enum": [
                "18",
                "19",
                "20",
                "21",
                "22"
            ],
            "enum_titles": [
                "Tom Smith",
                "Ryan Kress",
                "Larry Coleman",
                "Harry Tilman",
                "Jason Lemone"
            ],
            "type": "string",
            "title": "Customer",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 4
        },
        "tag_names": {
            "items": {
                "type": "string",
                "enum": [],
                "enum_titles": []
            },
            "minItems": 0,
            "uniqueItems": true,
            "type": "array",
            "title": "Tag Names",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 5
        }
    },
    "required": [
        "name"
    ],
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
        },
        {
            "title": "See related objects",
            "is_standard": false,
            "redirect_url": "relations/orders/:id",
            "description": "See other objects in the system that have relations to this one.",
            "key": "link",
            "visible": false
        }
    ]
}
const OrderTableSchema = {
    "type": "Deal",
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
            "type": "string",
            "label": "Name",
            "property_name": "name",
            "filterable": false,
            "sortable": false,
            "visible": true,
            "order": 2
        },
        {
            "type": "float",
            "label": "amount",
            "property_name": "amount",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "string",
            "label": "currency",
            "property_name": "currency",
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
        },
        {
            "title": "Export",
            "is_standard": false,
            "key": "export",
            "visible": false
        }
    ],
    "size": 4,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": true
}
const Orders = {
    type: "array",
    $ref: "#/components/schemas/OrderTableSchema",
};
module.exports = {
    OrderFormSchema,
    OrderTableSchema,
    Orders,
};