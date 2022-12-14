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
  customerIdParam: createIdParam({
    name: "customerId",
    description: "customer Id",
  }),
  dealIdParam: createIdParam({
    name: "dealId",
    description: "deal Id",
  }),
  orderIdParam: createIdParam({
    name: "orderId",
    description: "order Id",
  }),
  productIdParam: createIdParam({
    name: "productId",
    description: "product Id",
  }),
  activityIdParam: createIdParam({
    name: "activityId",
    description: "activity Id",
  }),
  contactcampaignIdParam: createIdParam({
    name: "contactcampaignId",
    description: "contactcampaign Id",
  }),
  carrierIdParam: createIdParam({
    name: "carrierId",
    description: "carrier Id",
  }),
  channelIdParam: createIdParam({
    name: "channelId",
    description: "channel Id",
  }),
  dealStageIdParam: createIdParam({
    name: "dealStageId",
    description: "dealStage Id",
  }),
  dealTypeIdParam: createIdParam({
    name: "dealTypeId",
    description: "dealType Id",
  }),
  contactSourceIdParam: createIdParam({
    name: "contactSourceId",
    description: "contactSource Id",
  }),
  leadStatusIdParam: createIdParam({
    name: "leadStatusId",
    description: "leadStatus Id",
  }),
  activityPurposeIdParam: createIdParam({
    name: "activityPurposeId",
    description: "activityPurpose Id",
  }),
  businessCategoryIdParam: createIdParam({
    name: "businessCategoryId",
    description: "businessCategory Id",
  }),
  productCategoryIdParam: createIdParam({
    name: "productCategoryId",
    description: "productCategory Id",
  }),
  contactFieldIdParam: createIdParam({
    name: "contactFieldId",
    description: "contactField Id",
  }),
  orderFieldIdParam: createIdParam({
    name: "orderFieldId",
    description: "orderField Id",
  }),
  dealFieldIdParam: createIdParam({
    name: "dealFieldId",
    description: "dealField Id",
  }),
  productFieldIdParam: createIdParam({
    name: "productFieldId",
    description: "productField Id",
  }),
  campaignFieldIdParam: createIdParam({
    name: "campaignFieldId",
    description: "campaignField Id",
  }),
  audioStoreIdParam: createIdParam({
    name: "audioStoreId",
    description: "audioStore Id",
  }),
  userPhoneIdParam: createIdParam({
    name: "userPhoneId",
    description: "userPhone Id",
  }),
  organizationalPhoneIdParam: createIdParam({
    name: "organizationalPhoneId",
    description: "organizationalPhone Id",
  }),
  voicemailMessageIdParam: createIdParam({
    name: "voicemailMessageId",
    description: "voicemailMessage Id",
  }),
  voicemailBoxIdParam: createIdParam({
    name: "voicemailBoxId",
    description: "voicemailBox Id",
  }),
  listQueueIdParam: createIdParam({
    name: "listQueueId",
    description: "listQueue Id",
  }),
  listWorkspaceQueueIdParam: createIdParam({
    name: "listWorkspaceQueueId",
    description: "listWorkspaceQueue Id",
  }),
  listDialerQueueIdParam: createIdParam({
    name: "listDialerQueueId",
    description: "listDialerQueue Id",
  }),
  addressBookIdParam: createIdParam({
    name: "addressBookId",
    description: "addressBook Id",
  }),
  ipSecurityIdParam: createIdParam({
    name: "ipSecurityId",
    description: "ipSecurity Id",
  }),
  myCampaignIdParam: createIdParam({
    name: "myCampaignId",
    description: "myCampaign Id",
  }),
  organizationCampaignIdParam: createIdParam({
    name: "organizationCampaignId",
    description: "organizationCampaign Id",
  }),
  userCampaignIdParam: createIdParam({
    name: "userCampaignId",
    description: "userCampaign Id",
  }),
  myDNCProfileIdParam: createIdParam({
    name: "myDNCProfileId",
    description: "myDNCProfile Id",
  }),
  organizationDNCProfileIdParam: createIdParam({
    name: "organizationDNCProfileId",
    description: "organizationDNCProfile Id",
  }),
  userDNCProfileIdParam: createIdParam({
    name: "userDNCProfileId",
    description: "userDNCProfile Id",
  }),
  omniChannelIdParam: createIdParam({
    name: "omniChannelId",
    description: "omniChannel Id",
  }),
  queueConfigurationIdParam: createIdParam({
    name: "queueConfigurationId",
    description: "Queue configuration id",
  }),
  dispositionStatusIdParam: createIdParam({
    name: "dispositionStatusId",
    description: "Disposition status id",
  }),
  workspaceIdParam: createIdParam({
    name: "workspaceId",
    description: "Workspace id",
  }),
  templateIdParam: createIdParam({
    name: "templateId",
    description: "Template id",
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
