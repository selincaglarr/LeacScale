// const axios = require("axios");
// const AccessToken = "bib99ay5ulymg6jgu1ur095y6cf26tn4";
// // const bodyParser = require("body-parser");
// const { validationResult, bo, bodydy } = require("express-validator");
// const express = require("express");
// const router = express.Router();

// // // const urlencodedParser = bodyParser.urlencoded({ extended: false });
// // const myValidationResult = validationResult.withDefaults({
// //   formatter: (error) => {
// //     return {
// //       myLocation: error.location,
// //     };
// //   },
// // });

// router.post(
//   "/",

//   [
//     await body("firstname").exists().bail().run(req),
//     await body("lastname").exists().bail().run(req),
//     await body("email", "Your email is not valid")
//       .isEmail()
//       .normalizeEmail()
//       .bail()
//       .run(req),
//     await body("password", "Password must have more than 5 characters")
//       .exists()
//       .isLength({ min: 5 })
//       // .not().isIn([^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$])
//       .bail()
//       .run(req),
//   ],
//   async (req, res, next) => {
//     axios.post("https://m2.leanscale.com/index.php/rest/default/V1/customers", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${AccessToken} `,
//       },
//     });
//     const result = validationResult(req);
//     if (!result.isEmpty()) {
//       return res.status(400).json({ errors: result.array() });
//     }
//     console.log(req.body);

//     // const requiredData = matchedData(req, { includeOptionals: false });
//     // const allData = matchedData(req, { includeOptionals: true });
//     // console.log(requiredData); // { name: 'John Doe' }
//     // console.log(allData); // { name: 'John Doe', bio: '' }
//     // .then((req) => {
//     //   req.bodyParser = new User();
//     //   User.create({
//     //     firstname: req.body.firstname,
//     //     lastname: req.body.lastname,
//     //     email: req.body.email,
//     //     password: req.body.password,
//     //   }).then((user) => res.jsonp(user));
//     // })
//     // .catch((errors) => {
//     //   return res.status(400).jsonp(errors);
//     // });
//     //```````
//     // const errors = myValidationResult(req).mapped();
//     // if (!errors.isEmpty) {
//     //   return res.status(400).json({ errors: errors.mapped });
//     // }
//     // User.create({
//     //   firstname: req.body.firstname,
//     //   lastname: req.body.lastname,
//     //   email: req.body.email,
//     //   password: req.body.password,
//     // }).then((user) => res.jsonp(user));
//   }
// );

// module.exports = router;
