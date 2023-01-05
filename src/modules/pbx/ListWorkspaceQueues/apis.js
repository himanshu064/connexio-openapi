const {
    listWorkspaceQueueIdParam,
    paginationLimitQuery,
    paginationOffsetQuery,
    searchQuery,
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
        endpoint: "/workspace_queues",
        methods: {
            // get list_workspace_queues
            ...generatePath({
                method: "get",
                tags: ["workspace_queues"],
                summary: "Get all list workspace queues in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListWorkspaceQueues",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create list_workspace_queue
            ...generatePath({
                method: "post",
                tags: ["workspace_queues"],
                summary: "Create a new list workspace queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to create list workspace queue",
                    required: true,
                    contentRef: "#/components/schemas/ListWorkspaceQueueFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListWorkspaceQueueTableSchema",
                    }),
                },
            }),
            // delete list_workspace_queue
            ...generatePath({
                method: "delete",
                tags: ["workspace_queues"],
                summary: "Delete a list workspace queue in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete list workspace queue",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteListWorkspaceQueuePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListWorkspaceQueueTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single list_workspace_queue
    ...generateEndpoint({
        endpoint: "/workspace_queues/{listWorkspaceQueueId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["workspace_queues"],
                summary: "Update a list workspace queue in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListWorkspaceQueueTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update list workspace queue",
                    required: true,
                    contentRef: "#/components/schemas/ListWorkspaceQueueFormSchema",
                }),
                parameters: [
                    createPathParameter(listWorkspaceQueueIdParam),
                ],
            }),
        },
    }),
    // bulk update list workspace queue
    ...generateEndpoint({
        endpoint: "/workspace_queues/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["workspace_queues"],
                summary: "Bulk Update list workspace queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk list workspace queue",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditListWorkspaceQueuePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListWorkspaceQueueFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
