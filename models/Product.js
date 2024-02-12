const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: [true, "product name is required"]
    },

    description: {
        type: String,
        required: [true, "description name is required"]
    },

    quantity: {
        type: Number,
        required: [true, "quantity is required"]
    },

    price: {
        type: Number,
        required: [true, "price is required"]
    },

    brand: {
        type: String,
        required: [true, "brand name is required"]

    },

    isActive: {
        type: Boolean,
        default: true
    },

    onSale: {
        type: Boolean,
        default: false
    },

    createdDate: {
        type: Date,
        default: new Date()

    },

    ordered_by: [
        {
            userID: {
                type: String,
                required: [true, "USER id is required"]
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

module.exports = mongoose.model("Product", productSchema);



