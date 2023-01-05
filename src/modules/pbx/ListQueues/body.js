const { ListQueueFormSchema } = require("./schemas");

const deleteListQueuePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditListQueuesFormPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ListQueueFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteListQueuePayload,
    bulkEditListQueuesFormPayload,
};



