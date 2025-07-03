// const express = require('express');
// const app = express();
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { Schema } = require('./graphql/schema/schema.js');
const { connectDB } = require('./database/database.js');
const { getAllUsers, getUsersDetails } = require('./service/userService.js');
const { getAllProducts, getProductsDetails } = require('./service/productService.js');
require('dotenv').config()


connectDB(process.env.MONGODB_URI)


const server = new ApolloServer({
    typeDefs: Schema,
    resolvers: {
        Query: {
            users: getAllUsers,
            products: getAllProducts,
            product: getProductsDetails
        },
        Product: {
            created_by: async (parent) => {
                return await getUsersDetails(parent.created_by)
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