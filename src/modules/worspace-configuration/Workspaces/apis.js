const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  workspaceIdParam,
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
    endpoint: "/workspaces",
    methods: {
      // get workspaces
      ...generatePath({
        method: "get",
        tags: ["workspaces"],
        summary: "Get all workspaces in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Workspaces",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create workspaces
      ...generatePath({
        method: "post",
        tags: ["workspaces"],
        summary: "Create a new workspace in system",
        requestBody: createRequestBody({
          description: "Request payload to create workspace",
          required: true,
          contentRef: "#/components/schemas/WorkspacesFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/WorkspacesTableSchema",
          }),
        },
      }),
      // delete workspaces
      ...generatePath({
        method: "delete",
        tags: ["workspaces"],
        summary: "Delete a workspaces in system",
        requestBody: createRequestBody({
          description: "Request payload for delete workspaces",
          required: true,
          contentRef: "#/components/requestBodies/deleteWorkspacesPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/WorkspacesTableSchema",
          }),
        },
      }),
    },
  }),
  // update single workspaces
  ...generateEndpoint({
    endpoint: "/workspaces/{workspaceId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["workspaces"],
        summary: "Update workspace status in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WorkspacesTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update workspace",
          required: true,
          contentRef: "#/components/schemas/WorkspacesFormSchema",
        }),
        parameters: [createPathParameter(workspaceIdParam)],
      }),
    },
  }),
  // bulk update queue_configurations
  ...generateEndpoint({
    endpoint: "/workspaces/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["workspaces"],
        summary: "Bulk Update workspace in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update workspace",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditWorkspacesPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WorkspacesFormSchema",
          }),
        },
      }),
    },
  }),
};
// campaigns
module.exports = paths;
