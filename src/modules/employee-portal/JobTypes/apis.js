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
  jobTypeIdParam,
} = require("../../../common/parameters");

const paths = {
  ...generateEndpoint({
    endpoint: "/job_types",
    methods: {
      // get departments
      ...generatePath({
        method: "get",
        tags: ["job_types"],
        summary: "Get all job types in system",
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobTypes",
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
        tags: ["job_types"],
        summary: "Creates a job type in system",
        requestBody: createRequestBody({
          description: "Request payload to create a job type",
          required: true,
          contentRef: "#/components/schemas/JobTypeFormSchema",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobTypeFormSchema",
          }),
        },
      }),
      // delete job_types
      ...generatePath({
        method: "delete",
        tags: ["job_types"],
        summary: "Deletes a job types in system",
        requestBody: createRequestBody({
          description: "Request payload to deletes job types",
          required: true,
          contentRef: "#/components/requestBodies/deleteJobTypePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobTypeFormSchema",
          }),
        },
      }),
    },
  }),
  // update an achivement
  ...generateEndpoint({
    endpoint: "job_types/{jobTypeId}",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["job_types"],
        summary: "Updates department in the system",
        requestBody: createRequestBody({
          description: "Request payload to update department",
          required: true,
          contentRef: "#/components/schemas/JobTypeFormSchema",
        }),
        parameters: [createPathParameter(jobTypeIdParam)],
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobTypeFormSchema",
          }),
        },
      }),
    },
  }),
  // bulk update
  ...generateEndpoint({
    endpoint: "/job_types/bulk",
    methods: {
      ...generatePath({
        method: "patch",
        tags: ["job_types"],
        summary: "Bulk Update job type in system",
        requestBody: createRequestBody({
          description: "Request payload to bulk update bulk job types",
          required: true,
          contentRef: "#/components/requestBodies/bulkEditJobTypePayload",
        }),
        responses: {
          ...createResponse({
            status: "200",
            description: "OK",
            schemaRef: "#/components/schemas/JobTypeFormSchema",
          }),
        },
      }),
    },
  }),
};

module.exports = paths;
