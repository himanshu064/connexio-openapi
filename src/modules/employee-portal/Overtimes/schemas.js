const {
  employee_enum_titles,
  employee_enum,
} = require("../../../constants/employees");

const OvertimeFormSchema = {
  title: "",
  type: "object",
  properties: {
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Choose Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Please select an employee",
      propertyOrder: 1,
    },
    hours: {
      type: "number",
      title: "Hours",
      propertyOrder: 2,
    },
    period_start: {
      type: "datetime",
      title: "Period Start Time",
      propertyOrder: 3,
    },
    period_end: {
      type: "datetime",
      title: "Period End Time",
      attr: {
        default_datetime: "2022-12-22T00:00:00+00:00",
      },
      propertyOrder: 4,
    },
  },
  required: ["employee", "hours", "period_start", "period_end"],
  operations: [
    {
      title: "Edit",
      is_standard: true,
      method: "PATCH",
      key: "edit",
      route_suffix: "",
      visible: true,
    },
    {
      title: "Delete",
      is_standard: false,
      key: "delete",
      visible: true,
    },
  ],
};

const OvertimeTableSchema = {
  type: "Overtime",
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
      type: "float",
      label: "Hours",
      property_name: "hours",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "DateTime",
      label: "Start Period",
      property_name: "period_start",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "DateTime",
      label: "End Period",
      property_name: "period_end",
      filterable: false,
      sortable: false,
      visible: true,
    },
  ],
  operations: [
    {
      title: "Create",
      is_standard: true,
      method: "POST",
      key: "create",
      route_suffix: "",
      visible: false,
    },
    {
      title: "Bulk delete",
      is_standard: false,
      key: "bulk_delete",
      visible: false,
    },
    {
      title: "Bulk edit",
      is_standard: false,
      key: "bulk_edit",
      visible: false,
    },
  ],
  size: 5,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Overtimes = {
  type: "array",
  $ref: "#/components/schemas/OvertimeTableSchema",
};

module.exports = {
  OvertimeFormSchema,
  OvertimeTableSchema,
  Overtimes,
};
