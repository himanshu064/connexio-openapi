const { DealFieldFormSchema } = require("./schemas");

const deleteDealFieldPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditDealFieldPayload = {
    title: "",
    type: "object",
    properties: {
        fields: DealFieldFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteDealFieldPayload,
    bulkEditDealFieldPayload,
};



