const { CarrierFormSchema } = require("./schemas");

const deleteCarrierPayload = {
    title: "",
    type: "array",
    items: [42],
};

const bulkEditCarrierPayload = {
    title: "",
    type: "object",
    properties: {
        fields: CarrierFormSchema,
        objects: {
            type: "array",
            items: [2, 3],
        },
    },
};

module.exports = {
    deleteCarrierPayload,
    bulkEditCarrierPayload,
};



