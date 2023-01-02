const {
    contactFieldIdParam,
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
        endpoint: "/contact_field_presences",
        methods: {
            // get activities
            ...generatePath({
                method: "get",
                tags: ["contact_field"],
                summary: "Get all contact fields in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactFields",
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
                tags: ["contact_field"],
                summary: "Create a new contact field in system",
                requestBody: createRequestBody({
                    description: "Request payload to create contact field",
                    required: true,
                    contentRef: "#/components/schemas/ContactFieldFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactFieldTableSchema",
                    }),
                },
            }),
            // delete ContactFieldFormSchema
            ...generatePath({
                method: "delete",
                tags: ["contact_field"],
                summary: "Delete a contact field in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete contact field",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteContactFieldPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactFieldTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity
    ...generateEndpoint({
        endpoint: "/contact_field_presences/{contactFieldId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_field"],
                summary: "Update a contact field in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactFieldTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update contact field",
                    required: true,
                    contentRef: "#/components/schemas/ContactFieldFormSchema",
                }),
                parameters: [
                    createPathParameter(contactFieldIdParam),
                ],
            }),
        },
    }),
    // bulk update activities
    ...generateEndpoint({
        endpoint: "/contact_field_presences/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_field"],
                summary: "Bulk Update contact field in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk contact field",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditContactFieldFormPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactFieldFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
