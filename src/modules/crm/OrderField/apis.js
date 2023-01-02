const {
    orderFieldIdParam,
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
        endpoint: "/order_field_presences",
        methods: {
            // get order_field
            ...generatePath({
                method: "get",
                tags: ["order_field"],
                summary: "Get all order fields in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFields",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create order_field
            ...generatePath({
                method: "post",
                tags: ["order_field"],
                summary: "Create a new order field in system",
                requestBody: createRequestBody({
                    description: "Request payload to create order field",
                    required: true,
                    contentRef: "#/components/schemas/OrderFieldFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFieldTableSchema",
                    }),
                },
            }),
            // delete order_field
            ...generatePath({
                method: "delete",
                tags: ["order_field"],
                summary: "Delete a order field in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete order field",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOrderFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFieldTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single order Field
    ...generateEndpoint({
        endpoint: "/order_field_presences/{orderFieldId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["order_field"],
                summary: "Update a order field in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFieldTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update order Field",
                    required: true,
                    contentRef: "#/components/schemas/OrderFieldFormSchema",
                }),
                parameters: [
                    createPathParameter(orderFieldIdParam),
                ],
            }),
        },
    }),
    // bulk update order_field
    ...generateEndpoint({
        endpoint: "/order_field_presences/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["order_field"],
                summary: "Bulk Update order fields in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk order fields",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOrderFieldsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFieldFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
