const {
  generateEndpoint,
  generatePath,
  createQueryParameter,
  createResponse,
  createRequestBody,
} = require("../../../utils/path-utils");
const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
} = require("../../../common/parameters");

const paths = {
  // missing data
  ...generateEndpoint({
    endpoint: "/reporting/missing-data/employees",
    methods: {
      // get missing data for employees
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all missing data for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissingDatas",
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

  // age profile
  ...generateEndpoint({
    endpoint: "/reporting/age_profile",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all age related data for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/AgeProfiles",
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

  // gender profile
  ...generateEndpoint({
    endpoint: "/reporting/gender_profile",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all gender profile related data for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/GenderProfiles",
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

  // Job Histories
  ...generateEndpoint({
    endpoint: "/reporting/job_history",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary:
          "Get all job history related data for employees in JobHistories",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobHistories",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for job history",
          required: true,
          contentRef: "#/components/schemas/JobHistoryFormSchema",
        }),
      }),
    },
  }),
  // Head Counts
  ...generateEndpoint({
    endpoint: "/reporting/headcount",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all headcount related data for employees",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/HeadCounts",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for job history",
          required: true,
          contentRef: "#/components/schemas/HeadCountFormSchema",
        }),
      }),
    },
  }),

  // Turn over
  ...generateEndpoint({
    endpoint: "/reporting/turnover",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all turnover related data for employees",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/TurnOvers",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for job history",
          required: true,
          contentRef: "#/components/schemas/TurnOverFormSchema",
        }),
      }),
    },
  }),

  // Year of service
  ...generateEndpoint({
    endpoint: "/reporting/year_of_service",
    methods: {
      // get year of service for employees
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all year of service for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/YearOfServices",
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

  // Vacation downtime
  ...generateEndpoint({
    endpoint: "/reporting/vacation_downtime",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all vacation downtime data for employees",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/VacationDowntimes",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for job history",
          required: true,
          contentRef: "#/components/schemas/VacationDowntimeFormSchema",
        }),
      }),
    },
  }),

  // activity time tracking per employee
  ...generateEndpoint({
    endpoint: "/reporting/time_tracking_per_employee",
    methods: {
      // get missing data for employees
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get all activity time tracking data for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/TimeActivityTrackingsPerEmployee",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for activity time tracking",
          required: true,
          contentRef:
            "#/components/schemas/TimeActivityTrackingPerEmployeeFormSchema",
        }),
      }),
    },
  }),

  // time_tracking_per_activity
  ...generateEndpoint({
    endpoint: "/reporting/time_tracking_per_activity",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["reporting"],
        summary: "Get time tracking per activity for employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/TimeActivityTrackingsPerCategory",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload for tracking per activity report",
          required: true,
          contentRef:
            "#/components/schemas/TimeActivityTrackingPerCategoryFormSchema",
        }),
      }),
    },
  }),
};

module.exports = paths;
