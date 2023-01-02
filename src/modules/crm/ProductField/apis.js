const {
    productFieldIdParam,
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
        endpoint: "/product_field_presences",
        methods: {
            // get product_field
            ...generatePath({
                method: "get",
                tags: ["product_field"],
                summary: "Get all product fields in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFields",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create product_field
            ...generatePath({
                method: "post",
                tags: ["product_field"],
                summary: "Create a new product field in system",
                requestBody: createRequestBody({
                    description: "Request payload to create product field",
                    required: true,
                    contentRef: "#/components/schemas/ProductFieldFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFieldTableSchema",
                    }),
                },
            }),
            // delete product_field
            ...generatePath({
                method: "delete",
                tags: ["product_field"],
                summary: "Delete a product field in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete product field",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteProductFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFieldTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single product_field
    ...generateEndpoint({
        endpoint: "/product_field_presences/{productFieldId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["product_field"],
                summary: "Update a product field in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFieldTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update product field",
                    required: true,
                    contentRef: "#/components/schemas/ProductFieldFormSchema",
                }),
                parameters: [
                    createPathParameter(productFieldIdParam),
                ],
            }),
        },
    }),
    // bulk update product field
    ...generateEndpoint({
        endpoint: "/product_field_presences/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["product_field"],
                summary: "Bulk Update product field in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk product fields",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditProductFieldsPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ProductFieldFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
