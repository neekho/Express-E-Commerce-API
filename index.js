const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT_NUMBER = 4000;


mongoose.connect("mongodb+srv://dbUser:newPassword@cluster0.lc01svp.mongodb.net/e_commerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



let db = mongoose.connection;


db.on("error", console.error.bind(console, 'MongoDB error connection'));

db.once("open", () => console.log("Connected to MongoDB"));


app.use(express.json());

const userRoute = require('./routers/userRoute');
app.use('/user', userRoute);




const productRoute = require('./routers/productRoute');
app.use('/product', productRoute);



const orderRoute = require('./routers/orderRoute');
app.use('/order', orderRoute);


const utilitiesRoute = require('./routers/utilitiesRoute');
app.use('/utils', utilitiesRoute);



console.log(mongoose.Types.ObjectId.isValid("53cb6b9b4f4ddef1ad47f943"));
console.log(mongoose.Types.ObjectId.isValid("6357e452eee9a5ca168e1d61"));


app.listen(PORT_NUMBER, () => console.log(`running at ${PORT_NUMBER}`))