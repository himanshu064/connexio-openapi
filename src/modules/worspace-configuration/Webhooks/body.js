const {
  WebHooksTaskCompletedFormSchema,
  WebHooksTaskAssignedFormSchema,
  WebHooksTaskConclusionStartedFormSchema,
} = require("./schemas");

const deleteWebHooksTaskCompletedPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditWebHooksTaskCompletedPayload = {
  title: "",
  type: "object",
  properties: {
    fields: WebHooksTaskCompletedFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteWebHooksTaskAssignedPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditWebHooksTaskAssignedPayload = {
  title: "",
  type: "object",
  properties: {
    fields: WebHooksTaskAssignedFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteWebHooksTaskConclusionPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditWebHooksTaskConclusionPayload = {
  title: "",
  type: "object",
  properties: {
    fields: WebHooksTaskConclusionStartedFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteWebHooksTaskCompletedPayload,
  bulkEditWebHooksTaskCompletedPayload,

  deleteWebHooksTaskAssignedPayload,
  bulkEditWebHooksTaskAssignedPayload,

  deleteWebHooksTaskConclusionPayload,
  bulkEditWebHooksTaskConclusionPayload,
};
