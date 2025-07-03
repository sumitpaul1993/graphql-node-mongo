import { ApolloServer } from '@apollo/server'
// import { startStandaloneServer } from '@apollo/server/standalone'
// import { Schema } from './schema/schema.js';
// import { GraphQLResolver } from './resolver/resolver.js';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

export const ConnectGraphQL = async () => {

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });

    // const server = new ApolloServer({
    //     typeDefs: Schema,
    //     resolvers: GraphQLResolver
    // })

    const server = new ApolloServer({
        schema,
    })
    
    return server;

    // startStandaloneServer(server, {
    //     listen: {
    //         port: process.env.PORT
    //     }
    // }).then(() => {
    //     console.log('server listing on port ', process.env.PORT)
    // }).catch((err) => {
    //     console.log(err)
    // })
}