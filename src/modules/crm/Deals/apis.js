const {
    dealIdParam,
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
        endpoint: "/deals",
        methods: {
            // get deals
            ...generatePath({
                method: "get",
                tags: ["deals"],
                summary: "Get all deals in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Deals",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create deals
            ...generatePath({
                method: "post",
                tags: ["deals"],
                summary: "Create a new deal in system",
                requestBody: createRequestBody({
                    description: "Request payload to create deal",
                    required: true,
                    contentRef: "#/components/schemas/DealFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTableSchema",
                    }),
                },
            }),
            // delete deals
            ...generatePath({
                method: "delete",
                tags: ["deals"],
                summary: "Delete a deal in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete deal",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteDealPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single deal
    ...generateEndpoint({
        endpoint: "/deals/{dealId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deals"],
                summary: "Update a deal in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update deal",
                    required: true,
                    contentRef: "#/components/schemas/DealFormSchema",
                }),
                parameters: [
                    createPathParameter(dealIdParam),
                ],
            }),
        },
    }),
    // bulk update deals
    ...generateEndpoint({
        endpoint: "/deals/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deals"],
                summary: "Bulk Update deals in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk deals",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditDealPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
