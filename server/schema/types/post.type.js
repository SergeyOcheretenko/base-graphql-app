'use strict';

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { users } from '../dummies.js';
import { UserType } from './user.type.js';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post description',
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.find((user) => user.id === parent.userId);
      },
    },
  }),
});
