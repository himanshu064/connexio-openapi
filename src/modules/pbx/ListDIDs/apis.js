const {
    paginationLimitQuery,
    paginationOffsetQuery,
    searchQuery,
} = require("../../../common/parameters");
const {
    generateEndpoint,
    generatePath,
    createResponse,
    createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
    ...generateEndpoint({
        endpoint: "/dids",
        methods: {
            // get dids
            ...generatePath({
                method: "get",
                tags: ["listdids"],
                summary: "Get all list dids in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/ListDIDs",
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
