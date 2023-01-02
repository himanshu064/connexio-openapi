const { LeadStatusFormSchema } = require("./schemas");

const deleteLeadStatusPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditLeadStatusesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: LeadStatusFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteLeadStatusPayload,
    bulkEditLeadStatusesPayload,
};



