const express = require('express');
const app = express();
const port = 3000
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { Schema } = require('./graphql/schema/schema.js');
const { connectDB } = require('./database/database.js');
const { Users } = require('./model/user.js');
require('dotenv').config()


connectDB(process.env.MONGODB_URI)


const server = new ApolloServer({
    typeDefs: Schema,
    resolvers: {
        Query: {
            hello: () => 'Hi',
            users: async () => {
                const users = await Users.find();
                return users;
            }
        }
    }
})

startStandaloneServer(server, {
    listen: {
        port: process.env.PORT
    }
}).then(() => {
    console.log('server listing on port ', process.env.PORT)
}).catch((err) => {
    console.log(err)
})

// app.listen(port, () => {
//     console.log("Listing port ", port)
// })