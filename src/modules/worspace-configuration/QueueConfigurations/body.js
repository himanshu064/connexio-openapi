const { QueueConfigurationFormSchema } = require("./schemas");

const deleteQueueConfigurationPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditQueueConfigurationPayload = {
  title: "",
  type: "object",
  properties: {
    fields: QueueConfigurationFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteQueueConfigurationPayload,
  bulkEditQueueConfigurationPayload,
};
