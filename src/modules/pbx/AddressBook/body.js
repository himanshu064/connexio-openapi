
const { AddressBookFormSchema } = require("./schemas");

const deleteAddressBookPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditAddressBooksPayload = {
    title: "",
    type: "object",
    properties: {
        fields: AddressBookFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteAddressBookPayload,
    bulkEditAddressBooksPayload,
};
