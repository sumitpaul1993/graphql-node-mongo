export const Schema = `#graphql
    type User {
        _id: ID!
        name: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }

    type Product {
        _id: ID!
        name: String!
        description: String!
        createdAt: String!
        updatedAt: String!
        created_by: User
    }

    type Query {
        users: [User]
        products: [Product]
        product(id: ID!): Product
    }
`