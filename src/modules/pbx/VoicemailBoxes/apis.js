const {
    voicemailBoxIdParam,
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
        endpoint: "/organisational_voicemail_boxes",
        methods: {
            // get voicemail_boxes
            ...generatePath({
                method: "get",
                tags: ["voicemail_boxes"],
                summary: "Get all voicemail boxes in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailBoxes",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create voicemail_box
            ...generatePath({
                method: "post",
                tags: ["voicemail_boxes"],
                summary: "Creates a new voicemail box in system",
                requestBody: createRequestBody({
                    description: "Request payload to create voicemail box",
                    required: true,
                    contentRef: "#/components/schemas/VoicemailBoxFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailBoxTableSchema",
                    }),
                },
            }),
            // delete voicemail_box
            ...generatePath({
                method: "delete",
                tags: ["voicemail_boxes"],
                summary: "Deletes a voicemail box in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete voicemail box",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteVoicemailBoxPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailBoxTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single voicemail_box
    ...generateEndpoint({
        endpoint: "/organisational_voicemail_boxes/{voicemailBoxId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["voicemail_boxes"],
                summary: "Update a voicemail box in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailBoxTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update voicemail box",
                    required: true,
                    contentRef: "#/components/schemas/VoicemailBoxFormSchema",
                }),
                parameters: [
                    createPathParameter(voicemailBoxIdParam),
                ],
            }),
        },
    }),

    // bulk update voicemail_boxes
    ...generateEndpoint({
        endpoint: "/organisational_voicemail_boxes/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["voicemail_boxes"],
                summary: "Bulk Update voicemail boxes in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk voicemail box",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditVoicemailBoxesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailBoxFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
