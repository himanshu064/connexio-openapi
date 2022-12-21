const { PaymentFormSchema } = require("./schemas");

const deletePaymentPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditPaymentPayload = {
  title: "",
  type: "object",
  properties: {
    fields: PaymentFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deletePaymentPayload,
  bulkEditPaymentPayload,
};
