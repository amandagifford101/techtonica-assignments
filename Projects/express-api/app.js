const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//Lost at POST request on Postman

app.use(bodyParser.json());
// app.use('/posts', postsRoute);
// app.use('/user', userRoute);

// //Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// })

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
})



app.get('/posts', (req,res) => {
    res.send('We are on posts');
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
    console.log('connected to DB!');
})
//How do we start listending to the server
app.listen(3000);
