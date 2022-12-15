require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const swaggerDocument = require("./src/docs");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
