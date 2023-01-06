const UserCampaignFormSchema ={
    "title": "",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "help": "Please enter the name of campaign",
            "minLength": "1",
            "propertyOrder": 1
        },
        "description": {
            "type": "string",
            "title": "Description",
            "widget": "textarea",
            "help": "Please enter the description of campaign",
            "propertyOrder": 2
        },
        "rank": {
            "type": "integer",
            "title": "Rank",
            "help": "Please enter the rank of campaign",
            "propertyOrder": 3
        },
        "dial_timeout": {
            "type": "integer",
            "title": "Dial Timeout",
            "help": "Please enter the dial time out. (min: 20, max: 60)",
            "propertyOrder": 4
        },
        "dial_order": {
            "enum": [
                "RANDOM",
                "NEWEST_FIRST",
                "OLDEST_FIRST",
                "LEAST_CALLED_FIRST",
                "MOST_CALLED_FIRST",
                "OLDEST_CALLED_FIRST"
            ],
            "enum_titles": [
                "Random",
                "Newest First",
                "Oldest First",
                "Least Called First",
                "Most Called First",
                "Oldest Called First"
            ],
            "type": "string",
            "title": "Dial Order",
            "help": "Please choice the dial order of campaign",
            "propertyOrder": 5
        },
        "min_hopper_size": {
            "type": "integer",
            "title": "Min Hopper Size",
            "help": "Please enter min hopper size of campaign",
            "propertyOrder": 6
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
            "help": "Select an user for assign to campaign",
            "propertyOrder": 7
        }
    },
    "required": [
        "name",
        "description",
        "rank",
        "dial_timeout",
        "dial_order",
        "min_hopper_size",
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
const UserCampaignTableSchema = {
    "type": "UserCampaign",
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
            "label": "Rank",
            "property_name": "rank",
            "filterable": false,
            "sortable": true,
            "visible": true
        },
        {
            "type": "int",
            "label": "Dial Timeout",
            "property_name": "dial_timeout",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "int",
            "label": "Minimum Hopper Size",
            "property_name": "min_hopper_size",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "string",
            "label": "Dial Order",
            "property_name": "dial_order",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "User",
            "label": "User",
            "property_name": "user.full_name",
            "filterable": false,
            "sortable": false,
            "visible": true
        },
        {
            "type": "status",
            "label": "Status",
            "property_name": "api_status",
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
    "size": 8,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const UserCampaigns = {
    type: "array",
    $ref: "#/components/schemas/UserCampaignTableSchema",
};
module.exports = {
    UserCampaignFormSchema,
    UserCampaignTableSchema,
    UserCampaigns,
};