const {
    dealFieldIdParam,
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
        endpoint: "/deal_field_presences",
        methods: {
            // get deal_field
            ...generatePath({
                method: "get",
                tags: ["deal_field"],
                summary: "Get all deal fields in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFields",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create deal_field_presences
            ...generatePath({
                method: "post",
                tags: ["deal_field"],
                summary: "Create a new deal field in system",
                requestBody: createRequestBody({
                    description: "Request payload to create deal field",
                    required: true,
                    contentRef: "#/components/schemas/DealFieldFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFieldTableSchema",
                    }),
                },
            }),
            // delete deal_field_presences
            ...generatePath({
                method: "delete",
                tags: ["deal_field"],
                summary: "Delete a deal field in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete deal field",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteDealFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFieldTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single deal_field_presences
    ...generateEndpoint({
        endpoint: "/deal_field_presences/{dealFieldId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_field"],
                summary: "Update a deal field in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFieldTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update deal field",
                    required: true,
                    contentRef: "#/components/schemas/DealFieldFormSchema",
                }),
                parameters: [
                    createPathParameter(dealFieldIdParam),
                ],
            }),
        },
    }),
    // bulk update deal_field_presences
    ...generateEndpoint({
        endpoint: "/deal_field_presences/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_field"],
                summary: "Bulk Update activities in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk deal fields",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditDealFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealFieldFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
