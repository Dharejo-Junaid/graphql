const { Schema, model } = require("mongoose");

const emojiSchema = new Schema({
  slug: {
    type: String,
    required: true,
  },
  
  character: {
    type: String,
    required: true,
  },

  unicodeName: {
    type: String,
    required: true,
  },

  codePoint: {
    type: String,
    required: true,
  },

  group: {
    type: String,
    required: true,
  },

  subGroup: {
    type: String,
    required: true,
  },
});

module.exports = model("emoji", emojiSchema);
