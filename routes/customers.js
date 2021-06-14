const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
// const bodyParser = require("body-parser");
const { validationResult, body } = require("express-validator");
const express = require("express");
const router = express.Router();

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post(
  "/",

  [
    body("firstname").exists(),
    body("lastname").exists(),
    body("email", "Your email is not valid").isEmail().normalizeEmail(),
    body("password", "Password must have more than 5 characters")
      .exists()
      .isLength({ min: 5 }),
  ],
  (req, res) => {
    axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken} `,
      },
    });
    // .then((req) => {
    //   req.bodyParser = new User();
    //   User.create({
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     password: req.body.password,
    //   }).then((user) => res.jsonp(user));
    // })
    // .catch((errors) => {
    //   return res.status(400).jsonp(errors);
    // });
    //```````
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => res.jsonp(user));
  }
);

module.exports = router;
