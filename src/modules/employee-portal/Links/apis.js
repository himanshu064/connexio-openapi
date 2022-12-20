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
  linkIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/links",
    methods: {
      // get links
      ...generatePath({
        method: "get",
        tags: ["links"],
        summary: "Get all links in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Links",
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
        tags: ["links"],
        summary: "Creates a new link in system",
        requestBody: createRequestBody({
          description: "Request payload to create link",
          required: true,
          contentRef: "#/components/schemas/LinkFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/LinkTableSchema",
          }),
        },
      }),
      // delete link
      ...generatePath({
        method: "delete",
        tags: ["links"],
        summary: "Deletes an link in system",
        requestBody: createRequestBody({
          description: "Request payload to delete link",
          required: true,
          contentRef: "#/components/requestBodies/deleteLinkPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/LinkTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/links/{linkId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["links"],
        summary: "Updates a link in system",
        requestBody: createRequestBody({
          description: "Request payload to update link",
          required: true,
          contentRef: "#/components/schemas/LinkFormSchema",
        }),
        parameters: [createPathParameter(linkIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/LinkTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
