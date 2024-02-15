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



module.exports.makeAdmin = (req, res) => {

    const adminUsername = req.body.adminUserName;

    const adminPassword = req.body.adminPassword;

    const targetUserId = req.params.USER_ID; // Assuming USER_ID is part of the URL parameters


    // Find the admin user based on provided admin credentials
    User.findOne({ userName: adminUsername, password: adminPassword, isAdmin: true })
    .then(adminUser => {
        if (!adminUser.isAdmin) {
            return res.status(401).json({ error: 'Unauthorized. Admin credentials incorrect or user is not an admin.' });
        }

        // Find the target user by USER_ID
        User.findById(targetUserId)
            .then(targetUser => {
                if (!targetUser) {
                    return res.status(404).json({ error: 'Target user not found' });
                }

                // Update the target user's isAdmin attribute to true
                targetUser.isAdmin = true;

                // Save the updated target user object
                targetUser.save()
                    .then(updatedUser => res.json(updatedUser))
                    .catch(error => res.status(500).json({ error: 'Error updating target user', details: error }));
            })
            .catch(error => res.status(500).json({ error: 'Error finding target user', details: error }));
    })
    .catch(error => res.status(500).json({ error: 'Error finding admin user', details: error }));


};

