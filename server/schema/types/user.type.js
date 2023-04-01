'use strict';

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { hobbies, posts } from '../dummies.js';
import { HobbyType } from './hobby.type.js';
import { PostType } from './post.type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User description',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return posts.filter((post) => post.userId === parent.id);
      },
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return hobbies.filter((hobby) => hobby.userId === parent.id);
      },
    },
  }),
});
