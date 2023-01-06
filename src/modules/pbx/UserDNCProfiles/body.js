
const { UserDNCProfileFormSchema } = require("./schemas");

const deleteUserDNCProfilePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditUserDNCProfilesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: UserDNCProfileFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteUserDNCProfilePayload,
    bulkEditUserDNCProfilesPayload,
};
