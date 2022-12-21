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
  compensationConfigurationIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/compensation_configurations",
    methods: {
      // get overtimes
      ...generatePath({
        method: "get",
        tags: ["compensation_configurations"],
        summary: "Get all compensation_configurations in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ConfigurationTemplates",
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
        tags: ["compensation_configurations"],
        summary: "Creates a new compensation_configurations in system",
        requestBody: createRequestBody({
          description: "Request payload to create compensation_configurations",
          required: true,
          contentRef: "#/components/schemas/ConfigurationTemplateFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ConfigurationTemplateTableSchema",
          }),
        },
      }),
      // delete overtime
      ...generatePath({
        method: "delete",
        tags: ["compensation_configurations"],
        summary: "Deletes a compensation_configurations in system",
        requestBody: createRequestBody({
          description: "Request payload to delete compensation_configurations",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteConfigurationTemplatePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ConfigurationTemplateTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/compensation_configurations/{compensationConfigurationId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["compensation_configurations"],
        summary: "Updates a compensation_configurations in system",
        requestBody: createRequestBody({
          description: "Request payload to update compensation_configurations",
          required: true,
          contentRef: "#/components/schemas/ConfigurationTemplateFormSchema",
        }),
        parameters: [createPathParameter(compensationConfigurationIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ConfigurationTemplateFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/compensation_configurations/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["compensation_configurations"],
        summary: "Bulk Update compensation_configurations in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update bulk compensation_configurations",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditConfigurationTemplatePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ConfigurationTemplateFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
