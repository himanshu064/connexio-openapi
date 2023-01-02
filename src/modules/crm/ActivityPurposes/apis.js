const {
    activityPurposeIdParam,
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
        endpoint: "/activity_purposes",
        methods: {
            // get activity_purposes
            ...generatePath({
                method: "get",
                tags: ["activity_purposes"],
                summary: "Get all activity purposes in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityPurposes",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create activity_purposes
            ...generatePath({
                method: "post",
                tags: ["activity_purposes"],
                summary: "Create a new activity purpose in system",
                requestBody: createRequestBody({
                    description: "Request payload to create activity purpose",
                    required: true,
                    contentRef: "#/components/schemas/ActivityPurposeFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityPurposeTableSchema",
                    }),
                },
            }),
            // delete activity_purposes
            ...generatePath({
                method: "delete",
                tags: ["activity_purposes"],
                summary: "Delete a activity purpose in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete activity purpose",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteActivityPurposePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityPurposeTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity_purposes
    ...generateEndpoint({
        endpoint: "/activity_purposes/{activityPurposeId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["activity_purposes"],
                summary: "Update a activity purpose in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityPurposeTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update activity purpose",
                    required: true,
                    contentRef: "#/components/schemas/ActivityPurposeFormSchema",
                }),
                parameters: [
                    createPathParameter(activityPurposeIdParam),
                ],
            }),
        },
    }),
    // bulk update activity_purposes
    ...generateEndpoint({
        endpoint: "/activity_purposes/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["activity_purposes"],
                summary: "Bulk Update activity purposes in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk activity purposes",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditActivityPurposesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityPurposeFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
