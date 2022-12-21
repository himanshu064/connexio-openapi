const { OvertimeFormSchema } = require("./schemas");

const deleteOvertimePayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditOvertimePayload = {
  title: "",
  type: "object",
  properties: {
    fields: OvertimeFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteOvertimePayload,
  bulkEditOvertimePayload,
};
