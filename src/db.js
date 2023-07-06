import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bibliodocumentosinformatica:escuelainformatica123@bibliotecadocumentos.8n3c1fl.mongodb.net/?retryWrites=true&w=majority', 
            {useNewUrlParser: true, useUnifiedTopology: true}
        );
        console.log('Connect to DB');
    } catch (error) {
        console.log(error)
    }
};
