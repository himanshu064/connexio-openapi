const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  templateIdParam,
} = require("../../../common/parameters");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
  createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
  ...generateEndpoint({
    endpoint: "/actions/ticket_completed/request_template",
    methods: {
      // get workspaces
      ...generatePath({
        method: "get",
        tags: ["webhooks"],
        summary: "Get all task completed",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebhookTasksCompleted",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create workspaces
      ...generatePath({
        method: "post",
        tags: ["webhooks"],
        summary: "Create a new task completed in system",
        requestBody: createRequestBody({
          description: "Request payload to create task completed",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskCompletedFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskCompletedTableSchema",
          }),
        },
      }),
      // delete workspaces
      ...generatePath({
        method: "delete",
        tags: ["webhooks"],
        summary: "Delete a completed task in system",
        requestBody: createRequestBody({
          description: "Request payload for delete completed task",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteWebHooksTaskCompletedPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskCompletedTableSchema",
          }),
        },
      }),
    },
  }),
  // update single completed task
  ...generateEndpoint({
    endpoint: "/actions/ticket_completed/request_template/{templateId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Update completed task in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskCompletedTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update completed tasks",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskCompletedFormSchema",
        }),
        parameters: [createPathParameter(templateIdParam)],
      }),
    },
  }),
  // bulk update task completed
  ...generateEndpoint({
    endpoint: "/actions/ticket_completed/request_template/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Bulk Update task completed in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update task completed",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditWebHooksTaskCompletedPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskCompletedFormSchema",
          }),
        },
      }),
    },
  }),

  // Task Assigned
  ...generateEndpoint({
    endpoint: "/actions/ticket_assigned/request_template",
    methods: {
      // get Task Assigned
      ...generatePath({
        method: "get",
        tags: ["webhooks"],
        summary: "Get all task assigned",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebhookTasksAssigned",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create Task Assigned
      ...generatePath({
        method: "post",
        tags: ["webhooks"],
        summary: "Create a new task assigned in system",
        requestBody: createRequestBody({
          description: "Request payload to create task assigned",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskAssignedFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskAssignedTableSchema",
          }),
        },
      }),
      // delete workspaces
      ...generatePath({
        method: "delete",
        tags: ["webhooks"],
        summary: "Delete an assigned task in system",
        requestBody: createRequestBody({
          description: "Request payload for delete completed task",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteWebHooksTaskAssignedPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskAssignedTableSchema",
          }),
        },
      }),
    },
  }),
  // update single completed task
  ...generateEndpoint({
    endpoint: "/actions/ticket_assigned/request_template/{templateId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Update assigned task in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskAssignedTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update completed tasks",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskAssignedFormSchema",
        }),
        parameters: [createPathParameter(templateIdParam)],
      }),
    },
  }),
  // bulk update task completed
  ...generateEndpoint({
    endpoint: "/actions/ticket_assigned/request_template/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Bulk Update assigned task in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update assigned task",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditWebHooksTaskAssignedPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskAssignedFormSchema",
          }),
        },
      }),
    },
  }),

  // Task Conclusion
  ...generateEndpoint({
    endpoint: "/actions/ticket_conclusion_started/request_template",
    methods: {
      // get ticket_conclusion_started
      ...generatePath({
        method: "get",
        tags: ["webhooks"],
        summary: "Get all ticket conclusion started",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebhookTaskConclusionsStarted",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create Task Assigned
      ...generatePath({
        method: "post",
        tags: ["webhooks"],
        summary: "Create a new ticket conclusion started in system",
        requestBody: createRequestBody({
          description: "Request payload to create task conclusion",
          required: true,
          contentRef:
            "#/components/schemas/WebHooksTaskConclusionStartedFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef:
              "#/components/schemas/WebHooksTaskConclusionStartedTableSchema",
          }),
        },
      }),
      // delete workspaces
      ...generatePath({
        method: "delete",
        tags: ["webhooks"],
        summary: "Delete an ticket conclusion in system",
        requestBody: createRequestBody({
          description: "Request payload for delete ticket conclusion",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteWebHooksTaskConclusionPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef:
              "#/components/schemas/WebHooksTaskConclusionStartedTableSchema",
          }),
        },
      }),
    },
  }),
  // update single task conclusion
  ...generateEndpoint({
    endpoint:
      "/actions/ticket_conclusion_started/request_template/{templateId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Update task conclusion in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/WebHooksTaskConclusionStartedTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update completed tasks",
          required: true,
          contentRef:
            "#/components/schemas/WebHooksTaskConclusionStartedFormSchema",
        }),
        parameters: [createPathParameter(templateIdParam)],
      }),
    },
  }),
  // bulk update task conclusion
  ...generateEndpoint({
    endpoint: "/actions/ticket_conclusion_started/request_template/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Bulk Update task conclusion in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update task conclusion",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditWebHooksTaskConclusionPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef:
              "#/components/schemas/WebHooksTaskConclusionStartedFormSchema",
          }),
        },
      }),
    },
  }),

  // Task Events
  ...generateEndpoint({
    endpoint: "/actions/task_event/request_template",
    methods: {
      // get ticket_conclusion_started
      ...generatePath({
        method: "get",
        tags: ["webhooks"],
        summary: "Get all task events started",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskEvents",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // create Task Assigned
      ...generatePath({
        method: "post",
        tags: ["webhooks"],
        summary: "Create a new task event in system",
        requestBody: createRequestBody({
          description: "Request payload to create task event",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskEventFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskEventTableSchema",
          }),
        },
      }),
      // delete workspaces
      ...generatePath({
        method: "delete",
        tags: ["webhooks"],
        summary: "Delete a task event in system",
        requestBody: createRequestBody({
          description: "Request payload for delete task event",
          required: true,
          contentRef:
            "#/components/requestBodies/deleteWebHooksTaskEventsPayload",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskEventTableSchema",
          }),
        },
      }),
    },
  }),
  // update single task conclusion
  ...generateEndpoint({
    endpoint: "/actions/task_event/request_template/{templateId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Update task event in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskEventTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update task event",
          required: true,
          contentRef: "#/components/schemas/WebHooksTaskEventFormSchema",
        }),
        parameters: [createPathParameter(templateIdParam)],
      }),
    },
  }),
  // bulk update task conclusion
  ...generateEndpoint({
    endpoint: "/actions/task_event/request_template/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["webhooks"],
        summary: "Bulk Update task events in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update task events",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditWebHooksTaskEventsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/WebHooksTaskEventFormSchema",
          }),
        },
      }),
    },
  }),
};
module.exports = paths;
