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




exports.validateHire = [
  body("name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name must contain at least 2 characters"),

  body("email").isEmail().withMessage("Please enter a valid email"),

  body("position")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Please enter a job position"),

  body("salary").optional({ checkFalsy: true }).trim(),

  body("jobRole")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Job details must contain at least 10 characters"),

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
