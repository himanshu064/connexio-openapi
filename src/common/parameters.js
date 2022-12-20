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
  invitationIdParam: {
    name: "invitationId",
    description: "Invitation id",
    required: true,
    schemaType: "string",
  },
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
