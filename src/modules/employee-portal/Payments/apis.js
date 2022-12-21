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
  paymentIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/payments",
    methods: {
      // get links
      ...generatePath({
        method: "get",
        tags: ["payments"],
        summary: "Get all payments in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Payments",
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
        tags: ["payments"],
        summary: "Creates a new payment in system",
        requestBody: createRequestBody({
          description: "Request payload to create payment",
          required: true,
          contentRef: "#/components/schemas/PaymentFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/PaymentTableSchema",
          }),
        },
      }),
      // delete link
      ...generatePath({
        method: "delete",
        tags: ["payments"],
        summary: "Deletes a payment in system",
        requestBody: createRequestBody({
          description: "Request payload to delete payment",
          required: true,
          contentRef: "#/components/requestBodies/deletePaymentPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/PaymentTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/payments/{paymentId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["payments"],
        summary: "Updates a payment in system",
        requestBody: createRequestBody({
          description: "Request payload to update payment",
          required: true,
          contentRef: "#/components/schemas/PaymentFormSchema",
        }),
        parameters: [createPathParameter(paymentIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/PaymentTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/payments/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["payments"],
        summary: "Bulk Update shift in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk payments",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditPaymentPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/PaymentFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
