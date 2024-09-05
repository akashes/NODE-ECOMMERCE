const mongoose = require('mongoose');

exports.connectDB = ()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log('mongodb connection successfull')
    }).catch((err)=>{
        console.log('mongodb connection error')
        console.log(err)
    })}

