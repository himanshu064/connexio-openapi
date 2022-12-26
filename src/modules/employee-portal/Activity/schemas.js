const {
  employee_enum,
  employee_enum_titles,
} = require("../../../constants/employees");
const {
  schedule_entry_enum,
  schedule_entry_enum_titles,
} = require("../../../constants/schedule");

const TimeClockHistoryFormSchema = {
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
      help: "Select an employee",
      propertyOrder: 1,
    },
    schedule_entry: {
      enum: schedule_entry_enum,
      enum_titles: schedule_entry_enum_titles,
      type: "string",
      title: "Activity Category",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Select an activity category",
      propertyOrder: 2,
    },
  },
  required: ["employee"],
  operations: [],
};

const TimeClockHistoryTableSchema = {
  type: "TimeClockEntry",
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
      label: "Employee Name",
      property_name: "employee.user.username",
      filterable: true,
      sortable: true,
      visible: true,
      order: 2,
    },
    {
      type: "ActivityCategory",
      label: "Activity Category Name",
      property_name: "schedule_entry.activity_category.name",
      filterable: false,
      sortable: false,
      visible: true,
      order: 3,
    },
    {
      type: "DateTime",
      label: "Generated At",
      property_name: "generated_at",
      filterable: true,
      sortable: true,
      visible: true,
      order: 4,
    },
  ],
  operations: [],
  size: 4,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const TimeClockHistories = {
  type: "array",
  $ref: "#/components/schemas/TimeClockHistoryTableSchema",
};

const AchievementsFormSchema = {
  title: "",
  type: "object",
  properties: {
    achievement_type: {
      enum: ["1", "2", "3", "4"],
      enum_titles: ["sfdasfsadfasdfs", "made a sale", "Testing Jab", "test"],
      type: "string",
      title: "Achievement Type",
      attr: {
        resource_path: "achievement-types",
        create_button_text: "Create a new type",
        "data-plugin-select2": true,
      },
      help: "Select an achievement type for achievement",
      propertyOrder: 1,
    },
    employee: {
      enum: employee_enum,
      enum_titles: employee_enum_titles,
      type: "string",
      title: "Employee",
      attr: {
        "data-plugin-select2": true,
      },
      help: "Select an employee for achievement",
      propertyOrder: 2,
    },
    note: {
      type: "string",
      title: "Note",
      help: "Enter a note for achievement",
      minLength: "4",
      propertyOrder: 3,
    },
  },
  required: ["achievement_type", "employee", "note"],
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

const AchievementsTableSchema = {
  type: "Achievement",
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
      type: "AchievementType",
      label: "Achievement Type",
      property_name: "achievement_type.name",
      filterable: true,
      sortable: true,
      visible: true,
    },
    {
      type: "Employee",
      label: "Employee",
      property_name: "employee.user.username",
      filterable: true,
      sortable: true,
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
  size: 3,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const Achievements = {
  type: "array",
  $ref: "#/components/schemas/AchievementsTableSchema",
};

const ActivityCategoryFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name of the activity category",
    },
    on_clock: {
      type: "boolean",
      title: "Defines if activity of this category is considered on-clock",
      widget: "checkbox",
      propertyOrder: 2,
    },
    can_overlap: {
      type: "boolean",
      title: "Overlap",
      widget: "checkbox",
      propertyOrder: 3,
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

const ActivityCategoryTableSchema = {
  type: "ActivityCategory",
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
    {
      type: "ScheduleEntry[]",
      label: "Schedule Entries",
      property_name: "schedule_entries",
      filterable: false,
      sortable: false,
      visible: false,
    },
    {
      type: "string",
      label: "On Clock",
      property_name: "on_clock",
      filterable: false,
      sortable: false,
      visible: true,
    },
    {
      type: "string",
      label: "Can Overlap",
      property_name: "can_overlap",
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
  size: 5,
  polymorphic_crud_types: [],
  primary_key: "id",
  search: false,
};

const ActivityCategories = {
  type: "array",
  $ref: "#/components/schemas/AchievementsTableSchema",
};

const AchievementTypeFormSchema = {
  title: "",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      minLength: "1",
      propertyOrder: 1,
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
const AchievementTypeTableSchema = {
  type: "AchievementType",
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
const AchievementTypes = {
  type: "array",
  $ref: "#/components/schemas/AchievementTypeTableSchema",
};

module.exports = {
  TimeClockHistoryFormSchema,
  TimeClockHistoryTableSchema,
  TimeClockHistories,

  AchievementsFormSchema,
  AchievementsTableSchema,
  Achievements,

  ActivityCategoryFormSchema,
  ActivityCategoryTableSchema,
  ActivityCategories,

  AchievementTypeFormSchema,
  AchievementTypeTableSchema,
  AchievementTypes,
};
