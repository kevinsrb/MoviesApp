import mongoose from "mongoose";

//Conexión a la base de datos MongoDB
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));

