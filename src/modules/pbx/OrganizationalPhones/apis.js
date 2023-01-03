const {
    organizationalPhoneIdParam,
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
        endpoint: "/organisational_phones",
        methods: {
            // get organisational_phone
            ...generatePath({
                method: "get",
                tags: ["organisational_phones"],
                summary: "Get all organisational phones in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationalPhones",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create organisational_phone
            ...generatePath({
                method: "post",
                tags: ["organisational_phones"],
                summary: "Creates a new organisational phone in system",
                requestBody: createRequestBody({
                    description: "Request payload to create organisational phone",
                    required: true,
                    contentRef: "#/components/schemas/OrganizationalPhoneFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationalPhoneTableSchema",
                    }),
                },
            }),
            // delete organisational_phone
            ...generatePath({
                method: "delete",
                tags: ["organisational_phones"],
                summary: "Deletes a organisational phone in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete organisational phone",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOrganizationalPhonePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationalPhoneTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single organisational_phone
    ...generateEndpoint({
        endpoint: "/organisational_phones/{organizationalPhoneId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["organisational_phones"],
                summary: "Update a organisational phone in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationalPhoneTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update organisational phone",
                    required: true,
                    contentRef: "#/components/schemas/OrganizationalPhoneFormSchema",
                }),
                parameters: [
                    createPathParameter(organizationalPhoneIdParam),
                ],
            }),
        },
    }),

    // bulk update organisational_phones
    ...generateEndpoint({
        endpoint: "/organisational_phones/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["organisational_phones"],
                summary: "Bulk Update organisational phones in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk organisational phones",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOrganizationalPhonesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationalPhoneFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
