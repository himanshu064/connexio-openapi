const { LinkFormSchema } = require("./schemas");

const deleteLinkPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditLinksPayload = {
  title: "",
  type: "object",
  properties: {
    fields: LinkFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteLinkPayload,
  bulkEditLinksPayload,
};
