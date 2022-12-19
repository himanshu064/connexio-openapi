const InteralGatewayFormSchema = {
  title: "",
  type: "object",
  properties: {
    outbound_gateway_group: {
      enum: ["1", "2", "3"],
      enum_titles: ["Default LCR", "Default Normal", "test test  test"],
      type: "string",
      title: "Select Outbound Gateway Group",
      attr: {
        events: {
          on_change: {
            change_fields_value: [
              {
                field_name: "outbound_gateway",
                field_value: "",
                message:
                  "You cannot select Outbound Gateway Group and Outbound Gateway at the same time!",
              },
            ],
          },
        },
        "data-plugin-select2": true,
      },
      help: "List of gateway groups",
      propertyOrder: 1,
    },
    outbound_gateway: {
      enum: ["1", "3"],
      enum_titles: ["Telnyx Gateway", "voip inno"],
      type: "string",
      title: "Select Outbound Gateway",
      attr: {
        events: {
          on_change: {
            change_fields_value: [
              {
                field_name: "outbound_gateway_group",
                field_value: "",
                message:
                  "You cannot select Outbound Gateway and Outbound Gateway Group at the same time!",
              },
            ],
          },
        },
        "data-plugin-select2": true,
      },
      help: "List of gateways",
      propertyOrder: 2,
    },
    allowing_inbound: {
      type: "boolean",
      title: "Allow Inbound",
      widget: "checkbox",
      help: "Check to enable inbound calls and SMS. Otherwise, disable.",
      propertyOrder: 3,
    },
    allowing_outbound: {
      type: "boolean",
      title: "Allow Outbound",
      widget: "checkbox",
      help: "Check to enable outbound calls and SMS. Otherwise, disable.",
      propertyOrder: 4,
    },
  },
  required: ["allowing_inbound", "allowing_outbound"],
  operations: [
    {
      title: "Edit",
      is_standard: true,
      method: "PATCH",
      key: "edit",
      route_suffix: "",
      visible: true,
    },
  ],
};

const InternalGatewayTableSchema = {
  type: "Gateway",
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
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "bool",
      label: "Supporting Calls",
      property_name: "supporting_calls",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "bool",
      label: "Supporting SMS",
      property_name: "supporting_sms",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Currency",
      property_name: "currency",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "status",
      label: "Status",
      property_name: "active_status",
      filterable: false,
      sortable: false,
      visible: true,
    },
  ],
  operations: [],
  size: 6,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: true,
};

const InternalGateways = {
  type: "array",
  $ref: "#/components/schemas/InternalGatewayTableSchema",
};

module.exports = {
  InteralGatewayFormSchema,
  InternalGatewayTableSchema,
  InternalGateways,
};
