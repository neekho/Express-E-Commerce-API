const userRoute = {
    'GET user profile {"userName": "username", "password": "pass"} JSON BODY': 'http://localhost:4000/user/profile',
    'PUT make user admin <BUSINESS LOGIC MISSING WILL UPDATE>': 'http://localhost:4000/user/makeAdmin/USER_ID',
    'POST user add to cart <BUSINESS LOGIC MISSING WILL UPDATE>': 'http://localhost:4000/user/cart/PRODUCT_ID',
    'POST add user <NOTE CHECK USER CONTROLLER.JS FOR JSON BODY EXAMPLE>': 'http://localhost:PORTNUM<DEFAULT:400>/user/registrer',


};


const productRoute = {
    'GET single product': 'http://localhost:4000/product/PRODUCT_ID',
    'GET active product': 'http://localhost:4000/product/active',
    'POST add product <SEE productController for request body example>': 'http://localhost:4000/product/create',
    'DEL delete product': 'http://localhost:4000/product/archive/PRODUCT_ID',

};


const orderRoutes = {
    'POST order checkout': 'http://localhost:4000/order/checkout',


};



module.exports.routes = (req, res) => {
    
  res.json(
    {'userController': userRoute ,
     'productController': productRoute,
     'orderController': orderRoutes
    

    });


};