const axios = require("axios");
const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
const bodyParser = require("body-parser");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AccessToken} `,
    }
      .try((response) => {
        const schema = Joi.object({
          firstname: Joi.string().min(5).max(50).required(),
          lastname: Joi.string().min(5).max(50).required(),
          email: Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
          password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        });

        const result = schema.validate(response.body);
        if (result.error) {
          console.log(
            `There was an error: ${JSON.stringify(result.error.details[0])}`
          );
          res.status(400).send(result.error.details[0].message);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      }),
  });
});

// router.post("/", (req, res) => {
//   axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
//     //   axios.get(
//     //     "https://m2.leanscale.com/index.php/rest/<store_code>/V1/customers",
//     // {
//     headers: {
//       "Content-Type": "application/json",
//       //   Authorization: `Bearer ${AccessToken} `,
//     }
//       .then((response) =>  {
//         const { body } = response;

//         const schema = Joi.object().keys({
//           firstname: Joi.string().min(5).max(50).required(),
//           lastname: Joi.string().min(5).max(50).required(),
//           email: Joi.string().email({
//             minDomainSegments: 2,
//             tlds: { allow: ["com", "net"] },
//           }),
//           password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//         });

//         const result = Joi.validate(body, schema);
//         const { value, error } = result;
//         const valid = error == null;
//         if (!valid) {
//           res.status(422).json({
//             message: "Invalid request",
//             data: body,
//           });
//         } else {
//           const createdPost = api.createPost(data);
//           res.json({ message: "Resource created", data: createdPost });
//         }
//       })
//       .catch((error) => {
//         res.send(error);
//       }),
//   });
// });

// router.post("/", (req, res) => {
//   const acceptlanguage = req.get("accept-language");

//   axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${AccessToken} `,
//     }.then((response, request) => {
//       const data = response.body;
//       console.log(data);

//       const schema = Joi.object({
//         firstname: Joi.string().min(5).max(50).required(),
//         lastname: Joi.string().min(5).max(50).required(),
//         email: Joi.string().email({
//           minDomainSegments: 2,
//           tlds: { allow: ["com", "net"] },
//         }),
//         password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//       });
//       Joi.validate(data, schema, (err, value) => {
//         // const id = Math.ceil(Math.random() * 9999999);
//         console.log(value);
//         if (err) {
//           res.status(422).json({
//             status: "error",
//             message: "Invalid request data",
//             data: data,
//           });
//         } else {
//           res.json({
//             status: "success",
//             message: "User created successfully",
//             data: data,
//           });
//         }
//       }).catch((error) => {
//         console.log(error);
//         res.send(error);
//       });
//     }),
//   });
// });
module.exports = router;
