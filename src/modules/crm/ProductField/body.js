const { ProductFieldFormSchema } = require("./schemas");

const deleteProductFieldPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditProductFieldsPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ProductFieldFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteProductFieldPayload,
    bulkEditProductFieldsPayload,
};



