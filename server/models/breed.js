const { Schema } = require('mongoose');

const breedSchema = new Schema({
    name:{
        type: String
    },
    breed: {
        type: String,
        // required: true
    },
    breedId: {
        type: String,
        required: true
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    contact: {
        email:{
            type: String
        },
        address:{
            address1: {
                type: String
            },
            address2: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            postcode: {
                type: String
            },
            country: {
                type: String
            }
        }
    },
    environment: {
        children_friendly: {
            type: Boolean
        },
        dogs_friendly:{
            type: Boolean
        },
        cats_friendly: {
            type: Boolean
        }
    }
});



module.exports = breedSchema;