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
  scheduleIdParam,
  entryIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/schedules",
    methods: {
      // get schedules
      ...generatePath({
        method: "get",
        tags: ["schedules"],
        summary: "Get all schedules in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Schedules",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create schedule
      ...generatePath({
        method: "post",
        tags: ["schedules"],
        summary: "Creates a new schedule in system",
        requestBody: createRequestBody({
          description: "Request payload to create schedule",
          required: true,
          contentRef: "#/components/schemas/ScheduleFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleTableSchema",
          }),
        },
      }),
      // delete schedules
      ...generatePath({
        method: "delete",
        tags: ["schedules"],
        summary: "Deletes single or bulk schedules in system",
        requestBody: createRequestBody({
          description: "Request payload to delete schedule",
          required: true,
          contentRef: "#/components/requestBodies/deleteSchedulePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleTableSchema",
          }),
        },
      }),
    },
  }),
  // update schedule
  ...generateEndpoint({
    endpoint: "/schedules/{scheduleId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["schedules"],
        summary: "Updates a schedule in system",
        requestBody: createRequestBody({
          description: "Request payload to update schedule",
          required: true,
          contentRef: "#/components/schemas/ScheduleFormSchema",
        }),
        parameters: [createPathParameter(scheduleIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleTableSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/schedules/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["schedules"],
        summary: "Bulk Update schedules in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk schedules",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditSchedulePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleFormSchema",
          }),
        },
      }),
    },
  }),

  /** SCHEDULE ENTRY APIS */
  ...generateEndpoint({
    endpoint: "/schedules/{scheduleId}/entries",
    methods: {
      // get scheule entries
      ...generatePath({
        method: "get",
        tags: ["schedules"],
        summary: "Get all schedules entries for a schedule in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleEntries",
          }),
        },
        parameters: [
          createPathParameter(scheduleIdParam),
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create schedule entry
      ...generatePath({
        method: "post",
        tags: ["schedules"],
        summary: "Creates a new schedule entry in system",
        requestBody: createRequestBody({
          description: "Request payload to create schedule entry",
          required: true,
          contentRef: "#/components/schemas/ScheduleEntryFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleEntryTableSchema",
          }),
        },
      }),
      // delete schedules
      ...generatePath({
        method: "delete",
        tags: ["schedules"],
        summary: "Deletes schedule entry in system",
        requestBody: createRequestBody({
          description: "Request payload to delete schedule entry",
          required: true,
          contentRef: "#/components/requestBodies/deleteScheduleEntryPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleEntryTableSchema",
          }),
        },
      }),
    },
  }),
  // update schedule entry
  ...generateEndpoint({
    endpoint: "/schedules/{scheduleId}/entries/{entryId}",
    methods: {
      // update link
      ...generatePath({
        method: "patch",
        tags: ["schedules"],
        summary: "Updates a schedule entry in system",
        requestBody: createRequestBody({
          description: "Request payload to update schedule entry",
          required: true,
          contentRef: "#/components/schemas/ScheduleEntryFormSchema",
        }),
        parameters: [
          createPathParameter(scheduleIdParam),
          createPathParameter(entryIdParam),
        ],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/ScheduleEntryTableSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
