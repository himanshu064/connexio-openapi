const {
    productCategoryIdParam,
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
        endpoint: "/product_categories",
        methods: {
            // get product_categories
            ...generatePath({
                method: "get",
                tags: ["product_categories"],
                summary: "Get all product categories in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductCategories",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create product_categories
            ...generatePath({
                method: "post",
                tags: ["product_categories"],
                summary: "Create a new product category in system",
                requestBody: createRequestBody({
                    description: "Request payload to create product category",
                    required: true,
                    contentRef: "#/components/schemas/ProductCategoryFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductCategoryTableSchema",
                    }),
                },
            }),
            // delete product_categories
            ...generatePath({
                method: "delete",
                tags: ["product_categories"],
                summary: "Delete a product category in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete product category",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteProductCategoryPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductCategoryTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single product_categories
    ...generateEndpoint({
        endpoint: "/product_categories/{productCategoryId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["product_categories"],
                summary: "Update a product category in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductCategoryTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update activity",
                    required: true,
                    contentRef: "#/components/schemas/ProductCategoryFormSchema",
                }),
                parameters: [
                    createPathParameter(productCategoryIdParam),
                ],
            }),
        },
    }),
    // bulk update product categories
    ...generateEndpoint({
        endpoint: "/product_categories/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["product_categories"],
                summary: "Bulk Update product categories in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk product categories",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditProductCategoryPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductCategoryFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
