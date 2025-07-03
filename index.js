import express from 'express';
const app = express();
import { connectDB } from './database/database.js';
import { ConnectGraphQL } from './graphql/graphql.js';
import * as dotenv from 'dotenv'
dotenv.config()
import { expressMiddleware } from '@as-integrations/express5';
import { graphqlMiddleware } from './middleware/testMiddleware.js';


connectDB(process.env.MONGODB_URI)

const graphQLServer = await ConnectGraphQL()
await graphQLServer.start()

app.use(express.json())
app.use(
    '/graphql',
    // express.json(),
    graphqlMiddleware,
    expressMiddleware(
        graphQLServer,
        {
            context: async ({ req }) => ({
                user: req.data // Pass user to context
            })
        }
    )
)

app.get('/', (req, res) => { res.send("Hello") })

app.listen(process.env.PORT, () => {
    console.log("Listing port ", process.env.PORT)
})