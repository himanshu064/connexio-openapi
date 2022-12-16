const backoffice = require("./backoffice");

module.exports = {
  schemas: {
    ...backoffice.Auth.schemas,
    ...backoffice.User.schemas,
    ...backoffice.UserGroup.schemas,
    ...backoffice.Role.schemas,
  },
  paths: {
    ...backoffice.Auth.apis,
    ...backoffice.User.apis,
    ...backoffice.UserGroup.apis,
    ...backoffice.Role.apis,
  },
  requestBodies: {
    ...backoffice.Auth.body,
    ...backoffice.User.body,
    ...backoffice.UserGroup.body,
    ...backoffice.Role.body,
  },
};
