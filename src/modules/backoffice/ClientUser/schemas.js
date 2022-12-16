const {
  timezone_enum_titles,
  timezone_enum,
} = require("../../../constants/timezone");
const {
  user_groups_enum_titles,
  user_groups_enum,
} = require("../../../constants/user_groups");

const ClientUser = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "User's name",
      minLength: "1",
      propertyOrder: 1,
    },
    second_name: {
      type: "string",
      title: "Second Name",
      propertyOrder: 2,
    },
    preferred_name: {
      type: "string",
      title: "Preferred Name",
      propertyOrder: 3,
    },
    last_name: {
      type: "string",
      title: "Last Name",
      propertyOrder: 4,
    },
    gender: {
      enum: ["female", "male", "n/a"],
      enum_titles: ["Female", "Male", "N/A"],
      type: "string",
      title: "Gender",
      propertyOrder: 5,
    },
    phone_number: {
      type: "string",
      title: "Phone Number",
      help: "Enter a valid phone number.",
      propertyOrder: 6,
    },
    username: {
      type: "string",
      title: "Username",
      attr: {
        bulk_editable: false,
      },
      help: "Username to be used when logging into the system",
      minLength: 2,
      propertyOrder: 7,
    },
    plain_password: {
      title: "plain_password",
      type: "object",
      properties: {
        first: {
          type: "string",
          title: "Password",
          widget: "password",
          help: "Password to be used when logging into the system",
          propertyOrder: 1,
        },
        second: {
          type: "string",
          title: "Confirm Password",
          widget: "password",
          propertyOrder: 2,
        },
      },
      required: ["first", "second"],
      attr: {
        disable_wrapper: true,
        bulk_editable: false,
      },
      propertyOrder: 8,
    },
    timezone: {
      enum: timezone_enum,
      enum_titles: timezone_enum_titles,
      type: "string",
      title: "Timezone",
      help: "a default timezone for the user",
      propertyOrder: 9,
    },
    password_login_allowed: {
      type: "boolean",
      title: "Password login allowed",
      widget: "checkbox",
      help: "enable this option to let the user log in to the system with their password",
      propertyOrder: 10,
    },
    email: {
      type: "string",
      title: "Email",
      widget: "email",
      help: "This email address will be used in the system",
      propertyOrder: 11,
    },
    picture: {
      title: "Picture",
      help: "User's picture",
      type: "string",
      multiple: false,
      attr: {
        bulk_editable: false,
      },
      accept: "image/*",
      max_size: 400000,
      widget: "file_widget",
      propertyOrder: 12,
    },
    is_admin: {
      type: "boolean",
      title: "Admin",
      widget: "checkbox",
      help: "If you select this, the account will be added as an Admin account.",
      propertyOrder: 13,
    },
    groups: {
      type: "array",
      title: "User Groups",
      items: {
        enum: user_groups_enum,
        enum_titles: user_groups_enum_titles,
        type: "string",
        title: "prototype",
        attr: {
          "data-plugin-select2": true,
        },
      },
      help: "Select group(s) for the created user",
      propertyOrder: 14,
    },
  },
  required: ["username", "plain_password", "email", "groups"],
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

const ClientUsers = {
  type: "array",
  $ref: "#/components/schemas/ClientUser",
};

module.exports = {
  ClientUser,
  ClientUsers,
};
