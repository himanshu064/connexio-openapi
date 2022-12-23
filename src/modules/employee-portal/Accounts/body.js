const { AccountFormSchema } = require("./schemas");

const deleteAccountsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditAccountsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: AccountFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteAccountsPayload,
  bulkEditAccountsPayload,
};
