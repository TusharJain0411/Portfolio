const { body, validationResult } = require("express-validator");

exports.validateContact = [
  body("name").trim().isLength({ min: 2 }),

  body("email").isEmail(),

  body("subject").trim().isLength({ min: 3 }),

  body("message").trim().isLength({ min: 10 }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,

        errors: errors.array(),
      });
    }

    next();
  },
];
