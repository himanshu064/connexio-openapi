const {
  clientIdParam,
  userIdParam,
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
    endpoint: "/client_users/{clientId}",
    methods: {
      // get client users
      ...generatePath({
        method: "get",
        tags: ["client_user"],
        summary: "Get all client users in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUsers",
          }),
        },
        parameters: [
          createPathParameter(clientIdParam),
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create client user
      ...generatePath({
        method: "post",
        tags: ["client_user"],
        summary: "Creates a new client users in system",
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserFormSchema",
        }),
        parameters: createPathParameter(clientIdParam),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserTableSchema",
          }),
        },
      }),
    },
  }),
  // update single client user
  ...generateEndpoint({
    endpoint: "/client_users/{clientId}/{userId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["client_user"],
        summary: "Update a client user in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUserFormSchema",
        }),
        parameters: [
          createPathParameter(clientIdParam),
          createPathParameter(userIdParam),
        ],
      }),
    },
  }),
  // deactivate client user
  ...generateEndpoint({
    endpoint: "/client_users/{clientId}/{userId}/deactivate_user",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["client_user"],
        summary: "Deactivate a client user in system",
        parameters: [
          createPathParameter(clientIdParam),
          createPathParameter(userIdParam),
        ],
        requestBody: createRequestBody({
          description: "Request payload to deactivate client user",
          required: true,
          contentRef: "#/components/requestBodies/DeactivateClientUser",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUserTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
