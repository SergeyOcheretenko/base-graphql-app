'use strict';

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Hobby description',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
