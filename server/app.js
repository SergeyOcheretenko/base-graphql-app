'use strict';

import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const PORT = process.env.PORT || 4000;

const app = express();
app.use('/graphql', graphqlHTTP({ graphiql: true }));

app.listen(PORT, () => {
  console.log(`Lister for request on port ${PORT}`);
});
