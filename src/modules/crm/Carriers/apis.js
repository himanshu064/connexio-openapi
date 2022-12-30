const {
    carrierIdParam,
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
        endpoint: "/carriers",
        methods: {
            // get carriers
            ...generatePath({
                method: "get",
                tags: ["carriers"],
                summary: "Get all carriers in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Carriers",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create Carriers
            ...generatePath({
                method: "post",
                tags: ["carriers"],
                summary: "Create a new carriers in system",
                requestBody: createRequestBody({
                    description: "Request payload to create carrier",
                    required: true,
                    contentRef: "#/components/schemas/CarrierFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/CarrierTableSchema",
                    }),
                },
            }),
            // delete carrier
            ...generatePath({
                method: "delete",
                tags: ["carriers"],
                summary: "Delete a Carrier in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete carrier",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteCarrierPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/CarrierTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single carriers
    ...generateEndpoint({
        endpoint: "/carriers/{carrierId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["carriers"],
                summary: "Update a carriers in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CarrierTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update carriers",
                    required: true,
                    contentRef: "#/components/schemas/CarrierFormSchema",
                }),
                parameters: [
                    createPathParameter(carrierIdParam),
                ],
            }),
        },
    }),
    // bulk update contact campaign
    ...generateEndpoint({
        endpoint: "/carriers/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["carriers"],
                summary: "Bulk Update carriers in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk Carriers",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditCarrierPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CarrierFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
