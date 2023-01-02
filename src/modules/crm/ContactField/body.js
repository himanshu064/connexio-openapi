const { ContactFieldFormSchema } = require("./schemas");

const deleteContactFieldPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditContactFieldFormPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ContactFieldFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteContactFieldPayload,
    bulkEditContactFieldFormPayload,
};



