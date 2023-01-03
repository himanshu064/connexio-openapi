
const { OrganizationalPhoneFormSchema } = require("./schemas");

const deleteOrganizationalPhonePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOrganizationalPhonesPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OrganizationalPhoneFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOrganizationalPhonePayload,
    bulkEditOrganizationalPhonesPayload,
};
