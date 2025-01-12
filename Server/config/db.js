import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const con = await mongoose.connect(
            "mongodb+srv://vigneshwarant54:pFGcdlN8zOC8L1xj@cluster0.t6dge.mongodb.net/Products_DB?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log(`MongodB Connected: ${con.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}