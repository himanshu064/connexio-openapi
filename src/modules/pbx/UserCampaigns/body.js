
const { UserCampaignFormSchema } = require("./schemas");

const deleteUserCampaignPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditUserCampaignsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: UserCampaignFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteUserCampaignPayload,
    bulkEditUserCampaignsPayload,
};
