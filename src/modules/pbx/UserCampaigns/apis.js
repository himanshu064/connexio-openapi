const {
    userCampaignIdParam,
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
        endpoint: "/dialer/user_campaigns",
        methods: {
            // get audios
            ...generatePath({
                method: "get",
                tags: ["dialer_Compaign"],
                summary: "Get all user Campaigns in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserCampaigns",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create user Campaign
            ...generatePath({
                method: "post",
                tags: ["dialer_Compaign"],
                summary: "Creates a new user Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload to create user Campaign",
                    required: true,
                    contentRef: "#/components/schemas/UserCampaignFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserCampaignTableSchema",
                    }),
                },
            }),
            // delete user Campaign
            ...generatePath({
                method: "delete",
                tags: ["dialer_Compaign"],
                summary: "Deletes a user Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete user Campaign",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteUserCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserCampaignTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single user Campaigns
    ...generateEndpoint({
        endpoint: "/dialer/user_campaigns/{userCampaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_Compaign"],
                summary: "Update a user Campaign in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserCampaignTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update user Campaign",
                    required: true,
                    contentRef: "#/components/schemas/UserCampaignFormSchema",
                }),
                parameters: [
                    createPathParameter(userCampaignIdParam),
                ],
            }),
        },
    }),

    // bulk update user Campaign
    ...generateEndpoint({
        endpoint: "/dialer/user_campaigns/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_Compaign"],
                summary: "Bulk Update user Campaigns in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update user Campaigns",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditUserCampaignsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserCampaignFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
