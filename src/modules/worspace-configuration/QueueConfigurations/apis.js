const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  queueConfigurationIdParam,
} = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
  createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/universal_queue_configurations",
    methods: {
      // get queue_configurations
      ...generatePath({
        method: "get",
        tags: ["queue_configurations"],
        summary: "Get all queue configurations in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/QueueConfigurations",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create queue_configurations
      ...generatePath({
        method: "post",
        tags: ["queue_configurations"],
        summary: "Create a new queue configuration in system",
        requestBody: createRequestBody({
          description: "Request payload to create queue configuration",
          required: true,
          contentRef: "#/components/schemas/QueueConfigurationFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/QueueConfigurationTableSchema",
          }),
        },
      }),
      // delete queue_configurations
      ...generatePath({
        method: "delete",
        tags: ["queue_configurations"],
        summary: "Delete a queue configuration in system",
        requestBody: createRequestBody({
          description: "Request payload for delete queue configuration",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteQueueConfigurationPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/QueueConfigurationTableSchema",
          }),
        },
      }),
    },
  }),
  // update single queue_configurations
  ...generateEndpoint({
    endpoint: "/universal_queue_configurations/{queueConfigurationId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["queue_configurations"],
        summary: "Update a queue configuration in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/QueueConfigurationTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update queue configuration",
          required: true,
          contentRef: "#/components/schemas/QueueConfigurationFormSchema",
        }),
        parameters: [createPathParameter(queueConfigurationIdParam)],
      }),
    },
  }),
  // bulk update queue_configurations
  ...generateEndpoint({
    endpoint: "/universal_queue_configurations/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["queue_configurations"],
        summary: "Bulk Update queue configurations in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk deals",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditQueueConfigurationPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/QueueConfigurationFormSchema",
          }),
        },
      }),
    },
  }),
};
// campaigns
module.exports = paths;
