const { MissionFunnelFormSchema } = require("./schemas");

const deleteMissionFunnelsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditMissionFunnelsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: MissionFunnelFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteMissionFunnelsPayload,
  bulkEditMissionFunnelsPayload,
};
