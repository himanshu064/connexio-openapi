const {
    userDNCProfileIdParam,
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
        endpoint: "/dialer/user_dnc_profiles",
        methods: {
            // get User DNC Profiles
            ...generatePath({
                method: "get",
                tags: ["dailer_dnc_profiles"],
                summary: "Get all user dnc profiles in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserDNCProfiles",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create user dnc profiles
            ...generatePath({
                method: "post",
                tags: ["dailer_dnc_profiles"],
                summary: "Creates a new user dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload to create user dnc profile",
                    required: true,
                    contentRef: "#/components/schemas/UserDNCProfileFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserDNCProfileTableSchema",
                    }),
                },
            }),
            // delete audios
            ...generatePath({
                method: "delete",
                tags: ["dailer_dnc_profiles"],
                summary: "Deletes a user dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete user dnc profile",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteUserDNCProfilePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserDNCProfileTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single user dnc profile
    ...generateEndpoint({
        endpoint: "/dialer/user_dnc_profiles/{userDNCProfileId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Update a user dnc profile in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserDNCProfileTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update user dnc profile",
                    required: true,
                    contentRef: "#/components/schemas/UserDNCProfileFormSchema",
                }),
                parameters: [
                    createPathParameter(userDNCProfileIdParam),
                ],
            }),
        },
    }),

    // bulk update audios
    ...generateEndpoint({
        endpoint: "/dialer/user_dnc_profiles/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Bulk Update user dnc profiles in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk user dnc profiles",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditUserDNCProfilesPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/UserDNCProfileFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
