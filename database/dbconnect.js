const mongoose = require("mongoose");
const dbconnect = ()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(`${process.env.DB_URL}`,{dbName:"raykiray"}).then(()=>{
        console.log("Database connected...");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = dbconnect;