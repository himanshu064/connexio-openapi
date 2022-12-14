module.exports = {
  components: {
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
