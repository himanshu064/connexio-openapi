
const { OmniChannelFormSchema } = require("./schemas");

const deleteOmniChannelPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOmniChannelsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OmniChannelFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOmniChannelPayload,
    bulkEditOmniChannelsPayload,
};
