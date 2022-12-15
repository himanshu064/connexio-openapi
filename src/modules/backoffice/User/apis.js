const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
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
        parameters: createPathParameter({
          name: "clientId",
          param_in: "path",
          description: "Id of the client",
          required: true,
          schemaType: "string",
        }),
      }),
      // create client user
      ...generatePath({
        method: "post",
        tags: ["client_user"],
        summary: "Creates a new client users in system",
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUser",
        }),
        parameters: createPathParameter({
          name: "clientId",
          param_in: "path",
          description: "Id of the client",
          required: true,
          schemaType: "string",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ClientUser",
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
            schemaRef: "#/components/schemas/ClientUser",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to create client user",
          required: true,
          contentRef: "#/components/schemas/ClientUser",
        }),
        parameters: [
          createPathParameter({
            name: "clientId",
            param_in: "path",
            description: "Id of the client",
            required: true,
            schemaType: "string",
          }),
          createPathParameter({
            name: "userId",
            param_in: "path",
            description: "Id of the user",
            required: true,
            schemaType: "string",
          }),
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
          createPathParameter({
            name: "clientId",
            param_in: "path",
            description: "Id of the client",
            required: true,
            schemaType: "string",
          }),
          createPathParameter({
            name: "userId",
            param_in: "path",
            description: "Id of the user",
            required: true,
            schemaType: "string",
          }),
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
            schemaRef: "#/components/schemas/ClientUser",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
