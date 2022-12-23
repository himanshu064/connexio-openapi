const {
  achievement_type_enum,
  achievement_type_enum_titles,
} = require("../../../constants/achievement");
const {
  activity_category_enum,
  activity_category_enum_titles,
} = require("../../../constants/activity");
const {
  country_enum,
  country_enum_titles,
} = require("../../../constants/country");
const {
  periodicity_code_enum,
  periodicity_code_enum_titles,
} = require("../../../constants/periodicity");

const ServiceFormSchema = {
  title: "",
  type: "object",
  properties: {
    account: {
      enum: ["1"],
      enum_titles: ["Org (asdf)"],
      type: "string",
      title: "Account",
      attr: {
        resource_path: "accounts",
        create_button_text: "Create a new account",
        "data-plugin-select2": true,
      },
      help: "Select an account for service",
      propertyOrder: 1,
    },
    invoice_item_name: {
      type: "string",
      title: "Invoice Item Name",
      help: "Enter item name",
      propertyOrder: 2,
    },
    invoice_item_description: {
      type: "string",
      title: "Invoice Item Description",
      help: "Enter item description",
      propertyOrder: 3,
    },
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
          title: "Invoicing Periodicity",
          help: "Enter Invoicing Periodicity",
          propertyOrder: 1,
        },
      },
      required: ["code"],
      attr: {
        disable_wrapper: true,
      },
      help: "Enter Invoicing Periodicity",
      propertyOrder: 4,
    },
    invoicing_start: {
      type: "datetime",
      title: "Invoicing Start",
      help: "Enter Invoicing Start",
      propertyOrder: 5,
    },
    activity_category: {
      enum: activity_category_enum,
      enum_titles: activity_category_enum_titles,
      type: "string",
      title: "Activity Category",
      attr: {
        resource_path: "activity-categories",
        create_button_text: "Create a new activity category",
        "data-plugin-select2": true,
      },
      help: "Enter Activity Category",
      propertyOrder: 6,
    },
    spent_time_invoicing_rules: {
      type: "array",
      title: "Spent time invoicing rule",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          id: {
            type: "hidden",
            title: "id",
            propertyOrder: 1,
          },
          rate: {
            title: "Rate",
            type: "object",
            properties: {
              periodicity: {
                title: "Amount of time to pay for",
                type: "object",
                properties: {
                  code: {
                    enum: periodicity_code_enum,
                    enum_titles: periodicity_code_enum_titles,
                    type: "string",
                    title: "Select period",
                    propertyOrder: 1,
                  },
                },
                required: ["code"],
                attr: {
                  disable_wrapper: true,
                },
                propertyOrder: 1,
              },
              amount: {
                type: "string",
                title: "Amount",
                widget: "money",
                propertyOrder: 2,
              },
              currency_code: {
                enum: country_enum,
                enum_titles: country_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            attr: {
              disable_wrapper: true,
            },
            help: "Enter Rate",
            propertyOrder: 2,
          },
        },
        required: ["rate"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "{rate.amount} ({rate.periodicity.code})",
        },
      },
      help: "Spent time invoicing Rules helper",
      propertyOrder: 7,
    },
    achievement_invoicing_rules: {
      type: "array",
      title: "Achievement Compensation Rules",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          id: {
            type: "hidden",
            title: "id",
            propertyOrder: 1,
          },
          achievement_type: {
            enum: achievement_type_enum,
            enum_titles: achievement_type_enum_titles,
            type: "string",
            title: "Achievement Type",
            attr: {
              resource_path: "achievement-types",
              create_button_text: "Create a new type",
              "data-plugin-select2": true,
            },
            help: "Enter Achievement Type",
            propertyOrder: 2,
          },
          pay_rate: {
            title: "Pay Rate",
            type: "object",
            properties: {
              quantity: {
                type: "number",
                title: "Quantity",
                propertyOrder: 1,
              },
              sum_to_pay: {
                type: "number",
                title: "Sum to Pay",
                propertyOrder: 2,
              },
              currency_code: {
                enum: country_enum,
                enum_titles: country_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["quantity", "sum_to_pay", "currency_code"],
            help: "Enter Pay Rate",
            propertyOrder: 3,
          },
        },
        required: ["achievement_type", "pay_rate"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "{achievement_type} - {pay_rate.sum_to_pay}",
        },
      },
      help: "Achievement Compensation Rules helper",
      propertyOrder: 8,
    },
    fixed_rate_invoicing_rules: {
      type: "array",
      title: "Fixed Rate Invoicing Rules",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          id: {
            type: "hidden",
            title: "id",
            propertyOrder: 1,
          },
          pay_rate: {
            title: "Pay Rate",
            type: "object",
            properties: {
              periodicity: {
                title: "Amount of time to pay for",
                type: "object",
                properties: {
                  code: {
                    enum: periodicity_code_enum,
                    enum_titles: periodicity_code_enum_titles,
                    type: "string",
                    title: "Select period",
                    propertyOrder: 1,
                  },
                },
                required: ["code"],
                attr: {
                  disable_wrapper: true,
                },
                propertyOrder: 1,
              },
              amount: {
                type: "string",
                title: "Amount",
                widget: "money",
                propertyOrder: 2,
              },
              currency_code: {
                enum: country_enum,
                enum_titles: country_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            attr: {
              disable_wrapper: true,
            },
            help: "Enter Pay Rate",
            propertyOrder: 2,
          },
        },
        required: ["pay_rate"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "{pay_rate.amount} ({pay_rate.periodicity.code})",
        },
      },
      help: "Fixed Rate Invoicing Rules",
      propertyOrder: 9,
    },
  },
  required: [
    "account",
    "invoicing_periodicity",
    "invoicing_start",
    "activity_category",
    "spent_time_invoicing_rules",
    "achievement_invoicing_rules",
    "fixed_rate_invoicing_rules",
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

const ServiceTableSchema = {
  type: "Service",
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
      type: "Account",
      label: "Account",
      property_name: "account.organization_name",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Invoice Item Name",
      property_name: "invoice_item_name",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Invoice Item Description",
      property_name: "invoice_item_description",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "ActivityCategory",
      label: "Activity Category",
      property_name: "activity_category.name",
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

const Services = {
  type: "array",
  $ref: "#/components/schemas/ServiceTableSchema",
};

module.exports = {
  ServiceFormSchema,
  ServiceTableSchema,
  Services,
};
