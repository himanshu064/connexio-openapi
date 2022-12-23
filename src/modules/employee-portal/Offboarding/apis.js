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
  funnelIdParam,
  taskIdParam,
} = require("../../../common/parameters");

const paths = {
  // my offboarding
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/offboarding/my",
    methods: {
      ...generatePath({
        method: "get",
        tags: ["offboarding"],
        summary: "Get my offboarding in system",
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MyOffboardings",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/offboarding_funnels",
    methods: {
      // get offboarding funnels
      ...generatePath({
        method: "get",
        tags: ["offboarding"],
        summary: "Get all offboarding funnels in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnels",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create offboarding funnel
      ...generatePath({
        method: "post",
        tags: ["offboarding"],
        summary: "Creates a new offboarding funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to create offboarding funnel",
          required: true,
          contentRef: "#/components/schemas/OffboardingFunnelFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelTableSchema",
          }),
        },
      }),
      // delete onboarding funnel
      ...generatePath({
        method: "delete",
        tags: ["offboarding"],
        summary: "Delete offboarding funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to delete offboarding funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteOffboardingFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/offboarding_funnels/{funnelId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["offboarding"],
        summary: "Updates a funnel offboarding in system",
        requestBody: createRequestBody({
          description: "Request payload to funnel offboarding",
          required: true,
          contentRef: "#/components/schemas/OffboardingFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/offboarding_funnels/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["offboarding"],
        summary: "Bulk Update offboarding funnel types in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk offboarding funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditOffboardingFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelFormSchema",
          }),
        },
      }),
    },
  }),

  // assign funnel to employee
  ...generateEndpoint({
    endpoint: "offboarding_funnels/{funnelId}/assign_to_employee",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["offboarding"],
        summary: "Assigns a new offboarding funnel to employee",
        requestBody: createRequestBody({
          description:
            "Request payload for assinging an offboarding funnel to an employee",
          required: true,
          contentRef:
            "#/components/schemas/AssignOffboardingFunnelToEmployeeFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelFormSchema",
          }),
        },
      }),
    },
  }),

  // copy funnel
  ...generateEndpoint({
    endpoint: "offboarding_funnels/{funnelId}/copy_funnel",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["offboarding"],
        summary: "Copy an offboarding funnel",
        requestBody: createRequestBody({
          description: "Request payload for copying an offboarding funnel",
          required: true,
          contentRef: "#/components/schemas/OffboardingFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OffboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),

  // FUNNEL TASKS
  ...generateEndpoint({
    endpoint: "/task_funnel_subscriptions/funnel/{funnelId}",
    methods: {
      // get offboarding funnels tasks
      ...generatePath({
        method: "get",
        tags: ["offboarding"],
        summary: "Get all offboarding funnels tasks in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OffboardingFunnelTasksSubscriptions",
          }),
        },
        parameters: [
          createPathParameter(funnelIdParam),
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create onboarding funnel subscription
      ...generatePath({
        method: "post",
        tags: ["offboarding"],
        summary:
          "Creates a new offboarding task funnels subscription in system",
        requestBody: createRequestBody({
          description:
            "Request payload to create onboarding funnels task subscription",
          required: true,
          contentRef:
            "#/components/schemas/OffboardingFunnelTasksSubscriptionFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OffboardingFunnelTasksSubscriptionTableSchema",
          }),
        },
      }),
      // delete onboarding funnel subscriptions
      ...generatePath({
        method: "delete",
        tags: ["offboarding"],
        summary: "Delete offboarding funnel task subscriptions in system",
        requestBody: createRequestBody({
          description: "Request payload to delete offboarding task funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteOffboardingFunnelTaskSubscriptionPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OffboardingFunnelTasksSubscriptionTableSchema",
          }),
        },
      }),
    },
  }),
  // single update onboarding funnel subscription
  ...generateEndpoint({
    endpoint: "/task_funnel_subscriptions/funnel/{funnelId}/{taskId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["offboarding"],
        summary: "Updates offboarding funnel assigned in system",
        parameters: [
          createPathParameter(funnelIdParam),
          createPathParameter(taskIdParam),
        ],
        requestBody: createRequestBody({
          description: "Request payload to update bulk task offboarding",
          required: true,
          contentRef:
            "#/components/schemas/OffboardingFunnelTasksSubscriptionFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OffboardingFunnelTasksSubscriptionFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update onboarding funnel subscriptions
  ...generateEndpoint({
    endpoint: "/task_funnel_subscriptions/funnel/{funnelId}/bulk",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["offboarding"],
        summary: "Bulk Updates funnel offboarding task subscriptions in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update offboarding task subscriptions",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditOffboardingFunnelTaskSubscriptionPayload",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OffboardingFunnelTasksSubscriptionTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
