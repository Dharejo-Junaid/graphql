# Emoji API with GraphQL, Express, and MongoDB

This project provides a GraphQL API for managing emojis using Express and MongoDB. It includes resolvers, type definitions, and a server setup for handling GraphQL requests.

## Getting Started

You don't need to insert emojis into your database. When you run this project first time. It will insert all the emojis for you. So you just follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your system
- MongoDB installed locally or a cloud-based MongoDB service

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Dharejo-Junaid/emojis
```

2. Install dependencies using npm:

```bash
npm install
```

3. Start server on port 5000 using:

```bash
npm start
```

4. open your browser and type:
```bash
http://localhost:5000/graphql
```

## API Endpoints
### Queries:
1. getEmojis: Retrieve emojis based on a provided filter.
2. getEmojiById: Retrieve an emoji by its ID
3. getRandomEmoji: Retrieve a random emoji.

## Mutations:
1. addEmoji: Add a new emoji to the database.
2. updateEmoji: Update an existing emoji.
3. deleteEmoji: Delete an emoji by its ID.



