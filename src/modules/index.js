const backoffice = require("./backoffice");
const switchModule = require("./switch");
const employeePortal = require("./employee-portal");

module.exports = {
  schemas: {
    // backoffice schemas
    // ...backoffice.Auth.schemas,
    ...backoffice.ClientUser.schemas,
    ...backoffice.UserGroup.schemas,
    ...backoffice.Role.schemas,
    ...backoffice.MailingConfiguration.schemas,
    ...backoffice.UserSelf.schemas,
    // switch schemas
    ...switchModule.MyAccount.schemas,
    ...switchModule.CallLogs.schemas,
    ...switchModule.MessageLogs.schemas,
    ...switchModule.InternalGateways.schemas,
    // employee-portal schemas
    ...employeePortal.Employees.schemas,
    ...employeePortal.Announcements.schemas,
    ...employeePortal.Links.schemas,
    ...employeePortal.Invitations.schemas,
    ...employeePortal.Schedules.schemas,
    ...employeePortal.Shifts.schemas,
    ...employeePortal.Payments.schemas,
    ...employeePortal.Overtimes.schemas,
    ...employeePortal.ConfigurationTemplates.schemas,
    ...employeePortal.InvoiceList.schemas,
    ...employeePortal.Accounts.schemas,
    ...employeePortal.Services.schemas,
    ...employeePortal.VacationList.schemas,
  },
  paths: {
    // backoffice apis
    // ...backoffice.Auth.apis,
    ...backoffice.ClientUser.apis,
    ...backoffice.UserGroup.apias,
    ...backoffice.Role.apis,
    ...backoffice.MailingConfiguration.apis,
    ...backoffice.UserSelf.apis,
    // switch apis
    ...switchModule.MyAccount.apis,
    ...switchModule.CallLogs.apis,
    ...switchModule.MessageLogs.apis,
    ...switchModule.InternalGateways.apis,
    // employee-portal apis
    ...employeePortal.Employees.apis,
    ...employeePortal.Announcements.apis,
    ...employeePortal.Links.apis,
    ...employeePortal.Invitations.apis,
    ...employeePortal.Schedules.apis,
    ...employeePortal.Shifts.apis,
    ...employeePortal.Payments.apis,
    ...employeePortal.Overtimes.apis,
    ...employeePortal.ConfigurationTemplates.apis,
    ...employeePortal.InvoiceList.apis,
    ...employeePortal.Accounts.apis,
    ...employeePortal.Services.apis,
    ...employeePortal.VacationList.apis,
  },
  requestBodies: {
    // backoffice body
    // ...backoffice.Auth.body,
    ...backoffice.ClientUser.body,
    ...backoffice.UserGroup.body,
    ...backoffice.Role.body,
    ...backoffice.MailingConfiguration.body,
    ...backoffice.UserSelf.body,
    // switch body
    ...switchModule.MyAccount.body,
    ...switchModule.CallLogs.body,
    ...switchModule.MessageLogs.body,
    ...switchModule.InternalGateways.body,
    // employee-portal body
    ...employeePortal.Employees.body,
    ...employeePortal.Announcements.body,
    ...employeePortal.Links.body,
    ...employeePortal.Invitations.body,
    ...employeePortal.Schedules.body,
    ...employeePortal.Shifts.body,
    ...employeePortal.Payments.body,
    ...employeePortal.Overtimes.body,
    ...employeePortal.ConfigurationTemplates.body,
    ...employeePortal.InvoiceList.body,
    ...employeePortal.Accounts.body,
    ...employeePortal.Services.body,
    ...employeePortal.VacationList.body,
  },
};
