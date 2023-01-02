const { CampaignFieldFormSchema } = require("./schemas");

const deleteCampaignFieldPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditCampaignFieldsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: CampaignFieldFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteCampaignFieldPayload,
    bulkEditCampaignFieldsPayload,
};



