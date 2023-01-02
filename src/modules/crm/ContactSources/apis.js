const {
    contactSourceIdParam,
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
        endpoint: "/contact_sources",
        methods: {
            // get contact_sources
            ...generatePath({
                method: "get",
                tags: ["contact_sources"],
                summary: "Get all contact sources in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactSources",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create contact_sources
            ...generatePath({
                method: "post",
                tags: ["contact_sources"],
                summary: "Create a new contact source in system",
                requestBody: createRequestBody({
                    description: "Request payload to create contact source",
                    required: true,
                    contentRef: "#/components/schemas/ContactSourceFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactSourceTableSchema",
                    }),
                },
            }),
            // delete contact_sources
            ...generatePath({
                method: "delete",
                tags: ["contact_sources"],
                summary: "Delete a contact source in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete contact source",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteContactSourcePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactSourceTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity
    ...generateEndpoint({
        endpoint: "/contact_sources/{contactSourceId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_sources"],
                summary: "Update a contact source in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactSourceTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update contact sources",
                    required: true,
                    contentRef: "#/components/schemas/ContactSourceFormSchema",
                }),
                parameters: [
                    createPathParameter(contactSourceIdParam),
                ],
            }),
        },
    }),
    // bulk update contact_sources
    ...generateEndpoint({
        endpoint: "/activities/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["contact_sources"],
                summary: "Bulk Update contact sources in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk contact sources",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditContactSourcesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ContactSourceFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
