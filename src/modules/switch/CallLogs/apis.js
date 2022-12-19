const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
} = require("../../../common/parameters");
const { dateFilterExample } = require("../../../common/filters");
const {
  generateEndpoint,
  generatePath,
  createResponse,
  createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/call_logs",
    methods: {
      // get call logs
      ...generatePath({
        method: "get",
        tags: ["call_logs"],
        summary: "Get all call logs in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/CallLogs",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
          createQueryParameter({
            name: "filters[]",
            description: "Date filters",
            required: false,
            schemaType: "string",
            schemaExample: JSON.stringify(dateFilterExample),
          }),
        ],
      }),
    },
  }),
};

module.exports = paths;
