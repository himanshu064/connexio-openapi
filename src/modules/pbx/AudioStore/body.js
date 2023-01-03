
const { AudioStoreFormSchema } = require("./schemas");

const deleteAudioStorePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditAudioStoresPayload = {
    title: "",
    type: "object",
    properties: {
        fields: AudioStoreFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteAudioStorePayload,
    bulkEditAudioStoresPayload,
};
