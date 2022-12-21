const ShiftFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      help: "Enter a name for Shift",
      minLength: "1",
      propertyOrder: 1,
    },
    default_shift_day_configuration: {
      title: "Default working day configuration",
      type: "object",
      properties: {
        working_time_intervals: {
          type: "array",
          title: "Working time intervals",
          items: {
            title: "prototype",
            type: "object",
            properties: {
              start: {
                type: "string",
                title: "Start Time",
                attr: {
                  format: "HH:mm",
                  ampm: false,
                },
                widget: "time",
                help: "Enter Start time",
                propertyOrder: 1,
              },
              finish: {
                type: "string",
                title: "End Time",
                attr: {
                  format: "HH:mm",
                  ampm: false,
                },
                widget: "time",
                help: "Enter End Time",
                propertyOrder: 2,
              },
            },
            required: ["start", "finish"],
          },
          help: "Define intervals that constitute the working time for this day",
          attr: {
            custom_widget: {
              type: "array_collection",
              label: "{start} - {finish}",
            },
          },
          propertyOrder: 1,
        },
      },
      required: ["working_time_intervals"],
      help: "Define working time for a typical day. If not overridden by special day configuration, it will apply for all working days Monday-Friday.",
      propertyOrder: 2,
    },
    special_shift_day_configurations_set: {
      title: "Special day configurations",
      type: "object",
      properties: {
        shift_day_configurations: {
          type: "array",
          title: "Special day configurations",
          items: {
            title: "prototype",
            type: "object",
            properties: {
              day_of_week: {
                enum: [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ],
                enum_titles: [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ],
                type: "string",
                title: "Day of Week",
                help: "Which day of week does this day configuration apply to?",
                propertyOrder: 1,
              },
              working_time_intervals: {
                type: "array",
                title: "Working time intervals",
                items: {
                  title: "prototype",
                  type: "object",
                  properties: {
                    start: {
                      type: "string",
                      title: "Start Time",
                      attr: {
                        format: "HH:mm",
                        ampm: false,
                      },
                      widget: "time",
                      help: "Enter Start time",
                      propertyOrder: 1,
                    },
                    finish: {
                      type: "string",
                      title: "End Time",
                      attr: {
                        format: "HH:mm",
                        ampm: false,
                      },
                      widget: "time",
                      help: "Enter End Time",
                      propertyOrder: 2,
                    },
                  },
                  required: ["start", "finish"],
                },
                help: "Define intervals that constitute the working time for this day",
                attr: {
                  custom_widget: {
                    type: "array_collection",
                    label: "{start} - {finish}",
                  },
                },
                propertyOrder: 2,
              },
            },
            required: ["day_of_week", "working_time_intervals"],
          },
          attr: {
            custom_widget: {
              type: "array_collection",
              label: "{day_of_week}",
            },
          },
          help: "Here you can add 0-7 special day configurations that override the default working day configuration.",
          propertyOrder: 1,
        },
      },
      required: ["shift_day_configurations"],
      help: "If some days (including weekend days) require special configuration, specify it here.",
      propertyOrder: 3,
    },
    work_on_holidays: {
      type: "boolean",
      title: "Work on Holidays",
      widget: "checkbox",
      help: "Defines whether this shift applies to holiday periods.",
      propertyOrder: 4,
    },
    automatic_time_clocking_enabled: {
      type: "boolean",
      title: "Automatic time clocking enabled",
      widget: "checkbox",
      help: "Check Automatic time clocking enabled",
      propertyOrder: 5,
    },
  },
  required: [
    "name",
    "default_shift_day_configuration",
    "special_shift_day_configurations_set",
    "work_on_holidays",
    "automatic_time_clocking_enabled",
  ],
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

const ShiftTableSchema = {
  type: "Shift",
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
      type: "bool",
      label: "Work On Holidays",
      property_name: "work_on_holidays",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "bool",
      label: "Automatic Time Clocking Enabled",
      property_name: "automatic_time_clocking_enabled",
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

const Shifts = {
  type: "array",
  $ref: "#/components/schemas/ShiftTableSchema",
};

module.exports = {
  ShiftFormSchema,
  ShiftTableSchema,
  Shifts,
};
