const {
    audioStoreIdParam,
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
        endpoint: "/audios",
        methods: {
            // get audios
            ...generatePath({
                method: "get",
                tags: ["audio_store"],
                summary: "Get all audios in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AudioStores",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create audios
            ...generatePath({
                method: "post",
                tags: ["audio_store"],
                summary: "Creates a new audio store in system",
                requestBody: createRequestBody({
                    description: "Request payload to create audio store",
                    required: true,
                    contentRef: "#/components/schemas/AudioStoreFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/AudioStoreTableSchema",
                    }),
                },
            }),
            // delete audios
            ...generatePath({
                method: "delete",
                tags: ["audio_store"],
                summary: "Deletes a audio store in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete audio store",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteAudioStorePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/AudioStoreTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single audio_store
    ...generateEndpoint({
        endpoint: "/audios/{audioStoreId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["audio_store"],
                summary: "Update a audio store in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AudioStoreTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update audio store",
                    required: true,
                    contentRef: "#/components/schemas/AudioStoreFormSchema",
                }),
                parameters: [
                    createPathParameter(audioStoreIdParam),
                ],
            }),
        },
    }),

    // bulk update audios
    ...generateEndpoint({
        endpoint: "/audios/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["audio_store"],
                summary: "Bulk Update audios in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk audios",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditAudioStoresPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AudioStoreFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
