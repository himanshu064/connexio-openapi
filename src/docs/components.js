const { schemas, requestBodies } = require("../modules");

module.exports = {
  components: {
    schemas,
    requestBodies,
    securitySchemes: {
      // bearerAuth: {
      //   type: "apiKey",
      //   name: "Authorization",
      //   scheme: "Authorization",
      //   in: "header",
      //   name: 'X-API-KEY',
      // },
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "set-cookie"
      },
      csrfTokenAuth: {
        type: "apiKey",
        in: "header",
        name: "X-CSRF-TOKEN",
      },
    },
  },
};
