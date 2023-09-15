const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:admin@cluster0.ddt3a2g.mongodb.net/food-delivery-mern?retryWrites=true&w=majority"
const mongoDB = async() =>{
    await mongoose.connect(mongoURI, { useNewUrlParser : true})
    .then(async()=>{
        console.log("MongoDB connected successfully");
        const fetched_data = await mongoose.connection.db.collection("users");
        fetched_data.find({}).toArray()
        .then((data) =>{
            console.log("Data recieved");
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    })
    .catch((err) =>{
        console.log(err);
    });
}

module.exports = mongoDB;