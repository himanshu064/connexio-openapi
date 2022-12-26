const {
  AchievementsFormSchema,
  ActivityCategoryFormSchema,
  AchievementTypeFormSchema,
} = require("./schemas");

const deleteAchievementsPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditAchievementsPayload = {
  title: "",
  type: "object",
  properties: {
    fields: AchievementsFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteActivityCategoryPayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditActivityCategoryPayload = {
  title: "",
  type: "object",
  properties: {
    fields: ActivityCategoryFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

const deleteAchievementTypePayload = {
  title: "",
  type: "array",
  items: [42],
};

const bulkEditAchievementTypePayload = {
  title: "",
  type: "object",
  properties: {
    fields: AchievementTypeFormSchema,
    objects: {
      type: "array",
      items: [2, 3],
    },
  },
};

module.exports = {
  deleteAchievementsPayload,
  bulkEditAchievementsPayload,
  deleteActivityCategoryPayload,
  bulkEditActivityCategoryPayload,

  deleteAchievementTypePayload,
  bulkEditAchievementTypePayload,
};
