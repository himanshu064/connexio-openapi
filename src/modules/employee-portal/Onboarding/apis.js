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
  employeeIdParam,
} = require("../../../common/parameters");

const paths = {
  // my onboardings
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/onboarding/my",
    methods: {
      ...generatePath({
        method: "get",
        tags: ["onboarding"],
        summary: "Get my onboardings in system",
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MyOnboardings",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/onboarding_funnels",
    methods: {
      // get onboarding funnels
      ...generatePath({
        method: "get",
        tags: ["onboarding"],
        summary: "Get all onboarding funnels types in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnels",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create onboarding funnel
      ...generatePath({
        method: "post",
        tags: ["onboarding"],
        summary: "Creates a new onboarding funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to create onboarding funnel",
          required: true,
          contentRef: "#/components/schemas/OnboardingFunnelFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelTableSchema",
          }),
        },
      }),
      // delete onboarding funnel
      ...generatePath({
        method: "delete",
        tags: ["onboarding"],
        summary: "Delete onboarding funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to delete onboarding funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteOnboardingFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/onboarding_funnels/{funnelId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["onboarding"],
        summary: "Updates a funnel onboarding in system",
        requestBody: createRequestBody({
          description: "Request payload to funnel onboarding",
          required: true,
          contentRef: "#/components/schemas/OnboardingFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/onboarding_funnels/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["onboarding"],
        summary: "Bulk Update onboarding funnel types in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update bulk onboarding funnel types",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditOnboardingFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelFormSchema",
          }),
        },
      }),
    },
  }),

  // assign funnel to employee
  ...generateEndpoint({
    endpoint: "onboarding_funnels/{funnelId}/assign_to_employee",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["onboarding"],
        summary: "Assigns a new onboarding funnel to employee",
        requestBody: createRequestBody({
          description: "Request payload for assinging a funnel to an employee",
          required: true,
          contentRef: "#/components/schemas/AssignFunnelToEmployeeFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),

  // copy funnel
  ...generateEndpoint({
    endpoint: "onboarding_funnels/{funnelId}/copy_funnel",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["onboarding"],
        summary: "Copy an onboarding funnel",
        requestBody: createRequestBody({
          description: "Request payload for copying an onboarding funnel",
          required: true,
          contentRef: "#/components/schemas/OnboardingFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/OnboardingFunnelTableSchema",
          }),
        },
      }),
    },
  }),

  // SUBSCRIBED EMPLOYEES FUNNELS

  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/funnel/{funnelId}",
    methods: {
      // get onboarding funnels subscriptions
      ...generatePath({
        method: "get",
        tags: ["onboarding"],
        summary: "Get all onboarding funnels subscriptions in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OnboardingFunnelEmployeeSubscriptions",
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
        tags: ["onboarding"],
        summary: "Creates a new onboarding funnels subscription in system",
        requestBody: createRequestBody({
          description:
            "Request payload to create onboarding funnels subscription",
          required: true,
          contentRef:
            "#/components/schemas/OnboardingFunnelEmployeeSubscriptionFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OnboardingFunnelEmployeeSubscriptionTableSchema",
          }),
        },
      }),
      // delete onboarding funnel subscriptions
      ...generatePath({
        method: "delete",
        tags: ["onboarding"],
        summary: "Delete onboarding funnel subscriptions in system",
        requestBody: createRequestBody({
          description: "Request payload to delete onboarding funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteOnboardingFunnelSubscriptionPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OnboardingFunnelEmployeeSubscriptionTableSchema",
          }),
        },
      }),
    },
  }),
  // single update onboarding funnel subscription
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/funnel/{funnelId}/{employeeId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["onboarding"],
        summary: "Updates onboarding funnel assigned in system",
        parameters: [
          createPathParameter(funnelIdParam),
          createPathParameter(employeeIdParam),
        ],
        requestBody: createRequestBody({
          description:
            "Request payload to update bulk onboarding assigned funnel types",
          required: true,
          contentRef:
            "#/components/schemas/OnboardingFunnelEmployeeSubscriptionFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OnboardingFunnelEmployeeSubscriptionFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update onboarding funnel subscriptions
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/funnel/{funnelId}/bulk",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["onboarding"],
        summary: "Bulk Updates funnel onboarding subscriptions in system",
        requestBody: createRequestBody({
          description:
            "Request payload to bulk update onboarding subscriptions",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditOnboardingFunnelSubscriptionPayload",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/OnboardingFunnelEmployeeSubscriptionTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
