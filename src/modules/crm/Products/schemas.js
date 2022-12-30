const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const ProductFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Product Name",
            "attr": {
                "maxlength": "40",
                "pattern": ".{1,}"
            },
            "pattern": ".{1,}",
            "maxLength": "40",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Product Description",
            "attr": {
                "maxlength": "255"
            },
            "maxLength": "255",
            "propertyOrder": 2
        },
        "active": {
            "type": "boolean",
            "title": "Product Is Active",
            "widget": "checkbox",
            "propertyOrder": 3
        },
        "manufacturer": {
            "type": "string",
            "title": "Manufacturer of Product",
            "attr": {
                "maxlength": "240",
                "pattern": ".{1,}"
            },
            "pattern": ".{1,}",
            "maxLength": "240",
            "minLength": "1",
            "propertyOrder": 4
        },
        "category": {
            "enum": [
                "2"
            ],
            "enum_titles": [
                "Sale"
            ],
            "type": "string",
            "title": "Product Category",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 5
        },
        "sales_start_date": {
            "type": "datetime",
            "title": "Product Sales Start Date",
            "propertyOrder": 6
        },
        "sales_end_date": {
            "type": "datetime",
            "title": "Product Sales End Date",
            "propertyOrder": 7
        },
        "unit_price": {
            "type": "number",
            "title": "Product Unit Price",
            "propertyOrder": 8
        },
        "unit_price_currency": {
            "enum": [
                "USD",
                "EUR"
            ],
            "enum_titles": [
                "USD",
                "EUR"
            ],
            "type": "string",
            "title": "Product Unit Price Currency",
            "propertyOrder": 9
        },
        "taxable": {
            "type": "boolean",
            "title": "Product Taxable",
            "widget": "checkbox",
            "propertyOrder": 10
        },
        "tax_rate": {
            "type": "number",
            "title": "Product Tax Rate",
            "propertyOrder": 11
        },
        "quantityInStock": {
            "type": "number",
            "title": "Product Quantity in Stock",
            "propertyOrder": 12
        },
        "quantityInDemand": {
            "type": "number",
            "title": "Product Quantity in Demand",
            "propertyOrder": 13
        },
        "tag_names": {
            "items": {
                "type": "string",
                "enum": [],
                "enum_titles": []
            },
            "minItems": 0,
            "uniqueItems": true,
            "type": "array",
            "title": "Tag Names",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 14
        }
    },
    "required": [
        "name",
        "active",
        "manufacturer",
        "unit_price",
        "unit_price_currency",
        "taxable",
        "tax_rate",
        "quantityInStock",
        "quantityInDemand"
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
        },
        {
            "title": "See related objects",
            "is_standard": false,
            "redirect_url": "relations/products/:id",
            "description": "See other objects in the system that have relations to this one.",
            "key": "link",
            "visible": false
        }
    ]
}
const ProductTableSchema = {
    "type": "Product",
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
            "label": "Name",
            "property_name": "name",
            "filterable": false,
            "sortable": false,
            "visible": true,
            "order": 2
        },
        {
            "type": "bool",
            "label": "Active",
            "property_name": "active",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "string",
            "label": "Manufacturer",
            "property_name": "manufacturer",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "float",
            "label": "Unit Price",
            "property_name": "unit_price",
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
        },
        {
            "title": "Bulk delete",
            "is_standard": false,
            "key": "bulk_delete",
            "visible": false
        },
        {
            "title": "Bulk edit",
            "is_standard": false,
            "key": "bulk_edit",
            "visible": false
        }
    ],
    "size": 5,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": true
}
const Products = {
    type: "array",
    $ref: "#/components/schemas/ProductTableSchema",
};
module.exports = {
    ProductFormSchema,
    ProductTableSchema,
    Products,
};