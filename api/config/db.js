import mongoose from "mongoose";


// conect with mongodb server
const mongoDBConnection = () => {

    try {

        const connection = mongoose.connect(process.env.MONGO_STRING);
        console.log('MongoDB Server in Connected'.bgGreen.black)

    } catch (error) {
        console.log(error);
    }

}

export default mongoDBConnection;