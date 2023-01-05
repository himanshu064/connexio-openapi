const IPSecurityFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "ip": {
            "type": "string",
            "title": "Ip Address",
            "propertyOrder": 1
        },
        "permanent": {
            "type": "boolean",
            "title": "Permanent",
            "widget": "checkbox",
            "help": "Non-permanent IP addresses are removed automatically when given grant to IP expires. Expiration cannot be manually set and grants are given for 24 hour. Launching web-phone will automatically grant 24 hours access to that IP and grants are extended if web-phone is re-launched.",
            "propertyOrder": 2
        }
    },
    "required": [
        "ip",
        "permanent"
    ],
    "operations": [
        {
            "title": "Edit",
            "is_standard": true,
            "method": "PATCH",
            "key": "edit",
            "route_suffix": "",
            "visible": true
        },
        {
            "title": "Delete",
            "is_standard": false,
            "key": "delete",
            "visible": true
        }
    ]
}
const IPSecurityTableSchema = {
    "type": "IpSecurityDTO",
    "columns": [
        {
            "type": "string",
            "label": "IP Address",
            "property_name": "ip",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "DateTime",
            "label": "Expires",
            "property_name": "expires",
            "filterable": true,
            "sortable": true,
            "visible": true
        }
    ],
    "operations": [
        {
            "title": "Create",
            "is_standard": true,
            "method": "POST",
            "key": "create",
            "route_suffix": "",
            "visible": false
        }
    ],
    "size": 2,
    "polymorphic_crud_types": [],
    "primary_key": "",
    "search": false
}
const IPSecurities = {
    type: "array",
    $ref: "#/components/schemas/IPSecurityTableSchema",
};
module.exports = {
    IPSecurityFormSchema,
    IPSecurityTableSchema,
    IPSecurities,
};