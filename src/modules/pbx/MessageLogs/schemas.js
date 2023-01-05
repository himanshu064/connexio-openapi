
const MessageLogTableSchema = {
    "type": "MessageLogItem",
    "columns": [
        {
            "type": "string",
            "label": "Message UUID",
            "property_name": "uuid",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Sender",
            "property_name": "from",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Receiver",
            "property_name": "to",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Direction",
            "property_name": "direction",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "bool",
            "label": "is MMS",
            "property_name": "is_m_m_s",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Status",
            "property_name": "status",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Failure Message",
            "property_name": "failure_message",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "DateTime",
            "label": "Relay Time",
            "property_name": "relay_time",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTime",
            "label": "Finalize Time",
            "property_name": "finalize_time",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "int",
            "label": "Parts",
            "property_name": "parts",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Message",
            "property_name": "message",
            "filterable": false,
            "sortable": false,
            "visible": false
        }
    ],
    "operations": [],
    "size": 11,
    "primary_key": "",
    "search": false
}
const MessageLogs = {
    type: "array",
    $ref: "#/components/schemas/MessageLogTableSchema",
};
module.exports = {
    MessageLogTableSchema,
    MessageLogs,
};