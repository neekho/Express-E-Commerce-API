const Product = require('../models/Product');

module.exports.createProduct = (req, res) => {

    let newProduct = new Product({

        productName: req.body.productName,

        description: req.body.description,

        quantity: req.body.quantity,

        price: req.body.price,

        brand: req.body.brand,

        isActive: req.body.isActive,

        onSale: req.body.onSale,

        ordered_by: req.body.ordered_by

    });

    console.log(newProduct);

    newProduct.save()
    .then(result => {res.send(result)})
    .catch(err => {res.send(err)})

};


module.exports.getProduct = (req, res) => {
    
    Product.findById(req.params.product_id)
    .then(result => res.send(result))
    .catch(error => res.send(error))


};


module.exports.archiveProduct = (req , res) => {

    console.log(req.params.product_id);

    let update = {isActive: false};

    Product.findByIdAndUpdate(req.params.product_id, update, {new: true})
    .then(result => res.send(result))
    .catch(error => res.send(error))

    console.log('product deleted');

};


module.exports.activeProducts = (req, res) => {

    Product.find({isActive: true})
    .then(result => res.send(result))
    .catch(error => res.send(error))

};



