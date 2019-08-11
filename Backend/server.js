const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const logger=require('morgan')

const app=express();
const port=process.env.PORT||5000;

//IMPORTING ROUTES
const productRoute=require('./routes/products')

//MIDDLEWARE
app.use(cors());
app.use(express.json())
app.use(logger('dev'))

//ROUTES MIDDLEWARE
app.use('/api',productRoute);

//CONFIG THE ENVIRMENT VARIABLE
dotenv.config()

//DB CONNECT
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true})

const connection = mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB db connection established successfully")
})

//CREATING SERVER
app.listen(port,()=>console.log("listning in port: "+port))