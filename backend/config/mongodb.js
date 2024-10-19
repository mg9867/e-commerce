import mongoose from "mongoose";

const connectDB=async()=>{
// connect mongoose from mongodb server
mongoose.connection.on('connected',()=>{
console.log('db connected');
});
await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
}
export default connectDB;