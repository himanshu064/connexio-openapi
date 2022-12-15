const { info, openapi } = require("./info");
const { servers } = require("./servers");
const { components } = require("./components");
const { security } = require("./security");
const { paths } = require("../modules");

const definition = {
  openapi,
  info,
  servers,
  components,
  paths,
  security,
};

module.exports = definition;
