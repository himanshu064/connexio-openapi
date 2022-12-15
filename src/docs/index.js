const { info, openapi } = require("./info");
const { servers } = require("./servers");
const { components } = require("./components");
const { bearerAuth } = require("./auth");
const { paths } = require("../modules");

const definition = {
  openapi,
  info,
  servers,
  components,
  paths,
  bearerAuth,
};

module.exports = definition;
