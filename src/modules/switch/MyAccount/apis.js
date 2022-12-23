const {
  generateEndpoint,
  generatePath,
  createResponse,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/accounts/current",
    methods: {
      // get my account details
      ...generatePath({
        method: "get",
        tags: ["my_account"],
        summary: "Get my account details in the system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
