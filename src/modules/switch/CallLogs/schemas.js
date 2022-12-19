const CallLogsTableColumnSchema = [
  {
    type: "string",
    label: "Call ID",
    property_name: "call_uuid",
    filterable: true,
    sortable: true,
    visible: true,
  },
  {
    type: "string",
    label: "Start Time",
    property_name: "start_date",
    filterable: true,
    sortable: true,
    visible: true,
  },
  {
    type: "string",
    label: "Answered Time",
    property_name: "answer_date",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "string",
    label: "End Time",
    property_name: "end_date",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "string",
    label: "Caller Number",
    property_name: "source_number",
    filterable: true,
    sortable: false,
    visible: true,
  },
  {
    type: "string",
    label: "Destination Number",
    property_name: "dest_number",
    filterable: true,
    sortable: false,
    visible: true,
  },
  {
    type: "int",
    label: "Duration",
    property_name: "duration",
    filterable: false,
    sortable: true,
    visible: true,
  },
  {
    type: "int",
    label: "Bill Duration",
    property_name: "bill_duration",
    filterable: true,
    sortable: true,
    visible: true,
  },
  {
    type: "string",
    label: "Rate Type",
    property_name: "rate_type",
    filterable: true,
    sortable: true,
    visible: true,
  },
  {
    type: "string",
    label: "Cost",
    property_name: "cost_of_call",
    filterable: true,
    sortable: true,
    visible: true,
  },
];

const CallLogsTableSchema = {
  type: "CallLogItem",
  columns: CallLogsTableColumnSchema,
  operations: [],
  size: 11,
  primary_key: "",
  search: false,
};

const CallLogs = {
  type: "array",
  $ref: "#/components/schemas/CallLogsTableSchema",
};

module.exports = {
  CallLogsTableSchema,
  CallLogs,
};
