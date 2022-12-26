const { JobTypeFormSchema } = require("./schemas");

const deleteJobTypePayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditJobTypePayload = {
  title: "",
  type: "object",
  properties: {
    fields: JobTypeFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteJobTypePayload,
  bulkEditJobTypePayload,
};
