const { ApolloServer, gql } = require("apollo-server");

const lycoris = [
  {
    name: "千束",
    gesture: "ちんあなごー!",
  },
  {
    name: "たきな",
    gesture: "さかなー!",
  },
];


const typeDefs = gql`
  type Lycoris {
    name: String,
    gesture: String,
  }

  type Query {
    kawaii: [Lycoris]
  }
`;

const resolvers = {
  Query: {
    kawaii: () => lycoris,
  },
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({ url }) => {
  console.log(`Server Ready at ${url}`);
});