const { info, openapi } = require("./info");
const { servers } = require("./servers");
const { components } = require("./components");
const { bearerAuth } = require("./auth");

const definition = {
    openapi,
    info,
    servers,
    components,
    bearerAuth,
}

module.exports = definition;
