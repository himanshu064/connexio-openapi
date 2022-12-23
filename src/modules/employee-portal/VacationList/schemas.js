const {
  employee_enum,
  employee_enum_titles,
} = require("../../../constants/employees");
const {
  vacation_type_enum_title,
  vacation_type_enum,
} = require("../../../constants/vacation");

const VacationListFormSchema = {
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
      help: "Select an vacation type",
      propertyOrder: 3,
    },
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Select an employee for vacation",
      propertyOrder: 4,
    },
  },
  required: ["start", "finish", "vacation_type", "employee"],
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

const VacationListTableSchema = {
  type: "Vacation",
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
      type: "Employee",
      label: "Employee",
      property_name: "employee.user.username",
      filterable: true,
      sortable: true,
      visible: true,
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

const VacationList = {
  type: "array",
  $ref: "#/components/schemas/VacationListTableSchema",
};

module.exports = {
  VacationListFormSchema,
  VacationListTableSchema,
  VacationList,
};
