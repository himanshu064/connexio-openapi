const {
  country_enum,
  country_enum_titles,
} = require("../../../constants/country");

const MyAccountFormSchema = {
  title: "",
  type: "object",
  properties: {
    role_in_organization: {
      type: "string",
      title: "Employee Role in The Organization",
      help: "Enter your role in the organization (Eg. Sales Representative)",
      propertyOrder: 1,
    },
    birth_date: {
      type: "date",
      title: "Birth Date",
      help: "Please enter your birth date",
      propertyOrder: 2,
    },
    ssn: {
      type: "string",
      title: "Social Security Number",
      help: "Please enter your SSN",
      propertyOrder: 3,
    },
    marital_status: {
      enum: ["single", "married", "divorced", "n/a"],
      enum_titles: ["Single", "Married", "Divorced", "N/A"],
      type: "string",
      title: "Marital Status",
      help: "Please select your Marital Status for employee",
      propertyOrder: 4,
    },
    street1: {
      type: "string",
      title: "Address",
      help: "Please enter your address",
      propertyOrder: 5,
    },
    street2: {
      type: "string",
      title: "Address 2",
      help: "Please enter your address",
      propertyOrder: 6,
    },
    city: {
      type: "string",
      title: "City",
      help: "Please enter your city",
      propertyOrder: 7,
    },
    province: {
      type: "string",
      title: "Province",
      help: "Please enter your province",
      propertyOrder: 8,
    },
    postal_code: {
      type: "string",
      title: "Postal Code",
      help: "Please enter your postal code of address",
      propertyOrder: 9,
    },
    country: {
      enum: country_enum,
      enum_titles: country_enum_titles,
      type: "string",
      title: "Country",
      help: "Please enter the country",
      propertyOrder: 10,
    },
    work_phone: {
      type: "string",
      title: "Work Phone Number",
      help: "Please enter your Work Phone Number",
      propertyOrder: 11,
    },
    mobile_phone: {
      type: "string",
      title: "Mobile Phone Number",
      help: "Please enter your Mobile Phone Number",
      propertyOrder: 12,
    },
    home_phone: {
      type: "string",
      title: "Home Phone Number",
      help: "Please enter your Home Phone Number",
      propertyOrder: 13,
    },
    business_mail: {
      type: "string",
      title: "Business Mail",
      widget: "email",
      help: "Please enter your Business Mail",
      propertyOrder: 14,
    },
  },
  operations: [
    {
      title: "Edit",
      is_standard: true,
      method: "PATCH",
      key: "edit",
      route_suffix: "",
      visible: true,
    },
    {
      title: "Delete",
      is_standard: false,
      key: "delete",
      visible: true,
    },
  ],
};

module.exports = {
  MyAccountFormSchema,
};
