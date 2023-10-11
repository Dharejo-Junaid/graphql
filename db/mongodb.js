const mongoose = require("mongoose");
const Emoji = require("../models/emoji");
const jsonData = require("../data/emojis.json");

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/emojis";
const connectMongo = async () => {
  await mongoose.connect(URI);
  console.log("Mongo DB connected");

  const emojis = await Emoji.find({});
  if (emojis.length <= 0) {
    console.log("Wait a mintue to load emojis into database for you");

    await Emoji.create(jsonData);
    console.log("Data is successfully inserted in database");
  }
};

module.exports = { connectMongo };
