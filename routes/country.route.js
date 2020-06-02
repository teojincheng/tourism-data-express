const express = require("express");
const router = express.Router();

const Country = require("../models/country.model");

const getAllCountryData = async () => {
  const countriesData = await Country.find({}, "-__v");
  return countriesData;
};

router.get("/", async (req, res) => {
  const collection = await getAllCountryData();
  res.status(200).send(collection);
});

module.exports = router;
