const {
  OffboardingFunnelFormSchema,
  OffboardingFunnelTasksSubscriptionFormSchema,
} = require("./schemas");

const deleteOffboardingFunnelsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditOffboardingFunnelsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: OffboardingFunnelFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteOffboardingFunnelTaskSubscriptionPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditOffboardingFunnelTaskSubscriptionPayload = {
  title: "",
  type: "object",
  properties: {
    fields: OffboardingFunnelTasksSubscriptionFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteOffboardingFunnelsPayload,
  bulkEditOffboardingFunnelsPayload,

  deleteOffboardingFunnelTaskSubscriptionPayload,
  bulkEditOffboardingFunnelTaskSubscriptionPayload,
};
