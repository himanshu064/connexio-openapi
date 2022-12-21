const {
  generateEndpoint,
  generatePath,
  createQueryParameter,
  createResponse,
  createRequestBody,
  createPathParameter,
} = require("../../../utils/path-utils");
const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  invitationIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/invitations",
    methods: {
      // get invitations
      ...generatePath({
        method: "get",
        tags: ["invitations"],
        summary: "Get all invitations in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Invitations",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create link
      ...generatePath({
        method: "post",
        tags: ["invitations"],
        summary: "Creates a new invitation in system",
        requestBody: createRequestBody({
          description: "Request payload to create invitation",
          required: true,
          contentRef: "#/components/schemas/InvitationFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvitationTableSchema",
          }),
        },
      }),
      // delete link
      ...generatePath({
        method: "delete",
        tags: ["invitations"],
        summary: "Deletes an invitation in system",
        requestBody: createRequestBody({
          description: "Request payload to delete invitation",
          required: true,
          contentRef: "#/components/requestBodies/deleteInvitationPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvitationTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/invitations/{invitationId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["invitations"],
        summary: "Updates a link in system",
        requestBody: createRequestBody({
          description: "Request payload to update invitation",
          required: true,
          contentRef: "#/components/schemas/InvitationFormSchema",
        }),
        parameters: [createPathParameter(invitationIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvitationTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/invitations/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["invitations"],
        summary: "Bulk update invitations in system",
        requestBody: createRequestBody({
          description: "Request payload for bulk invitation",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditInvitationPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvitationFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
