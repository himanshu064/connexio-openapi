const { ProductFormSchema } = require("./schemas");

const deleteProductPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditProductPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ProductFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteProductPayload,
    bulkEditProductPayload,
};



