'use strict';

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post description',
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
  }),
});
