const express = require('express')
const mongoose = require('mongoose')

//Loading Environment Variables
require('dotenv').config()


// Instantiate server
const app = express()

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => console.log('MongoDB connected'),
        (reason) => console.log(reason)
    )

// Middleware
app.use(express.urlencoded({ extended: false }))

app.post('/recieveData', (req, res) => {
    var name = req.body.name
    var yearOfBirth = req.body.yearOfBirth
    var currYear = 2020;
    var age = currYear - yearOfBirth

    res.send({ userName: name, Age: age })
})

// API -> Application Programming Interface

// restAPI -> 6 Features -> 

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is Bhaukal at Port ' + process.env.PORT);
})