const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

const corsOptions = {
  origin: [process.env.FRONTEND_URL, "http://localhost:3001"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).send("country backend");
});

const countriesRouter = require("./routes/country.route");
app.use("/countries", countriesRouter);

module.exports = app;
