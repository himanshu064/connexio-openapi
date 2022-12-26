const { DepartmentsFormSchema } = require("./schemas");

const deleteDepartmentsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditDepartmentsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: DepartmentsFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteDepartmentsPayload,
  bulkEditDepartmentsPayload,
};
