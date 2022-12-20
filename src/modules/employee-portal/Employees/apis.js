const {
  paginationLimitQuery,
  paginationOffsetQuery,
  searchQuery,
  employeeIdParam,
  funnelIdParam,
} = require("../../../common/parameters");
const { createEmployeeFunnelExample } = require("../../../common/payload_examples");
const {
  generateEndpoint,
  generatePath,
  createPathParameter,
  createResponse,
  createRequestBody,
  createQueryParameter,
} = require("../../../utils/path-utils");

const paths = {
  // employees
  ...generateEndpoint({
    endpoint: "/employees",
    methods: {
      // get employees
      ...generatePath({
        method: "get",
        tags: ["employees"],
        summary: "Get all employees in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Employees",
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
  // update single employee
  ...generateEndpoint({
    endpoint: "/employees/{employeeId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["employees"],
        summary: "Update an employee in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/EmployeeTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update employee",
          required: true,
          contentRef: "#/components/schemas/EmployeeFormSchema",
        }),
        parameters: [createPathParameter(employeeIdParam)],
      }),
    },
  }),
  // bulk update employees
  ...generateEndpoint({
    endpoint: "/employees/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["employees"],
        summary: "Bulk Update an employee in system",
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/EmployeeTableSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to update employee",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditEmployeePayload",
          // example: bulkUpdateEmployeeExample,
        }),
      }),
    },
  }),
  /* ============================================================ */
  // Subscribed funnels for employee
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/employee/{employeeId}",
    methods: {
      // get subscribed funnels for employee
      ...generatePath({
        method: "get",
        tags: ["employees"],
        summary: "Fetch subscribed funnels for employee",
        parameters: [
          createPathParameter(employeeIdParam),
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/EmployeeFunnels",
          }),
        },
      }),
      // Create a new employee in funnel
      ...generatePath({
        method: "post",
        tags: ["employees"],
        summary: "Create a new employee in employees funnel",
        parameters: [createPathParameter(employeeIdParam)],
        requestBody: createRequestBody({
          description: "Request payload to update employee",
          required: true,
          contentRef:
            "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
            example: createEmployeeFunnelExample,
        }),
        responses: {
          ...createResponse({
            status: "201",
            description: "OK",
            schemaRef:
              "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
          }),
        },
      }),
      // delete subscribed funnels for employee, or bulk delete subscribed funnels
      ...generatePath({
        method: "delete",
        tags: ["employees"],
        summary: "Delete subscribed funnels for employee",
        parameters: [createPathParameter(employeeIdParam)],
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef: "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
          }),
        },
        requestBody: createRequestBody({
          required: true,
          description: "Payload for deleting subscribed funnels for employee",
          schemaRef: "#/components/requestBodies/deleteFunnelByEmployeeIdPayload",
          example: ["string"]
        })
      }),
    },
  }),
  // Update a funnel for employee
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/employee/{employeeId}/{funnelId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["employees"],
        summary: "Update subscribed funnel for employee",
        parameters: [
          createPathParameter(employeeIdParam),
          createPathParameter(funnelIdParam),
        ],
        requestBody: createRequestBody({
          description: "Request payload to update employee",
          required: true,
          contentRef:
            "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef:
              "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk edit funnel for employee
  ...generateEndpoint({
    endpoint: "/employee_funnel_subscriptions/employee/{employeeId}/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["employees"],
        summary: "Bulk update funnels for an employee in system",
        responses: {
          ...createResponse({
            status: "202",
            description: "OK",
            schemaRef:
              "#/components/schemas/EmployeeFunnelSubscriptionFormSchema",
          }),
        },
        requestBody: createRequestBody({
          description: "Request payload to bulk update employee funnels",
          required: true,
          contentRef:
            "#/components/requestBodies/bulkEditEmployeeFunnelsPayload",
        }),
        parameters: [createPathParameter(employeeIdParam)],
      }),
    },
  }),
};

module.exports = paths;
