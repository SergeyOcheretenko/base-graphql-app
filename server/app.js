'use strict';

import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const PORT = process.env.PORT || 4000;

const app = express();
app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));

app.listen(PORT, () => {
  console.log(`Lister for request on port ${PORT}`);
});
