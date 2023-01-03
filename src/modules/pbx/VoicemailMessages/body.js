
const { VoicemailMessageFormSchema } = require("./schemas");

const deleteVoicemailMessagePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditVoicemailMessagesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: VoicemailMessageFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteVoicemailMessagePayload,
    bulkEditVoicemailMessagesPayload,
};
