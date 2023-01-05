
const ListDIDFormSchema = {
    "title": "gateway_did",
    "type": "object",
    "properties": {
        "did": {
            "title": "did",
            "type": "object",
            "properties": {
                "storage": {
                    "type": "boolean",
                    "title": "storage",
                    "widget": "checkbox",
                    "propertyOrder": 1
                },
                "active": {
                    "type": "boolean",
                    "title": "active",
                    "widget": "checkbox",
                    "propertyOrder": 2
                },
                "action": {
                    "type": "poly",
                    "oneOf": [
                        {
                            "$ref": "#call_phone_action"
                        },
                        {
                            "$ref": "#hangup_action"
                        },
                        {
                            "$ref": "#play_action"
                        },
                        {
                            "$ref": "#playback_audio_action"
                        },
                        {
                            "$ref": "#speak_action"
                        },
                        {
                            "$ref": "#transfer_ivr_action"
                        }
                    ],
                    "title": "Timeout Action",
                    "poly_type_name": "_type",
                    "help": "Action when timeout reached.",
                    "propertyOrder": 3
                }
            },
            "required": [
                "storage",
                "active"
            ],
            "definitions": {
                "call_phone_action": {
                    "title": "Call Phone",
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
                                "149",
                                "150",
                                "151",
                                "160"
                            ],
                            "enum_titles": [
                                "Melih's Phone (phone1) (phone1)",
                                " (phone4)",
                                " (phone6)",
                                " (phone9)",
                                " (phone13)",
                                " (phone15)",
                                " (phone17)",
                                " (phone19)",
                                "savraj (phone21)",
                                " (phone24)",
                                " (phone26)",
                                " (phone28)",
                                "Sergey Zoiper (phone30)",
                                " (phone32)",
                                " (phone34)",
                                "Melih's Phone 2 (phone36)",
                                "zoiper2 (phone38)",
                                " (phone39)",
                                " (phone41)",
                                " (phone43)",
                                " (phone45)",
                                " (phone47)",
                                " (phone49)",
                                " (phone51)",
                                " (phone53)",
                                " (phone55)",
                                " (phone57)",
                                " (phone59)",
                                " (phone61)",
                                " (phone63)",
                                " (phone65)",
                                " (phone67)",
                                " (phone69)",
                                " (phone71)",
                                " (phone73)",
                                " (phone75)",
                                " (phone77)",
                                " (phone78)",
                                " (phone79)",
                                " (phone80)",
                                " (phone81)",
                                " (phone82)",
                                "sadf (phone83)",
                                " (phone84)",
                                " (phone85)",
                                "sdfgsdfgdfsg (phone86)",
                                " (phone91)",
                                " (phone93)",
                                " (phone98)",
                                " (phone101)",
                                "asfdasdfsdf (phone103)",
                                " (phone104)",
                                "John's Zoiper (phone106)",
                                " (phone107)",
                                " (phone109)",
                                " (phone112)",
                                " (phone114)",
                                " (phone118)",
                                " (phone120)",
                                " (phone129)",
                                " (phone138)",
                                " (phone140)",
                                " (phone142)",
                                " (phone144)",
                                " (phone146)",
                                "netweb (phone148)",
                                "netweb (phone149)",
                                "netweb (phone150)",
                                " (phone151)",
                                "raghubeer (phone160)"
                            ],
                            "type": "string",
                            "title": "Choose Phone",
                            "attr": {
                                "data-plugin-select2": true
                            },
                            "help": "List of registered phones.",
                            "propertyOrder": 1
                        },
                        "_type": {
                            "const": "call_phone_action"
                        }
                    },
                    "required": [
                        "phone"
                    ],
                    "help": "Choose phone to call.",
                    "id": "#call_phone_action"
                },
                "hangup_action": {
                    "title": "Hangup",
                    "type": "object",
                    "properties": {
                        "cause_code": {
                            "enum": [
                                "0",
                                "1",
                                "2",
                                "3",
                                "6",
                                "7",
                                "16",
                                "17",
                                "18",
                                "19",
                                "20",
                                "21",
                                "22",
                                "23",
                                "25",
                                "27",
                                "28",
                                "29",
                                "30",
                                "31",
                                "34",
                                "38",
                                "41",
                                "42",
                                "43",
                                "44",
                                "45",
                                "47",
                                "50",
                                "52",
                                "54",
                                "57",
                                "58",
                                "63",
                                "65",
                                "66",
                                "69",
                                "79",
                                "81",
                                "88",
                                "95",
                                "96",
                                "97",
                                "98",
                                "99",
                                "100",
                                "101",
                                "102",
                                "103",
                                "111",
                                "127",
                                "487",
                                "500",
                                "501",
                                "502",
                                "503",
                                "600",
                                "601",
                                "602",
                                "603",
                                "604",
                                "605",
                                "606",
                                "607",
                                "608",
                                "609",
                                "610",
                                "611",
                                "612",
                                "613",
                                "614",
                                "615",
                                "616",
                                "617",
                                "618",
                                "619",
                                "620",
                                "621",
                                "622",
                                "623",
                                "624"
                            ],
                            "enum_titles": [
                                "UNSPECIFIED",
                                "UNALLOCATED_NUMBER",
                                "NO_ROUTE_TRANSIT_NET",
                                "NO_ROUTE_DESTINATION",
                                "CHANNEL_UNACCEPTABLE",
                                "CALL_AWARDED_DELIVERED",
                                "NORMAL_CLEARING",
                                "USER_BUSY",
                                "NO_USER_RESPONSE",
                                "NO_ANSWER",
                                "SUBSCRIBER_ABSENT",
                                "CALL_REJECTED",
                                "NUMBER_CHANGED",
                                "REDIRECTION_TO_NEW_DESTINATION",
                                "EXCHANGE_ROUTING_ERROR",
                                "DESTINATION_OUT_OF_ORDER",
                                "INVALID_NUMBER_FORMAT",
                                "FACILITY_REJECTED",
                                "RESPONSE_TO_STATUS_ENQUIRY",
                                "NORMAL_UNSPECIFIED",
                                "NORMAL_CIRCUIT_CONGESTION",
                                "NETWORK_OUT_OF_ORDER",
                                "NORMAL_TEMPORARY_FAILURE",
                                "SWITCH_CONGESTION",
                                "ACCESS_INFO_DISCARDED",
                                "REQUESTED_CHAN_UNAVAIL",
                                "PRE_EMPTED",
                                "_RESOURCE_UNAVAILABLE",
                                "FACILITY_NOT_SUBSCRIBED",
                                "OUTGOING_CALL_BARRED",
                                "INCOMING_CALL_BARRED",
                                "BEARERCAPABILITY_NOTAUTH",
                                "BEARERCAPABILITY_NOTAVAIL",
                                "SERVICE_UNAVAILABLE",
                                "BEARERCAPABILITY_NOTIMPL",
                                "CHAN_NOT_IMPLEMENTED",
                                "FACILITY_NOT_IMPLEMENTED",
                                "SERVICE_NOT_IMPLEMENTED",
                                "INVALID_CALL_REFERENCE",
                                "INCOMPATIBLE_DESTINATION",
                                "INVALID_MSG_UNSPECIFIED",
                                "MANDATORY_IE_MISSING",
                                "MESSAGE_TYPE_NONEXIST",
                                "WRONG_MESSAGE",
                                "IE_NONEXIST",
                                "INVALID_IE_CONTENTS",
                                "WRONG_CALL_STATE",
                                "RECOVERY_ON_TIMER_EXPIRE",
                                "MANDATORY_IE_LENGTH_ERROR",
                                "PROTOCOL_ERROR",
                                "INTERWORKING",
                                "ORIGINATOR_CANCEL",
                                "CRASH",
                                "SYSTEM_SHUTDOWN",
                                "LOSE_RACE",
                                "MANAGER_REQUEST",
                                "BLIND_TRANSFER",
                                "ATTENDED_TRANSFER",
                                "ALLOTTED_TIMEOUT",
                                "USER_CHALLENGE",
                                "MEDIA_TIMEOUT",
                                "PICKED_OFF",
                                "USER_NOT_REGISTERED",
                                "PROGRESS_TIMEOUT",
                                "INVALID_GATEWAY",
                                "GATEWAY_DOWN",
                                "INVALID_URL",
                                "INVALID_PROFILE",
                                "NO_PICKUP",
                                "SRTP_READ_ERROR",
                                "BOWOUT",
                                "BUSY_EVERYWHERE",
                                "DECLINE",
                                "DOES_NOT_EXIST_ANYWHERE",
                                "NOT_ACCEPTABLE",
                                "UNWANTED",
                                "NO_IDENTITY",
                                "BAD_IDENTITY_INFO",
                                "UNSUPPORTED_CERTIFICATE",
                                "INVALID_IDENTITY",
                                "STALE_DATE"
                            ],
                            "type": "string",
                            "title": "Choose Hangup Cause",
                            "attr": {
                                "data-plugin-select2": true
                            },
                            "help": "Hangup cause to execute.",
                            "propertyOrder": 1
                        },
                        "_type": {
                            "const": "hangup_action"
                        }
                    },
                    "required": [
                        "cause_code"
                    ],
                    "help": "Choose hangup cause code.",
                    "id": "#hangup_action"
                },
                "play_action": {
                    "title": "Play Audio URL",
                    "type": "object",
                    "properties": {
                        "uri": {
                            "type": "string",
                            "title": "Audio URL",
                            "widget": "url",
                            "help": "This will be played to the call and then hangups.",
                            "propertyOrder": 1
                        },
                        "_type": {
                            "const": "play_action"
                        }
                    },
                    "required": [
                        "uri"
                    ],
                    "help": "Provide audio URL to be played.",
                    "id": "#play_action"
                },
                "playback_audio_action": {
                    "title": "Play Audio",
                    "type": "object",
                    "properties": {
                        "audio": {
                            "enum": [
                                "1",
                                "4"
                            ],
                            "enum_titles": [
                                "ConneXio Sales Voicemail11",
                                "demo test 4"
                            ],
                            "type": "string",
                            "title": "Choose Audio",
                            "attr": {
                                "data-plugin-select2": true
                            },
                            "help": "Choose from the list of uploaded audio files.",
                            "propertyOrder": 1
                        },
                        "_type": {
                            "const": "playback_audio_action"
                        }
                    },
                    "required": [
                        "audio"
                    ],
                    "help": "Choose from uploaded audio files.",
                    "id": "#playback_audio_action"
                },
                "speak_action": {
                    "title": "Speak",
                    "type": "object",
                    "properties": {
                        "message": {
                            "type": "string",
                            "title": "Message",
                            "help": "Human readable text to be spoken.",
                            "propertyOrder": 1
                        },
                        "voice": {
                            "enum": [
                                "kal",
                                "awb",
                                "rms",
                                "slt"
                            ],
                            "enum_titles": [
                                "Male 1",
                                "Male 2",
                                "Male 3",
                                "Female"
                            ],
                            "type": "string",
                            "title": "Voice",
                            "help": "Voice to read the message.",
                            "propertyOrder": 2
                        },
                        "_type": {
                            "const": "speak_action"
                        }
                    },
                    "required": [
                        "message",
                        "voice"
                    ],
                    "help": "Provide human readable text message to be spoken.",
                    "id": "#speak_action"
                },
                "transfer_ivr_action": {
                    "title": "Transfer IVR",
                    "type": "object",
                    "properties": {
                        "ivr": {
                            "enum": [
                                "8",
                                "11",
                                "23",
                                "122",
                                "137",
                                "159"
                            ],
                            "enum_titles": [
                                "Melih's test edited1",
                                "Test",
                                "ConneXio IVR",
                                "Demo testing",
                                "Some new text",
                                "NETWEB"
                            ],
                            "type": "string",
                            "title": "ivr",
                            "attr": {
                                "data-plugin-select2": true
                            },
                            "propertyOrder": 1
                        },
                        "_type": {
                            "const": "transfer_ivr_action"
                        }
                    },
                    "required": [
                        "ivr"
                    ],
                    "help": "Transfer to an IVR application.",
                    "id": "#transfer_ivr_action"
                }
            },
            "propertyOrder": 1
        }
    },
    "required": [
        "did"
    ],
    "operations": [
        {
            "title": "Action",
            "is_standard": true,
            "method": "POST",
            "key": "action",
            "route_suffix": "action",
            "visible": false
        }
    ]
}
const ListDIDTableSchema = {
    "type": "GatewayDID",
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
            "type": "phone_number",
            "label": "Phone Number",
            "property_name": "phone_number",
            "filterable": false,
            "sortable": false,
            "visible": true
        }
    ],
    "operations": [],
    "size": 5,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false,
    "title": "List DIDs"
}
const ListDIDs = {
    type: "array",
    $ref: "#/components/schemas/ListDIDTableSchema",
};
module.exports = {
    ListDIDFormSchema,
    ListDIDTableSchema,
    ListDIDs,
};