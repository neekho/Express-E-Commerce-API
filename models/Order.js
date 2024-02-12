const mongoose = require('mongoose');




const orderSchema = new mongoose.Schema({

    owner: {
        type: Object,
        require: [true, 'owner is required']
    },


    product: {
        type: Object,
        require: [true, 'product is required']
    },

    quantity: {
        type: Number,
        require: [true, 'qty is required']
    },


    price: {
        type: Number,
        require: [true, 'price is required']
    },


    total: {
        type: Number,
        require: [true, 'total is required']
    },


    address: {
        type: Object,
        require: [true, 'address is required']
    },

    orderStatus: {
        type: String,
        default: "Active"
    },

    orderDate: {
        type: Date,
        default: new Date()
    }



});



module.exports = mongoose.model("Order", orderSchema);
