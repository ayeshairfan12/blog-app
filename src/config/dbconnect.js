import mongoose from "mongoose"

async function dbconnect (req,res){
    try {
        if(mongoose.connection.readyState>=1){
            return
        }mongoose.connect(process.env.DB_URI)
    } catch (error) {
        console.log(error)
    }
}