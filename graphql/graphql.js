import { ApolloServer } from '@apollo/server'
// import { startStandaloneServer } from '@apollo/server/standalone'
import { Schema } from './schema/schema.js';
import { GraphQLResolver } from './resolver/resolver.js';

export const ConnectGraphQL = async () => {

    const server = new ApolloServer({
        typeDefs: Schema,
        resolvers: GraphQLResolver
    })

    // await server.start()
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