const { InvoiceListFormSchema } = require("./schemas");

const deleteInvoiceListPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditInvoiceListPayload = {
  title: "",
  type: "object",
  properties: {
    fields: InvoiceListFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteInvoiceListPayload,
  bulkEditInvoiceListPayload,
};
