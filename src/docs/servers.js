module.exports = {
  servers: [
    // backoffice frontend
    {
      url: "https://dev5bo.cxcl.io/api",
      description: "dev5bo",
    },
    // switch
    {
      url: "https://switches-dev5.cxcl.io/api",
      description: "dev5bo-Switch",
    },
    // employee-portal
    {
      url: "https://connexio.cxcl.io/ep/api",
      description: "dev5bo-employee-portal",
    },
    // workspace-configuration
    {
      url: "https://connexio.cxcl.io/ws/config/api",
      description: "dev5bo-workspace-configuration",
    },
  ],
};
