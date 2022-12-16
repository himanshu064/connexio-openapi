const { schemas, requestBodies } = require("../modules");

module.exports = {
  components: {
    schemas,
    requestBodies,
    securitySchemes: {
      ApiTokenKey: {
        type: "apiKey",
        in: "header",
        name: "X-Auth-token",
      },
    },
  },
};
