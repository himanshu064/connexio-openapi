const {
    customerIdParam,
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
        endpoint: "/customers",
        methods: {
            // get Customers
            ...generatePath({
                method: "get",
                tags: ["customers"],
                summary: "Get all Customers in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Customers",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create customers 
            ...generatePath({
                method: "post",
                tags: ["customers"],
                summary: "Create a new customer in system",
                requestBody: createRequestBody({
                    description: "Request payload to create customer",
                    required: true,
                    contentRef: "#/components/schemas/CustomerFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/CustomerTableSchema",
                    }),
                },
            }),
            // delete customers
            ...generatePath({
                method: "delete",
                tags: ["customers"],
                summary: "Delete a customer in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete customer",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteCustomerPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/CustomerTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single customer
    ...generateEndpoint({
        endpoint: "/customers/{customerId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["customers"],
                summary: "Update a customer in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CustomerTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update customer",
                    required: true,
                    contentRef: "#/components/schemas/CustomerFormSchema",
                }),
                parameters: [
                    createPathParameter(customerIdParam),
                ],
            }),
        },
    }),
    // bulk update customers
    ...generateEndpoint({
        endpoint: "/customers/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["customers"],
                summary: "Bulk Update customers in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk customers",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditCustomerPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/CustomerFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
