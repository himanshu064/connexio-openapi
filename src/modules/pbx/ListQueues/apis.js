const {
    listQueueIdParam,
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
        endpoint: "/queues",
        methods: {
            // get queues
            ...generatePath({
                method: "get",
                tags: ["list_queues"],
                summary: "Get all queues in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListQueues",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create List Queue
            ...generatePath({
                method: "post",
                tags: ["list_queues"],
                summary: "Create a new queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to create List Queue",
                    required: true,
                    contentRef: "#/components/schemas/ListQueueFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListQueueTableSchema",
                    }),
                },
            }),
            // delete List Queue
            ...generatePath({
                method: "delete",
                tags: ["list_queues"],
                summary: "Delete a list queue in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete List Queue",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteListQueuePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListQueueTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single List Queue
    ...generateEndpoint({
        endpoint: "/queues/{listQueueId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["list_queues"],
                summary: "Update a list queue in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListQueueTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update list queue",
                    required: true,
                    contentRef: "#/components/schemas/ListQueueFormSchema",
                }),
                parameters: [
                    createPathParameter(listQueueIdParam),
                ],
            }),
        },
    }),
    // bulk update List Queue
    ...generateEndpoint({
        endpoint: "/queues/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["list_queues"],
                summary: "Bulk Update list queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk list queue",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditListQueuesFormPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListQueueFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
