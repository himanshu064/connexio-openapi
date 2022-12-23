const {
  generateEndpoint,
  generatePath,
  createQueryParameter,
  createResponse,
  createRequestBody,
  createPathParameter,
} = require("../../../utils/path-utils");
const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  accountIdParam,
  serviceIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/services",
    methods: {
      // get services
      ...generatePath({
        method: "get",
        tags: ["services"],
        summary: "Get all services in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Services",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create overtime
      ...generatePath({
        method: "post",
        tags: ["services"],
        summary: "Creates a new service in system",
        requestBody: createRequestBody({
          description: "Request payload to create service",
          required: true,
          contentRef: "#/components/schemas/ServiceFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ServiceTableSchema",
          }),
        },
      }),
      // delete services
      ...generatePath({
        method: "delete",
        tags: ["services"],
        summary: "Delete services in system",
        requestBody: createRequestBody({
          description: "Request payload to delete account",
          required: true,
          contentRef: "#/components/requestBodies/deleteServicesPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ServiceTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/accounts/{serviceId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["services"],
        summary: "Updates a service in system",
        requestBody: createRequestBody({
          description: "Request payload to update account",
          required: true,
          contentRef: "#/components/schemas/ServiceFormSchema",
        }),
        parameters: [createPathParameter(serviceIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ServiceFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/services/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["services"],
        summary: "Bulk Update services in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk services",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditServicesPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ServiceFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
