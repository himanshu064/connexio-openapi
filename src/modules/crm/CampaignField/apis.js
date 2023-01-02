const {
    campaignFieldIdParam,
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
        endpoint: "/campaign_field_presences",
        methods: {
            // get campaign_field_presences
            ...generatePath({
                method: "get",
                tags: ["campaign_field"],
                summary: "Get all campaign fields in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFields",
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
                tags: ["campaign_field"],
                summary: "Create a new campaign field in system",
                requestBody: createRequestBody({
                    description: "Request payload to create campaign field",
                    required: true,
                    contentRef: "#/components/schemas/CampaignFieldFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFieldTableSchema",
                    }),
                },
            }),
            // delete activity
            ...generatePath({
                method: "delete",
                tags: ["campaign_field"],
                summary: "Delete a campaign field in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete campaign field",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteCampaignFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFieldTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity
    ...generateEndpoint({
        endpoint: "/campaign_field_presences/{campaignFieldId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["campaign_field"],
                summary: "Update a activity in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFieldTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update activity",
                    required: true,
                    contentRef: "#/components/schemas/CampaignFieldFormSchema",
                }),
                parameters: [
                    createPathParameter(campaignFieldIdParam),
                ],
            }),
        },
    }),
    // bulk update campaign_field_presences
    ...generateEndpoint({
        endpoint: "/campaign_field_presences/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["campaign_field"],
                summary: "Bulk Update campaign fields in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk campaign fields",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditCampaignFieldsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CampaignFieldFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
