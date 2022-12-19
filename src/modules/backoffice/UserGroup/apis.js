const {
  clientIdParam,
  groupIdParam,
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
} = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
  createQueryParameter,
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
        parameters: [
          createPathParameter(clientIdParam),
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create client user group
      ...generatePath({
        method: "post",
        tags: ["client_user_groups"],
        summary: "Creates a new client users in system",
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserGroupFormSchema",
        }),
        parameters: createPathParameter(clientIdParam),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserGroupTableSchema",
          }),
        },
      }),
      // delete client user group
      ...generatePath({
        method: "delete",
        tags: ["client_user_groups"],
        summary: "Deletes a client user group in system",
        parameters: [createPathParameter(clientIdParam)],
        requestBody: createRequestBody({
          description: "Request payload for delete client user group",
          required: true,
          contentRef: "#/components/requestBodies/deleteUserGroupPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserGroupTableSchema",
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
            schemaRef: "#/components/schemas/ClientUserGroupTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserGroupFormSchema",
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
