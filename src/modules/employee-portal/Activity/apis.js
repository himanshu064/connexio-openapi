const {
  generateEndpoint,
  generatePath,
  createQueryParameter,
  createResponse,
  createRequestBody,
  createPathParameter,
} = require("../../../utils/path-utils");
const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  achievementIdParam,
  activityCategoryIdParam,
} = require("../../../common/parameters");

const paths = {
  // time_clock_entries
  ...generateEndpoint({
    endpoint: "/time_clock_entries",
    methods: {
      // get vacations
      ...generatePath({
        method: "get",
        tags: ["activity"],
        summary: "Get all time_clock_entries in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/TimeClockHistories",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
    },
  }),

  // achievements
  ...generateEndpoint({
    endpoint: "/achievements",
    methods: {
      // get achievements
      ...generatePath({
        method: "get",
        tags: ["activity"],
        summary: "Get all achievements in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Achievements",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // post achievement
      ...generatePath({
        method: "post",
        tags: ["activity"],
        summary: "Creates an achievement in system",
        requestBody: createRequestBody({
          description: "Request payload to create an achievement",
          required: true,
          contentRef: "#/components/schemas/AchievementsFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementsFormSchema",
          }),
        },
      }),
      // post achievement
      ...generatePath({
        method: "delete",
        tags: ["activity"],
        summary: "Deletes an achievement in system",
        requestBody: createRequestBody({
          description: "Request payload to deletes an achievement",
          required: true,
          contentRef: "#/components/requestBodies/deleteAchievementsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementsFormSchema",
          }),
        },
      }),
    },
  }),
  // update an achivement
  ...generateEndpoint({
    endpoint: "achievements/{achievementId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Updates an achievement in the system",
        requestBody: createRequestBody({
          description: "Request payload to update achievement",
          required: true,
          contentRef: "#/components/schemas/AchievementsFormSchema",
        }),
        parameters: [createPathParameter(achievementIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementsFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/achievements/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Bulk Update achivement in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk achivement",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditAchievementsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementsFormSchema",
          }),
        },
      }),
    },
  }),

  // Activity Categories
  ...generateEndpoint({
    endpoint: "/activity-categories",
    methods: {
      // get activity-categories
      ...generatePath({
        method: "get",
        tags: ["activity"],
        summary: "Get all activity categories in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategories",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // post activity-categories
      ...generatePath({
        method: "post",
        tags: ["activity"],
        summary: "Creates an activity category in system",
        requestBody: createRequestBody({
          description: "Request payload to create an activity category",
          required: true,
          contentRef: "#/components/schemas/ActivityCategoryFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
      // delete activity-categories
      ...generatePath({
        method: "delete",
        tags: ["activity"],
        summary: "Deletes activity categories in system",
        requestBody: createRequestBody({
          description: "Request payload to deletes activity categories",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteActivityCategoryPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
    },
  }),
  // update an activity category form schema
  ...generateEndpoint({
    endpoint: "activity-categories/{activityCategoryId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Updates an achievement in the system",
        requestBody: createRequestBody({
          description: "Request payload to update achievement",
          required: true,
          contentRef: "#/components/schemas/ActivityCategoryFormSchema",
        }),
        parameters: [createPathParameter(activityCategoryIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/activity-categories/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Bulk Update activity categories in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update bulk activity categories",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditActivityCategoryPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
    },
  }),

  // Achievement Types
  ...generateEndpoint({
    endpoint: "/achievement-types",
    methods: {
      // get achievement-types
      ...generatePath({
        method: "get",
        tags: ["activity"],
        summary: "Get all achievement types in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementTypes",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // post activity-categories
      ...generatePath({
        method: "post",
        tags: ["activity"],
        summary: "Creates an achievement type category in system",
        requestBody: createRequestBody({
          description: "Request payload to create an achievement type",
          required: true,
          contentRef: "#/components/schemas/AchievementTypeFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementTypeFormSchema",
          }),
        },
      }),
      // delete activity-categories
      ...generatePath({
        method: "delete",
        tags: ["activity"],
        summary: "Deletes achievement type in system",
        requestBody: createRequestBody({
          description: "Request payload to deletes achievement type",
          required: true,
          contentRef: "#/components/requestBodies/deleteAchievementTypePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AchievementTypeFormSchema",
          }),
        },
      }),
    },
  }),
  // update an activity category form schema
  ...generateEndpoint({
    endpoint: "achievement-types/{activityCategoryId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Updates an achievement in the system",
        requestBody: createRequestBody({
          description: "Request payload to update achievement",
          required: true,
          contentRef: "#/components/schemas/ActivityCategoryFormSchema",
        }),
        parameters: [createPathParameter(activityCategoryIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/activity-categories/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["activity"],
        summary: "Bulk Update activity categories in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update bulk activity categories",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditActivityCategoryPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ActivityCategoryFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
