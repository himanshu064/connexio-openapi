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
  compensationConfigurationIdParam,
  invoiceIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/invoices",
    methods: {
      // get overtimes
      ...generatePath({
        method: "get",
        tags: ["invoices"],
        summary: "Get all invoices in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvoiceLists",
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
        tags: ["invoices"],
        summary: "Creates a new invoices in system",
        requestBody: createRequestBody({
          description: "Request payload to create invoices",
          required: true,
          contentRef: "#/components/schemas/InvoiceListFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvoiceListTableSchema",
          }),
        },
      }),
      // delete overtime
      ...generatePath({
        method: "delete",
        tags: ["invoices"],
        summary: "Deletes a invoices in system",
        requestBody: createRequestBody({
          description: "Request payload to delete invoices",
          required: true,
          contentRef: "#/components/requestBodies/deleteInvoiceListPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvoiceListTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/invoices/{invoiceId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["invoices"],
        summary: "Updates a invoice in system",
        requestBody: createRequestBody({
          description: "Request payload to update invoices",
          required: true,
          contentRef: "#/components/schemas/InvoiceListFormSchema",
        }),
        parameters: [createPathParameter(invoiceIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvoiceListFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/invoices/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["invoices"],
        summary: "Bulk Update invoices in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk invoices",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditInvoiceListPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/InvoiceListFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
