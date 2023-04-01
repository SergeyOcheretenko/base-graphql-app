'use strict';

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { users } from '../dummies.js';
import { UserType } from './user.type.js';

export const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Hobby description',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.find((user) => user.id === parent.userId);
      },
    },
  }),
});
