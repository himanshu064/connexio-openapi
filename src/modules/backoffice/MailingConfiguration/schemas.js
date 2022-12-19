const MailingConfiguration = {
  title: "",
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
  required: ["primary_smtp_server", "failover_smtp_servers", "from_email"],
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

const MailingConfigurations = {
  type: "array",
  $ref: "#/components/schemas/MailingConfiguration",
};

module.exports = {
  MailingConfiguration,
  MailingConfigurations,
};
