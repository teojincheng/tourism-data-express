const mongoose = require("mongoose");

const countryDataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: String,
  },
  visitors: {
    type: Number,
  },
});

const CountryData = mongoose.model("Country", countryDataSchema);

module.exports = CountryData;
