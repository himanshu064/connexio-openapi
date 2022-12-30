const {
    activityIdParam,
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
        endpoint: "/activities",
        methods: {
            // get activities
            ...generatePath({
                method: "get",
                tags: ["activities"],
                summary: "Get all activities in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/Activities",
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
                tags: ["activities"],
                summary: "Create a new activity in system",
                requestBody: createRequestBody({
                    description: "Request payload to create activity",
                    required: true,
                    contentRef: "#/components/schemas/ActivityFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityTableSchema",
                    }),
                },
            }),
            // delete activity
            ...generatePath({
                method: "delete",
                tags: ["activities"],
                summary: "Delete a activity in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete activity",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteActivityPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single activity
    ...generateEndpoint({
        endpoint: "/activities/{activityId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["activities"],
                summary: "Update a activity in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update activity",
                    required: true,
                    contentRef: "#/components/schemas/ActivityFormSchema",
                }),
                parameters: [
                    createPathParameter(activityIdParam),
                ],
            }),
        },
    }),
    // bulk update activities
    ...generateEndpoint({
        endpoint: "/activities/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["activities"],
                summary: "Bulk Update activities in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk activities",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditActivitiesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ActivityFormSchema",
                    }),
                },
            }),
        },
    }),
};
// campaigns
module.exports = paths;
