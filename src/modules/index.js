const backoffice = require("./backoffice");

module.exports = {
  schemas: {
    ...backoffice.Auth.schemas,
    ...backoffice.ClientUser.schemas,
    ...backoffice.UserGroup.schemas,
    ...backoffice.Role.schemas,
    ...backoffice.MailingConfigurations.schemas,
    ...backoffice.UserSelf.schemas,
  },
  paths: {
    ...backoffice.Auth.apis,
    ...backoffice.ClientUser.apis,
    ...backoffice.UserGroup.apias,
    ...backoffice.Role.apis,
    ...backoffice.MailingConfigurations.apis,
    ...backoffice.UserSelf.apis,
  },
  requestBodies: {
    ...backoffice.Auth.body,
    ...backoffice.ClientUser.body,
    ...backoffice.UserGroup.body,
    ...backoffice.Role.body,
    ...backoffice.MailingConfigurations.body,
    ...backoffice.UserSelf.body,
  },
};
