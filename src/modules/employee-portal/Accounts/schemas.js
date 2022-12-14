const AccountFormSchema = {
  title: "",
  type: "object",
  properties: {
    invoicing_periodicity: {
      title: "Invoicing Periodicity",
      type: "object",
      properties: {
        code: {
          enum: ["yearly", "monthly", "bi-weekly", "weekly", "daily", "hourly"],
          enum_titles: [
            "Yearly",
            "Monthly",
            "Bi-Weekly",
            "Weekly",
            "Daily",
            "Hourly",
          ],
          type: "string",
          title: "Select period",
          propertyOrder: 1,
        },
      },
      required: ["code"],
      help: "Enter Invoicing Periodicity",
      propertyOrder: 1,
    },
    invoicing_start_date: {
      type: "datetime",
      title: "Invoicing Start Date",
      help: "Enter Invoicing Start Date",
      propertyOrder: 2,
    },
    contact_name: {
      type: "string",
      title: "Contact Name",
      help: "Enter Contact Name",
      propertyOrder: 3,
    },
    organization_name: {
      type: "string",
      title: "Organization Name",
      help: "Enter Organization Name",
      propertyOrder: 4,
    },
    email: {
      type: "string",
      title: "Email",
      widget: "email",
      help: "Enter Email",
      propertyOrder: 5,
    },
    phone_number: {
      type: "string",
      title: "Phone Number",
      help: "Enter Phone Number",
      propertyOrder: 6,
    },
    alternate_phone_number: {
      type: "string",
      title: "Alternate Phone Number",
      help: "Enter Alternate Phone Number",
      propertyOrder: 7,
    },
    invoice_contact_name: {
      type: "string",
      title: "Invoice Contact Name",
      help: "Enter Invoice Contact Name",
      propertyOrder: 8,
    },
    invoice_email: {
      type: "string",
      title: "Invoice Email",
      widget: "email",
      help: "Enter Invoice Email",
      propertyOrder: 9,
    },
    invoice_address: {
      type: "string",
      title: "Invoice Address",
      help: "Enter Invoice ddress",
      propertyOrder: 10,
    },
    invoice_phone_number: {
      type: "string",
      title: "Invoice Phone Number",
      help: "Enter Invoice Phone Number",
      propertyOrder: 11,
    },
  },
  required: [
    "invoicing_periodicity",
    "invoicing_start_date",
    "contact_name",
    "organization_name",
    "email",
    "phone_number",
    "invoice_contact_name",
    "invoice_email",
    "invoice_address",
    "invoice_phone_number",
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

const AccountTableSchema = {
  type: "Account",
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
      type: "DateTime",
      label: "Invoicing Start Date",
      property_name: "invoicing_start_date",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Contact Name",
      property_name: "contact_name",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Organization Name",
      property_name: "organization_name",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "email",
      label: "Mail",
      property_name: "email",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "phone_number",
      label: "Phone Number",
      property_name: "phone_number",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "phone_number",
      label: "Alternate Phone Number",
      property_name: "alternate_phone_number",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "Invoice Contact Name",
      property_name: "invoice_contact_name",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "email",
      label: "Invoice Email",
      property_name: "invoice_email",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "Invoice Address",
      property_name: "invoice_address",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "phone_number",
      label: "Invoice Phone Number",
      property_name: "invoice_phone_number",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "Invoicing Period",
      property_name: "api_invoicing_periodicity",
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
  size: 12,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Accounts = {
  type: "array",
  $ref: "#/components/schemas/AccountTableSchema",
};

module.exports = {
  AccountFormSchema,
  AccountTableSchema,
  Accounts,
};
