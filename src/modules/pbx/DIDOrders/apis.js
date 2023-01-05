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
        endpoint: "/did_orders",
        methods: {
            // get did orders
            ...generatePath({
                method: "get",
                tags: ["did_orders"],
                summary: "Get all did orders in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/DIDOrders",
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
