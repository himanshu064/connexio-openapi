const WorkspacesFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Workspace Name",
      minLength: "1",
      propertyOrder: 1,
    },
    universal_queue_configuration: {
      enum: ["1", "2", "10", "11", "12"],
      enum_titles: [
        "uqc1",
        "ConneXio Sales",
        "Himanshu's UQC",
        "Sergey's UQC",
        "John's UQC",
      ],
      type: "string",
      title: "Universal Queue Configuration",
      attr: {
        resource_path: "universal_queue_configurations",
        create_button_text: "Create a new configuration",
        "data-plugin-select2": true,
      },
      help: "Select a Universal Queue Configuration for the workspace",
      propertyOrder: 2,
    },
  },
  required: ["name", "universal_queue_configuration"],
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

const WorkspacesTableSchema = {
  type: "Workspace",
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
      type: "UniversalQueueConfiguration",
      label: "Configuration",
      property_name: "universal_queue_configuration.name",
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
    {
      title: "Access control management",
      is_standard: false,
      icon: "lock",
      redirect_url: "https://dev5bo.cxcl.io/roles/",
      description: "Managing access to these objects",
      key: "link",
      visible: false,
    },
  ],
  size: 3,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: true,
};

const Workspaces = {
  type: "array",
  $ref: "#/components/schemas/WorkspacesTableSchema",
};

module.exports = {
  WorkspacesFormSchema,
  WorkspacesTableSchema,
  Workspaces,
};
