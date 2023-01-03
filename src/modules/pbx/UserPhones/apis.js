const {
    userPhoneIdParam,
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
        endpoint: "/user_phones",
        methods: {
            // get user_phones
            ...generatePath({
                method: "get",
                tags: ["user_phones"],
                summary: "Get all user phones in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserPhones",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create user phone
            ...generatePath({
                method: "post",
                tags: ["user_phones"],
                summary: "Creates a new user phone in system",
                requestBody: createRequestBody({
                    description: "Request payload to create user phone",
                    required: true,
                    contentRef: "#/components/schemas/UserPhoneFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserPhoneTableSchema",
                    }),
                },
            }),
            // delete user phones
            ...generatePath({
                method: "delete",
                tags: ["user_phones"],
                summary: "Deletes a user phone in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete user phone",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteUserPhonePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserPhoneTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single user phone
    ...generateEndpoint({
        endpoint: "/user_phones/{userPhoneId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["user_phones"],
                summary: "Update a user phone in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserPhoneTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update user phone",
                    required: true,
                    contentRef: "#/components/schemas/UserPhoneFormSchema",
                }),
                parameters: [
                    createPathParameter(userPhoneIdParam),
                ],
            }),
        },
    }),

    // bulk update user phones
    ...generateEndpoint({
        endpoint: "/user_phones/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["user_phones"],
                summary: "Bulk Update user phones in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk user phones",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditUserPhonesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserPhoneFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
