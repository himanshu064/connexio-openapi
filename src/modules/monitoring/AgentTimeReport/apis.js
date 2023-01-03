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
        endpoint: "/reports/agent_time",
        methods: {
            // get AgentTimeReport
            ...generatePath({
                method: "get",
                tags: ["agent_time_report"],
                summary: "Get all agent time report in system",
                responses: {
                    ...createResponse({
                        status: "200",
                        description: "OK",
                        schemaRef: "#/components/schemas/AgentTimeReports",
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
