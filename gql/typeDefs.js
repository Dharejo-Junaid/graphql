const typeDefs = `#graphql
    type Emoji {
        _id: ID!,
        slug: String!,
        character: String!,
        unicodeName: String!,
        codePoint: String!,
        group: String!,
        subGroup: String!
    },

    input InputEmoji {
        slug: String!,
        character: String!,
        unicodeName: String!,
        codePoint: String!,
        group: String!,
        subGroup: String!
    },

    input EmojiProps {
        _id: ID,
        slug: String,
        character: String,
        unicodeName: String,
        codePoint: String,
        group: String,
        subGroup: String
    },

    type Query {
        getEmojis(where: EmojiProps): [Emoji],
        getEmojiById(_id: ID!): Emoji,
        getRandomEmoji: Emoji
    },

    type Mutation {
        addEmoji(newEmoji: InputEmoji!): Emoji,
        updateEmoji(_id: ID!, newEmoji: EmojiProps!): Emoji,
        deleteEmoji(_id: ID!): Emoji,
    }
`;

module.exports = typeDefs;
