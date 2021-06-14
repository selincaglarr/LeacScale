const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const Joi = require("joi");
// Joi.objectId = require("joi-objectid")(Joi);
const countries = require("./routes/countries");
const categories = require("./routes/categories");
const customers = require("./routes/customers");
const acceptLanguageMiddleware = require("accept-language-middleware");

const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

app.use(acceptLanguageMiddleware());
app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/countries", countries);
app.use("/api/customers", customers);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
