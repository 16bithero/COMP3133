const mongoose = require('mongoose');

const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const validCity = /^[a-zA-Z\s]+$/;
const validURL = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
//RegEx validates if it starts with http or https, then if it is followed by alphanumeric characters or symbol


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: validEmail
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            match: validCity
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function(value) {
                  return /^\d{5}-\d{4}$/.test(value);
                },
                message: "Invalid zip code. Please follow this format DDDDD-DDDD (D = digit)"
              }
        },
        geo: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
              return /^\d{1}-\d{3}-\d{3}-\d{4}$/.test(value);
            },
            message: "Invalid phone number. Please follow this format D-DDD-DDD-DDD(D = digit)"
          }
    },
    website:{
        type: String,
        required: true,
        match: validURL
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        },
    },
})

const UserList = mongoose.model('Users', UserSchema)
module.exports = UserList