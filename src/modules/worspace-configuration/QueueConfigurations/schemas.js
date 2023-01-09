const {
  queues_enum_titles,
  queues_enum,
} = require("../../../constants/queues");

const QueueConfigurationFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Universal Queue Configuration Name",
      minLength: "1",
      propertyOrder: 1,
    },
    queue_limitations: {
      type: "array",
      title: "Queues to process",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          queue: {
            enum: queues_enum,
            enum_titles: queues_enum_titles,
            type: "string",
            title: "Queue",
            attr: {
              "data-plugin-select2": true,
            },
            help: "Select a queue for the configuration",
            propertyOrder: 1,
          },
        },
        required: ["queue"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
        },
      },
      help: "Select which queues this workspace will accept tasks from.",
      propertyOrder: 2,
    },
    capabilities: {
      type: "array",
      title: "Capabilities",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          task_type: {
            enum: ["1"],
            enum_titles: ["call"],
            type: "string",
            title: "Task Type",
            attr: {
              "data-plugin-select2": true,
            },
            help: "Task type to set for Agent Capability",
            propertyOrder: 1,
          },
          limit: {
            type: "number",
            title: "Limit",
            help: "Maximum number of tasks that can be assigned to the agent",
            propertyOrder: 2,
          },
        },
        required: ["task_type", "limit"],
      },
      attr: {
        custom_widget: {
          type: "array_collection",
        },
      },
      help: "Select capabilities",
      propertyOrder: 3,
    },
    defaultQueueForManualCalls: {
      enum: queues_enum,
      enum_titles: queues_enum_titles,
      type: "string",
      title: "defaultQueueForManualCalls",
      attr: {
        "data-plugin-select2": true,
      },
      propertyOrder: 4,
    },
    allowAgentsToSelectQueueForManualCall: {
      type: "boolean",
      title: "Allow Agents To Select Queue For Manual Call",
      widget: "checkbox",
      propertyOrder: 5,
    },
    onHook: {
      type: "boolean",
      title: "Makes agents working in associated workspaces to be on-hook",
      widget: "checkbox",
      propertyOrder: 6,
    },
    onHookRingRatioPercent: {
      type: "number",
      title:
        "what portion of available agents should have their phones ringing when a new call task arrives in on-hook mode (percent, 0 to 100)",
      propertyOrder: 7,
    },
  },
  required: [
    "name",
    "queue_limitations",
    "capabilities",
    "allowAgentsToSelectQueueForManualCall",
    "onHook",
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

const QueueConfigurationTableSchema = {
  type: "UniversalQueueConfiguration",
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
  size: 2,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const QueueConfigurations = {
  type: "array",
  $ref: "#/components/schemas/QueueConfigurationTableSchema",
};

module.exports = {
  QueueConfigurationFormSchema,
  QueueConfigurationTableSchema,
  QueueConfigurations,
};
