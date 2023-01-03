

const VoicemailMessageFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "opened": {
            "type": "boolean",
            "title": "Mark as Opened",
            "widget": "checkbox",
            "help": "Toggle to mark as open/unopened.",
            "propertyOrder": 1
        }
    },
    "required": [
        "opened"
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
const VoicemailMessageTableSchema = {
    "type": "VoicemailMessage",
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
            "type": "Voicemail",
            "label": "Box",
            "property_name": "voicemail.code",
            "filterable": false,
            "sortable": true,
            "visible": true,
            "order": 2
        },
        {
            "type": "string",
            "label": "Caller",
            "property_name": "cid_name",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 3
        },
        {
            "type": "string",
            "label": "Caller Number",
            "property_name": "cid_number",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 4
        },
        {
            "type": "sound",
            "label": "Message",
            "property_name": "content_route",
            "filterable": false,
            "sortable": false,
            "visible": true,
            "order": 5
        },
        {
            "type": "int",
            "label": "Duration",
            "property_name": "duration",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 6
        }
    ],
    "operations": [
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
    "size": 6,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const VoicemailMessages = {
    type: "array",
    $ref: "#/components/schemas/VoicemailMessageTableSchema",
};
module.exports = {
    VoicemailMessageFormSchema,
    VoicemailMessageTableSchema,
    VoicemailMessages,
};