const { VacationListFormSchema } = require("./schemas");

const deleteVacationListPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditVacationListPayload = {
  title: "",
  type: "object",
  properties: {
    fields: VacationListFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteVacationListPayload,
  bulkEditVacationListPayload,
};
