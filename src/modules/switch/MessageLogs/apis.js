const { paginationLimitQuery, paginationOffsetQuery, searchQuery } = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createResponse,
  createQueryParameter,
} = require("../../../utils/path-utils");
const { dateFilterExample } = require("../../../common/filters");

const paths = {
  ...generateEndpoint({
    endpoint: "/message_logs",
    methods: {
      // get message logs
      ...generatePath({
        method: "get",
        tags: ["message_logs"],
        summary: "Get all message logs in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MessageLogs",
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
