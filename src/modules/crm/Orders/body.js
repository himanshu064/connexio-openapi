const { OrderFormSchema } = require("./schemas");

const deleteOrderPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOrderPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OrderFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOrderPayload,
    bulkEditOrderPayload,
};



