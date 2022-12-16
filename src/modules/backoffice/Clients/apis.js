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
    endpoint: "/clients",
    methods: {
      // get clients
      ...generatePath({
        method: "get",
        tags: ["clients"],
        summary: "Get all clients in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Clients",
          }),
        },
      }),
      // create a new client 
      ...generatePath({
        method: "post",
        tags: ["clients"],
        summary: "Creates a new client in system",
        requestBody: createRequestBody({
          description: "Request payload to create client role",
          required: true,
          contentRef: "#/components/schemas/Client",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/Client",
          }),
        },
      }),
    },
  }),
  // update single client
  ...generateEndpoint({
    endpoint: "/clients/{clientId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["clients"],
        summary: "Update a client role in system",
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/Client",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update client",
          required: true,
          contentRef: "#/components/schemas/Client",
        }),
        parameters: [
          createPathParameter(clientIdParam),
        ],
      }),
    },
  }),
};

module.exports = paths;
