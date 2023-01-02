const { DealTypeFormSchema } = require("./schemas");

const deleteDealTypePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditDealTypesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: DealTypeFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteDealTypePayload,
    bulkEditDealTypesPayload,
};



