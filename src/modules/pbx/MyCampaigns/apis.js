const {
    myCampaignIdParam,
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
        endpoint: "/dialer/my/campaigns",
        methods: {
            // get audios
            ...generatePath({
                method: "get",
                tags: ["dialer_my_campaigns"],
                summary: "Get all dialer my campaigns in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyCampaigns",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create audios
            ...generatePath({
                method: "post",
                tags: ["audio_store"],
                summary: "Creates a new dialer_my_campaigns in system",
                requestBody: createRequestBody({
                    description: "Request payload to create dialer_my_campaigns",
                    required: true,
                    contentRef: "#/components/schemas/MyCampaignFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyCampaignTableSchema",
                    }),
                },
            }),
            // delete audios
            ...generatePath({
                method: "delete",
                tags: ["audio_store"],
                summary: "Deletes a dialer_my_campaigns in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete dialer_my_campaigns",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteMyCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyCampaignTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single dialer_my_campaigns
    ...generateEndpoint({
        endpoint: "/dialer/my/campaigns/{myCampaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["audio_store"],
                summary: "Update a dialer_my_campaigns in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyCampaignTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update dialer_my_campaigns",
                    required: true,
                    contentRef: "#/components/schemas/MyCampaignFormSchema",
                }),
                parameters: [
                    createPathParameter(myCampaignIdParam),
                ],
            }),
        },
    }),

    // bulk update dialer_my_campaigns  
    ...generateEndpoint({
        endpoint: "/dialer/my/campaigns/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["audio_store"],
                summary: "Bulk Update audios in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk audios",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditMyCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyCampaignFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
