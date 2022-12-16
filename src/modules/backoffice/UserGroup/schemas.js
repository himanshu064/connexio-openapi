const {
  user_group_roles_enum,
  user_group_roles_enum_titles,
} = require("../../../constants/user_roles");

const ClientUserGroup = {
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

const ClientUserGroups = {
  type: "array",
  $ref: "#/components/schemas/ClientUserGroup",
};

module.exports = {
  ClientUserGroup,
  ClientUserGroups,
};
