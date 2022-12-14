require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const definition = require("./src/docs");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

const options = {
  definition,
  apis: ["./src/modules/**/*.js"],
}
const swaggerSpec = swaggerJsdoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
