const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const turkish = require("../lang/tr.json");
const english = require("../lang/en.json");
const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   axios
//     .get(
//       "https://m2.leanscale.com/index.php/rest/default/V1/directory/countries",
//       {
//         headers: {
//           Authorization: `Bearer ${AccessToken} `,
//           "Accept-Language": "en-US,en",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//     .then((response) => {
//       const obj = response.data;
//       const newObj = obj.map((item) => ({
//         id: item.id,
//         full_name_english: item.full_name_english,
//       }));
//       res.send(newObj);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send(error);
//     });
// });

router.get("/", (req, res) => {
  const acceptlanguage = req.get("accept-language");

  // console.log(req.headers);
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
      // console.log(response.data);
      if (acceptlanguage == "tr") {
        let c = response.data.map((data, index) => {
          data.full_name_locale =
            turkish[data.full_name_locale] || data.full_name_locale;
          return data;
        });
        // console.log(c);
        res.send(c);
      } else if (acceptlanguage == "en") {
        res.send(response.data);
      } else {
        res.json({ message: "unsupported language" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
