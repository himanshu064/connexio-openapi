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
    endpoint: "/vacations",
    methods: {
      // get vacations
      ...generatePath({
        method: "get",
        tags: ["vacations"],
        summary: "Get all vacations in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationList",
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
        tags: ["vacations"],
        summary: "Creates a new vacation in system",
        requestBody: createRequestBody({
          description: "Request payload to create vacation",
          required: true,
          contentRef: "#/components/schemas/VacationListFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationListTableSchema",
          }),
        },
      }),
      // delete services
      ...generatePath({
        method: "delete",
        tags: ["vacations"],
        summary: "Delete vacations in system",
        requestBody: createRequestBody({
          description: "Request payload to delete account",
          required: true,
          contentRef: "#/components/requestBodies/deleteVacationListPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationListTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/vacations/{vacationId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["vacations"],
        summary: "Updates a vacation in system",
        requestBody: createRequestBody({
          description: "Request payload to update vacation",
          required: true,
          contentRef: "#/components/schemas/VacationListFormSchema",
        }),
        parameters: [createPathParameter(vacationIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationListFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/vacations/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["vacations"],
        summary: "Bulk Update vacations in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk vacations",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditVacationListPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationListFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
