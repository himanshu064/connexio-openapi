const {
  generateEndpoint,
  generatePath,
  createResponse,
  createRequestBody,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/user/self",
    methods: {
      // update self details
      ...generatePath({
        method: "post",
        tags: ["user_self"],
        summary: "Update the self details",
        requestBody: createRequestBody({
          description: "Request payload to update self details",
          required: true,
          contentRef: "#/components/schemas/UserSelf",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/UserSelf",
          }),
        },
      }),
    },
  }),
  // Update self ui settings
  ...generateEndpoint({
    endpoint: "/user/ui_settings",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["user_self"],
        summary: "Update self ui settings",
        requestBody: createRequestBody({
          description: "Request payload to update self ui settings",
          required: true,
          contentRef: "#/components/schemas/UISettings",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/UISettings",
          }),
        },
      }),
    },
  }),
  // get self notificationsa
  ...generateEndpoint({
    endpoint: "/notifications/all",
    methods: {
      ...generatePath({
        method: "get",
        tags: ["user_self"],
        summary: "Get all user notifications",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Notifications",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
