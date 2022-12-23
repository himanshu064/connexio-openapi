const {
  OnboardingFunnelFormSchema,
  OnboardingFunnelEmployeeSubscriptionFormSchema,
} = require("./schemas");

const deleteOnboardingFunnelsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditOnboardingFunnelsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: OnboardingFunnelFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteOnboardingFunnelSubscriptionPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditOnboardingFunnelSubscriptionPayload = {
  title: "",
  type: "object",
  properties: {
    fields: OnboardingFunnelEmployeeSubscriptionFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteOnboardingFunnelsPayload,
  bulkEditOnboardingFunnelsPayload,
  deleteOnboardingFunnelSubscriptionPayload,
  bulkEditOnboardingFunnelSubscriptionPayload,
};
