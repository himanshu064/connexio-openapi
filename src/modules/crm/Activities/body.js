const { ActivityFormSchema } = require("./schemas");

const deleteActivityPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditActivitiesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: ActivityFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteActivityPayload,
    bulkEditActivitiesPayload,
};



