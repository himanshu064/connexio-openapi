const LinkFormSchema = {
  title: "",
  type: "object",
  properties: {
    text: {
      type: "string",
      title: "Link Text",
      attr: {
        name: "text",
      },
      help: "Your link text (Eg. TELESERO)",
      propertyOrder: 1,
    },
    url: {
      type: "string",
      title: "Link URL",
      attr: {
        name: "url",
      },
      widget: "url",
      help: "Please write the URL of the link (Eg. https://www.telesero.com)",
      propertyOrder: 2,
    },
    target: {
      enum: ["_blank", "_self", "_parent", "_top"],
      enum_titles: [
        "Opens the linked document in a new window or tab",
        "Opens the linked document in the same frame as it was clicked",
        "Opens the linked document in the parent frame",
        "Opens the linked document in the full body of the window",
      ],
      type: "string",
      title: "Where to open the link",
      attr: {
        name: "target",
      },
      help: "determines where the link opens when the link is clicked",
      propertyOrder: 3,
    },
  },
  required: ["text", "url", "target"],
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

const LinkTableSchema = {
  type: "Link",
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
      label: "URL",
      property_name: "url",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Target",
      property_name: "target",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "Text",
      property_name: "text",
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
  size: 4,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Links = {
  type: "array",
  $ref: "#/components/schemas/LinkTableSchema",
};

module.exports = {
  LinkFormSchema,
  LinkTableSchema,
  Links,
};
