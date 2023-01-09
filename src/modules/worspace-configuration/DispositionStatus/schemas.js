const DispositionStatusFormSchema = {
  title: "",
  type: "object",
  properties: {
    status_code: {
      type: "string",
      title: "Status Code",
      help: "A status code. Should between 1 to 7 characters, preferably upper case.",
      propertyOrder: 1,
    },
    description: {
      type: "string",
      title: "Status Description",
      help: "A short description of this status. Appears to agents on disposition selection screen.",
      maxLength: "30",
      propertyOrder: 2,
    },
    show_on_quick_panel: {
      type: "boolean",
      title: "Show on Quick Select Panel",
      widget: "checkbox",
      help: "If select this, this status will show on the control panel of the agent screen, so agent wont have to open a dialog to select this status",
      propertyOrder: 3,
    },
  },
  required: ["description", "show_on_quick_panel"],
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

const DispositionStatusTableSchema = {
  type: "DispositionStatus",
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
      label: "Status Code",
      property_name: "status_code",
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "string",
      label: "Description",
      property_name: "description",
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
  size: 3,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const DispositionStatuses = {
  type: "array",
  $ref: "#/components/schemas/DispositionStatusTableSchema",
};

module.exports = {
  DispositionStatusFormSchema,
  DispositionStatusTableSchema,
  DispositionStatuses,
};
