const backoffice = require("./backoffice");

module.exports = {
  schemas: {
    ...backoffice.userSchemas,
  },
  paths: {
    ...backoffice.userApis,
  },
  requestBodies: {
    ...backoffice.userBody,
  },
};
