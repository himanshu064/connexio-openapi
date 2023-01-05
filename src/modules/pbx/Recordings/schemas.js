
const RecordingTableSchema = {
    "type": "Recording",
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
            "label": "Uuid",
            "property_name": "uuid",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 1
        },
        {
            "type": "string",
            "label": "Call Uuid",
            "property_name": "call_uuid",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 2
        },
        {
            "type": "string",
            "label": "Source",
            "property_name": "source",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 3
        },
        {
            "type": "string",
            "label": "Destination",
            "property_name": "destination",
            "filterable": true,
            "sortable": false,
            "visible": true,
            "order": 4
        },
        {
            "type": "int",
            "label": "Duration",
            "property_name": "duration",
            "filterable": true,
            "sortable": true,
            "visible": true,
            "order": 5
        },
        {
            "type": "sound",
            "label": "Play",
            "property_name": "content_route",
            "filterable": false,
            "sortable": false,
            "visible": true,
            "order": 6
        },
        {
            "type": "DateTime",
            "label": "Created At",
            "property_name": "created_at",
            "filterable": false,
            "sortable": false,
            "visible": true,
            "order": 7
        }
    ],
    "operations": [],
    "size": 8,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const Recordings = {
    type: "array",
    $ref: "#/components/schemas/RecordingTableSchema",
};
module.exports = {
    RecordingTableSchema,
    Recordings,
};