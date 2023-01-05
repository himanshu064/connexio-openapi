
const { IPSecurityFormSchema } = require("./schemas");

const deleteIPSecurityPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditIPSecuritiesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: IPSecurityFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteIPSecurityPayload,
    bulkEditIPSecuritiesPayload,
};