const {
    leadIdParam,
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
        endpoint: "/leads",
        methods: {
            // get Leads
            ...generatePath({
                method: "get",
                tags: ["leads"],
                summary: "Get all leads in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Leads",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create Lead
            ...generatePath({
                method: "post",
                tags: ["leads"],
                summary: "Creates a new Leads in system",
                requestBody: createRequestBody({
                    description: "Request payload to create Leads",
                    required: true,
                    contentRef: "#/components/schemas/LeadFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadTableSchema",
                    }),
                },
            }),
            // delete Lead
            ...generatePath({
                method: "delete",
                tags: ["leads"],
                summary: "Deletes a Leads in system",
                parameters: [createPathParameter(leadIdParam)],
                requestBody: createRequestBody({
                    description: "Request payload for delete lead",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteLeadPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single Leads
    ...generateEndpoint({
        endpoint: "/leads/{leadId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["leads"],
                summary: "Update a lead in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update lead",
                    required: true,
                    contentRef: "#/components/schemas/LeadFormSchema",
                }),
                parameters: [
                    createPathParameter(leadIdParam),
                ],
            }),
        },
    }),

    // bulk update Leads
    ...generateEndpoint({
        endpoint: "/leads/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["leads"],
                summary: "Bulk Update Leads in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk leads",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditLeadPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
