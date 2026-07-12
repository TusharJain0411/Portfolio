const express = require("express");

const router = express.Router();

const { sendMail } = require("../controllers/contactController");

const { validateContact } = require("../middleware/validator");

router.post("/", validateContact, sendMail);

module.exports = router;
