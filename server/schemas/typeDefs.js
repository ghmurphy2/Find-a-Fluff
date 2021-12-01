const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        // saved images??
    }

    // type Images??

    type Auth {
        token: ID
        user: User
    }

    input imageInput{
        imageId: String
        imageUrl: String!
    }

    input imageCompare{
        // image1/2id??
        imageUrl: String!
        image2Url: String!

    }

    type Query {
        user: User
        // imgaes: [Images]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String! ): Auth
    }

`;

module.exports = typeDefs;