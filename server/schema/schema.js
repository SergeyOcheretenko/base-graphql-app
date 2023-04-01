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
  { id: '1', name: 'Bond', age: 36, profession: 'Programmer' },
  { id: '2', name: 'Anna', age: 26, profession: 'Baker' },
  { id: '3', name: 'Bella', age: 18, profession: 'Mechanic' },
  { id: '4', name: 'Gina', age: 20, profession: 'Painter' },
  { id: '5', name: 'Georgina', age: 36, profession: 'Teacher' },
];

const hobbies = [
  {
    id: '1',
    title: 'Programming',
    description: 'Using computers to make the world a better place',
  },
  {
    id: '2',
    title: 'Rowing',
    description: 'Sweat and feel better before eating donuts',
  },
  {
    id: '3',
    title: 'Swimming',
    description: 'Get in the water and learn to become the water',
  },
  {
    id: '4',
    title: 'Fencing',
    description: 'A hobby for fency people',
  },
  {
    id: '5',
    title: 'Hiking',
    description: 'Wear hiking boots and explore the world',
  },
];

// Types
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User description',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },
  }),
});

const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Hobby description',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
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
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return hobbies.find((hobby) => hobby.id === args.id);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
