const {
  generateEndpoint,
  generatePath,
  createResponse,
  createRequestBody,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/access_token_auth",
    methods: {
      // login and get the token
      ...generatePath({
        method: 'post',
        tags: ['auth'],
        summary: 'Login user and generate access token',
        requestBody: createRequestBody({
          description: "Request payload for login",
          required: true,
          contentRef: "#/components/requestBodies/authLoginPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
          })
        },
      })
    }
  })
};


module.exports = paths;