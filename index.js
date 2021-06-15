const express = require("express");
const bodyParser = require("body-parser");
const countries = require("./routes/countries");
const categories = require("./routes/categories");
// const customers = require("./routes/customers");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/countries", countries);
// app.use("/api/customers", customers);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
