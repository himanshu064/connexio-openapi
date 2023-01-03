const {
    generateEndpoint,
    generatePath,
    createQueryParameter,
    createResponse,
} = require("../../../utils/path-utils");
const {
    paginationLimitQuery,
    paginationOffsetQuery,
    searchQuery,
} = require("../../../common/parameters");

const paths = {
    ...generateEndpoint({
        endpoint: "/recordings",
        methods: {
            // get RecordingVoices
            ...generatePath({
                method: "get",
                tags: ["recording_voices"],
                summary: "Get all recordings in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/RecordingVoices",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
        },
    }),

};

module.exports = paths;
