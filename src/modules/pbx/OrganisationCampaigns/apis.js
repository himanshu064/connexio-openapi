const {
    organizationCampaignIdParam,
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
        endpoint: "/organization_campaigns",
        methods: {
            // get audios
            ...generatePath({
                method: "get",
                tags: ["dialer_Compaign"],
                summary: "Get all organization campaigns in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganisationCampaigns",
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
                tags: ["dialer_Compaign"],
                summary: "Creates a new organization campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload to create organization campaign",
                    required: true,
                    contentRef: "#/components/schemas/OrganisationCampaignFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganisationCampaignTableSchema",
                    }),
                },
            }),
            // delete organization campaign
            ...generatePath({
                method: "delete",
                tags: ["dialer_Compaign"],
                summary: "Deletes a organization campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete organization campaign",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOrganisationCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganisationCampaignTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single audio_store
    ...generateEndpoint({
        endpoint: "/organization_campaigns/{organizationCampaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_Compaign"],
                summary: "Update a organization campaign in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganisationCampaignTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update organization campaign",
                    required: true,
                    contentRef: "#/components/schemas/OrganisationCampaignFormSchema",
                }),
                parameters: [
                    createPathParameter(organizationCampaignIdParam),
                ],
            }),
        },
    }),

    // bulk update organization campaign
    ...generateEndpoint({
        endpoint: "/organization_campaigns/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dialer_Compaign"],
                summary: "Bulk Update organization campaigns in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk organization campaigns",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOrganisationCampaignsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganisationCampaignFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
