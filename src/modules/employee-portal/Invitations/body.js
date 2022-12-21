const { InvitationFormSchema } = require("./schemas");

const deleteInvitationPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditInvitationPayload = {
  title: "",
  type: "object",
  properties: {
    fields: InvitationFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteInvitationPayload,
  bulkEditInvitationPayload,
};
