const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const acceptlanguage = req.get("accept-language");
  console.log(req.headers);
  axios
    .get("https://m2.leanscale.com/index.php/rest/default/V1/categories", {
      headers: {
        Authorization: `Bearer ${AccessToken} `,
      },
    })
    .then((response) => {
      if (acceptlanguage == "en") {
        // console.log(response.data);
        res.send(response.data);
      } else {
        res.json({ message: "unsupported language" });
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
