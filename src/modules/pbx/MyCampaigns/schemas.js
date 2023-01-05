const MyCampaignFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "help": "Please enter the name of campaign",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Description",
            "widget": "textarea",
            "help": "Please enter the description of campaign",
            "propertyOrder": 2
        },
        "rank": {
            "type": "integer",
            "title": "Rank",
            "help": "Please enter the rank of campaign",
            "propertyOrder": 3
        },
        "dial_timeout": {
            "type": "integer",
            "title": "Dial Timeout",
            "help": "Please enter the dial time out. (min: 20, max: 60)",
            "propertyOrder": 4
        },
        "dial_order": {
            "enum": [
                "RANDOM",
                "NEWEST_FIRST",
                "OLDEST_FIRST",
                "LEAST_CALLED_FIRST",
                "MOST_CALLED_FIRST",
                "OLDEST_CALLED_FIRST"
            ],
            "enum_titles": [
                "Random",
                "Newest First",
                "Oldest First",
                "Least Called First",
                "Most Called First",
                "Oldest Called First"
            ],
            "type": "string",
            "title": "Dial Order",
            "help": "Please choice the dial order of campaign",
            "propertyOrder": 5
        },
        "min_hopper_size": {
            "type": "integer",
            "title": "Min Hopper Size",
            "help": "Please enter min hopper size of campaign",
            "propertyOrder": 6
        }
    },
    "required": [
        "name",
        "description",
        "rank",
        "dial_timeout",
        "dial_order",
        "min_hopper_size"
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
const MyCampaignTableSchema = {
    "type": "UserCampaign",
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
            "type": "int",
            "label": "Rank",
            "property_name": "rank",
            "filterable": false,
            "sortable": true,
            "visible": true
        },
        {
            "type": "int",
            "label": "Dial Timeout",
            "property_name": "dial_timeout",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "int",
            "label": "Minimum Hopper Size",
            "property_name": "min_hopper_size",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Dial Order",
            "property_name": "dial_order",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "status",
            "label": "Status",
            "property_name": "api_status",
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
            "title": "Access control management",
            "is_standard": false,
            "icon": "lock",
            "redirect_url": "https://dev5bo.cxcl.io/roles/",
            "description": "Managing access to these objects",
            "key": "link",
            "visible": false
        }
    ],
    "size": 8,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const MyCampaigns = {
    type: "array",
    $ref: "#/components/schemas/MyCampaignTableSchema",
};
module.exports = {
    MyCampaignFormSchema,
    MyCampaignTableSchema,
    MyCampaigns,
};