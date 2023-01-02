const { OrderFieldFormSchema } = require("./schemas");

const deleteOrderFieldPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOrderFieldsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OrderFieldFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOrderFieldPayload,
    bulkEditOrderFieldsPayload,
};



