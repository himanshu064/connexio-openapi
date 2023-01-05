const AddressBookFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "phone": {
            "enum": [
                "1",
                "4",
                "6",
                "9",
                "13",
                "15",
                "17",
                "19",
                "21",
                "24",
                "26",
                "28",
                "30",
                "32",
                "34",
                "36",
                "38",
                "39",
                "41",
                "43",
                "45",
                "47",
                "49",
                "51",
                "53",
                "55",
                "57",
                "59",
                "61",
                "63",
                "65",
                "67",
                "69",
                "71",
                "73",
                "75",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82",
                "83",
                "84",
                "85",
                "86",
                "91",
                "93",
                "98",
                "101",
                "103",
                "104",
                "106",
                "107",
                "109",
                "112",
                "114",
                "118",
                "120",
                "129",
                "138",
                "140",
                "142",
                "144",
                "146",
                "148",
                "160"
            ],
            "enum_titles": [
                "Melih's Phone (phone1)",
                "4",
                "6",
                "9",
                "13",
                "15",
                "17",
                "19",
                "savraj",
                "24",
                "26",
                "28",
                "Sergey Zoiper",
                "32",
                "34",
                "Melih's Phone 2",
                "zoiper2",
                "39",
                "41",
                "43",
                "45",
                "47",
                "49",
                "51",
                "53",
                "55",
                "57",
                "59",
                "61",
                "63",
                "65",
                "67",
                "69",
                "71",
                "73",
                "75",
                "77",
                "78",
                "79",
                "80",
                "81",
                "82",
                "sadf",
                "84",
                "85",
                "sdfgsdfgdfsg",
                "91",
                "93",
                "98",
                "101",
                "asfdasdfsdf",
                "104",
                "John's Zoiper",
                "107",
                "109",
                "112",
                "114",
                "118",
                "120",
                "129",
                "138",
                "140",
                "142",
                "144",
                "146",
                "netweb",
                "raghubeer"
            ],
            "type": "string",
            "title": "Choose User Phone",
            "attr": {
                "data-plugin-select2": true
            },
            "help": "List of pre-defined user phones. Either select a user phone or provide a phone number.",
            "propertyOrder": 1
        },
        "phone_number": {
            "type": "string",
            "title": "Phone Number",
            "help": "Enter a valid phone number.",
            "propertyOrder": 2
        },
        "name": {
            "type": "string",
            "title": "Name",
            "attr": {
                "maxlength": "40",
                "pattern": ".{1,}"
            },
            "pattern": ".{1,}",
            "help": "Name can be a minimum of 1 and maximum of 40 alphanumeric characters.",
            "maxLength": "40",
            "minLength": "1",
            "propertyOrder": 3
        },
        "image": {
            "title": "Photo",
            "help": "An image file with minimum and maximum dimension of 50 x 50 and 600 x 600 respectively. Only accepts file size of up to 400KB.",
            "type": "string",
            "multiple": false,
            "accept": "image/*",
            "max_size": 400000,
            "widget": "file_widget",
            "propertyOrder": 4
        },
        "favorite": {
            "type": "boolean",
            "title": "Add contact to favorite",
            "widget": "checkbox",
            "propertyOrder": 5
        }
    },
    "required": [
        "phone_number"
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
const AddressBookTableSchema = {
    "type": "AddressBookEntry",
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
            "type": "image",
            "label": "Picture",
            "property_name": "image",
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
    "size": 3,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const AddressBooks = {
    type: "array",
    $ref: "#/components/schemas/AddressBookTableSchema",
};
module.exports = {
    AddressBookFormSchema,
    AddressBookTableSchema,
    AddressBooks,
};