const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const ContactCampaignFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
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
            "propertyOrder": 1
        },
        "name": {
            "type": "string",
            "title": "Rule Name",
            "minLength": "1",
            "propertyOrder": 2
        },
        "rule_elements": {
            "type": "array",
            "title": "Rule Elements",
            "items": {
                "title": "prototype",
                "type": "object",
                "properties": {
                    "node_id": {
                        "type": "number",
                        "title": "Node ID",
                        "propertyOrder": 1
                    },
                    "child_node_ids": {
                        "type": "array",
                        "title": "Child Node IDs",
                        "items": {
                            "type": "integer",
                            "title": "prototype"
                        },
                        "propertyOrder": 2
                    },
                    "discriminator": {
                        "enum": [
                            "AND",
                            "OR",
                            "CONTACT_PROPERTY_COMPARISON",
                            "CONTACT_FIELD_COMPARISON",
                            "CONTACT_HAS_DEALS",
                            "CONTACT_IN_CAMPAIGN"
                        ],
                        "enum_titles": [
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5"
                        ],
                        "type": "string",
                        "title": "Discriminator",
                        "propertyOrder": 3
                    }
                },
                "required": [
                    "node_id",
                    "discriminator"
                ]
            },
            "propertyOrder": 3
        }
    },
    "required": [
        "campaign",
        "name",
        "rule_elements"
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
        }
    ]
}
const ContactCampaignTableSchema = {
    "type": "ContactCampaignMappingRule",
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
    "size": 2,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const ContactCampaigns = {
    type: "array",
    $ref: "#/components/schemas/ContactCampaignTableSchema",
};
module.exports = {
    ContactCampaignFormSchema,
    ContactCampaignTableSchema,
    ContactCampaigns,
};