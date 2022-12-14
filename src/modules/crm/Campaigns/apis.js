const {
    campaignIdParam,
    campaignId,
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
        endpoint: "/campaigns",
        methods: {
            // get Campaigns 
            ...generatePath({
                method: "get",
                tags: ["campaigns"],
                summary: "Get all Campaigns group in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Campaigns",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create campaigns group
            ...generatePath({
                method: "post",
                tags: ["campaigns"],
                summary: "Create a new Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload to create campaigns",
                    required: true,
                    contentRef: "#/components/schemas/CampaignFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignTableSchema",
                    }),
                },
            }),
            // delete Campaigns group
            ...generatePath({
                method: "delete",
                tags: ["campaigns"],
                summary: "Delete a Campaign group in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete Campaign group",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single Campaigns group
    ...generateEndpoint({
        endpoint: "/campaigns/{campaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["campaigns"],
                summary: "Update a Campaign in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update Campaigns",
                    required: true,
                    contentRef: "#/components/schemas/CampaignFormSchema",
                }),
                parameters: [
                    createPathParameter(campaignIdParam),
                ],
            }),
        },
    }),
    // bulk update Campaigns group
    ...generateEndpoint({
        endpoint: "/campaigns/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["campaigns"],
                summary: "Bulk Update campaigns in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk campaigns",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;

