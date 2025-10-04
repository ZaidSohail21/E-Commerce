import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoutes.js';
import productRoute from './routes/productRoutes.js';

//APP CONFIGURE
const app=express()
const port=process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middle wares
app.use(express.json())
app.use(cors())
app.use('/api/user',userRoutes)
app.use('/api/product',productRoute)

//api endpoint
app.get('/',(req,res)=>{
    res.send("api working fine");
})

app.listen(port,()=>{
    console.log(`Api is working on port :${port}` );
    
})