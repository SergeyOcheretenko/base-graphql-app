'use strict';

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { users, hobbies, posts } from './dummies.js';
import { UserType } from './types/user.type.js';
import { HobbyType } from './types/hobby.type.js';
import { PostType } from './types/post.type.js';

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
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return posts.find((post) => post.id === args.id);
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      args: {
        // id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        profession: { type: GraphQLString },
      },
      resolve(parent, args) {
        return { ...args };
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
