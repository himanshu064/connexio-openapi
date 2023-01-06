
const { MyDNCProfileFormSchema } = require("./schemas");

const deleteMyDNCProfilePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditMyDNCProfilesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: MyDNCProfileFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteMyDNCProfilePayload,
    bulkEditMyDNCProfilesPayload,
};
