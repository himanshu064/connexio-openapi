const { DispositionStatusFormSchema } = require("./schemas");

const deleteDispositionStatusPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditDispositionStatusPayload = {
  title: "",
  type: "object",
  properties: {
    fields: DispositionStatusFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteDispositionStatusPayload,
  bulkEditDispositionStatusPayload,
};
