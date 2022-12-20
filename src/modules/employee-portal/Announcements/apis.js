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
  announcementIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/announcements",
    methods: {
      // get announcements
      ...generatePath({
        method: "get",
        tags: ["announcements"],
        summary: "Get all announcements in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Announcements",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create announcement
      ...generatePath({
        method: "post",
        tags: ["announcements"],
        summary: "Creates a new announcements in system",
        requestBody: createRequestBody({
          description: "Request payload to create announcements",
          required: true,
          contentRef: "#/components/schemas/AnnouncementFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AnnouncementTableSchema",
          }),
        },
      }),
      // delete announcement
      ...generatePath({
        method: "delete",
        tags: ["announcements"],
        summary: "Deletes an announcements in system",
        requestBody: createRequestBody({
          description: "Request payload to delete announcement",
          required: true,
          contentRef: "#/components/requestBodies/deleteAnnouncementPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AnnouncementTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/announcements/{announcementId}",
    methods: {
      // update announcement
      ...generatePath({
        method: "patch",
        tags: ["announcements"],
        summary: "Updates an announcements in system",
        requestBody: createRequestBody({
          description: "Request payload to update announcements",
          required: true,
          contentRef: "#/components/schemas/AnnouncementFormSchema",
        }),
        parameters: [createPathParameter(announcementIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AnnouncementTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
