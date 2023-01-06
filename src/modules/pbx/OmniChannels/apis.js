const {
    omniChannelIdParam,
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
        endpoint: "/ivr/omni_channel/config",
        methods: {
            // get omni channel
            ...generatePath({
                method: "get",
                tags: ["ivr"],
                summary: "Get all omni channels in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OmniChannels",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create omni channel
            ...generatePath({
                method: "post",
                tags: ["ivr"],
                summary: "Creates a new omni channel in system",
                requestBody: createRequestBody({
                    description: "Request payload to create omni channel",
                    required: true,
                    contentRef: "#/components/schemas/OmniChannelFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OmniChannelTableSchema",
                    }),
                },
            }),
            // delete omni channel
            ...generatePath({
                method: "delete",
                tags: ["ivr"],
                summary: "Deletes a omni channel in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete omni channel",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOmniChannelPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OmniChannelTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single omni channel
    ...generateEndpoint({
        endpoint: "/ivr/omni_channel/config/{omniChannelId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["ivr"],
                summary: "Update a omni channel in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OmniChannelTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update omni channel",
                    required: true,
                    contentRef: "#/components/schemas/OmniChannelFormSchema",
                }),
                parameters: [
                    createPathParameter(omniChannelIdParam),
                ],
            }),
        },
    }),

    // bulk update omni channel
    ...generateEndpoint({
        endpoint: "/ivr/omni_channel/config/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["ivr"],
                summary: "Bulk Update omni channel in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk omni channels",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOmniChannelsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OmniChannelFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
