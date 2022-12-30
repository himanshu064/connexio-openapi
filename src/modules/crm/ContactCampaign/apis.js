const {
    contactcampaignIdParam,
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
        endpoint: "/contact_campaign_mapping_rules",
        methods: {
            // get contact campaign
            ...generatePath({
                method: "get",
                tags: ["contact_campaign"],
                summary: "Get all contact campaigns in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactCampaigns",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create Contact Campaign 
            ...generatePath({
                method: "post",
                tags: ["contact_campaign"],
                summary: "Create a new Contact Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload to create Contact Campaigns",
                    required: true,
                    contentRef: "#/components/schemas/ContactCampaignFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactCampaignTableSchema",
                    }),
                },
            }),
            // delete Contact Campaign 
            ...generatePath({
                method: "delete",
                tags: ["contact_campaign"],
                summary: "Delete a Contact Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete Contact Campaign",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteContactCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactCampaignTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single contact campaign
    ...generateEndpoint({
        endpoint: "/contact_campaign_mapping_rules/{contactcampaignId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_campaign"],
                summary: "Update a Contact Campaign in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactCampaignTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update activity",
                    required: true,
                    contentRef: "#/components/schemas/ContactCampaignFormSchema",
                }),
                parameters: [
                    createPathParameter(contactcampaignIdParam),
                ],
            }),
        },
    }),
    // bulk update contact campaign
    ...generateEndpoint({
        endpoint: "/contact_campaign_mapping_rules/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_campaign"],
                summary: "Bulk Update Contact Campaign in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk Contact Campaign",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditContactCampaignPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactCampaignFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
