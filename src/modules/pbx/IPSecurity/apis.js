const {
    ipSecurityIdParam,
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
        endpoint: "/ip_security",
        methods: {
            // get audios
            ...generatePath({
                method: "get",
                tags: ["ip_security"],
                summary: "Get all ip security in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/IPSecurities",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create ip_security
            ...generatePath({
                method: "post",
                tags: ["ip_security"],
                summary: "Creates a new ip security in system",
                requestBody: createRequestBody({
                    description: "Request payload to create ip security",
                    required: true,
                    contentRef: "#/components/schemas/IPSecurityFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/IPSecurityTableSchema",
                    }),
                },
            }),
            // delete ip_security
            ...generatePath({
                method: "delete",
                tags: ["ip_security"],
                summary: "Deletes a ip_security in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete ip security",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteIPSecurityPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/IPSecurityTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single audio_store
    ...generateEndpoint({
        endpoint: "/ip_security/{ipSecurityId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["ip_security"],
                summary: "Update a ip_security in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/IPSecurityTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update ip_security",
                    required: true,
                    contentRef: "#/components/schemas/IPSecurityFormSchema",
                }),
                parameters: [
                    createPathParameter(ipSecurityIdParam),
                ],
            }),
        },
    }),

    // bulk update audios
    ...generateEndpoint({
        endpoint: "/ip_security/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["ip_security"],
                summary: "Bulk Update ip_security in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk ip_security",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditIPSecuritiesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/IPSecurityFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
