const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const Joi = require("joi");
const { check, validationResult, oneOf } = require("express-validator");
const express = require("express");
const router = express.Router();

// const schema = Joi.object({
//   firstname: Joi.string().min(3).max(30).required(),
//   lastname: Joi.string().min(3).max(30).required(),
//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ["com", "net"] },
//   }),
// });

function validateCustomers(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(user);
}

router.get("/", (req, res) => {
  axios
    .post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken} `,
      },
    })
    .then((req, response) => {
      const validation_result = validateCustomers(req);
      console.log(validation_result);
      res.send(validation_result);
    })
    .catch((error) => {
      // handle error
      console.log(error);
      res.send(error);
    });
});

// router.post("/customers", (req, res) => {
//   User.create({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password,
//   }).then((user) => res.json(user));
// });

// router.post(
//   "/",
//   [
//     check("firstname").exists(),
//     check("lastname").exists(),
//     check("email", "Your email is not valid")
//       .not()
//       .isEmpty()
//       .isEmail()
//       .normalizeEmail(),
//     check("password")
//       .exists()
//       .isLength({ min: 5 })
//       .trim()
//       .escape()
//       .withMessage("Password must have more than 5 characters"),
//   ],
//   (req, res) => {
//     axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${AccessToken} `,
//       },
//     });
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     User.create({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       email: req.body.email,
//       password: req.body.password,
//     }).then((user) => res.json(user));
//   }
// );

module.exports = router;
exports.validate = validateCustomers;
