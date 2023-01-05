const { ListWorkspaceQueueFormSchema } = require("./schemas");

const deleteListWorkspaceQueuePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditListWorkspaceQueuePayload = {
    title: "",
    type: "object",
    properties: {
        fields: ListWorkspaceQueueFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteListWorkspaceQueuePayload,
    bulkEditListWorkspaceQueuePayload,
};



