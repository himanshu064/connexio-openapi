exports.generateEndpoint = ({ endpoint, methods }) => {
  return {
    [endpoint]: methods,
  };
};
exports.generatePath = ({
  method = "get",
  tags = [],
  summary = "",
  responses = {},
  parameters = [],
  requestBody,
}) => {
  const _parameters = Array.isArray(parameters) ? parameters : [parameters];
  const _tags = Array.isArray(tags) ? tags : [tags];

  const payload = {
    tags: _tags,
    summary,
    responses,
    parameters: _parameters,
  };

  if (requestBody) {
    payload.requestBody = requestBody;
  }

  return {
    [method]: payload,
  };
};

exports.createRequestBody = ({
  description = "",
  contentRef = "",
  required = false,
}) => {
  return {
    description,
    content: {
      "application/json": {
        schema: {
          $ref: contentRef,
        },
      },
      "application/xml": {
        schema: {
          $ref: contentRef,
        },
      },
      "application/x-www-form-urlencoded": {
        schema: {
          $ref: contentRef,
        },
      },
    },
    required,
  };
};

exports.createResponse = ({ status, description, schemaRef }) => {
  return {
    [status]: {
      description,
      schema: {
        $ref: schemaRef,
      },
    },
  };
};

exports.createPathParameter = ({
  name,
  param_in,
  description,
  required,
  schemaType,
}) => {
  return {
    name,
    in: param_in,
    description,
    required,
    schema: {
      type: schemaType,
    },
  };
};
