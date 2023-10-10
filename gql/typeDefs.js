const typeDefs = `#graphql
    type Emoji {
        slug: ID!,
        character: String!,
        unicodeName: String!,
        codePoint: String!,
        group: String!,
        subGroup: String!
    },

    type Query {
        emojis: [Emoji],
    }
`;

module.exports = typeDefs;
