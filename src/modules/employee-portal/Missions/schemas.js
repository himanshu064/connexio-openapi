const {
  employee_enum,
  employee_enum_titles,
  employee_funnel_enum,
  employee_funnel_enum_titles,
} = require("../../../constants/employees");
const {
  existing_task_enum_title,
  existing_task_enum,
} = require("../../../constants/task");
const {
  months_enum,
  months_enum_titles,
  days_enum,
  days_enum_titles,
  hours_enum,
  hours_enum_titles,
} = require("../../../constants/time");

const MyMissionFormSchema = {
  title: "",
  type: "object",
  properties: {
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Choose Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Please select an employee",
      propertyOrder: 1,
    },
    funnel: {
      enum: employee_funnel_enum,
      enum_titles: employee_funnel_enum_titles,
      type: "string",
      title: "funnel",
      attr: {
        "data-plugin-select2": true,
      },
      propertyOrder: 2,
    },
    status: {
      type: "boolean",
      title: "status",
      widget: "checkbox",
      propertyOrder: 3,
    },
    start_date: {
      type: "datetime",
      title: "start_date",
      propertyOrder: 4,
    },
    end_date: {
      type: "datetime",
      title: "end_date",
      propertyOrder: 5,
    },
  },
  required: ["employee", "funnel", "status", "start_date", "end_date"],
  operations: [],
};

const MyMissionTableSchema = [
  {
    type: "int",
    label: "ID",
    property_name: "id",
    filterable: true,
    sortable: true,
    visible: false,
    order: 1,
  },
  {
    type: "Funnel",
    label: "Name",
    property_name: "funnel.name",
    filterable: true,
    sortable: true,
    visible: true,
  },
  {
    type: "DateTime",
    label: "Start Date",
    property_name: "start_date",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "DateTime",
    label: "End Date",
    property_name: "end_date",
    filterable: false,
    sortable: false,
    visible: true,
  },
  {
    type: "status",
    label: "Status",
    property_name: "status_data",
    filterable: false,
    sortable: false,
    visible: true,
  },
];

const MyMissions = {
  type: "array",
  $ref: "#/components/schemas/MyMissionTableSchema",
};

const MissionFunnelFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      minLength: "1",
      propertyOrder: 1,
    },
    time_limit: {
      title: "Time Limit",
      type: "object",
      properties: {
        months: {
          enum: months_enum,
          enum_titles: months_enum_titles,
          type: "string",
          title: "Months",
          propertyOrder: 1,
        },
        days: {
          enum: days_enum,
          enum_titles: days_enum_titles,
          type: "string",
          title: "Days",
          propertyOrder: 2,
        },
        hours: {
          enum: hours_enum,
          enum_titles: hours_enum_titles,
          type: "string",
          title: "Hours",
          propertyOrder: 3,
        },
      },
      propertyOrder: 2,
    },
    strict: {
      type: "boolean",
      title: "Strict",
      widget: "checkbox",
      help: "If active, funnel cannot be started outside of allocated start to end date.",
      propertyOrder: 3,
    },
  },
  required: ["name", "strict"],
  operations: [
    {
      title: "Assign funnel to employee",
      is_standard: true,
      method: "POST",
      description: "Assign funnel to employee",
      key: "assign_to_employee",
      route_suffix: "assign_to_employee",
      visible: false,
    },
    {
      title: "Copy funnel",
      is_standard: true,
      method: "POST",
      description: "Copy funnel",
      key: "copy_funnel",
      route_suffix: "copy_funnel",
      visible: false,
    },
    {
      title: "Edit",
      is_standard: true,
      method: "PATCH",
      key: "edit",
      route_suffix: "",
      visible: true,
    },
    {
      title: "Delete",
      is_standard: false,
      key: "delete",
      visible: true,
    },
  ],
};

const MissionFunnelTableSchema = {
  type: "MissionFunnel",
  columns: [
    {
      type: "int",
      label: "ID",
      property_name: "id",
      filterable: true,
      sortable: true,
      visible: false,
      order: 1,
    },
    {
      type: "string",
      label: "Name",
      property_name: "name",
      filterable: false,
      sortable: false,
      visible: true,
      order: 2,
    },
    {
      type: "string",
      label: "Is Strict",
      property_name: "is_strict",
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "string",
      label: "Time Limit",
      property_name: "date_interval",
      filterable: false,
      sortable: false,
      visible: true,
    },
  ],
  operations: [
    {
      title: "Create",
      is_standard: true,
      method: "POST",
      key: "create",
      route_suffix: "",
      visible: false,
    },
    {
      title: "Bulk delete",
      is_standard: false,
      key: "bulk_delete",
      visible: false,
    },
    {
      title: "Bulk edit",
      is_standard: false,
      key: "bulk_edit",
      visible: false,
    },
  ],
  size: 4,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const MissionFunnels = {
  type: "array",
  $ref: "#/components/schemas/MissionFunnelTableSchema",
};

const AssignMissionFunnelToEmployeeFormSchema = {
  title: "",
  type: "object",
  properties: {
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Please select an employee to assign to dddd",
      propertyOrder: 1,
    },
    start_date: {
      type: "datetime",
      title: "Start Date",
      help: "Please select start date of dddd for employee",
      propertyOrder: 2,
    },
    end_date: {
      type: "datetime",
      title: "Finish Date",
      help: "Please select finish date of dddd for employee",
      propertyOrder: 3,
    },
    is_strict: {
      type: "boolean",
      title: "Strict?",
      widget: "checkbox",
      help: "Will the employee have to follow the timeline strictly?",
      propertyOrder: 4,
    },
  },
  required: ["employee", "start_date", "end_date", "is_strict"],
};

const OffboardingFunnelTasksSubscriptionFormSchema = {
  title: "",
  type: "object",
  properties: {
    existing_task: {
      enum: existing_task_enum,
      enum_titles: existing_task_enum_title,
      type: "string",
      title: "Select existing task",
      attr: {
        "data-plugin-select2": true,
      },
      propertyOrder: 1,
    },
    new_tasks: {
      type: "array",
      title: "Add new task",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "name",
            minLength: "1",
            propertyOrder: 1,
          },
          description: {
            type: "string",
            title: "description",
            propertyOrder: 2,
          },
          time_limit: {
            title: "Time Limit",
            type: "object",
            properties: {
              months: {
                enum: months_enum,
                enum_titles: months_enum_titles,
                type: "string",
                title: "Months",
                propertyOrder: 1,
              },
              days: {
                enum: days_enum,
                enum_titles: days_enum_titles,
                type: "string",
                title: "Days",
                propertyOrder: 2,
              },
              hours: {
                enum: hours_enum,
                enum_titles: hours_enum_titles,
                type: "string",
                title: "Hours",
                propertyOrder: 3,
              },
            },
            propertyOrder: 3,
          },
          required: {
            type: "boolean",
            title: "Required",
            widget: "checkbox",
            propertyOrder: 4,
          },
          contents: {
            type: "poly_array",
            title: "Contents",
            items: {
              poly_type_name: "_type",
              oneOf: [
                {
                  $ref: "#file_content",
                },
                {
                  $ref: "#markdown_content",
                },
                {
                  $ref: "#video_content",
                },
              ],
            },
            attr: {
              poly_select_box_title: "Content Item",
            },
            help: "Please add task contents such as a text to read or video to watch",
            propertyOrder: 5,
          },
          task_attachment_restrictions: {
            type: "array",
            title: "Attachment Requirements",
            items: {
              title: "prototype",
              type: "object",
              properties: {
                id: {
                  type: "hidden",
                  title: "id",
                  propertyOrder: 1,
                },
                name: {
                  type: "string",
                  title: "name",
                  minLength: "1",
                  propertyOrder: 2,
                },
                description: {
                  type: "string",
                  title: "description",
                  propertyOrder: 3,
                },
                file_type: {
                  enum: ["document", "image", "video"],
                  enum_titles: ["Document", "Image", "Video"],
                  type: "string",
                  title: "File Type",
                  propertyOrder: 4,
                },
              },
              required: ["name", "description", "file_type"],
              definitions: {
                file_content: {
                  title: "File Task Content",
                  type: "object",
                  properties: {
                    id: {
                      type: "hidden",
                      title: "id",
                      propertyOrder: 1,
                    },
                    name: {
                      type: "string",
                      title: "Name",
                      help: "A name for this content item",
                      minLength: "1",
                      propertyOrder: 2,
                    },
                    description: {
                      type: "string",
                      title: "Description",
                      widget: "textarea",
                      help: "A description for this content item",
                      propertyOrder: 3,
                    },
                    upload: {
                      title: "File",
                      type: "object",
                      properties: {
                        contents: {
                          type: "string",
                          title: "contents",
                          propertyOrder: 1,
                        },
                        original_file_name: {
                          type: "string",
                          title: "original_file_name",
                          propertyOrder: 2,
                        },
                        download_address: {
                          type: "string",
                          title: "download_address",
                          propertyOrder: 3,
                        },
                      },
                      attr: {
                        add_file_name_in_response: true,
                        file_name_key: "original_file_name",
                        file_content_key: "contents",
                      },
                      widget: "file_widget",
                      propertyOrder: 4,
                    },
                    _type: {
                      const: "file_content",
                    },
                  },
                  required: ["name", "upload"],
                  id: "#file_content",
                },
                markdown_content: {
                  title: "Markdown Content",
                  type: "object",
                  properties: {
                    id: {
                      type: "hidden",
                      title: "id",
                      propertyOrder: 1,
                    },
                    name: {
                      type: "string",
                      title: "Name",
                      help: "A name for this content item",
                      minLength: "1",
                      propertyOrder: 2,
                    },
                    description: {
                      type: "string",
                      title: "Description",
                      widget: "textarea",
                      help: "A description for this content item",
                      propertyOrder: 3,
                    },
                    content: {
                      type: "string",
                      title: "Content",
                      widget: "textarea",
                      help: "Please add your text content of the content, you can use the markdown cheatsheet.",
                      minLength: "2",
                      propertyOrder: 4,
                    },
                    _type: {
                      const: "markdown_content",
                    },
                  },
                  required: ["name", "content"],
                  id: "#markdown_content",
                },
                video_content: {
                  title: "Video Content",
                  type: "object",
                  properties: {
                    id: {
                      type: "hidden",
                      title: "id",
                      propertyOrder: 1,
                    },
                    name: {
                      type: "string",
                      title: "Name",
                      help: "A name for this content item",
                      minLength: "1",
                      propertyOrder: 2,
                    },
                    description: {
                      type: "string",
                      title: "Description",
                      widget: "textarea",
                      help: "A description for this content item",
                      propertyOrder: 3,
                    },
                    location: {
                      type: "string",
                      title: "Video Location",
                      widget: "url",
                      help: "Please put the video address here. Eg: (http://your-company.com/cdn/video.mp4)",
                      propertyOrder: 4,
                    },
                    _type: {
                      const: "video_content",
                    },
                  },
                  required: ["name", "location"],
                  id: "#video_content",
                },
              },
            },
            attr: {
              custom_widget: {
                type: "array_collection",
              },
            },
            help: "If an assignee has to upload files as a part of performing this task, specify them here.",
            propertyOrder: 6,
          },
        },
        required: ["name", "description", "required", "contents"],
        definitions: {
          file_content: {
            title: "File Task Content",
            type: "object",
            properties: {
              id: {
                type: "hidden",
                title: "id",
                propertyOrder: 1,
              },
              name: {
                type: "string",
                title: "Name",
                help: "A name for this content item",
                minLength: "1",
                propertyOrder: 2,
              },
              description: {
                type: "string",
                title: "Description",
                widget: "textarea",
                help: "A description for this content item",
                propertyOrder: 3,
              },
              upload: {
                title: "File",
                type: "object",
                properties: {
                  contents: {
                    type: "string",
                    title: "contents",
                    propertyOrder: 1,
                  },
                  original_file_name: {
                    type: "string",
                    title: "original_file_name",
                    propertyOrder: 2,
                  },
                  download_address: {
                    type: "string",
                    title: "download_address",
                    propertyOrder: 3,
                  },
                },
                attr: {
                  add_file_name_in_response: true,
                  file_name_key: "original_file_name",
                  file_content_key: "contents",
                },
                widget: "file_widget",
                propertyOrder: 4,
              },
              _type: {
                const: "file_content",
              },
            },
            required: ["name", "upload"],
            id: "#file_content",
          },
          markdown_content: {
            title: "Markdown Content",
            type: "object",
            properties: {
              id: {
                type: "hidden",
                title: "id",
                propertyOrder: 1,
              },
              name: {
                type: "string",
                title: "Name",
                help: "A name for this content item",
                minLength: "1",
                propertyOrder: 2,
              },
              description: {
                type: "string",
                title: "Description",
                widget: "textarea",
                help: "A description for this content item",
                propertyOrder: 3,
              },
              content: {
                type: "string",
                title: "Content",
                widget: "textarea",
                help: "Please add your text content of the content, you can use the markdown cheatsheet.",
                minLength: "2",
                propertyOrder: 4,
              },
              _type: {
                const: "markdown_content",
              },
            },
            required: ["name", "content"],
            id: "#markdown_content",
          },
          video_content: {
            title: "Video Content",
            type: "object",
            properties: {
              id: {
                type: "hidden",
                title: "id",
                propertyOrder: 1,
              },
              name: {
                type: "string",
                title: "Name",
                help: "A name for this content item",
                minLength: "1",
                propertyOrder: 2,
              },
              description: {
                type: "string",
                title: "Description",
                widget: "textarea",
                help: "A description for this content item",
                propertyOrder: 3,
              },
              location: {
                type: "string",
                title: "Video Location",
                widget: "url",
                help: "Please put the video address here. Eg: (http://your-company.com/cdn/video.mp4)",
                propertyOrder: 4,
              },
              _type: {
                const: "video_content",
              },
            },
            required: ["name", "location"],
            id: "#video_content",
          },
        },
      },
      attr: {
        custom_widget: {
          label: "{name}",
          type: "array_collection",
          max_item_count: 1,
        },
      },
      help: "Please add the content for one new task",
      propertyOrder: 2,
    },
    order: {
      type: "integer",
      title: "Order",
      help: "Please enter the order of task.",
      propertyOrder: 3,
    },
    time_limit: {
      title: "Time Limit",
      type: "object",
      properties: {
        months: {
          enum: months_enum,
          enum_titles: months_enum_titles,
          type: "string",
          title: "Months",
          propertyOrder: 1,
        },
        days: {
          enum: days_enum,
          enum_titles: days_enum_titles,
          type: "string",
          title: "Days",
          propertyOrder: 2,
        },
        hours: {
          enum: hours_enum,
          enum_titles: hours_enum_titles,
          type: "string",
          title: "Hours",
          propertyOrder: 3,
        },
      },
      propertyOrder: 4,
    },
    required: {
      type: "boolean",
      title: "Task is required",
      widget: "checkbox",
      help: "If this task required for employee, please active",
      propertyOrder: 5,
    },
  },
  required: ["order", "required"],
  operations: [
    {
      title: "Edit",
      is_standard: true,
      method: "PATCH",
      key: "edit",
      route_suffix: "",
      visible: true,
    },
    {
      title: "Delete",
      is_standard: false,
      key: "delete",
      visible: true,
    },
  ],
};

module.exports = {
  MyMissionFormSchema,
  MyMissionTableSchema,
  MyMissions,

  MissionFunnelFormSchema,
  MissionFunnelTableSchema,
  MissionFunnels,

  AssignMissionFunnelToEmployeeFormSchema,
};
