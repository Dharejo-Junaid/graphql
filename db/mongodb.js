const mongoose = require("mongoose");

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/emojis";
const connectMongo = async () => {
  await mongoose.connect(URI);
  console.log("Mongo DB connected");
};

module.exports = { connectMongo };
