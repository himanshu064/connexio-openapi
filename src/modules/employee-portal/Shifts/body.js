const { ShiftFormSchema } = require("./schemas");

const deleteShiftPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditShiftPayload = {
  title: "",
  type: "object",
  properties: {
    fields: ShiftFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteShiftPayload,
  bulkEditShiftPayload,
};
