const Emoji = require("../models/emoji");

const resolvers = {
  Query: {
    getEmojis: async (_, { where }) => {
      return await Emoji.find(where);
    },

    getEmojiById: async (_, _id) => {
      return await Emoji.findById(_id);
    },

    getRandomEmoji: async () => {
      return (
        (
          await Emoji.aggregate([
            {
              $sample: { size: 1 },
            },
          ])
        )[0] || {}
      );
    },
  },
};

module.exports = resolvers;
