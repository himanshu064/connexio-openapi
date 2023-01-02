const { ActivityPurposeFormSchema } = require("./schemas");

const deleteActivityPurposePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditActivityPurposesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ActivityPurposeFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteActivityPurposePayload,
    bulkEditActivityPurposesPayload,
};



