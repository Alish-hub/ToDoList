import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connect = ()=>{
    const MongoDB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.6k5mmul.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MongoDB_URL, {UseNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log("Database connected successfully")
    })
    mongoose.connection.on('disconnecetd',()=>{
       console.log('Database disconnected') ;
    })
    mongoose.connection.on('error',(error)=>{
        console.log('Error connecting to database', error.message)
    })

}
export default Connect;