const {
  currency_enum,
  currency_enum_titles,
} = require("../../../constants/currency");
const InvoiceListFormSchema = {
  title: "",
  type: "object",
  properties: {
    account: {
      enum: ["1"],
      enum_titles: ["asdf"],
      type: "string",
      title: "Choose an account",
      attr: {
        resource_path: "accounts",
        create_button_text: "Create a new account",
        enum_title_key: "organization_name",
        "data-plugin-select2": true,
      },
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
        default_date: "2022-12-21T12:58:13+00:00",
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
    "account",
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

const InvoiceListTableSchema = {
  type: "Invoice",
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
      type: "Account",
      label: "Account",
      property_name: "account.organization_name",
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

const InvoiceLists = {
  type: "array",
  $ref: "#/components/schemas/InvoiceListTableSchema",
};

module.exports = {
  InvoiceListFormSchema,
  InvoiceListTableSchema,
  InvoiceLists,
};
