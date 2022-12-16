const { clientIdParam, groupIdParam, roleIdParam } = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/roles/client/{clientId}",
    methods: {
      // get client roles
      ...generatePath({
        method: "get",
        tags: ["client_roles"],
        summary: "Get all client roles in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Roles",
          }),
        },
        parameters: createPathParameter(clientIdParam),
      }),
      // create client roles
      ...generatePath({
        method: "post",
        tags: ["client_roles"],
        summary: "Creates a new client role in system",
        requestBody: createRequestBody({
          description: "Request payload to create client role",
          required: true,
          contentRef: "#/components/schemas/Role",
        }),
        parameters: createPathParameter(clientIdParam),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/Role",
          }),
        },
      }),
      // delete client roles
      ...generatePath({
        method: "delete",
        tags: ["client_roles"],
        summary: "Deletes a client role in system",
        parameters: [
          createPathParameter(clientIdParam),
        ],
        requestBody: createRequestBody({
          description: "Request payload for delete role",
          required: true,
          contentRef: "#/components/requestBodies/deleteRolePayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/Role",
          }),
        },
      }),
    },
  }),
  // update single client role
  ...generateEndpoint({
    endpoint: "/roles/client/{clientId}/{roleId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["client_roles"],
        summary: "Update a client role in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Role",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update client role",
          required: true,
          contentRef: "#/components/schemas/Role",
        }),
        parameters: [
          createPathParameter(clientIdParam),
          createPathParameter(roleIdParam),
        ],
      }),
    },
  }),
};

module.exports = paths;
