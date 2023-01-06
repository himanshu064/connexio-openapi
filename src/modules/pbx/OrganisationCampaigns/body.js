
const { OrganisationCampaignFormSchema } = require("./schemas");

const deleteOrganisationCampaignPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOrganisationCampaignsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OrganisationCampaignFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOrganisationCampaignPayload,
    bulkEditOrganisationCampaignsPayload,
};
