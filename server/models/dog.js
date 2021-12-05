const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name:{
        type: String
    },
    breed: {
        type: String,
        required: true
    },
    imageURL: {
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
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog