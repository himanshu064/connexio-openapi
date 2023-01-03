
const { VoicemailBoxFormSchema } = require("./schemas");

const deleteVoicemailBoxPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditVoicemailBoxesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: VoicemailBoxFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteVoicemailBoxPayload,
    bulkEditVoicemailBoxesPayload,
};
