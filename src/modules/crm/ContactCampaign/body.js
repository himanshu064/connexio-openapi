const { ContactCampaignFormSchema } = require("./schemas");

const deleteContactCampaignPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditContactCampaignPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ContactCampaignFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteContactCampaignPayload,
    bulkEditContactCampaignPayload,
};



