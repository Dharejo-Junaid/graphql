const typeDefs = `#graphql
    type Emoji {
        _id: ID,
        slug: String!,
        character: String!,
        unicodeName: String!,
        codePoint: String!,
        group: String!,
        subGroup: String!
    },

    input EmojiFilter {
        _id: ID,
        slug: String,
        character: String,
        unicodeName: String,
        codePoint: String,
        group: String,
        subGroup: String
    },

    type Query {
        getEmojis(where: EmojiFilter): [Emoji],
        getEmojiById(_id: ID!): Emoji,
        getRandomEmoji: Emoji
    }
`;

module.exports = typeDefs;
