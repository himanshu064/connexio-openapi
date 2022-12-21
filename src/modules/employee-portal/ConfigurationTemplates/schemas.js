const {
  currency_enum_titles,
  currency_enum,
} = require("../../../constants/currency");

const ConfigurationTemplateFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    payments_periodicity: {
      title: "Payments Periodicity",
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
          title: "Payments Periodicity",
          help: "Payments Periodicity helper",
          propertyOrder: 1,
        },
      },
      required: ["code"],
      attr: {
        disable_wrapper: true,
      },
      help: "Payments Periodicity helper",
      propertyOrder: 2,
    },
    payments_started: {
      type: "datetime",
      title: "Payments Started",
      help: "Payments Started helper",
      propertyOrder: 3,
    },
    achievement_compensation_rules: {
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
            enum: ["1", "2", "3", "4"],
            enum_titles: [
              "sfdasfsadfasdfs",
              "made a sale",
              "Testing Jab",
              "test",
            ],
            type: "string",
            title: "Achievement Type",
            attr: {
              resource_path: "achievement-types",
              create_button_text: "Create a new type",
              "data-plugin-select2": true,
            },
            propertyOrder: 2,
          },
          pay_rate: {
            title: "Quantity Pay Rate",
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
                enum: currency_enum,
                enum_titles: currency_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["quantity", "sum_to_pay", "currency_code"],
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
      propertyOrder: 4,
    },
    spent_time_compensation_rules: {
      type: "array",
      title: "Spent Time Compensation Rules",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          id: {
            type: "hidden",
            title: "id",
            propertyOrder: 1,
          },
          activity_category: {
            enum: [
              "1",
              "2",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "19",
            ],
            enum_titles: [
              "Regular",
              "do some coding",
              "Do some testing",
              "Study",
              "tewst",
              "test",
              "testFailing",
              "testFail",
              "test",
              "resolve bugs",
              "pppp",
              "demo",
              "testing",
              "raaj",
            ],
            type: "string",
            title: "Activity Category",
            attr: {
              resource_path: "activity-categories",
              create_button_text: "Create a new activity category",
              "data-plugin-select2": true,
            },
            propertyOrder: 2,
          },
          pay_rate: {
            title: "Time Pay Rate",
            type: "object",
            properties: {
              periodicity: {
                title: "Amount of time to pay for",
                type: "object",
                properties: {
                  code: {
                    enum: [
                      "yearly",
                      "monthly",
                      "bi-weekly",
                      "weekly",
                      "daily",
                      "hourly",
                    ],
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
                enum: currency_enum,
                enum_titles: currency_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            propertyOrder: 3,
          },
        },
        required: ["activity_category", "pay_rate"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label:
            "{activity_category} - {pay_rate.amount} ({pay_rate.periodicity.code})",
        },
      },
      help: "Spent Time Compensation Rules helper",
      propertyOrder: 5,
    },
    payroll_compensation_rules: {
      type: "array",
      title: "Payroll Compensation Rules",
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
                    enum: [
                      "yearly",
                      "monthly",
                      "bi-weekly",
                      "weekly",
                      "daily",
                      "hourly",
                    ],
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
                enum: currency_enum,
                enum_titles: currency_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            propertyOrder: 2,
          },
          overtime_pay_rate: {
            title: "Overtime Pay Rate",
            type: "object",
            properties: {
              periodicity: {
                title: "Amount of time to pay for",
                type: "object",
                properties: {
                  code: {
                    enum: [
                      "yearly",
                      "monthly",
                      "bi-weekly",
                      "weekly",
                      "daily",
                      "hourly",
                    ],
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
                enum: currency_enum,
                enum_titles: currency_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            propertyOrder: 3,
          },
          is_overtime_allowed: {
            type: "boolean",
            title: "Is Overtime Allowed?",
            widget: "checkbox",
            help: "Is overtime allowed for this employee?",
            propertyOrder: 4,
          },
          max_overtime_hours: {
            type: "number",
            title:
              "Maximum amount of overtime (hours) allowed for given period",
            propertyOrder: 5,
          },
          max_overtime_calculation_periodicity: {
            title: "Overtime limitation calculation period",
            type: "object",
            properties: {
              code: {
                enum: [
                  "yearly",
                  "monthly",
                  "bi-weekly",
                  "weekly",
                  "daily",
                  "hourly",
                ],
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
            help: "choose over which period the max overtime calculation will be applied",
            propertyOrder: 6,
          },
        },
        required: [
          "pay_rate",
          "overtime_pay_rate",
          "is_overtime_allowed",
          "max_overtime_hours",
          "max_overtime_calculation_periodicity",
        ],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label:
            "Pay: {pay_rate.amount} ({pay_rate.periodicity.code}) | Overtime Pay: {overtime_pay_rate.amount} ({overtime_pay_rate.periodicity.code})",
        },
      },
      help: "Spent Time Compensation Rules helper",
      propertyOrder: 6,
    },
    taxation_rules: {
      type: "array",
      title: "Taxation Rules",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          id: {
            type: "hidden",
            title: "id",
            propertyOrder: 1,
          },
          percentage_of_gross_payment: {
            type: "number",
            title: "Percentage Of Gross Payment",
            propertyOrder: 2,
          },
        },
        required: ["percentage_of_gross_payment"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "Gross Payment: %{percentage_of_gross_payment}",
        },
      },
      help: "Taxation Rules helper",
      propertyOrder: 7,
    },
    benefit_rules: {
      type: "array",
      title: "Benefit Rules",
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
                    enum: [
                      "yearly",
                      "monthly",
                      "bi-weekly",
                      "weekly",
                      "daily",
                      "hourly",
                    ],
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
                enum: currency_enum,
                enum_titles: currency_enum_titles,
                type: "string",
                title: "Currency Code",
                propertyOrder: 3,
              },
            },
            required: ["periodicity", "amount", "currency_code"],
            propertyOrder: 2,
          },
        },
        required: ["pay_rate"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "{pay_rate.amount}  ({pay_rate.periodicity.code})",
        },
      },
      help: "Benefit Rules helper",
      propertyOrder: 8,
    },
  },
  required: ["name", "payments_periodicity", "payments_started"],
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

const ConfigurationTemplateTableSchema = {
  type: "CompensationConfiguration",
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
    },
    {
      type: "DateTime",
      label: "Payments Started",
      property_name: "payments_started",
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
  size: 3,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const ConfigurationTemplates = {
  type: "array",
  $ref: "#/components/schemas/ConfigurationTemplateTableSchema",
};

module.exports = {
  ConfigurationTemplateFormSchema,
  ConfigurationTemplateTableSchema,
  ConfigurationTemplates,
};
