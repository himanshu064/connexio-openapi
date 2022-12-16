const { deployment_template_enum, deployment_template_enum_titles } = require("../../../constants/clients");
const {
  manager_acis,
  employee_acis,
  olac_tablist_acis,
} = require("../../../constants/roles");
const { timezone_enum, timezone_enum_titles } = require("../../../constants/timezone");

const Client = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Client Name",
      attr: {
        bulk_editable: false,
      },
      help: "Name of the client",
      propertyOrder: 1,
    },
    active: {
      type: "boolean",
      title: "Active",
      widget: "checkbox",
      help: "Active status. Changing status requires redeployment.",
      propertyOrder: 2,
    },
    key: {
      type: "string",
      title: "Client Key",
      attr: {
        bulk_editable: false,
      },
      help: "Provide an unique identifier for the client.",
      propertyOrder: 3,
    },
    stock_domain_name_prefix: {
      type: "string",
      title: "Stock Domain prefix",
      attr: {
        bulk_editable: false,
      },
      help: 'a prefix for a stock domain for the client (e.g. "example-client", in which case the domain will be example-client.cxcl.io")',
      propertyOrder: 4,
    },
    custom_domain_name: {
      type: "string",
      title: "Custom Domain",
      attr: {
        bulk_editable: false,
      },
      help: 'This is private client domain (e.g. "example-client.com")',
      propertyOrder: 5,
    },
    timezone: {
      enum: timezone_enum,
      enum_titles: timezone_enum_titles,
      type: "string",
      title: "Timezone",
      help: "a default timezone for the client",
      propertyOrder: 6,
    },
    deployment_template: {
      enum: deployment_template_enum,
      enum_titles: deployment_template_enum_titles,
      type: "string",
      title: "Deployment Template",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Select an appropriate deployment template",
      propertyOrder: 7,
    },
    client_mailing_configurations: {
      type: "array",
      title: "Custom mailing configuration",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          primary_smtp_server: {
            title: "primary_smtp_server",
            type: "object",
            properties: {
              smtp_host: {
                type: "string",
                title: "smtp_host",
                propertyOrder: 1,
              },
              smtp_port: {
                type: "integer",
                title: "smtp_port",
                propertyOrder: 2,
              },
              smtp_user: {
                type: "string",
                title: "smtp_user",
                propertyOrder: 3,
              },
              smtp_password: {
                type: "string",
                title: "smtp_password",
                propertyOrder: 4,
              },
              smtp_security_type: {
                enum: ["none", "starttls", "tls"],
                enum_titles: ["none", "starttls", "tls"],
                type: "string",
                title: "smtp_security_type",
                propertyOrder: 5,
              },
            },
            required: ["smtp_port", "smtp_security_type"],
            propertyOrder: 1,
          },
          failover_smtp_servers: {
            type: "array",
            title: "failover_smtp_servers",
            items: {
              title: "prototype",
              type: "object",
              properties: {
                smtp_host: {
                  type: "string",
                  title: "smtp_host",
                  propertyOrder: 1,
                },
                smtp_port: {
                  type: "integer",
                  title: "smtp_port",
                  propertyOrder: 2,
                },
                smtp_user: {
                  type: "string",
                  title: "smtp_user",
                  propertyOrder: 3,
                },
                smtp_password: {
                  type: "string",
                  title: "smtp_password",
                  propertyOrder: 4,
                },
                smtp_security_type: {
                  enum: ["none", "starttls", "tls"],
                  enum_titles: ["none", "starttls", "tls"],
                  type: "string",
                  title: "smtp_security_type",
                  propertyOrder: 5,
                },
              },
              required: ["smtp_port", "smtp_security_type"],
            },
            attr: {
              custom_widget: {
                type: "array_collection",
                label: "",
              },
            },
            propertyOrder: 2,
          },
          from_name: {
            type: "string",
            title: "from_name",
            propertyOrder: 3,
          },
          from_email: {
            type: "string",
            title: "from_email",
            widget: "email",
            propertyOrder: 4,
          },
        },
        required: [
          "primary_smtp_server",
          "failover_smtp_servers",
          "from_email",
        ],
      },
      help: "add a custom mailing configuration if necessary",
      attr: {
        custom_widget: {
          type: "array_collection",
          label: "",
          max_item_count: 1,
        },
      },
      propertyOrder: 8,
    },
  },
  required: [
    "name",
    "active",
    "key",
    "stock_domain_name_prefix",
    "deployment_template",
    "client_mailing_configurations",
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
  ],
};

const Clients = {
  type: "array",
  $ref: "#/components/schemas/Role",
};

module.exports = {
  Client,
  Clients,
};
