
const DIDOrderFormSchema = {
    "title": "gateway_did_order",
    "type": "object",
    "properties": [],
    "operations": []
}
const DIDOrderTableSchema = {
    "type": "GatewayDIDOrder",
    "columns": [
        {
            "type": "int",
            "label": "ID",
            "property_name": "id",
            "filterable": true,
            "sortable": true,
            "visible": false,
            "order": 1
        },
        {
            "type": "string",
            "label": "Numbers Count",
            "property_name": "api_get_ordered_number_count",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "status",
            "label": "Status",
            "property_name": "api_status",
            "filterable": true,
            "sortable": true,
            "visible": true
        }
    ],
    "operations": [],
    "size": 5,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false,
    "title": "Ordered DIDs"
}
const DIDOrders = {
    type: "array",
    $ref: "#/components/schemas/DIDOrderTableSchema",
};
module.exports = {
    DIDOrderFormSchema,
    DIDOrderTableSchema,
    DIDOrders,
};