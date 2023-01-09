const { WorkspacesFormSchema } = require("./schemas");

const deleteWorkspacesPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditWorkspacesPayload = {
  title: "",
  type: "object",
  properties: {
    fields: WorkspacesFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteWorkspacesPayload,
  bulkEditWorkspacesPayload,
};
