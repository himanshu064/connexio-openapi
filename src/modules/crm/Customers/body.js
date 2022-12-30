const { CustomerFormSchema } = require("./schemas");

const deleteCustomerPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditCustomerPayload = {
    title: "",
    type: "object",
    properties: {
        fields: CustomerFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteCustomerPayload,
    bulkEditCustomerPayload,
};



