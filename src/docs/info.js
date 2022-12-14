const { version } = require("../../package.json");

module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Connexio API", // short title.
    description:
      "A set of apis that can be tested isolately from the application", //  desc.
    version, // version number
    contact: {
      name: "Connexio", // your name
      url: "https://www.connexiocloud.com/", // your website
    },
  },
};
