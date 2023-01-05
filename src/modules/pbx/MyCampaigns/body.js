
const { MyCampaignFormSchema } = require("./schemas");

const deleteMyCampaignPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditMyCampaignPayload = {
    title: "",
    type: "object",
    properties: {
        fields: MyCampaignFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteMyCampaignPayload,
    bulkEditMyCampaignPayload,
};
