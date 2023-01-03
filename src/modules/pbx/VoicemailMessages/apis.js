const {
    voicemailMessageIdParam,
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
        endpoint: "/voicemail_messages",
        methods: {
            // get voicemail_message
            ...generatePath({
                method: "get",
                tags: ["voicemail_messages"],
                summary: "Get all voicemail messages in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailMessages",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create voicemail_message
            ...generatePath({
                method: "post",
                tags: ["voicemail_messages"],
                summary: "Creates a new voicemail message in system",
                requestBody: createRequestBody({
                    description: "Request payload to create voicemail message",
                    required: true,
                    contentRef: "#/components/schemas/VoicemailMessageFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailMessageTableSchema",
                    }),
                },
            }),
            // delete voicemail_message
            ...generatePath({
                method: "delete",
                tags: ["voicemail_messages"],
                summary: "Deletes a voicemail message in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete voicemail message",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteVoicemailMessagePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailMessageTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single voicemail_message
    ...generateEndpoint({
        endpoint: "/voicemail_messages/{voicemailMessageId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["voicemail_messages"],
                summary: "Update a voicemail message in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailMessageTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update voicemail message",
                    required: true,
                    contentRef: "#/components/schemas/VoicemailMessageFormSchema",
                }),
                parameters: [
                    createPathParameter(voicemailMessageIdParam),
                ],
            }),
        },
    }),

    // bulk update voicemail_messages
    ...generateEndpoint({
        endpoint: "/voicemail_messages/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["voicemail_messages"],
                summary: "Bulk Update voicemail messages in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk voicemail messages",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditVoicemailMessagesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/VoicemailMessageFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
