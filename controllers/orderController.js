const Order = require('../models/Order');

const User = require('../models/User');

const Product = require('../models/Product')


module.exports.createOrder = (req, res) => {

    const username = req.body.userName;

    const pass = req.body.passWord;

    const uid = req.body.uid;

    const address = req.body.addressID;

    User.find({userName: username, password: pass})
    .then(user => {

        if (!user[0].isAdmin)
            
            user[0].cart.find(x => {
                if (x.cartID === uid && x.address.addressID === address ) { // quantity and isActive
                    

                    let newOrder = new Order({
                        owner: user[0].firstName + " " +  user[0].lastName,
                        product: x.product_id,
                        quantity: x.quantity,
                        price: x.price,
                        total: x.quantity * x.price,
                        address: address
                    });
                
                    console.log(newOrder);
                
                    newOrder.save()
                    .then(result => {res.send(result)})
                    .catch(err => {res.send(err)})

                    
                    Product.find({_id: x.product_id})
                    .then(item => {

                        const currentQuantity = item[0].quantity;

                        const boughtQuantity = x.quantity;

                        const deductQuantity = currentQuantity - boughtQuantity;

                        let update = {quantity: deductQuantity};

                        Product.findByIdAndUpdate(x.product_id, update, {new: true})
                        .then(result => console.log(result))
                        .catch(err => console.log(err))

                        console.log("inventory updated");

                    }).catch(err => console.log(err))

                }
                
                else{
                    console.log("cart not found");

                }
            });




        else if (user[0].isAdmin)
            res.send('cannot checkout for  admin accounts');

        // else if(user.countDocument() === 0)
        // res.send('check username and password');

    }).catch(err => res.send(err))
    

};




 