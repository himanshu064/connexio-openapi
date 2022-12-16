const backoffice = require("./backoffice");

module.exports = {
  schemas: {
    ...backoffice.Auth.schemas,
    ...backoffice.User.schemas,
    ...backoffice.UserGroups.schemas,
  },
  paths: {
    ...backoffice.Auth.apis,
    ...backoffice.User.apis,
    ...backoffice.UserGroups.apis,
  },
  requestBodies: {
    ...backoffice.Auth.body,
    ...backoffice.User.body,
    ...backoffice.UserGroups.body,
  },
};
