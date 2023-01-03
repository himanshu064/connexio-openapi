
const { UserPhoneFormSchema } = require("./schemas");

const deleteUserPhonePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditUserPhonesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: UserPhoneFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteUserPhonePayload,
    bulkEditUserPhonesPayload,
};
