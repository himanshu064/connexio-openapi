const {
    businessCategoryIdParam,
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
        endpoint: "/business_categories",
        methods: {
            // get business_categories
            ...generatePath({
                method: "get",
                tags: ["business_categories"],
                summary: "Get all business category in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/BusinessCategories",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create activity
            ...generatePath({
                method: "post",
                tags: ["business_categories"],
                summary: "Create a new business category in system",
                requestBody: createRequestBody({
                    description: "Request payload to create business category",
                    required: true,
                    contentRef: "#/components/schemas/BusinessCategoryFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/BusinessCategoryTableSchema",
                    }),
                },
            }),
            // delete business_categories
            ...generatePath({
                method: "delete",
                tags: ["business_categories"],
                summary: "Delete a business category in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete business category",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteBusinessCategoryPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/BusinessCategoryTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single business_categories
    ...generateEndpoint({
        endpoint: "/business_categories/{businessCategoryId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["business_categories"],
                summary: "Update a business category in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/BusinessCategoryTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update business category",
                    required: true,
                    contentRef: "#/components/schemas/BusinessCategoryFormSchema",
                }),
                parameters: [
                    createPathParameter(businessCategoryIdParam),
                ],
            }),
        },
    }),
    // bulk update activities
    ...generateEndpoint({
        endpoint: "/business_categories/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["business_categories"],
                summary: "Bulk Update business categories in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk business categories",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditBusinessCategoriesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/BusinessCategoryFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
