const {
  generateEndpoint,
  generatePath,
  createResponse,
  createQueryParameter,
} = require("../../../utils/path-utils");

const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/client_mailing_configurations",
    methods: {
      // get client mailing config
      ...generatePath({
        method: "get",
        tags: ["client_mailing_configurations"],
        summary: "Get all client mailing configurations in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MailingConfiguration",
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
