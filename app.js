require("dotenv").config()
const cors = require("cors");
const express = require("express");
const app = express();

// nodemailer for sending mail messages to both client and admin
const sendMail = require("./utils/sendMail");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import suggestion model ...
const SuggModel = require("./model/suggschema");

const dbconnect = require("./database/dbconnect");
dbconnect();

app.get("/", async (req,res)=>{
    return res.json({message:"running"});
});

// create new user in DB and post method
app.post("/", async (req, res,next) => {
    const { name, email, phone, state, city, date, slot } = req.body;
    console.log(req.body);
    if(String(name).length<5){
        return res.status(200).json({ success: false, msg:"name must be greater than 5 digits" });
    }
    // save the user in Database........
    const data = await SuggModel.create({
        name: name,
        email: email,
        mobile: phone,
        state: state,
        city: city,
        date : date,
        slot: slot
    });
    // send the email to the user and admin
    sendMail(email,name,date,slot);
    // post the data in db
    return res.status(200).json({ success: true, data:data });
});

app.listen(process.env.PORT, () => {
    console.log(`server run at http://localhost:${process.env.PORT}`)
});