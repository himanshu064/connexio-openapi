const {
  currency_enum,
  currency_enum_titles,
} = require("../../../constants/currency");
const {
  employee_enum_titles,
  employee_enum,
} = require("../../../constants/employees");

const PaymentFormSchema = {
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
    tax_amount: {
      type: "number",
      title: "Tax Amount",
      propertyOrder: 2,
    },
    total_amount: {
      type: "number",
      title: "Total Amount",
      propertyOrder: 3,
    },
    currency_code: {
      enum: currency_enum,
      enum_titles: currency_enum_titles,
      type: "string",
      title: "Currency",
      propertyOrder: 4,
    },
    period_start: {
      type: "datetime",
      title: "Period Start Time",
      attr: {
        default_date: "2022-12-21T11:29:22+00:00",
      },
      propertyOrder: 5,
    },
    period_end: {
      type: "datetime",
      title: "Period End Time",
      attr: {
        default_datetime: "2022-12-22T00:00:00+00:00",
      },
      propertyOrder: 6,
    },
  },
  required: [
    "employee",
    "tax_amount",
    "total_amount",
    "currency_code",
    "period_start",
    "period_end",
  ],
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

const PaymentTableSchema = {
  type: "Payment",
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
      label: "Tax Amount",
      property_name: "tax_amount",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "float",
      label: "Total Amount",
      property_name: "total_amount",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Curreny",
      property_name: "currency_code",
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
    {
      type: "status",
      label: "State",
      property_name: "api_bill_state",
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
  size: 8,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Payments = {
  type: "array",
  $ref: "#/components/schemas/PaymentTableSchema",
};

module.exports = {
  PaymentFormSchema,
  PaymentTableSchema,
  Payments,
};
