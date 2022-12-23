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
} = require("../../../common/parameters");

const paths = {
  // my offboarding
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/mission/my",
    methods: {
      ...generatePath({
        method: "get",
        tags: ["missions"],
        summary: "Get my missions in system",
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MyMissions",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/mission_funnels",
    methods: {
      // get offboarding funnels
      ...generatePath({
        method: "get",
        tags: ["missions"],
        summary: "Get all missions funnels in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnels",
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
        tags: ["missions"],
        summary: "Creates a new mission funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to create mission funnel",
          required: true,
          contentRef: "#/components/schemas/MissionFunnelFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelTableSchema",
          }),
        },
      }),
      // delete onboarding funnel
      ...generatePath({
        method: "delete",
        tags: ["missions"],
        summary: "Delete mission funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to delete mission funnel",
          required: true,
          contentRef: "#/components/requestBodies/deleteMissionFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  ...generateEndpoint({
    endpoint: "/mission_funnels/{funnelId}",
    methods: {
      // update services
      ...generatePath({
        method: "patch",
        tags: ["missions"],
        summary: "Updates a  mission funnel in system",
        requestBody: createRequestBody({
          description: "Request payload to funnel offboarding",
          required: true,
          contentRef: "#/components/schemas/MissionFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/mission_funnels/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["missions"],
        summary: "Bulk Update mission funnels types in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk mission funnel",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditMissionFunnelsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelFormSchema",
          }),
        },
      }),
    },
  }),

  // assign funnel to employee
  ...generateEndpoint({
    endpoint: "mission_funnels/{funnelId}/assign_to_employee",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["missions"],
        summary: "Assigns a new mission funnel to employee",
        requestBody: createRequestBody({
          description:
            "Request payload for assinging a mission funnel to an employee",
          required: true,
          contentRef:
            "#/components/schemas/AssignMissionFunnelToEmployeeFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelFormSchema",
          }),
        },
      }),
    },
  }),

  // copy funnel
  ...generateEndpoint({
    endpoint: "mission_funnels/{funnelId}/copy_funnel",
    methods: {
      ...generatePath({
        method: "post",
        tags: ["missions"],
        summary: "Copy mission funnel",
        requestBody: createRequestBody({
          description: "Request payload for copying an mission funnel",
          required: true,
          contentRef: "#/components/schemas/MissionFunnelFormSchema",
        }),
        parameters: [createPathParameter(funnelIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/MissionFunnelTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
