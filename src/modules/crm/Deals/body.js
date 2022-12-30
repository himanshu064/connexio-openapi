const { DealFormSchema } = require("./schemas");

const deleteDealPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditDealPayload = {
    title: "",
    type: "object",
    properties: {
        fields: DealFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteDealPayload,
    bulkEditDealPayload,
};



