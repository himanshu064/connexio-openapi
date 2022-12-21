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
  overtimeIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/overtimes",
    methods: {
      // get overtimes
      ...generatePath({
        method: "get",
        tags: ["overtimes"],
        summary: "Get all overtimes in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Overtimes",
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
        tags: ["overtimes"],
        summary: "Creates a new overtime in system",
        requestBody: createRequestBody({
          description: "Request payload to create overtime",
          required: true,
          contentRef: "#/components/schemas/OvertimeFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OvertimeTableSchema",
          }),
        },
      }),
      // delete overtime
      ...generatePath({
        method: "delete",
        tags: ["overtimes"],
        summary: "Deletes a overtime in system",
        requestBody: createRequestBody({
          description: "Request payload to delete overtime",
          required: true,
          contentRef: "#/components/requestBodies/deleteOvertimePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OvertimeTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/overtimes/{overtimeId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["overtimes"],
        summary: "Updates a ovetime in system",
        requestBody: createRequestBody({
          description: "Request payload to update overtime",
          required: true,
          contentRef: "#/components/schemas/OvertimeFormSchema",
        }),
        parameters: [createPathParameter(overtimeIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OvertimeFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/overtimes/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["overtimes"],
        summary: "Bulk Update overtime in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk overtime",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditOvertimePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OvertimeFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
