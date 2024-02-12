const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "first name is required"]
    },

    lastName: {
        type: String,
        required: [true, "last name is required"]
    },

    email: {
        type: String,
        required: [true, "email is required"]
    },

    mobileNumber: {
        type: String,
        required: [true, "mobile number is required"]
    },

    age: {
        type: Number,
        required: [true, "age is required"]

    },

    userName: {

        type: String,
        required: [true, "user name is required"]
    },

    password: {
        type: String,
        required: [true, "password is required"]

    },

    address: [
        
        {
            houseNumber: {
                type: String, 
                required: [true, "house number is required"]
            },

            streetName: {
                type: String, 
                required: [true, "street name is required"]
            },

            zip: {
                type: String, 
                required: [true, "zip is required"]
            },

            cityName: {
                type: String, 
                required: [true, "city name is required"]
            }
        }


    ],

    isAdmin: {
        type: Boolean,
        default: false
    },

    createdDate: {
        type: Date,
        default: new Date()

    },

    orders: [
        {
            product_id: {
                type: String,
                required: [true, "product id is required"]
            },

            transanction_date: {
                type: Date,
                default: new Date()
            },

            status: {
                type: String,
                default: "Active",


            }
        }
    ]

});

module.exports = mongoose.model("User", userSchema);



