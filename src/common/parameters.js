const { createIdParam } = require("../utils/path-utils");

module.exports = {
  // path params
  clientIdParam: {
    name: "clientId",
    description: "Id of the client",
    required: true,
    schemaType: "string",
  },
  userIdParam: {
    name: "userId",
    description: "Id of the user",
    required: true,
    schemaType: "string",
  },
  groupIdParam: {
    name: "groupId",
    description: "Group Id",
    required: true,
    schemaType: "string",
  },
  roleIdParam: {
    name: "groupId",
    description: "Group Id",
    required: true,
    schemaType: "string",
  },
  employeeIdParam: {
    name: "employeeId",
    description: "Id of an employee",
    required: true,
    schemaType: "string",
  },
  funnelIdParam: {
    name: "funnelId",
    description: "Funnel id",
    required: true,
    schemaType: "string",
  },
  announcementIdParam: {
    name: "announcementId",
    description: "Announcement id",
    required: true,
    schemaType: "string",
  },
  linkIdParam: {
    name: "linkId",
    description: "Link id",
    required: true,
    schemaType: "string",
  },
  shiftIdParam: {
    name: "shiftId",
    description: "Shift id",
    required: true,
    schemaType: "string",
  },
  invitationIdParam: {
    name: "invitationId",
    description: "Invitation id",
    required: true,
    schemaType: "string",
  },
  scheduleIdParam: {
    name: "scheduleId",
    description: "Schedule id",
    required: true,
    schemaType: "string",
  },
  entryIdParam: {
    name: "entryId",
    description: "Schedule id",
    required: true,
    schemaType: "string",
  },
  paymentIdParam: createIdParam({
    name: "paymentId",
    description: "Payment id",
  }),
  overtimeIdParam: createIdParam({
    name: "overtimeId",
    description: "Overtime id",
  }),
  compensationConfigurationIdParam: createIdParam({
    name: "compensationConfigurationId",
    description: "Compensation Configuration id",
  }),
  invoiceIdParam: createIdParam({
    name: "invoiceId",
    description: "Invoice id",
  }),
  accountIdParam: createIdParam({
    name: "acoountId",
    description: "Account id",
  }),
  serviceIdParam: createIdParam({
    name: "serviceId",
    description: "Service id",
  }),
  vacationIdParam: createIdParam({
    name: "vacationId",
    description: "Vacation id",
  }),
  vacationTypeIdParam: createIdParam({
    name: "vacationTypeId",
    description: "Vacation type id",
  }),
  taskIdParam: createIdParam({
    name: "taskId",
    description: "Task id",
  }),
  achievementIdParam: createIdParam({
    name: "achievementId",
    description: "Achievement id",
  }),
  departmentIdParam: createIdParam({
    name: "departmentId",
    description: "Department id",
  }),
  jobTypeIdParam: createIdParam({
    name: "jobTypeId",
    description: "Job type id",
  }),
  activityCategoryIdParam: createIdParam({
    name: "activityCategoryId",
    description: "Activity category id",
  }),
  achievementTypeIdParam: createIdParam({
    name: "achievementTypeId",
    description: "Achievement Type id",
  }),
  campaignIdParam: createIdParam({
    name: "campaignId",
    description: "campaign id",
  }),

  leadIdParam: createIdParam({
    name: "leadId",
    description: "lead id",
  }),

  // query params
  paginationLimitQuery: {
    name: "limit",
    description: "Limit of records to fetch",
    required: false,
    schemaType: "string",
  },
  paginationOffsetQuery: {
    name: "offset",
    description: "Offset records by",
    required: false,
    schemaType: "string",
  },
  searchQuery: {
    name: "search",
    description: "Search term",
    required: false,
    schemaType: "string",
  },
};
