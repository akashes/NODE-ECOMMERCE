const env = require('dotenv').config()
const {connectDB}=require('./Config/db') 
connectDB()
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT
 console.log(process.env.NODE_ENV)
app.use(express.static(path.join(__dirname,'public')))
// app.get('/',(req,res)=>{
//     res.json('started')

// })
app.listen(PORT, () => {
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(`server running in port `+PORT);
});