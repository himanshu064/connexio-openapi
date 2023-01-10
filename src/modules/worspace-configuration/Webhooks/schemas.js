const WebHooksTaskCompletedFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Action Name",
      minLength: "1",
      propertyOrder: 1,
    },
    request_template: {
      title: "Request Template",
      type: "object",
      properties: {
        uri: {
          type: "string",
          title: "URI",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "url",
          propertyOrder: 1,
        },
        method: {
          enum: ["GET", "POST", "PUT"],
          enum_titles: ["GET", "POST", "PUT"],
          type: "string",
          title: "Method",
          propertyOrder: 2,
        },
        authentication_type: {
          enum: ["NONE"],
          enum_titles: ["None"],
          type: "string",
          title: "authentication_type",
          propertyOrder: 3,
        },
        body: {
          type: "string",
          title: "Body",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "textarea",
          help: "Add your json body",
          propertyOrder: 4,
        },
        headers: {
          title: "Headers",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 5,
        },
        cookies: {
          title: "Cookies",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 6,
        },
        response_processor_expressions: {
          type: "string",
          title: "Response Processor Expressions",
          propertyOrder: 7,
        },
      },
      required: ["uri", "method"],
      propertyOrder: 2,
    },
  },
  required: ["name", "request_template"],
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

const WebHooksTaskCompletedTableSchema = {
  type: "RequestTemplateAction",
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
      label: "Hook Point",
      property_name: "hook_point",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Type",
      property_name: "type",
      filterable: true,
      sortable: true,
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

const WebhookTasksCompleted = {
  type: "array",
  $ref: "#/components/schemas/WebHooksTaskCompletedTableSchema",
};

const WebHooksTaskAssignedFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Action Name",
      minLength: "1",
      propertyOrder: 1,
    },
    request_template: {
      title: "Request Template",
      type: "object",
      properties: {
        uri: {
          type: "string",
          title: "URI",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "url",
          propertyOrder: 1,
        },
        method: {
          enum: ["GET", "POST", "PUT"],
          enum_titles: ["GET", "POST", "PUT"],
          type: "string",
          title: "Method",
          propertyOrder: 2,
        },
        authentication_type: {
          enum: ["NONE"],
          enum_titles: ["None"],
          type: "string",
          title: "authentication_type",
          propertyOrder: 3,
        },
        body: {
          type: "string",
          title: "Body",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "textarea",
          help: "Add your json body",
          propertyOrder: 4,
        },
        headers: {
          title: "Headers",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 5,
        },
        cookies: {
          title: "Cookies",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 6,
        },
        response_processor_expressions: {
          type: "string",
          title: "Response Processor Expressions",
          propertyOrder: 7,
        },
      },
      required: ["uri", "method"],
      propertyOrder: 2,
    },
  },
  required: ["name", "request_template"],
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

const WebHooksTaskAssignedTableSchema = {
  type: "RequestTemplateAction",
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
      label: "Hook Point",
      property_name: "hook_point",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Type",
      property_name: "type",
      filterable: true,
      sortable: true,
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
const WebhookTasksAssigned = {
  type: "array",
  $ref: "#/components/schemas/WebHooksTaskAssignedTableSchema",
};

const WebHooksTaskConclusionStartedFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Action Name",
      minLength: "1",
      propertyOrder: 1,
    },
    request_template: {
      title: "Request Template",
      type: "object",
      properties: {
        uri: {
          type: "string",
          title: "URI",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "url",
          propertyOrder: 1,
        },
        method: {
          enum: ["GET", "POST", "PUT"],
          enum_titles: ["GET", "POST", "PUT"],
          type: "string",
          title: "Method",
          propertyOrder: 2,
        },
        authentication_type: {
          enum: ["NONE"],
          enum_titles: ["None"],
          type: "string",
          title: "authentication_type",
          propertyOrder: 3,
        },
        body: {
          type: "string",
          title: "Body",
          attr: {
            custom_widget: {
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          widget: "textarea",
          help: "Add your json body",
          propertyOrder: 4,
        },
        headers: {
          title: "Headers",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 5,
        },
        cookies: {
          title: "Cookies",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: [
                "{%task.id%}",
                "{%task.type%}",
                "{%ticket.id%}",
                "{%user.id%}",
                "{%user.login%}",
                "{%dispo.name%}",
              ],
            },
          },
          propertyOrder: 6,
        },
        response_processor_expressions: {
          type: "string",
          title: "Response Processor Expressions",
          propertyOrder: 7,
        },
      },
      required: ["uri", "method"],
      propertyOrder: 2,
    },
  },
  required: ["name", "request_template"],
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
const WebHooksTaskConclusionStartedTableSchema = {
  type: "RequestTemplateAction",
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
      label: "Hook Point",
      property_name: "hook_point",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Type",
      property_name: "type",
      filterable: true,
      sortable: true,
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
const WebhookTaskConclusionsStarted = {
  type: "array",
  $ref: "#/components/schemas/WebHooksTaskConclusionStartedTableSchema",
};

const WebHooksTaskEventFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Action Name",
      minLength: "1",
      propertyOrder: 1,
    },
    request_template: {
      title: "Request Template",
      type: "object",
      properties: {
        uri: {
          type: "string",
          title: "URI",
          attr: {
            custom_widget: {
              parameters: ["{%task.id%}", "{%task.type%}"],
            },
          },
          widget: "url",
          propertyOrder: 1,
        },
        method: {
          enum: ["GET", "POST", "PUT"],
          enum_titles: ["GET", "POST", "PUT"],
          type: "string",
          title: "Method",
          propertyOrder: 2,
        },
        authentication_type: {
          enum: ["NONE"],
          enum_titles: ["None"],
          type: "string",
          title: "authentication_type",
          propertyOrder: 3,
        },
        body: {
          type: "string",
          title: "Body",
          attr: {
            custom_widget: {
              parameters: ["{%task.id%}", "{%task.type%}"],
            },
          },
          widget: "textarea",
          help: "Add your json body",
          propertyOrder: 4,
        },
        headers: {
          title: "Headers",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: ["{%task.id%}", "{%task.type%}"],
            },
          },
          propertyOrder: 5,
        },
        cookies: {
          title: "Cookies",
          type: "object",
          properties: [],
          attr: {
            custom_widget: {
              type: "keyvalue",
              parameters: ["{%task.id%}", "{%task.type%}"],
            },
          },
          propertyOrder: 6,
        },
        response_processor_expressions: {
          type: "string",
          title: "Response Processor Expressions",
          propertyOrder: 7,
        },
      },
      required: ["uri", "method"],
      propertyOrder: 2,
    },
  },
  required: ["name", "request_template"],
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
const WebHooksTaskEventTableSchema = {
  type: "RequestTemplateAction",
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
      label: "Hook Point",
      property_name: "hook_point",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Type",
      property_name: "type",
      filterable: true,
      sortable: true,
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
const WebHooksTaskEvents = {
  type: "array",
  $ref: "#/components/schemas/WebHooksTaskEventTableSchema",
};

module.exports = {
  // Task Completed
  WebHooksTaskCompletedFormSchema,
  WebHooksTaskCompletedTableSchema,
  WebhookTasksCompleted,

  // Task Assigned
  WebHooksTaskAssignedFormSchema,
  WebHooksTaskAssignedTableSchema,
  WebhookTasksAssigned,

  // Task Conclusion Started
  WebHooksTaskConclusionStartedFormSchema,
  WebHooksTaskConclusionStartedTableSchema,
  WebhookTaskConclusionsStarted,

  // Task Event
  WebHooksTaskEventFormSchema,
  WebHooksTaskEventTableSchema,
  WebHooksTaskEvents,
};
