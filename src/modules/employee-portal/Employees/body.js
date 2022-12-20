const {
  EmployeeFormSchema,
  EmployeeFunnelSubscriptionFormSchema,
} = require("./schemas");

const bulkEditEmployeePayload = {
  title: "",
  type: "object",
  properties: {
    fields: {
      type: "object",
      properties: EmployeeFormSchema.properties,
    },
    objects: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

const bulkEditEmployeeFunnelsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: EmployeeFunnelSubscriptionFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteFunnelByEmployeeIdPayload = {
  title: "",
  type: "object",
  properties: {
    type: "array",
    items: {
      type: "string",
    },
  },
};

module.exports = {
  bulkEditEmployeePayload,
  bulkEditEmployeeFunnelsPayload,
  deleteFunnelByEmployeeIdPayload,
};
