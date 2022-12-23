const {
  vacation_type_enum_title,
  vacation_type_enum,
} = require("../../../constants/vacation");

const VacationRequestFormSchema = {
  title: "",
  type: "object",
  properties: {
    start: {
      type: "datetime",
      title: "Vacation Start Time",
      help: "Please select vacation start time",
      propertyOrder: 1,
    },
    finish: {
      type: "datetime",
      title: "Vacation Finish Time",
      help: "Please select vacation finish time",
      propertyOrder: 2,
    },
    vacation_type: {
      enum: vacation_type_enum,
      enum_titles: vacation_type_enum_title,
      type: "string",
      title: "Vacation Type",
      attr: {
        resource_path: "vacation_types",
        create_button_text: "Create a new type",
        "data-plugin-select2": true,
      },
      propertyOrder: 3,
    },
    note: {
      type: "string",
      title: "Note",
      widget: "textarea",
      propertyOrder: 4,
    },
  },
  required: ["start", "finish", "vacation_type"],
  operations: [
    {
      title: "Approve",
      is_standard: true,
      method: "POST",
      key: "approve_vacation_requests",
      route_suffix: "approve",
      visible: false,
    },
    {
      title: "Deny",
      is_standard: true,
      method: "POST",
      key: "denied_vacation_requests",
      route_suffix: "denied",
      visible: false,
    },
  ],
};

const VacationRequestTableSchema = {
  type: "VacationRequest",
  columns: [
    {
      type: "int",
      label: "ID",
      property_name: "id",
      filterable: true,
      sortable: true,
      visible: false,
      order: 1,
    },
    {
      type: "string",
      label: "Employee Name",
      property_name: "employee.user.username",
      filterable: true,
      sortable: true,
      visible: true,
      order: 2,
    },
    {
      type: "DateTime",
      label: "Start",
      property_name: "start",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "DateTime",
      label: "Finish",
      property_name: "finish",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "VacationType",
      label: "Vacation Type",
      property_name: "vacation_type.name",
      filterable: false,
      sortable: false,
      visible: true,
    },
  ],
  operations: [],
  size: 5,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const VacationRequestApproveOrDenySchema = {
  title: "",
  type: "object",
  properties: {
    confirmation_message: {
      type: "string",
      title: "Vacation Start Time",
    },
  },
};

const VacationRequests = {
  type: "array",
  $ref: "#/components/schemas/VacationRequestTableSchema",
};

module.exports = {
  VacationRequestFormSchema,
  VacationRequestTableSchema,
  VacationRequests,
  VacationRequestApproveOrDenySchema,
};
