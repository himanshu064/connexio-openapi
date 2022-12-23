const VacationTypeFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Vacation Type Name",
      minLength: "1",
      propertyOrder: 1,
    },
  },
  required: ["name"],
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

const VacationTypeTableSchema = {
  type: "VacationType",
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

const VacationTypes = {
  type: "array",
  $ref: "#/components/schemas/VacationTypeTableSchema",
};

module.exports = {
  VacationTypeFormSchema,
  VacationTypeTableSchema,
  VacationTypes,
};
