const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try{
    const conn=await mongoose.connect(`mongodb+srv://Jugalcody:Lucifer2002@cluster0.x9qkwww.mongodb.net/?retryWrites=true&w=majority`);
    console.log(`MongoDB Connected:${mongoose.connection.host}`.cyan.bold);
    }
    catch(err){
    }

}

module.exports=connectDB;
