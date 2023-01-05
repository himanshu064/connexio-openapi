const {
    listDialerQueueIdParam,
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
        endpoint: "/dialer_queues",
        methods: {
            // get activities
            ...generatePath({
                method: "get",
                tags: ["dialer_queues"],
                summary: "Get all dialer queues in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDialerQueues",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create activity
            ...generatePath({
                method: "post",
                tags: ["dialer_queues"],
                summary: "Create a new dialer queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to create dialer queue",
                    required: true,
                    contentRef: "#/components/schemas/ListDialerQueueFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDialerQueueTableSchema",
                    }),
                },
            }),
            // delete dialer queues
            ...generatePath({
                method: "delete",
                tags: ["dialer_queues"],
                summary: "Delete a dialer queue in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete dialer queues",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteListDialerQueuePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDialerQueueTableSchema",
                    }),
                },
            }),
        },
    }),
    // update dialer queues
    ...generateEndpoint({
        endpoint: "/dialer_queues/{listDialerQueueId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_queues"],
                summary: "Update a dialer queue in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDialerQueueTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update dialer queue",
                    required: true,
                    contentRef: "#/components/schemas/ListDialerQueueFormSchema",
                }),
                parameters: [
                    createPathParameter(listDialerQueueIdParam),
                ],
            }),
        },
    }),
    // bulk update activities
    ...generateEndpoint({
        endpoint: "/dialer_queues/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_queues"],
                summary: "Bulk Update dialer queue in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk dialer queue",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditListDialerQueueFormPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDialerQueueFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
