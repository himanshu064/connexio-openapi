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
    endpoint: "/internal_gateways",
    methods: {
      // get interal gateways
      ...generatePath({
        method: "get",
        tags: ["internal_gateways"],
        summary: "Get interal gateways in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InternalGateways",
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
