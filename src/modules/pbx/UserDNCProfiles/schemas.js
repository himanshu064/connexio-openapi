const UserDNCProfileFormSchema ={
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "minLength": "1",
            "propertyOrder": 1
        },
        "pass_unknown": {
            "type": "boolean",
            "title": "Pass Unknown",
            "widget": "checkbox",
            "propertyOrder": 2
        },
        "provider": {
            "enum": [
                "local"
            ],
            "enum_titles": [
                "Local"
            ],
            "type": "string",
            "title": "Dnc Profile Type",
            "propertyOrder": 3
        },
        "options": {
            "type": "string",
            "title": "Options",
            "attr": {
                "custom_widget": {
                    "type": "keyvalue"
                }
            },
            "propertyOrder": 4
        },
        "user": {
            "enum": [
                "1",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "27",
                "28",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "47",
                "49",
                "50",
                "53",
                "54",
                "55",
                "71",
                "73",
                "75",
                "92",
                "93",
                "94",
                "95",
                "96",
                "97",
                "98",
                "99",
                "100",
                "101",
                "102",
                "103",
                "104",
                "105",
                "106",
                "107",
                "108",
                "109",
                "110",
                "111",
                "112",
                "113",
                "114"
            ],
            "enum_titles": [
                "someone@somewhere.com - staff_user",
                "billy@cxcl.io - billy",
                "michael@telesero.com - michael",
                "ryan@telesero.com - ryan",
                "vince@telesero.com - vince",
                "mikhail@telesero.com - mikhail",
                "johnlu@outlook.com - employee",
                "melih@telesero.com - melih",
                "grechin.sergey@gmail.com - sergey",
                "bari@cxcl.io - bari",
                "faruk@telesero.com - faruk",
                "linda.spione@connexiocloud.com - Linda",
                "dummy@email.com - employee23",
                "grechin.sergey+123123@gmail.com - no_acis_on_ws_user",
                "grechin.sergey+34343@gmail.com - sergey1",
                "melih.test@telesero.com - melih2",
                "mustafa@telesero.com - mstf",
                "demo_client_2_client_employee_2@gmail.com - demo_client_2_client_employee_2",
                "demo_client_2_client_employee_3@gmail.com - demo_client_2_client_employee_3",
                "demo_client_2_client_manager_1@gmail.com - demo_client_2_client_manager_1",
                "demo_client_2_client_manager_3@gmail.com - demo_client_2_client_manager_3",
                "demo_client_2_client_manager_admin_1@gmail.com - demo_client_2_client_manager_admin_1",
                "demo_client_2_staff_manager_1@gmail.com - disabled1__",
                "demo_client_2_staff_manager_2@gmail.com - disabled2",
                "demo_client_2_staff_manager_3@gmail.com - disabled3",
                "demo_client_2_staff_manager_1@gmail.com - demo_client_2_staff_manager_1",
                "demo_client_2_staff_manager_3@gmail.com - demo_client_2_staff_manager_3",
                "asdf@asdfasdf.er - created_by_client_admin",
                "test_userxxx@mail.com - test_userxxx",
                "janella@connexiocloud.com - janella",
                "vince@connnexiocloud.com - vincent",
                "jess@connexiocloud.com - jess",
                "dexter@connexiocloud.com - dexter",
                "sales@connexiocloud.com - ConneXio",
                "info@connexiocloud.com - ConneXio Cloud",
                "trisha@connexiocloud.com - Trisha",
                "grechin.sergey+77777@gmail.com - registered_through_invitation",
                "email@test.com - johnlu",
                "tes11t@mail.com - testtest",
                "johnlu0907@outlook.com - john",
                "adsfasdfv@adsf.df - himanshu1",
                "vfkvjfvkkf@asdf.df - himanshu2",
                "fcvkdkd@adsf.df - sergey2",
                "fjfjfjf@adf.df - someuser",
                "adfsasdfdsaf@adsf.df - john1",
                "vfvjfjvk@sdf.df - john2",
                "nitin.netweb@gmail.com - Net web",
                "net@gmail.com - net web n",
                "net@123gmail.com - bgfhf",
                "netweb1@mail.com - Net  Web1",
                "deleteuser@gmail.com - deleteuser"
            ],
            "type": "string",
            "title": "Select User",
            "attr": {
                "data-plugin-select2": true
            },
            "propertyOrder": 5
        }
    },
    "required": [
        "name",
        "pass_unknown",
        "provider",
        "options",
        "user"
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
const UserDNCProfileTableSchema = {
    "type": "UserDncProfile",
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
            "type": "string",
            "label": "Type",
            "property_name": "provider",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "bool",
            "label": "Pass Unknown",
            "property_name": "pass_unknown",
            "filterable": true,
            "sortable": true,
            "visible": true
        },
        {
            "type": "User",
            "label": "User",
            "property_name": "user.name",
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
        },
        {
            "title": "Access control management",
            "is_standard": false,
            "icon": "lock",
            "redirect_url": "https://dev5bo.cxcl.io/roles/",
            "description": "Managing access to these objects",
            "key": "link",
            "visible": false
        }
    ],
    "size": 5,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const UserDNCProfiles = {
    type: "array",
    $ref: "#/components/schemas/UserDNCProfileTableSchema",
};
module.exports = {
    UserDNCProfileFormSchema,
    UserDNCProfileTableSchema,
    UserDNCProfiles,
};