const backoffice = require("./backoffice");
const switchModule = require("./switch");
const employeePortal = require("./employee-portal");
const crmPortal = require("./crm");

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
    ...employeePortal.MyAccount.schemas,
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
    ...employeePortal.VacationRequests.schemas,
    ...employeePortal.VacationTypes.schemas,
    ...employeePortal.Onboarding.schemas,
    ...employeePortal.Offboarding.schemas,
    ...employeePortal.Missions.schemas,
    ...employeePortal.Activity.schemas,
    ...employeePortal.Departments.schemas,
    ...employeePortal.JobTypes.schemas,
    ...employeePortal.Reporting.schemas,

    // crm schemas
    ...crmPortal.Campaigns.schemas,
    ...crmPortal.Leads.schemas,
    ...crmPortal.Customers.schemas,
    ...crmPortal.Deals.schemas,
    ...crmPortal.Orders.schemas,
    ...crmPortal.Products.schemas,
    ...crmPortal.Activities.schemas,
    ...crmPortal.ContactCampaign.schemas,
    ...crmPortal.Carriers.schemas,
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
    ...employeePortal.MyAccount.apis,
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
    ...employeePortal.VacationRequests.apis,
    ...employeePortal.VacationTypes.apis,
    ...employeePortal.Onboarding.apis,
    ...employeePortal.Offboarding.apis,
    ...employeePortal.Missions.apis,
    ...employeePortal.Activity.apis,
    ...employeePortal.Departments.apis,
    ...employeePortal.JobTypes.apis,
    ...employeePortal.Reporting.apis,

    // crm apis
    ...crmPortal.Campaigns.apis,
    ...crmPortal.Leads.apis,
    ...crmPortal.Customers.apis,
    ...crmPortal.Deals.apis,
    ...crmPortal.Orders.apis,
    ...crmPortal.Products.apis,
    ...crmPortal.Activities.apis,
    ...crmPortal.ContactCampaign.apis,
    ...crmPortal.Carriers.apis,
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
    ...employeePortal.MyAccount.body,
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
    ...employeePortal.VacationRequests.body,
    ...employeePortal.VacationTypes.body,
    ...employeePortal.Onboarding.body,
    ...employeePortal.Offboarding.body,
    ...employeePortal.Missions.body,
    ...employeePortal.Activity.body,
    ...employeePortal.Departments.body,
    ...employeePortal.JobTypes.body,
    ...employeePortal.Reporting.body,

    // crm body
    ...crmPortal.Campaigns.body,
    ...crmPortal.Leads.body,
    ...crmPortal.Customers.body,
    ...crmPortal.Deals.body,
    ...crmPortal.Orders.body,
    ...crmPortal.Products.body,
    ...crmPortal.Activities.body,
    ...crmPortal.ContactCampaign.body,
    ...crmPortal.Carriers.body,
  },
};
