const {
  manager_acis,
  employee_acis,
  olac_tablist_acis,
} = require("../../../constants/roles");

const RoleFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Role Name",
      attr: {
        bulk_editable: false,
      },
      minLength: "1",
      propertyOrder: 1,
    },
    aci_mappings: {
      type: "array",
      title: "Access Control Identifiers",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          access_control_identifier: {
            type: "string",
            title: "access_control_identifier",
            propertyOrder: 1,
          },
          object_level_access_control_records: {
            type: "array",
            title: "object_level_access_control_records",
            items: {
              title: "prototype",
              type: "object",
              properties: {
                remote_object_id: {
                  type: "integer",
                  title: "remote_object_id",
                  propertyOrder: 1,
                },
                remote_object_title: {
                  type: "string",
                  title: "remote_object_title",
                  propertyOrder: 2,
                },
                remote_object_description: {
                  type: "string",
                  title: "remote_object_description",
                  propertyOrder: 3,
                },
              },
              required: ["remote_object_id"],
            },
            propertyOrder: 2,
          },
        },
        required: ["access_control_identifier"],
      },
      attr: {
        custom_widget: {
          widget_type: "olac_tablist",
          type: "olac_tablist",
          client_id: 2,
          acis: olac_tablist_acis,
        },
        templates: {
          Employee: {
            acis: employee_acis,
            description: "Uses commonly needed access rights for an employee",
          },
          Manager: {
            acis: manager_acis,
            description:
              "Role with extended rights intended for management staff",
          },
          "Blank Role": {
            acis: [],
            description:
              "This role does not entail any privileges, and thus they should be set up manually",
          },
        },
      },
      help: "Please select ACI(s) for the Role",
      propertyOrder: 2,
    },
  },
  required: ["name", "aci_mappings"],
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

const RoleTableSchema = {
  type: "Role",
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

const Roles = {
  type: "array",
  $ref: "#/components/schemas/RoleFormSchema",
};

module.exports = {
  RoleFormSchema,
  RoleTableSchema,
  Roles,
};
