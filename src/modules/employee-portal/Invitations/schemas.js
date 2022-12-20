const InvitationFormSchema = {
  title: "",
  type: "object",
  properties: {
    email: {
      type: "string",
      title: "Email",
      widget: "email",
      help: "Enter email",
      propertyOrder: 1,
    },
    target_group: {
      enum: [
        "3",
        "4",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "19",
        "26",
        "27",
        "28",
        "32",
      ],
      enum_titles: [
        "full admin group",
        "employee group",
        "no acis on ws",
        "demo_client_2_client_employee",
        "demo_client_2_client_employee_admin",
        "demo_client_2_client_manager",
        "demo_client_2_client_manager_admin",
        "demo_client_2_staff_manager",
        "created_by_client_admin",
        "test group",
        "Support",
        "Customer Service",
        "netweb",
      ],
      type: "string",
      title: "Target Group",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Select an user target group",
      propertyOrder: 2,
    },
    valid_until: {
      type: "datetime",
      title: "Valid until date",
      attr: {
        min_datetime: "2022-12-20T09:17:48+00:00",
        default_datetime: "2022-12-23T09:17:48+00:00",
      },
      help: "Enter a valid until date",
      propertyOrder: 3,
    },
  },
  required: ["email", "target_group", "valid_until"],
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

const InvitationTableSchema = [
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
    type: "email",
    label: "Email",
    property_name: "email",
    filterable: false,
    sortable: false,
    visible: false,
  },
  {
    type: "UserGroup",
    label: "User Group",
    property_name: "target_group.group_name",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "status",
    label: "Status",
    property_name: "status",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "string",
    label: "Valid Date",
    property_name: "valid_date",
    filterable: false,
    sortable: false,
    visible: true,
  },
];

const Invitations = {
  type: "array",
  $ref: "#/components/schemas/InvitationTableSchema",
};

module.exports = {
  InvitationFormSchema,
  InvitationTableSchema,
  Invitations,
};
