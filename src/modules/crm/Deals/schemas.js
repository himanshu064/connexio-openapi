const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const DealFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "deal_type": {
            "enum": [
                "1",
                "2"
            ],
            "enum_titles": [
                "Sales",
                "ffff"
            ],
            "type": "string",
            "title": "Deal Type",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 1
        },
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
            "propertyOrder": 2
        },
        "contact": {
            "enum": [],
            "enum_titles": [],
            "type": "string",
            "title": "Contact",
            "attr": {
                "data-plugin-select2": true,
                "options_loading_type": "lazy_search",
                "query_param": "{query}",
                "query_url": "/api/contacts/search?search={query}"
            },
            "propertyOrder": 3
        },
        "campaign": {
            "enum": [
                "7",
                "8",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20"
            ],
            "enum_titles": [
                "John's campaign",
                "camp",
                "c1",
                "c2",
                "c3",
                "c4",
                "c5",
                "c6",
                "c7",
                "c8",
                "asdf123",
                "asdasd",
                "adasasdasd"
            ],
            "type": "string",
            "title": "Campaign",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 4
        },
        "stage": {
            "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "enum_titles": [
                "Initial Contact / Interested",
                "Demo Scheduled",
                "Demo Complete",
                "Proposal Sent",
                "Sale"
            ],
            "type": "string",
            "title": "Deal Stage",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 5
        },
        "amount": {
            "type": "number",
            "title": "Amount",
            "propertyOrder": 6
        },
        "currency": {
            "enum": [
                "USD",
                "EUR"
            ],
            "enum_titles": [
                "USD",
                "EUR"
            ],
            "type": "string",
            "title": "Currency",
            "propertyOrder": 7
        },
        "closed_at": {
            "type": "datetime",
            "title": "Closed Date",
            "propertyOrder": 8
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
            "propertyOrder": 9
        }
    },
    "required": [
        "deal_type",
        "name",
        "contact",
        "campaign",
        "amount",
        "currency"
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
            "redirect_url": "relations/deals/:id",
            "description": "See other objects in the system that have relations to this one.",
            "key": "link",
            "visible": false
        }
    ]
}
const DealTableSchema = {
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
const Deals = {
    type: "array",
    $ref: "#/components/schemas/DealTableSchema",
};
module.exports = {
    DealFormSchema,
    DealTableSchema,
    Deals,
};