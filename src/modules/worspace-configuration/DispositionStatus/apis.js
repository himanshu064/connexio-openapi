const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  dispositionStatusIdParam,
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
    endpoint: "/disposition_statuses",
    methods: {
      // get disposition_statuses
      ...generatePath({
        method: "get",
        tags: ["disposition_statuses"],
        summary: "Get all disposition statuses in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DispositionStatuses",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create disposition_statuses
      ...generatePath({
        method: "post",
        tags: ["disposition_statuses"],
        summary: "Create a new disposition status in system",
        requestBody: createRequestBody({
          description: "Request payload to create disposition status",
          required: true,
          contentRef: "#/components/schemas/DispositionStatusFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/DispositionStatusTableSchema",
          }),
        },
      }),
      // delete disposition_statuses
      ...generatePath({
        method: "delete",
        tags: ["disposition_statuses"],
        summary: "Delete a disposition status in system",
        requestBody: createRequestBody({
          description: "Request payload for delete disposition status",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteDispositionStatusPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/DispositionStatusTableSchema",
          }),
        },
      }),
    },
  }),
  // update single disposition_statuses
  ...generateEndpoint({
    endpoint: "/disposition_statuses/{dispositionStatusId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["disposition_statuses"],
        summary: "Update disposition status in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DispositionStatusTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update disposition status",
          required: true,
          contentRef: "#/components/schemas/DispositionStatusFormSchema",
        }),
        parameters: [createPathParameter(dispositionStatusIdParam)],
      }),
    },
  }),
  // bulk update queue_configurations
  ...generateEndpoint({
    endpoint: "/disposition_statuses/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["disposition_statuses"],
        summary: "Bulk Update disposition status in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update disposition status",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditDispositionStatusPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DispositionStatusFormSchema",
          }),
        },
      }),
    },
  }),
};
// campaigns
module.exports = paths;
