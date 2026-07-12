const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRoute = require("./routes/contactRoute");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourportfolio.vercel.app"],
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", limiter);

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
