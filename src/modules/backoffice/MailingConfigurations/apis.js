const {
  generateEndpoint,
  generatePath,
  createResponse,
} = require("../../../utils/path-utils");

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
      }),
    },
  }),
};

module.exports = paths;
