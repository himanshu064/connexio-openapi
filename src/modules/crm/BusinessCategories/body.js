const { BusinessCategoryFormSchema } = require("./schemas");

const deleteBusinessCategoryPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditBusinessCategoriesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: BusinessCategoryFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteBusinessCategoryPayload,
    bulkEditBusinessCategoriesPayload,
};



