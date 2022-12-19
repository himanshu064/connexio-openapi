const backoffice = require("./backoffice");
const switchModule = require("./switch");

module.exports = {
  schemas: {
    // backoffice schemas
    ...backoffice.Auth.schemas,
    ...backoffice.ClientUser.schemas,
    ...backoffice.UserGroup.schemas,
    ...backoffice.Role.schemas,
    ...backoffice.MailingConfiguration.schemas,
    ...backoffice.UserSelf.schemas,
    // switch schemas
    ...switchModule.Accounts.schemas,
    ...switchModule.CallLogs.schemas,
    ...switchModule.MessageLogs.schemas,
    ...switchModule.InternalGateways.schemas,
  },
  paths: {
    // backoffice apis
    ...backoffice.Auth.apis,
    ...backoffice.ClientUser.apis,
    ...backoffice.UserGroup.apias,
    ...backoffice.Role.apis,
    ...backoffice.MailingConfiguration.apis,
    ...backoffice.UserSelf.apis,
    // switch apis
    ...switchModule.Accounts.apis,
    ...switchModule.CallLogs.apis,
    ...switchModule.MessageLogs.apis,
    ...switchModule.InternalGateways.apis,
  },
  requestBodies: {
    // backoffice body
    ...backoffice.Auth.body,
    ...backoffice.ClientUser.body,
    ...backoffice.UserGroup.body,
    ...backoffice.Role.body,
    ...backoffice.MailingConfiguration.body,
    ...backoffice.UserSelf.body,
    // switch body
    ...switchModule.Accounts.body,
    ...switchModule.CallLogs.body,
    ...switchModule.MessageLogs.body,
    ...switchModule.InternalGateways.body,
  },
};
