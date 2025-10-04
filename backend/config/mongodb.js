import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log('DB connected');
            
        })
        await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce-project`);
    } catch (error) {
        console.log(error.message)
    }

}
export default connectDB;