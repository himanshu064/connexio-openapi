const {
    myDNCProfileIdParam,
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
        endpoint: "/dialer/my/dnc_profiles",
        methods: {
            // get my dnc profile
            ...generatePath({
                method: "get",
                tags: ["dailer_dnc_profiles"],
                summary: "Get all dnc profiles in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyDNCProfiles",
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
                tags: ["dailer_dnc_profiles"],
                summary: "Creates a new dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload to create dnc profile",
                    required: true,
                    contentRef: "#/components/schemas/MyDNCProfileFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyDNCProfileTableSchema",
                    }),
                },
            }),
            // delete dnc profile
            ...generatePath({
                method: "delete",
                tags: ["dailer_dnc_profiles"],
                summary: "Deletes a dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete dnc profile",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteMyDNCProfilePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyDNCProfileTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single dnc profile
    ...generateEndpoint({
        endpoint: "/dialer/my/dnc_profiles/{myDNCProfileId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Update a dnc profile in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyDNCProfileTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update dnc profile",
                    required: true,
                    contentRef: "#/components/schemas/MyDNCProfileFormSchema",
                }),
                parameters: [
                    createPathParameter(myDNCProfileIdParam),
                ],
            }),
        },
    }),

    // bulk update dnc profile
    ...generateEndpoint({
        endpoint: "/dialer/my/dnc_profiles/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Bulk Update dnc profiles in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk dnc profiles",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditMyDNCProfilesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/MyDNCProfileFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
