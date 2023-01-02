const {
    dealTypeIdParam,
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
        endpoint: "/deal_types",
        methods: {
            // get deal_types
            ...generatePath({
                method: "get",
                tags: ["deal_types"],
                summary: "Get all deal types in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTypes",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create deal_types
            ...generatePath({
                method: "post",
                tags: ["deal_types"],
                summary: "Create a new deal type in system",
                requestBody: createRequestBody({
                    description: "Request payload to create deal type",
                    required: true,
                    contentRef: "#/components/schemas/DealTypeFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTypeTableSchema",
                    }),
                },
            }),
            // delete deal_types
            ...generatePath({
                method: "delete",
                tags: ["deal_types"],
                summary: "Delete a deal type in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete deal type",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteDealTypePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTypeTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single deal type
    ...generateEndpoint({
        endpoint: "/deal_types/{dealTypeId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_types"],
                summary: "Update a deal type in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTypeTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update deal type",
                    required: true,
                    contentRef: "#/components/schemas/DealTypeFormSchema",
                }),
                parameters: [
                    createPathParameter(dealTypeIdParam),
                ],
            }),
        },
    }),
    // bulk update deal_types
    ...generateEndpoint({
        endpoint: "/deal_types/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_types"],
                summary: "Bulk Update deal types in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk deal types",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditDealTypesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealTypeFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
