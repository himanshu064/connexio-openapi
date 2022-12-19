const {
  timezone_enum,
  timezone_enum_titles,
} = require("../../../constants/timezone");

const UserSelf = {
  title: "",
  type: "object",
  properties: {
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
      propertyOrder: 1,
    },
    timezone: {
      enum: timezone_enum,
      enum_titles: timezone_enum_titles,
      type: "string",
      title: "Timezone",
      help: "a default timezone for the user",
      propertyOrder: 2,
    },
  },
  required: ["plain_password"],
};

const UISettings = {
  title: "",
  type: "object",
  properties: {
    theme: {
      enum: ["purple", "blue", "turquoise"],
      enum_titles: ["Purple", "Blue", "Turquoise"],
      type: "string",
      title: "Theme",
      help: "The theme of the applications",
      propertyOrder: 1,
    },
  },
  required: ["theme"],
};

const Notification = {
  title: "",
  type: "object",
  properties: {
    generated_at: {
      title: "generated_at",
      type: "string",
    },
    id: {
      title: "id",
      type: "integer",
    },
    micro_timestamp: {
      title: "micro_timestamp",
      type: "integer",
    },
    text: {
      title: "text",
      type: "string",
    },
    title: {
      title: "title",
      type: "string",
    },
    type: {
      title: "type",
      type: "string",
    },
  },
};

const Notifications = {
  type: "array",
  $ref: "#/components/schemas/Notification",
};

module.exports = {
  UserSelf,
  UISettings,
  Notification,
  Notifications,
};
