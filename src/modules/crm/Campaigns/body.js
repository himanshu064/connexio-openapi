const { CampaignFormSchema } = require("./schemas");

const deleteCampaignPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditCampaignPayload = {
    title: "",
    type: "object",
    properties: {
        fields: CampaignFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteCampaignPayload,
    bulkEditCampaignPayload,

};



