const { schemas, requestBodies } = require("../modules");

module.exports = {
  components: {
    schemas,
    requestBodies,
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        scheme: "Authorization",
        in: "header",
      },
    },
  },
};
