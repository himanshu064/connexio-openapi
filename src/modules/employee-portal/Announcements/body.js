const { AnnouncementFormSchema } = require("./schemas");

const deleteAnnouncementPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditAnnouncementPayload = {
  title: "",
  type: "object",
  properties: {
    fields: AnnouncementFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteAnnouncementPayload,
  bulkEditAnnouncementPayload,
};
