const { DealStageFormSchema } = require("./schemas");

const deleteDealStagePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditDealStagesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: DealStageFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteDealStagePayload,
    bulkEditDealStagesPayload,
};



