const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get(
      "https://m2.leanscale.com/index.php/rest/default/V1/directory/countries",
      {
        headers: {
          Authorization: `Bearer ${AccessToken} `,
        },
      }
    )
    .then((response) => {
      const obj = response.data;
      const newObj = obj.map((item) => ({
        id: item.id,
        full_name_english: item.full_name_english,
      }));
      res.send(newObj);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
