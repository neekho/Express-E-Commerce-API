const User = require('../models/User');

const bcrypt = require('bcrypt');

module.exports.registerUser = (req, res) => {


    let newUser = new User({
        
        firstName: req.body.firstName,

        lastName: req.body.lastName,

        email: req.body.email,

        mobileNumber: req.body.mobileNumber,

        age: req.body.age,

        userName: req.body.userName,

        password: req.body.password,

        address: req.body.address,

        isAdmin: req.body.isAdmin,

        createdDate: req.body.createdDate,

        orders: req.body.orders
    });

    console.log(newUser);

    newUser.save()
    .then(result => {res.send(result)})
    .catch(err => {res.send(err)})

};


module.exports.getProfile = (req, res) => {

    const username = req.body.userName;

    const pass = req.body.password;


        User.find({userName: username, password: pass})
        .then(result => res.send(result))
        .catch(error => res.send(error))



};



