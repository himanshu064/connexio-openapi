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
  vacationTypeIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/vacation_types",
    methods: {
      // get vacations
      ...generatePath({
        method: "get",
        tags: ["vacation_types"],
        summary: "Get all vacation types in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationTypes",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create vacation_types
      ...generatePath({
        method: "post",
        tags: ["vacation_types"],
        summary: "Creates a new vacation type in system",
        requestBody: createRequestBody({
          description: "Request payload to create vacation",
          required: true,
          contentRef: "#/components/schemas/VacationTypeFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationTypeTableSchema",
          }),
        },
      }),
      // delete services
      ...generatePath({
        method: "delete",
        tags: ["vacation_types"],
        summary: "Delete vacation type in system",
        requestBody: createRequestBody({
          description: "Request payload to delete vacation type",
          required: true,
          contentRef: "#/components/requestBodies/deleteVacationTypesPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationTypeTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/vacation_types/{vacationTypeId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["vacation_types"],
        summary: "Updates a vacation in system",
        requestBody: createRequestBody({
          description: "Request payload to update vacation",
          required: true,
          contentRef: "#/components/schemas/VacationTypeFormSchema",
        }),
        parameters: [createPathParameter(vacationTypeIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationTypeFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/vacation_types/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["vacation_types"],
        summary: "Bulk Update vacation types in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk vacation types",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditVacationTypesPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationTypeFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
