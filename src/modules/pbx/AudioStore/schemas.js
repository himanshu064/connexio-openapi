const AudioStoreFormSchema = {
    "title": "",
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
            "help": "Name can be a minimum of 1 and maximum of 40 alphanumeric characters.",
            "maxLength": "40",
            "minLength": "1",
            "propertyOrder": 1
        },
        "content": {
            "title": "Upload Audio File",
            "help": "Accepts audio types .mp3, .wav and .wave with a maximum size of 1MB.",
            "type": "string",
            "multiple": false,
            "attr": {
                "accept": "audio/mpeg,audio/wave,audio/x-wav,audio/ogg"
            },
            "accept": "audio/mpeg,audio/wave,audio/x-wav,audio/ogg",
            "max_size": 33554432,
            "widget": "file_widget",
            "propertyOrder": 2
        }
    },
    "required": [
        "name",
        "content"
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
const AudioStoreTableSchema = {
    "type": "Audio",
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
            "type": "sound",
            "label": "Sound",
            "property_name": "content_route",
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
    "size": 3,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const AudioStores = {
    type: "array",
    $ref: "#/components/schemas/AudioStoreTableSchema",
};
module.exports = {
    AudioStoreFormSchema,
    AudioStoreTableSchema,
    AudioStores,
};