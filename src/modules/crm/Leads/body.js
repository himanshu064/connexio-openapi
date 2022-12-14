
const { LeadFormSchema } = require("./schemas");

const deleteLeadPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditLeadPayload = {
    title: "",
    type: "object",
    properties: {
        fields: LeadFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteLeadPayload,
    bulkEditLeadPayload,
};
