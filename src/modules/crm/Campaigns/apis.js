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
                summary: "Get all client user group in system",
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
                summary: "Creates a campaigns in system",
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
                summary: "Deletes a Campaigns group in system",
                parameters: [createPathParameter(campaignIdParam)],
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
        endpoint: "/Campaigns/{campaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["campaigns"],
                summary: "Update a Campaigns in system",
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
};
// campaigns
module.exports = paths;

