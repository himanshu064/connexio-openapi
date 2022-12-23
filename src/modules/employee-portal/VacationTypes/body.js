const { VacationTypeFormSchema } = require("./schemas");

const deleteVacationTypesPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditVacationTypesPayload = {
  title: "",
  type: "object",
  properties: {
    fields: VacationTypeFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteVacationTypesPayload,
  bulkEditVacationTypesPayload,
};
