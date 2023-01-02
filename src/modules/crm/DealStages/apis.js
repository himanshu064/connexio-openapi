const {
    dealStageIdParam,
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
        endpoint: "/deal_stages",
        methods: {
            // get deal_stages
            ...generatePath({
                method: "get",
                tags: ["deal_stages"],
                summary: "Get all deal stages in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealStages",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create deal_stages
            ...generatePath({
                method: "post",
                tags: ["deal_stages"],
                summary: "Create a new deal stage in system",
                requestBody: createRequestBody({
                    description: "Request payload to create deal stage",
                    required: true,
                    contentRef: "#/components/schemas/DealStageFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealStageTableSchema",
                    }),
                },
            }),
            // delete deal_stages
            ...generatePath({
                method: "delete",
                tags: ["deal_stages"],
                summary: "Delete a deal stage in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete deal stage",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteDealStagePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealStageTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single deal_stages
    ...generateEndpoint({
        endpoint: "/deal_stages/{dealStageId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_stages"],
                summary: "Update a deal stage in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealStageTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update deal stage",
                    required: true,
                    contentRef: "#/components/schemas/DealStageFormSchema",
                }),
                parameters: [
                    createPathParameter(dealStageIdParam),
                ],
            }),
        },
    }),
    // bulk update deal_stages
    ...generateEndpoint({
        endpoint: "/deal_stages/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["deal_stages"],
                summary: "Bulk Update deal stages in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk deal stages",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditDealStagesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DealStageFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
