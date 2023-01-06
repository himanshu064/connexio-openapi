const OmniChannelFormSchema ={
    "title": "",
    "type": "object",
    "properties": {
        "label": {
            "type": "string",
            "title": "Name",
            "propertyOrder": 1
        },
        "enabled": {
            "type": "boolean",
            "title": "Enable",
            "widget": "checkbox",
            "propertyOrder": 2
        },
        "config": {
            "title": "config",
            "type": "object",
            "properties": [],
            "attr": {
                "meta": {
                    "workflow": "omni_channel_ivr",
                    "steps": {
                        "Set Variable": {
                            "type": "Set Variable",
                            "needExternalInput": false,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Next"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "variables": {
                                        "type": "string",
                                        "title": "variables",
                                        "attr": {
                                            "custom_widget": {
                                                "type": "keyvalue"
                                            }
                                        },
                                        "propertyOrder": 1
                                    },
                                    "resolve": {
                                        "type": "boolean",
                                        "title": "resolve",
                                        "widget": "checkbox",
                                        "help": "If checked, placeholders in values will be resolved immediately",
                                        "propertyOrder": 2
                                    }
                                },
                                "required": [
                                    "variables",
                                    "resolve"
                                ]
                            }
                        },
                        "Split Conditional Expression": {
                            "type": "Split Conditional Expression",
                            "needExternalInput": false,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Match",
                                "No Match"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "expression": {
                                        "type": "string",
                                        "title": "expression",
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "expression"
                                ]
                            }
                        },
                        "Http Request": {
                            "type": "Http Request",
                            "needExternalInput": false,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Success",
                                "Error"
                            ],
                            "variables": [],
                            "help": "Sends a HTTP request. If `background` is not selected then the request completion will be waited until next step is executed.",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "request_builder": {
                                        "title": "request_builder",
                                        "type": "object",
                                        "properties": {
                                            "uri": {
                                                "type": "string",
                                                "title": "URI",
                                                "attr": {
                                                    "custom_widget": {
                                                        "parameters": []
                                                    }
                                                },
                                                "widget": "url",
                                                "propertyOrder": 1
                                            },
                                            "method": {
                                                "enum": [
                                                    "GET",
                                                    "POST",
                                                    "PUT"
                                                ],
                                                "enum_titles": [
                                                    "GET",
                                                    "POST",
                                                    "PUT"
                                                ],
                                                "type": "string",
                                                "title": "Method",
                                                "propertyOrder": 2
                                            },
                                            "authentication_type": {
                                                "enum": [
                                                    "NONE"
                                                ],
                                                "enum_titles": [
                                                    "None"
                                                ],
                                                "type": "string",
                                                "title": "authentication_type",
                                                "propertyOrder": 3
                                            },
                                            "body": {
                                                "type": "string",
                                                "title": "Body",
                                                "attr": {
                                                    "custom_widget": {
                                                        "parameters": []
                                                    }
                                                },
                                                "widget": "textarea",
                                                "help": "Add your json body",
                                                "propertyOrder": 4
                                            },
                                            "headers": {
                                                "title": "Headers",
                                                "type": "object",
                                                "properties": [],
                                                "attr": {
                                                    "custom_widget": {
                                                        "type": "keyvalue",
                                                        "parameters": []
                                                    }
                                                },
                                                "propertyOrder": 5
                                            },
                                            "cookies": {
                                                "title": "Cookies",
                                                "type": "object",
                                                "properties": [],
                                                "attr": {
                                                    "custom_widget": {
                                                        "type": "keyvalue",
                                                        "parameters": []
                                                    }
                                                },
                                                "propertyOrder": 6
                                            },
                                            "response_processor_expressions": {
                                                "type": "string",
                                                "title": "Response Processor Expressions",
                                                "propertyOrder": 7
                                            }
                                        },
                                        "required": [
                                            "uri",
                                            "method"
                                        ],
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "request_builder"
                                ]
                            }
                        },
                        "Send Mail": {
                            "type": "Send Mail",
                            "needExternalInput": false,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Sent",
                                "Failed to send"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "subject": {
                                        "type": "string",
                                        "title": "Subject",
                                        "propertyOrder": 1
                                    },
                                    "content": {
                                        "type": "string",
                                        "title": "Content",
                                        "attr": {
                                            "custom_widget": {
                                                "type": "rich_text_field"
                                            }
                                        },
                                        "widget": "textarea",
                                        "propertyOrder": 2
                                    }
                                },
                                "required": [
                                    "subject",
                                    "content"
                                ]
                            }
                        },
                        "Dtmf Input": {
                            "type": "Dtmf Input",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": true,
                            "passAnyCondition": "Next",
                            "conditionSuggestions": [
                                "Invalid",
                                "Failed",
                                "Timeout"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "max_input": {
                                        "type": "integer",
                                        "title": "Max Input",
                                        "help": "How many digits must be entered?",
                                        "propertyOrder": 1
                                    },
                                    "terminator": {
                                        "enum": [
                                            "#",
                                            "*"
                                        ],
                                        "enum_titles": [
                                            "#",
                                            "*"
                                        ],
                                        "type": "string",
                                        "title": "Terminator",
                                        "help": "Terminator char will terminate input",
                                        "propertyOrder": 2
                                    },
                                    "validator": {
                                        "type": "string",
                                        "title": "Validator",
                                        "propertyOrder": 3
                                    },
                                    "_any_result": {
                                        "type": "boolean",
                                        "title": "Pass any",
                                        "widget": "checkbox",
                                        "propertyOrder": 4
                                    }
                                },
                                "required": [
                                    "max_input",
                                    "terminator",
                                    "validator",
                                    "_any_result"
                                ]
                            }
                        },
                        "Dtmf Press": {
                            "type": "Dtmf Press",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Invalid",
                                "Failed",
                                "Timeout",
                                "0",
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "*",
                                "#"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": []
                            }
                        },
                        "Play Audio File": {
                            "type": "Play Audio File",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Next"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "Plays the stored audio file to user.",
                            "formSchema": {
                                "title": "",
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
                                        "title": "Audio File",
                                        "attr": {
                                            "resource_path": "audios",
                                            "create_button_text": "Add an audio",
                                            "data-plugin-select2": true
                                        },
                                        "help": "Select an audio file to play",
                                        "propertyOrder": 1
                                    },
                                    "uninterruptible": {
                                        "type": "boolean",
                                        "title": "Uninterruptible",
                                        "widget": "checkbox",
                                        "help": "If active, audio will not be stop during with DTMF",
                                        "propertyOrder": 2
                                    }
                                },
                                "required": [
                                    "audio",
                                    "uninterruptible"
                                ]
                            }
                        },
                        "Record Audio": {
                            "type": "Record Audio",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Next"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
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
                                        "title": "Audio File",
                                        "attr": {
                                            "resource_path": "audios",
                                            "create_button_text": "Add an audio",
                                            "data-plugin-select2": true
                                        },
                                        "help": "Select an audio file to play before starting the recording",
                                        "propertyOrder": 1
                                    },
                                    "beep": {
                                        "type": "boolean",
                                        "title": "Play Beep",
                                        "widget": "checkbox",
                                        "help": "If active, beep sound will be play before the recording",
                                        "propertyOrder": 2
                                    },
                                    "max_duration": {
                                        "type": "integer",
                                        "title": "Max Recording Length",
                                        "help": "Enter the maximum duration for recording",
                                        "propertyOrder": 3
                                    },
                                    "uninterruptible_playback": {
                                        "type": "boolean",
                                        "title": "Uninterruptible Playback",
                                        "widget": "checkbox",
                                        "help": "If active, playback will be interrupted with DTMF",
                                        "propertyOrder": 4
                                    },
                                    "uninterruptible_recording": {
                                        "type": "boolean",
                                        "title": "Uninterruptible Recording",
                                        "widget": "checkbox",
                                        "help": "If active, recording will be interrupted with DTMF",
                                        "propertyOrder": 5
                                    },
                                    "max_silence_duration": {
                                        "type": "integer",
                                        "title": "Max seconds of silence",
                                        "help": "Enter the maximum allowed seconds for silence, If you want to disable silence duration, you can set as 0",
                                        "propertyOrder": 6
                                    }
                                },
                                "required": [
                                    "audio",
                                    "beep",
                                    "max_duration",
                                    "uninterruptible_playback",
                                    "uninterruptible_recording",
                                    "max_silence_duration"
                                ]
                            }
                        },
                        "Speak Message": {
                            "type": "Speak Message",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Next"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "Plays the stored audio file to user.",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "title": "Message to say",
                                        "widget": "textarea",
                                        "help": "That will be spoken by the robot",
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
                                        "title": "Message Voice",
                                        "help": "Choose a voice for the robot",
                                        "propertyOrder": 2
                                    },
                                    "uninterruptible": {
                                        "type": "boolean",
                                        "title": "Uninterruptible",
                                        "widget": "checkbox",
                                        "help": "If active, audio will not be stop during with DTMF",
                                        "propertyOrder": 3
                                    }
                                },
                                "required": [
                                    "message",
                                    "voice",
                                    "uninterruptible"
                                ]
                            }
                        },
                        "Transfer to Extension": {
                            "type": "Transfer to Extension",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "extension": {
                                        "enum": [
                                            "phone1",
                                            "vmbox2",
                                            "phone4",
                                            "vmbox5",
                                            "phone6",
                                            "vmbox7",
                                            "ivr8",
                                            "phone9",
                                            "vmbox10",
                                            "ivr11",
                                            "wsqueue12",
                                            "phone13",
                                            "vmbox14",
                                            "phone15",
                                            "vmbox16",
                                            "phone17",
                                            "vmbox18",
                                            "phone19",
                                            "vmbox20",
                                            "phone21",
                                            "vmbox22",
                                            "ivr23",
                                            "phone24",
                                            "vmbox25",
                                            "phone26",
                                            "vmbox27",
                                            "phone28",
                                            "vmbox29",
                                            "phone30",
                                            "phone32",
                                            "vmbox33",
                                            "phone34",
                                            "vmbox35",
                                            "phone36",
                                            "vmbox37",
                                            "phone38",
                                            "phone39",
                                            "vmbox40",
                                            "phone41",
                                            "vmbox42",
                                            "phone43",
                                            "vmbox44",
                                            "phone45",
                                            "vmbox46",
                                            "phone47",
                                            "vmbox48",
                                            "phone49",
                                            "vmbox50",
                                            "phone51",
                                            "vmbox52",
                                            "phone53",
                                            "vmbox54",
                                            "phone55",
                                            "vmbox56",
                                            "phone57",
                                            "vmbox58",
                                            "phone59",
                                            "vmbox60",
                                            "phone61",
                                            "vmbox62",
                                            "phone63",
                                            "vmbox64",
                                            "phone65",
                                            "vmbox66",
                                            "phone67",
                                            "vmbox68",
                                            "phone69",
                                            "vmbox70",
                                            "phone71",
                                            "vmbox72",
                                            "phone73",
                                            "vmbox74",
                                            "phone75",
                                            "vmbox76",
                                            "phone77",
                                            "phone78",
                                            "phone79",
                                            "phone80",
                                            "phone81",
                                            "phone82",
                                            "phone83",
                                            "phone84",
                                            "phone85",
                                            "phone86",
                                            "vmbox88",
                                            "queue90",
                                            "phone91",
                                            "vmbox92",
                                            "phone93",
                                            "vmbox94",
                                            "wsqueue95",
                                            "wsqueue96",
                                            "phone98",
                                            "vmbox99",
                                            "phone101",
                                            "vmbox102",
                                            "phone103",
                                            "phone104",
                                            "vmbox105",
                                            "phone106",
                                            "phone107",
                                            "vmbox108",
                                            "phone109",
                                            "vmbox110",
                                            "wsqueue111",
                                            "phone112",
                                            "vmbox113",
                                            "phone114",
                                            "vmbox115",
                                            "wsqueue116",
                                            "wsqueue117",
                                            "phone118",
                                            "vmbox119",
                                            "phone120",
                                            "vmbox121",
                                            "ivr122",
                                            "queue123",
                                            "wsqueue124",
                                            "queue125",
                                            "queue126",
                                            "queue127",
                                            "wsqueue128",
                                            "phone129",
                                            "vmbox130",
                                            "vmbox131",
                                            "vmbox132",
                                            "vmbox133",
                                            "12108988150",
                                            "12013655551",
                                            "ivr137",
                                            "phone138",
                                            "vmbox139",
                                            "phone140",
                                            "vmbox141",
                                            "phone142",
                                            "vmbox143",
                                            "phone144",
                                            "vmbox145",
                                            "phone146",
                                            "vmbox147",
                                            "phone148",
                                            "phone149",
                                            "phone150",
                                            "phone151",
                                            "vmbox153",
                                            "vmbox154",
                                            "queue156",
                                            "ivr159",
                                            "phone160"
                                        ],
                                        "enum_titles": [
                                            "Melih's Phone (phone1)",
                                            "2",
                                            "4",
                                            "5",
                                            "6",
                                            "7",
                                            "Melih's test edited1",
                                            "9",
                                            "10",
                                            "Test",
                                            "ConneXio Cloud Sales",
                                            "13",
                                            "14",
                                            "15",
                                            "16",
                                            "17",
                                            "18",
                                            "19",
                                            "20",
                                            "savraj",
                                            "22",
                                            "ConneXio IVR",
                                            "24",
                                            "25",
                                            "26",
                                            "27",
                                            "28",
                                            "29",
                                            "Sergey Zoiper",
                                            "32",
                                            "33",
                                            "34",
                                            "35",
                                            "Melih's Phone 2",
                                            "37",
                                            "zoiper2",
                                            "39",
                                            "40",
                                            "41",
                                            "42",
                                            "43",
                                            "44",
                                            "45",
                                            "46",
                                            "47",
                                            "48",
                                            "49",
                                            "50",
                                            "51",
                                            "52",
                                            "53",
                                            "54",
                                            "55",
                                            "56",
                                            "57",
                                            "58",
                                            "59",
                                            "60",
                                            "61",
                                            "62",
                                            "63",
                                            "64",
                                            "65",
                                            "66",
                                            "67",
                                            "68",
                                            "69",
                                            "70",
                                            "71",
                                            "72",
                                            "73",
                                            "74",
                                            "75",
                                            "76",
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
                                            "88",
                                            "90",
                                            "91",
                                            "92",
                                            "93",
                                            "94",
                                            "95",
                                            "96",
                                            "98",
                                            "99",
                                            "101",
                                            "102",
                                            "asfdasdfsdf",
                                            "104",
                                            "105",
                                            "John's Zoiper",
                                            "107",
                                            "108",
                                            "109",
                                            "110",
                                            "Himanshu's ws queue",
                                            "112",
                                            "113",
                                            "114",
                                            "115",
                                            "Sergey's queue",
                                            "John's workspace queue",
                                            "118",
                                            "119",
                                            "120",
                                            "121",
                                            "Demo testing",
                                            "123",
                                            "test q11",
                                            "test",
                                            "126",
                                            "127",
                                            "test556",
                                            "129",
                                            "130",
                                            "Demo Phone",
                                            "demo",
                                            "Demo",
                                            "134",
                                            "136",
                                            "Some new text",
                                            "138",
                                            "139",
                                            "140",
                                            "141",
                                            "142",
                                            "143",
                                            "144",
                                            "145",
                                            "146",
                                            "147",
                                            "netweb",
                                            "netweb",
                                            "netweb",
                                            "151",
                                            "netweb",
                                            "154",
                                            "156",
                                            "NETWEB",
                                            "raghubeer"
                                        ],
                                        "type": "string",
                                        "title": "Extension",
                                        "attr": {
                                            "data-plugin-select2": true
                                        },
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "extension"
                                ]
                            }
                        },
                        "Transfer to IVR": {
                            "type": "Transfer to IVR",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Next"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "Transfers the user to the specified IVR. IVR will be completed when this action is taken.",
                            "formSchema": {
                                "title": "",
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
                                        "title": "IVR",
                                        "attr": {
                                            "data-plugin-select2": true
                                        },
                                        "help": "Select an IVR menu to transfer",
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "ivr"
                                ]
                            }
                        },
                        "Transfer to External Number": {
                            "type": "Transfer to External Number",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Busy",
                                "No Answer",
                                "Not Available",
                                "Failed"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [
                                "call_last_dial_status"
                            ],
                            "help": "Transfers the user to the specified phone number. It is possible to add an action if destination is unavailable or call is not picked up. IVR will be completed if call is bridged.",
                            "formSchema": {
                                "title": "",
                                "type": "object",
                                "properties": {
                                    "phone_number": {
                                        "type": "string",
                                        "title": "Phone Number",
                                        "help": "Enter a phone number to transfer",
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "phone_number"
                                ]
                            }
                        },
                        "Transfer to Phone": {
                            "type": "Transfer to Phone",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [],
                            "help": "Transfers the user to the specified phone. If user is not available and has voicemail then voicemail will be run. IVR will be completed when this action is taken.",
                            "formSchema": {
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
                                        "title": "Phone",
                                        "attr": {
                                            "data-plugin-select2": true
                                        },
                                        "help": "Select a phone to transfer",
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "phone"
                                ]
                            }
                        },
                        "Transfer to Phone Direct": {
                            "type": "Transfer to Phone Direct",
                            "needExternalInput": true,
                            "acceptsArbitraryConditions": false,
                            "conditionSuggestions": [
                                "Busy",
                                "No Answer",
                                "Not Available",
                                "Failed"
                            ],
                            "supportedEntryPoints": [
                                "call"
                            ],
                            "variables": [
                                "call_last_dial_status"
                            ],
                            "help": "Transfers the user to the specified phone. It is possible to add an action if phone is unavailable or call is not picked up. IVR will be completed if call is bridged.",
                            "formSchema": {
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
                                        "title": "Phone",
                                        "attr": {
                                            "data-plugin-select2": true
                                        },
                                        "help": "Select a phone to transfer",
                                        "propertyOrder": 1
                                    }
                                },
                                "required": [
                                    "phone"
                                ]
                            }
                        }
                    },
                    "entryPoints": {
                        "system": {
                            "type": "system",
                            "variables": [],
                            "supportingArguments": true
                        },
                        "schedule": {
                            "type": "schedule",
                            "variables": {
                                "schedule_0": "id"
                            },
                            "supportingArguments": true
                        },
                        "call": {
                            "type": "call",
                            "variables": {
                                "call_0": "uuid",
                                "call_1": "last_hangup_cause",
                                "call_2": "last_hangup_cause_code",
                                "call_3": "record_seconds"
                            },
                            "supportingArguments": false
                        }
                    }
                }
            },
            "widget": "hidden",
            "propertyOrder": 3
        }
    },
    "required": [
        "label",
        "enabled",
        "config"
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
const OmniChannelTableSchema = {
    "type": "OmniChannelIVRConfig",
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
            "property_name": "label",
            "filterable": false,
            "sortable": true,
            "visible": true
        },
        {
            "type": "bool",
            "label": "Active",
            "property_name": "enabled",
            "filterable": false,
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
    "size": 3,
    "polymorphic_crud_types": [],
    "primary_key": "id",
    "search": false
}
const OmniChannels = {
    type: "array",
    $ref: "#/components/schemas/OmniChannelTableSchema",
};
module.exports = {
    OmniChannelFormSchema,
    OmniChannelTableSchema,
    OmniChannels,
};