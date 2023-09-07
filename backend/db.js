const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:admin@cluster0.ddt3a2g.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = async() =>{
    await mongoose.connect(mongoURI, { useNewUrlParser : true})
    .then(()=>{
        console.log("connected");
    })
    .catch((err) =>{
        console.log(err);
    });
}

module.exports = mongoDB;