const AnnouncementFormSchema = {
  title: "",
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Title",
      help: "Write your announcement title here",
      propertyOrder: 1,
    },
    text: {
      type: "string",
      title: "Content",
      widget: "textarea",
      help: "Write your announcement text here",
      propertyOrder: 2,
    },
  },
  required: ["title", "text"],
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

const AnnouncementTableSchema = {
  type: "Announcement",
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
      label: "Title",
      property_name: "title",
      filterable: false,
      sortable: false,
      visible: true,
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
  size: 3,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Announcements = {
  type: "array",
  $ref: "#/components/schemas/AnnouncementTableSchema",
};

module.exports = {
  AnnouncementFormSchema,
  AnnouncementTableSchema,
  Announcements,
};
