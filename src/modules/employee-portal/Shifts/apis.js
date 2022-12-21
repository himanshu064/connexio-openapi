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
  shiftIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/shifts",
    methods: {
      // get links
      ...generatePath({
        method: "get",
        tags: ["shifts"],
        summary: "Get all shifts in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Shifts",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create link
      ...generatePath({
        method: "post",
        tags: ["shifts"],
        summary: "Creates a new shifts in system",
        requestBody: createRequestBody({
          description: "Request payload to create shifts",
          required: true,
          contentRef: "#/components/schemas/ShiftFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ShiftTableSchema",
          }),
        },
      }),
      // delete link
      ...generatePath({
        method: "delete",
        tags: ["shifts"],
        summary: "Deletes an shift in system",
        requestBody: createRequestBody({
          description: "Request payload to delete shift",
          required: true,
          contentRef: "#/components/requestBodies/deleteShiftPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ShiftTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/shifts/{shiftId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["shifts"],
        summary: "Updates a shift in system",
        requestBody: createRequestBody({
          description: "Request payload to update shift",
          required: true,
          contentRef: "#/components/schemas/ShiftFormSchema",
        }),
        parameters: [createPathParameter(shiftIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ShiftTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/shifts/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["shifts"],
        summary: "Bulk Update shift in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk shifts",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditShiftPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/LinkFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
