require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//this is an express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})


//route
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        //listen to a certain port number as request
    app.listen(process.env.PORT, ()=> {
    console.log('Listening on active port')
})
    })
    .catch((error)=>{
        console.log(error)
    })



process.env