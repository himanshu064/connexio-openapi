const {
    organizationDNCProfileIdParam,
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
        endpoint: "/dialer/organization_dnc_profiles",
        methods: {
            // get organization dnc profiles
            ...generatePath({
                method: "get",
                tags: ["dailer_dnc_profiles"],
                summary: "Get all organization dnc profiles in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationDNCProfiles",
                    }),
                },
                parameters: [
                    createQueryParameter(paginationLimitQuery),
                    createQueryParameter(paginationOffsetQuery),
                    createQueryParameter(searchQuery),
                ],
            }),
            // create organization dnc profiles
            ...generatePath({
                method: "post",
                tags: ["dailer_dnc_profiles"],
                summary: "Creates a new organization dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload to create organization dnc profile",
                    required: true,
                    contentRef: "#/components/schemas/OrganizationDNCProfileFormSchema",
                }),
                responses: {
                    ...createResponse({
                        status: "201",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationDNCProfileTableSchema",
                    }),
                },
            }),
            // delete organization dnc profile
            ...generatePath({
                method: "delete",
                tags: ["dailer_dnc_profiles"],
                summary: "Deletes a organization dnc profile in system",
                requestBody: createRequestBody({
                    description: "Request payload for delete organization dnc profile",
                    required: true,
                    contentRef: "#/components/requestBodies/deleteOrganizationDNCProfilePayload",
                }),
                responses: {
                    ...createResponse({
                        status: "202",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationDNCProfileTableSchema",
                    }),
                },
            }),
        },
    }),
    // update single organization dnc profiles
    ...generateEndpoint({
        endpoint: "/dialer/organization_dnc_profiles/{organizationDNCProfileId}",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Update a organization dnc profiles in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationDNCProfileTableSchema",
                    }),
                },
                requestBody: createRequestBody({
                    description: "Request payload to update organization dnc profiles",
                    required: true,
                    contentRef: "#/components/schemas/OrganizationDNCProfileFormSchema",
                }),
                parameters: [
                    createPathParameter(organizationDNCProfileIdParam),
                ],
            }),
        },
    }),

    // bulk update organization dnc profiles
    ...generateEndpoint({
        endpoint: "/dialer/organization_dnc_profiles/bulk",
        methods: {
            ...generatePath({
                method: "patch",
                tags: ["dailer_dnc_profiles"],
                summary: "Bulk Update audios in system",
                requestBody: createRequestBody({
                    description: "Request payload to bulk update bulk organization dnc profiles",
                    required: true,
                    contentRef: "#/components/requestBodies/bulkEditOrganizationDNCProfileFormSchemasPayload",
                }),
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/OrganizationDNCProfileFormSchema",
                    }),
                },
            }),
        },
    }),
};

module.exports = paths;
