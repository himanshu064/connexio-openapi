const {
    channelIdParam,
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
        endpoint: "/channels",
        methods: {
            // get channels
            ...generatePath({
                method: "get",
                tags: ["channels"],
                summary: "Get all channels in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Channels",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create channels
            ...generatePath({
                method: "post",
                tags: ["channels"],
                summary: "Create a new channel in system",
                requestBody: createRequestBody({
                    description: "Request payload to create channel",
                    required: true,
                    contentRef: "#/components/schemas/ChannelFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ChannelTableSchema",
                    }),
                },
            }),
            // delete channels
            ...generatePath({
                method: "delete",
                tags: ["channels"],
                summary: "Delete a channel in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete channel",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteChannelPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ChannelTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity
    ...generateEndpoint({
        endpoint: "/channels/{channelId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["channels"],
                summary: "Update a channel in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ChannelTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update channel",
                    required: true,
                    contentRef: "#/components/schemas/ChannelFormSchema",
                }),
                parameters: [
                    createPathParameter(channelIdParam),
                ],
            }),
        },
    }),
    // bulk update activities
    ...generateEndpoint({
        endpoint: "/channels/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["channels"],
                summary: "Bulk Update channels in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk channels",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditChannelsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ChannelFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
