'use strict';

import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

// Dummy data
const users = [
  { id: '1', name: 'Bond', age: 36 },
  { id: '2', name: 'Anna', age: 26 },
  { id: '3', name: 'Bella', age: 18 },
  { id: '4', name: 'Gina', age: 20 },
  { id: '5', name: 'Georgina', age: 36 },
];

// Types
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Documentation for user',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
