const backoffice = require("./backoffice");

module.exports = {
  schemas: {
    ...backoffice.User.userSchemas,
    ...backoffice.Auth.authSchemas,
  },
  paths: {
    ...backoffice.User.userApis,
    ...backoffice.Auth.authApis,
  },
  requestBodies: {
    ...backoffice.User.userBody,
    ...backoffice.Auth.authBody,
  },
};
