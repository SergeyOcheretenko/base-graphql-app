'use strict';

import { GraphQLID, GraphQLObjectType, GraphQLSchema } from 'graphql';
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

export default new GraphQLSchema({
  query: RootQuery,
});
