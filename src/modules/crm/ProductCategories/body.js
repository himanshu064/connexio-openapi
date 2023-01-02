const { ProductCategoryFormSchema } = require("./schemas");

const deleteProductCategoryPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditProductCategoryPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ProductCategoryFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteProductCategoryPayload,
    bulkEditProductCategoryPayload,
};



