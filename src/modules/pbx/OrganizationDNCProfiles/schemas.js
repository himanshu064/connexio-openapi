const OrganizationDNCProfileFormSchema ={
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "minLength": "1",
            "propertyOrder": 1
        },
        "pass_unknown": {
            "type": "boolean",
            "title": "Pass Unknown",
            "widget": "checkbox",
            "propertyOrder": 2
        },
        "provider": {
            "enum": [
                "local"
            ],
            "enum_titles": [
                "Local"
            ],
            "type": "string",
            "title": "Dnc Profile Type",
            "propertyOrder": 3
        },
        "options": {
            "type": "string",
            "title": "Options",
            "attr": {
                "custom_widget": {
                    "type": "keyvalue"
                }
            },
            "propertyOrder": 4
        }
    },
    "required": [
        "name",
        "pass_unknown",
        "provider",
        "options"
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
const OrganizationDNCProfileTableSchema = {
    "type": "OrganizationDncProfile",
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
            "type": "string",
            "label": "Type",
            "property_name": "provider",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "bool",
            "label": "Pass Unknown",
            "property_name": "pass_unknown",
            "filterable": true,
            "sortable": true,
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
    "size": 4,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const OrganizationDNCProfiles = {
    type: "array",
    $ref: "#/components/schemas/OrganizationDNCProfileTableSchema",
};
module.exports = {
    OrganizationDNCProfileFormSchema,
    OrganizationDNCProfileTableSchema,
    OrganizationDNCProfiles,
};