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
  departmentIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/departments",
    methods: {
      // get departments
      ...generatePath({
        method: "get",
        tags: ["departments"],
        summary: "Get all departments in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/Departments",
          }),
        },
        parameters: [
          createQueryParameter(paginationLimitQuery),
          createQueryParameter(paginationOffsetQuery),
          createQueryParameter(searchQuery),
        ],
      }),
      // post department
      ...generatePath({
        method: "post",
        tags: ["departments"],
        summary: "Creates an department in system",
        requestBody: createRequestBody({
          description: "Request payload to create an department",
          required: true,
          contentRef: "#/components/schemas/DepartmentsFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DepartmentsFormSchema",
          }),
        },
      }),
      // delete department
      ...generatePath({
        method: "delete",
        tags: ["departments"],
        summary: "Deletes a department in system",
        requestBody: createRequestBody({
          description: "Request payload to deletes department",
          required: true,
          contentRef: "#/components/requestBodies/deleteDepartmentsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DepartmentsFormSchema",
          }),
        },
      }),
    },
  }),
  // update an achivement
  ...generateEndpoint({
    endpoint: "departments/{departmentId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["departments"],
        summary: "Updates department in the system",
        requestBody: createRequestBody({
          description: "Request payload to update department",
          required: true,
          contentRef: "#/components/schemas/DepartmentsFormSchema",
        }),
        parameters: [createPathParameter(departmentIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DepartmentsFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/departments/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["departments"],
        summary: "Bulk Update departments in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk departments",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditDepartmentsPayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/DepartmentsFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
