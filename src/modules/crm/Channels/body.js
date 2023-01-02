const { ActivityFormSchema } = require("./schemas");

const deleteChannelPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditChannelsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ActivityFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteChannelPayload,
    bulkEditChannelsPayload,
};



