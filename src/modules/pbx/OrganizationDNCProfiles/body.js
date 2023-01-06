
const { OrganizationDNCProfileFormSchema } = require("./schemas");

const deleteOrganizationDNCProfilePayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditOrganizationDNCProfileFormSchemasPayload = {
    title: "",
    type: "object",
    properties: {
        fields: OrganizationDNCProfileFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteOrganizationDNCProfilePayload,
    bulkEditOrganizationDNCProfileFormSchemasPayload,
};
