const { ContactSourceFormSchema } = require("./schemas");

const deleteContactSourcePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditContactSourcesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ContactSourceFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteContactSourcePayload,
    bulkEditContactSourcesPayload,
};



