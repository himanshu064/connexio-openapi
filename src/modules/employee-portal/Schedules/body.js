const { ScheduleFormSchema } = require("./schemas");

const deleteSchedulePayload = {
  title: "",
  type: "array",
  items: [42],
};

const deleteScheduleEntryPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditSchedulePayload = {
  title: "",
  type: "object",
  properties: {
    fields: ScheduleFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  bulkEditSchedulePayload,
  deleteSchedulePayload,
  deleteScheduleEntryPayload,
};
