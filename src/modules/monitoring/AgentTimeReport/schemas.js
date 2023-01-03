const AgentTimeReportFormSchema = {
    "title": "",
    "type": "object",
    "properties": {
        "from_date_time": {
            "type": "datetime",
            "title": "from_date_time",
            "propertyOrder": 1
        },
        "to_date_time": {
            "type": "datetime",
            "title": "to_date_time",
            "propertyOrder": 2
        },
        "group_by_period": {
            "enum": [
                "hour",
                "day",
                "week",
                "month",
                "year"
            ],
            "enum_titles": [
                "hour",
                "day",
                "week",
                "month",
                "year"
            ],
            "type": "string",
            "title": "group_by_period",
            "propertyOrder": 3
        },
        "users": {
            "type": "array",
            "title": "Users",
            "items": {
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
                    "47",
                    "53",
                    "54",
                    "55",
                    "72",
                    "93",
                    "95",
                    "96",
                    "98",
                    "101",
                    "103",
                    "104",
                    "105",
                    "106",
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
                    "demo_client_2_client_manager_1@gmail.com - demo_client_2_client_manager_1",
                    "demo_client_2_staff_manager_1@gmail.com - disabled1__",
                    "demo_client_2_staff_manager_2@gmail.com - disabled2",
                    "demo_client_2_staff_manager_3@gmail.com - disabled3",
                    "demo_client_2_staff_manager_2@gmail.com - demo_client_2_staff_manager_2",
                    "janella@connexiocloud.com - janella",
                    "jess@connexiocloud.com - jess",
                    "dexter@connexiocloud.com - dexter",
                    "info@connexiocloud.com - ConneXio Cloud",
                    "email@test.com - johnlu",
                    "johnlu0907@outlook.com - john",
                    "adsfasdfv@adsf.df - himanshu1",
                    "vfkvjfvkkf@asdf.df - himanshu2",
                    "fcvkdkd@adsf.df - sergey2",
                    "adfsasdfdsaf@adsf.df - john1",
                    "vfvjfjvk@sdf.df - john2",
                    "nitin.netweb@gmail.com - Net web",
                    "net@gmail.com - net web n",
                    "net@123gmail.com - bgfhf",
                    "netweb1@mail.com - Net  Web1",
                    "deleteuser@gmail.com - deleteuser"
                ],
                "type": "string",
                "title": "prototype",
                "attr": {
                    "data-plugin-select2": true
                }
            },
            "help": "Select users to limit report to",
            "propertyOrder": 4
        },
        "workspaces": {
            "type": "array",
            "title": "Workspaces",
            "items": {
                "enum": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                "enum_titles": [
                    "ws1",
                    "ConneXio Sales",
                    "Himanshu's workspace",
                    "Sergey's workspace",
                    "John's workspace",
                    "John1's workspace"
                ],
                "type": "string",
                "title": "prototype",
                "attr": {
                    "data-plugin-select2": true
                }
            },
            "help": "Select workspaces to limit report to",
            "propertyOrder": 5
        }
    },
    "required": [
        "from_date_time",
        "to_date_time",
        "group_by_period",
        "users",
        "workspaces"
    ]
}
const AgentTimeReports = {
    type: "array",
    $ref: "#/components/schemas/AgentTimeReportFormSchema",
};
module.exports = {
    AgentTimeReportFormSchema,
    AgentTimeReports,
};
