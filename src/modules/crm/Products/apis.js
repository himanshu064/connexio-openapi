const {
    productIdParam,
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
        endpoint: "/products",
        methods: {
            // get products
            ...generatePath({
                method: "get",
                tags: ["products"],
                summary: "Get all products in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Products",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create product
            ...generatePath({
                method: "post",
                tags: ["products"],
                summary: "Create a new product in system",
                requestBody: createRequestBody({
                    description: "Request payload to create product",
                    required: true,
                    contentRef: "#/components/schemas/ProductFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductTableSchema",
                    }),
                },
            }),
            // delete product
            ...generatePath({
                method: "delete",
                tags: ["products"],
                summary: "Delete a product in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete product",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteProductPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single order
    ...generateEndpoint({
        endpoint: "/products/{productId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["products"],
                summary: "Update a product in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update product",
                    required: true,
                    contentRef: "#/components/schemas/ProductFormSchema",
                }),
                parameters: [
                    createPathParameter(productIdParam),
                ],
            }),
        },
    }),
    // bulk update products
    ...generateEndpoint({
        endpoint: "/products/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["products"],
                summary: "Bulk Update products in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk products",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditProductPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
