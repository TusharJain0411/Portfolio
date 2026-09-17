const express = require("express");

const router = express.Router();

const { sendHireMail } = require("../controllers/hireController");
const { validateHire } = require("../middleware/validator");

router.post("/", validateHire, sendHireMail);

module.exports = router;
