const { clientIdParam, groupIdParam } = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/client_user_groups/{clientId}",
    methods: {
      // get client user groups
      ...generatePath({
        method: "get",
        tags: ["client_user_groups"],
        summary: "Get all client user group in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserGroups",
          }),
        },
        parameters: createPathParameter(clientIdParam),
      }),
      // create client user group
      ...generatePath({
        method: "post",
        tags: ["client_user_groups"],
        summary: "Creates a new client users in system",
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserGroup",
        }),
        parameters: createPathParameter(clientIdParam),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserGroup",
          }),
        },
      }),
      // delete client user group
      ...generatePath({
        method: "delete",
        tags: ["client_user_groups"],
        summary: "Deletes a client user group in system",
        parameters: [
          createPathParameter(clientIdParam),
        ],
        requestBody: createRequestBody({
          description: "Request payload for delete client user group",
          required: true,
          contentRef: "#/components/requestBodies/deleteUserGroupPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserGroup",
          }),
        },
      }),
    },
  }),
  // update single client user group
  ...generateEndpoint({
    endpoint: "/client_user_groups/{clientId}/{groupId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["client_user_groups"],
        summary: "Update a client user group in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserUserGroup",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserGroup",
        }),
        parameters: [
          createPathParameter(clientIdParam),
          createPathParameter(groupIdParam),
        ],
      }),
    },
  }),
};

module.exports = paths;
