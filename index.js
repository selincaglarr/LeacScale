const Joi = require("joi");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const countries = require("./routes/countries");
const categories = require("./routes/categories");
const customers = require("./routes/customers");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/categories", categories);
app.use("/api/countries", countries);
app.use("/api/customers", customers);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
