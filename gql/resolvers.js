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

  Mutation: {
    addEmoji: async (_, { newEmoji }) => {
      return await Emoji.create(newEmoji);
    },

    updateEmoji: async (_, { _id, newEmoji }) => {
      return await Emoji.findByIdAndUpdate(_id, newEmoji, { new: true });
    },

    deleteEmoji: async (_, { _id }) => {
      return await Emoji.findByIdAndDelete(_id);
    },
  },
};

module.exports = resolvers;
