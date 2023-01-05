
const CallLogTableSchema = {
    "type": "CallLogItem",
    "columns": [
        {
            "type": "string",
            "label": "Call ID",
            "property_name": "call_uuid",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTimeInterface",
            "label": "Start Time",
            "property_name": "start_date",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTimeInterface",
            "label": "Answered Time",
            "property_name": "answer_date",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "DateTimeInterface",
            "label": "End Time",
            "property_name": "end_date",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Caller Number",
            "property_name": "source_number",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Destination Number",
            "property_name": "dest_number",
            "filterable": true,
            "sortable": false,
            "visible": true
        },
        {
            "type": "int",
            "label": "Duration",
            "property_name": "duration",
            "filterable": false,
            "sortable": true,
            "visible": true
        }
    ],
    "operations": [],
    "size": 8,
    "primary_key": "",
    "search": false
}
const CallLogs = {
    type: "array",
    $ref: "#/components/schemas/CallLogTableSchema",
};
module.exports = {
    CallLogTableSchema,
    CallLogs,
};