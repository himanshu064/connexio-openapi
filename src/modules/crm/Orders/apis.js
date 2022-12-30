const {
    orderIdParam,
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
        endpoint: "/orders",
        methods: {
            // get orders
            ...generatePath({
                method: "get",
                tags: ["orders"],
                summary: "Get all orders in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Orders",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create order
            ...generatePath({
                method: "post",
                tags: ["orders"],
                summary: "Create a new order in system",
                requestBody: createRequestBody({
                    description: "Request payload to create order",
                    required: true,
                    contentRef: "#/components/schemas/OrderFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderTableSchema",
                    }),
                },
            }),
            // delete order
            ...generatePath({
                method: "delete",
                tags: ["orders"],
                summary: "Delete a order in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete order",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOrderPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single order
    ...generateEndpoint({
        endpoint: "/orders/{orderId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["orders"],
                summary: "Update a order in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update order",
                    required: true,
                    contentRef: "#/components/schemas/OrderFormSchema",
                }),
                parameters: [
                    createPathParameter(orderIdParam),
                ],
            }),
        },
    }),
    // bulk update orders
    ...generateEndpoint({
        endpoint: "/orders/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["orders"],
                summary: "Bulk Update orders in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk orders",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOrderPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrderFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
