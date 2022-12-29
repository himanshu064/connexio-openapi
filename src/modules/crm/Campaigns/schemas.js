const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const CampaignFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name of the campaign",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Description",
            "propertyOrder": 2
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
            "propertyOrder": 3
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
            "redirect_url": "relations/campaigns/:id",
            "description": "See other objects in the system that have relations to this one.",
            "key": "link",
            "visible": false
        }
    ]
}
const CampaignTableSchema = {
    "type": "Campaign",
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
        },
        {
            "title": "Export",
            "is_standard": false,
            "key": "export",
            "visible": false
        }
    ],
    "size": 2,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const Campaigns = {
    type: "array",
    $ref: "#/components/schemas/CampaignTableSchema",
};
module.exports = {
    CampaignFormSchema,
    CampaignTableSchema,
    Campaigns,
};