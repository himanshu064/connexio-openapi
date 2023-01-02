const {
    leadStatusIdParam,
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
        endpoint: "/lead_statuses",
        methods: {
            // get lead_statuses
            ...generatePath({
                method: "get",
                tags: ["lead_statuses"],
                summary: "Get all lead statuses in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadStatuses",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create lead_statuses
            ...generatePath({
                method: "post",
                tags: ["lead_statuses"],
                summary: "Create a new lead status in system",
                requestBody: createRequestBody({
                    description: "Request payload to create lead status",
                    required: true,
                    contentRef: "#/components/schemas/LeadStatusFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadStatusTableSchema",
                    }),
                },
            }),
            // delete lead_statuses
            ...generatePath({
                method: "delete",
                tags: ["lead_statuses"],
                summary: "Delete a lead status in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete lead status",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteLeadStatusPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadStatusTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single lead status
    ...generateEndpoint({
        endpoint: "/lead_statuses/{leadStatusId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["lead_statuses"],
                summary: "Update a lead status in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadStatusTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update lead status",
                    required: true,
                    contentRef: "#/components/schemas/LeadStatusFormSchema",
                }),
                parameters: [
                    createPathParameter(leadStatusIdParam),
                ],
            }),
        },
    }),
    // bulk update lead_statuses
    ...generateEndpoint({
        endpoint: "/lead_statuses/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["lead_statuses"],
                summary: "Bulk Update lead statuses in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk lead statuses",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditLeadStatusesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/LeadStatusFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
