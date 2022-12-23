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
  vacationIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/vacation_requests",
    methods: {
      // get vacations
      ...generatePath({
        method: "get",
        tags: ["vacation_requests"],
        summary: "Get all vacation requests in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationRequests",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
    },
  }),
  // appove vacations
  ...generateEndpoint({
    endpoint: "/vacation_requests/{vacationId}/approve",
    methods: {
      // get vacations
      ...generatePath({
        method: "post",
        tags: ["vacation_requests"],
        summary: "Approve a vacation request",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationRequestFormSchema",
          }),
        },
        parameters: [createPathParameter(vacationIdParam)],
        requestBody: createRequestBody({
          description: "Request payload to approve vacation",
          required: true,
          contentRef: "#/components/schemas/VacationRequestApproveOrDenySchema",
        }),
      }),
    },
  }),
  // deny vacations
  ...generateEndpoint({
    endpoint: "/vacation_requests/{vacationId}/denied",
    methods: {
      // get vacations
      ...generatePath({
        method: "post",
        tags: ["vacation_requests"],
        summary: "Deny a vacation request",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationRequestFormSchema",
          }),
        },
        parameters: [createPathParameter(vacationIdParam)],
        requestBody: createRequestBody({
          description: "Request payload to approve vacation",
          required: true,
          contentRef: "#/components/schemas/VacationRequestApproveOrDenySchema",
        }),
      }),
    },
  }),
};

module.exports = paths;
