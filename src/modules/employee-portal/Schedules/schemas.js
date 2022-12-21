const ScheduleFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name of the schedule",
    },
  },
  required: ["name"],
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

const ScheduleTableSchema = {
  type: "Schedule",
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
  size: 2,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Schedules = {
  type: "array",
  $ref: "#/components/schemas/ScheduleTableSchema",
};

const ScheduleEntryFormSchema = {
  title: "",
  type: "object",
  properties: {
    start: {
      type: "datetime",
      title: "Schedule Start Time",
      propertyOrder: 1,
    },
    finish: {
      type: "datetime",
      title: "Schedule Finish Time",
      propertyOrder: 2,
    },
    activity_category: {
      enum: [
        "1",
        "2",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "19",
      ],
      enum_titles: [
        "Regular",
        "do some coding",
        "Do some testing",
        "Study",
        "tewst",
        "test",
        "testFailing",
        "testFail",
        "test",
        "resolve bugs",
        "pppp",
        "demo",
        "testing",
        "raaj",
      ],
      type: "string",
      title: "Activity Category",
      attr: {
        resource_path: "activity-categories",
        create_button_text: "Create a new activity category",
        "data-plugin-select2": true,
      },
      help: "Select an activity category for the schedule",
      propertyOrder: 3,
    },
    minimum_engagement: {
      type: "number",
      title: "Minimum Engagement",
      help: "Enter minimum engagement for the schedule",
      propertyOrder: 4,
    },
    start_tolerance: {
      type: "number",
      title: "Start Tolerance",
      help: "Enter mow many minutes late is allowed for the schedule",
      propertyOrder: 5,
    },
    description: {
      type: "string",
      title: "Description",
      widget: "textarea",
      help: "Enter a description for the schedule",
      propertyOrder: 6,
    },
    external_links: {
      type: "array",
      title: "External Links",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          text: {
            type: "string",
            title: "Link Text",
            attr: {
              name: "text",
            },
            help: "Your link text (Eg. TELESERO)",
            propertyOrder: 1,
          },
          url: {
            type: "string",
            title: "Link URL",
            attr: {
              name: "url",
            },
            widget: "url",
            help: "Please write the URL of the link (Eg. https://www.telesero.com)",
            propertyOrder: 2,
          },
          target: {
            enum: ["_blank", "_self", "_parent", "_top"],
            enum_titles: [
              "Opens the linked document in a new window or tab",
              "Opens the linked document in the same frame as it was clicked",
              "Opens the linked document in the parent frame",
              "Opens the linked document in the full body of the window",
            ],
            type: "string",
            title: "Where to open the link",
            attr: {
              name: "target",
            },
            help: "determines where the link opens when the link is clicked",
            propertyOrder: 3,
          },
        },
        required: ["text", "url", "target"],
      },
      attr: {
        custom_widget: {
          label: "{text}",
          type: "array_collection",
        },
      },
      help: "Enter external links for the schedule",
      propertyOrder: 7,
    },
    tasks: {
      type: "array",
      title: "Tasks",
      items: {
        title: "prototype",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "Name",
            help: "Enter task for the schedule",
            propertyOrder: 1,
          },
          description: {
            type: "string",
            title: "Description",
            widget: "textarea",
            help: "Write a description for the task",
            propertyOrder: 2,
          },
        },
        required: ["name"],
      },
      attr: {
        custom_widget: {
          label: "{name} - Task",
          type: "array_collection",
        },
      },
      help: "Enter tasks for the schedule",
      propertyOrder: 8,
    },
  },
  required: ["start", "finish", "activity_category"],
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

const ScheduleEntryTableSchema = {
  type: "ScheduleEntry",
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
      type: "Schedule",
      label: "Schedule",
      property_name: "schedule",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "DateTime",
      label: "Start",
      property_name: "start",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "int",
      label: "Start Tolerance",
      property_name: "start_tolerance",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "DateTime",
      label: "Finish",
      property_name: "finish",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "float",
      label: "Minimum Engagement",
      property_name: "minimum_engagement",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "Description",
      property_name: "description",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "array",
      label: "External Links",
      property_name: "external_links",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "array",
      label: "Tasks",
      property_name: "tasks",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "ActivityCategory",
      label: "Category",
      property_name: "activity_category",
      filterable: false,
      sortable: false,
      visible: false,
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
  size: 10,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const ScheduleEntries = {
  type: "array",
  $ref: "#/components/schemas/ScheduleEntryTableSchema",
};

module.exports = {
  ScheduleFormSchema,
  ScheduleTableSchema,
  Schedules,
  ScheduleEntryFormSchema,
  ScheduleEntryTableSchema,
  ScheduleEntries,
};
