const { ListDialerQueueFormSchema } = require("./schemas");

const deleteListDialerQueuePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditListDialerQueueFormPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ListDialerQueueFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteListDialerQueuePayload,
    bulkEditListDialerQueueFormPayload,
};



