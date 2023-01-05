
const ListDialerQueueFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name of the activity",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Description of the activity",
            "propertyOrder": 2
        },
        "purpose": {
            "enum": [],
            "enum_titles": [],
            "type": "string",
            "title": "Purpose",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 3
        },
        "channel": {
            "enum": [
                "1"
            ],
            "enum_titles": [
                "asdf"
            ],
            "type": "string",
            "title": "Channel",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 4
        },
        "result": {
            "type": "string",
            "title": "Result of activity",
            "minLength": "1",
            "propertyOrder": 5
        },
        "started_at": {
            "type": "datetime",
            "title": "Started at",
            "propertyOrder": 6
        },
        "finished_at": {
            "type": "datetime",
            "title": "Finished at",
            "propertyOrder": 7
        },
        "scheduled_start_at": {
            "type": "datetime",
            "title": "Scheduled Start at",
            "propertyOrder": 8
        },
        "scheduled_finish_at": {
            "type": "datetime",
            "title": "Scheduled Finish at",
            "propertyOrder": 9
        }
    },
    "required": [
        "name",
        "purpose"
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
            "redirect_url": "relations/activities/:id",
            "description": "See other objects in the system that have relations to this one.",
            "key": "link",
            "visible": false
        }
    ]
}
const ListDialerQueueTableSchema = {
    "type": "Activity",
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
            "label": "Result",
            "property_name": "result",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTime",
            "label": "Started at",
            "property_name": "started_at",
            "filterable": false,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTime",
            "label": "Finished at",
            "property_name": "finished_at",
            "filterable": false,
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
            "title": "Export",
            "is_standard": false,
            "key": "export",
            "visible": false
        }
    ],
    "size": 5,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": true
}
const ListDialerQueues = {
    type: "array",
    $ref: "#/components/schemas/ListDialerQueueTableSchema",
};
module.exports = {
    ListDialerQueueFormSchema,
    ListDialerQueueTableSchema,
    ListDialerQueues,
};