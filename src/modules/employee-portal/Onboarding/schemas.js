const {
  employee_enum,
  employee_enum_titles,
  employee_funnel_enum,
  employee_funnel_enum_titles,
} = require("../../../constants/employees");
const {
  months_enum,
  months_enum_titles,
  days_enum,
  days_enum_titles,
  hours_enum,
  hours_enum_titles,
} = require("../../../constants/time");

const MyOnboardingFormSchema = {
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
    funnel: {
      enum: employee_funnel_enum,
      enum_titles: employee_funnel_enum_titles,
      type: "string",
      title: "funnel",
      attr: {
        "data-plugin-select2": true,
      },
      propertyOrder: 2,
    },
    status: {
      type: "boolean",
      title: "status",
      widget: "checkbox",
      propertyOrder: 3,
    },
    start_date: {
      type: "datetime",
      title: "start_date",
      propertyOrder: 4,
    },
    end_date: {
      type: "datetime",
      title: "end_date",
      propertyOrder: 5,
    },
  },
  required: ["employee", "funnel", "status", "start_date", "end_date"],
  operations: [],
};

const MyOnboardingTableSchema = {
  type: "EmployeeFunnelSubscription",
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
      type: "Funnel",
      label: "Name",
      property_name: "funnel.name",
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "DateTime",
      label: "Start Date",
      property_name: "start_date",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "DateTime",
      label: "End Date",
      property_name: "end_date",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "status",
      label: "Status",
      property_name: "status_data",
      filterable: false,
      sortable: false,
      visible: true,
    },
  ],
  operations: [],
  size: 7,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const MyOnboardings = {
  type: "array",
  $ref: "#/components/schemas/MyOnboardingTableSchema",
};

const OnboardingFunnelFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      minLength: "1",
      propertyOrder: 1,
    },
    time_limit: {
      title: "Time Limit",
      type: "object",
      properties: {
        months: {
          enum: months_enum,
          enum_titles: months_enum_titles,
          type: "string",
          title: "Months",
          propertyOrder: 1,
        },
        days: {
          enum: days_enum,
          enum_titles: days_enum_titles,
          type: "string",
          title: "Days",
          propertyOrder: 2,
        },
        hours: {
          enum: hours_enum,
          enum_titles: hours_enum_titles,
          type: "string",
          title: "Hours",
          propertyOrder: 3,
        },
      },
      propertyOrder: 2,
    },
    strict: {
      type: "boolean",
      title: "Strict",
      widget: "checkbox",
      help: "If active, funnel cannot be started outside of allocated start to end date.",
      propertyOrder: 3,
    },
  },
  required: ["name", "strict"],
  operations: [
    {
      title: "Assign funnel to employee",
      is_standard: true,
      method: "POST",
      description: "Assign funnel to employee",
      key: "assign_to_employee",
      route_suffix: "assign_to_employee",
      visible: false,
    },
    {
      title: "Copy funnel",
      is_standard: true,
      method: "POST",
      description: "Copy funnel",
      key: "copy_funnel",
      route_suffix: "copy_funnel",
      visible: false,
    },
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

const OnboardingFunnelTableSchema = {
  type: "OnboardingFunnel",
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
      label: "Name",
      property_name: "name",
      filterable: false,
      sortable: false,
      visible: true,
      order: 2,
    },
    {
      type: "string",
      label: "Is Strict",
      property_name: "is_strict",
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "string",
      label: "Time Limit",
      property_name: "date_interval",
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
  size: 4,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const OnboardingFunnels = {
  type: "array",
  $ref: "#/components/schemas/MyOnboardingTableSchema",
};

const AssignFunnelToEmployeeFormSchema = {
  title: "",
  type: "object",
  properties: {
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Please select an employee to assign to things to do when onboarding",
      propertyOrder: 1,
    },
    start_date: {
      type: "datetime",
      title: "Start Date",
      help: "Please select start date of things to do when onboarding for employee",
      propertyOrder: 2,
    },
    end_date: {
      type: "datetime",
      title: "Finish Date",
      help: "Please select finish date of things to do when onboarding for employee",
      propertyOrder: 3,
    },
    is_strict: {
      type: "boolean",
      title: "Strict?",
      widget: "checkbox",
      help: "Will the employee have to follow the timeline strictly?",
      propertyOrder: 4,
    },
  },
  required: ["employee", "start_date", "end_date", "is_strict"],
};

const OnboardingFunnelEmployeeSubscriptionFormSchema = {
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
    status: {
      type: "boolean",
      title: "status",
      widget: "checkbox",
      propertyOrder: 2,
    },
    start_date: {
      type: "datetime",
      title: "start_date",
      propertyOrder: 3,
    },
    end_date: {
      type: "datetime",
      title: "end_date",
      propertyOrder: 4,
    },
  },
  required: ["employee", "status", "start_date", "end_date"],
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
const OnboardingFunnelEmployeeSubscriptionTableSchema = {
  type: "EmployeeFunnelSubscription",
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
      label: "Start Date",
      property_name: "start_date",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "DateTime",
      label: "End Date",
      property_name: "end_date",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "status",
      label: "Status",
      property_name: "status_data",
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
  size: 7,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
  title: "Subscribed Employees of things to do when onboarding",
};

const OnboardingFunnelEmployeeSubscriptions = {
  type: "array",
  $ref: "#/components/schemas/EmployeeFunnelSubscriptionTableSchema",
};

module.exports = {
  MyOnboardingFormSchema,
  MyOnboardingTableSchema,
  MyOnboardings,
  OnboardingFunnelFormSchema,
  OnboardingFunnelTableSchema,
  OnboardingFunnels,
  AssignFunnelToEmployeeFormSchema,
  OnboardingFunnelEmployeeSubscriptionFormSchema,
  OnboardingFunnelEmployeeSubscriptionTableSchema,
  OnboardingFunnelEmployeeSubscriptions,
};
