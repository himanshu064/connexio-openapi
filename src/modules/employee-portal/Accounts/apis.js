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
  accountIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/accounts",
    methods: {
      // get accounts
      ...generatePath({
        method: "get",
        tags: ["accounts"],
        summary: "Get all accounts in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Accounts",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create overtime
      ...generatePath({
        method: "post",
        tags: ["accounts"],
        summary: "Creates a new accounts in system",
        requestBody: createRequestBody({
          description: "Request payload to create accounts",
          required: true,
          contentRef: "#/components/schemas/AccountFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AccountTableSchema",
          }),
        },
      }),
      // delete overtime
      ...generatePath({
        method: "delete",
        tags: ["accounts"],
        summary: "Delete accounts in system",
        requestBody: createRequestBody({
          description: "Request payload to delete account",
          required: true,
          contentRef: "#/components/requestBodies/deleteAccountsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AccountTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/accounts/{accountId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["accounts"],
        summary: "Updates a account in system",
        requestBody: createRequestBody({
          description: "Request payload to update account",
          required: true,
          contentRef: "#/components/schemas/AccountFormSchema",
        }),
        parameters: [createPathParameter(accountIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AccountFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/accounts/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["accounts"],
        summary: "Bulk Update accounts in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk accounts",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditAccountsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AccountFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
