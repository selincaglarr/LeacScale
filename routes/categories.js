const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get("https://m2.leanscale.com/index.php/rest/default/V1/categories", {
      headers: {
        Authorization: `Bearer ${AccessToken} `,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
