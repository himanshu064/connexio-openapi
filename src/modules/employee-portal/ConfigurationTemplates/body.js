const { ConfigurationTemplateFormSchema } = require("./schemas");

const deleteConfigurationTemplatePayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditConfigurationTemplatePayload = {
  title: "",
  type: "object",
  properties: {
    fields: ConfigurationTemplateFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteConfigurationTemplatePayload,
  bulkEditConfigurationTemplatePayload,
};
