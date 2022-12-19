const {
  user_group_roles_enum,
  user_group_roles_enum_titles,
} = require("../../../constants/user_roles");

const ClientUserGroupFormSchema = {
  title: "Client User Group",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Group Name",
      attr: {
        bulk_editable: false,
      },
      help: "Staff User Group Name",
      minLength: "1",
      propertyOrder: 1,
    },
    roles: {
      type: "array",
      title: "Roles",
      items: {
        enum: user_group_roles_enum,
        enum_titles: user_group_roles_enum_titles,
        type: "string",
        title: "prototype",
        attr: {
          "data-plugin-select2": true,
        },
      },
      help: "Select role(s) for the group",
      propertyOrder: 2,
    },
  },
  required: ["name", "roles"],
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

const ClientUserGroupTableSchema = {
  type: "ClientUserGroup",
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
      type: "Client",
      label: "Client",
      property_name: "client.key",
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

const ClientUserGroups = {
  type: "array",
  $ref: "#/components/schemas/ClientUserGroupFormSchema",
};

module.exports = {
  ClientUserGroupFormSchema,
  ClientUserGroupTableSchema,
  ClientUserGroups,
};
