const {
    timezone_enum_titles,
    timezone_enum,
} = require("../../../constants/timezone");
const {
    user_groups_enum_titles,
    user_groups_enum,
} = require("../../../constants/user_groups");

const ProductCategoryFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "minLength": "1",
            "propertyOrder": 1
        }
    },
    "required": [
        "name"
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
const ProductCategoryTableSchema = {
    "type": "ProductCategory",
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
            "type": "int",
            "label": "Order",
            "property_name": "order",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "ProductCategory",
            "label": "ParentName",
            "property_name": "parent.name",
            "filterable": false,
            "sortable": false,
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
    "size": 4,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const ProductCategories = {
    type: "array",
    $ref: "#/components/schemas/ProductCategoryTableSchema",
};
module.exports = {
    ProductCategoryFormSchema,
    ProductCategoryTableSchema,
    ProductCategories,
};