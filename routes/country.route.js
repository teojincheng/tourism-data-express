const express = require("express");
const router = express.Router();

const Country = require("../models/country.model");

const createCountryObj = async (countryData) => {
  await Country.init();
  const doc = Country(countryData);
  await doc.save();
};

const getAllCountryData = async () => {
  const countriesData = await Country.find({}, "-__v");
  return countriesData;
};

router.get("/", async (req, res) => {
  const collection = await getAllCountryData();
  res.status(200).send(collection);
});

router.post("/", async (req, res) => {
  await createCountryObj(req.body);
  res.status(201).send(req.body);
});

module.exports = router;
