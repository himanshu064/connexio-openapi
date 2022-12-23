const { ServiceFormSchema } = require("./schemas");

const deleteServicesPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditServicesPayload = {
  title: "",
  type: "object",
  properties: {
    fields: ServiceFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteServicesPayload,
  bulkEditServicesPayload,
};
