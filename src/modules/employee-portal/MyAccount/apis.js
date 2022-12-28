const {
  generateEndpoint,
  generatePath,
  createResponse,
  createRequestBody,
  createPathParameter,
} = require("../../../utils/path-utils");
const { vacationIdParam } = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/employees/self",
    methods: {
      // get employees own account info
      ...generatePath({
        method: "get",
        tags: ["my_account_info"],
        summary: "Get my account info in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MyAccountFormSchema",
          }),
        },
      }),
      // update employees own account info
      ...generatePath({
        method: "post",
        tags: ["my_account_info"],
        summary: "Update my account info in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MyAccountFormSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update my account info",
          required: true,
          contentRef: "#/components/schemas/MyAccountFormSchema",
        }),
      }),
    },
  }),
  // get my vacation requests
  ...generateEndpoint({
    endpoint: "/my_vacation_requests/recent",
    methods: {
      ...generatePath({
        method: "get",
        tags: ["my_account_info"],
        summary: "Get my vacation recent requests",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationRequestFormSchema",
          }),
        },
      }),
    },
  }),
  // create a vacation request
  ...generateEndpoint({
    endpoint: "/my_vacation_requests",
    methods: {
      // get vacations
      ...generatePath({
        method: "post",
        tags: ["my_account_info"],
        summary: "Create a vacation request",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationRequestFormSchema",
          }),
        },
        parameters: [createPathParameter(vacationIdParam)],
        requestBody: createRequestBody({
          description: "Request payload to approve vacation",
          required: true,
          contentRef: "#/components/schemas/VacationRequestFormSchema",
        }),
      }),
    },
  }),
};

module.exports = paths;
