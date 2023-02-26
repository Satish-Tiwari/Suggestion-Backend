const mongoose  = require("mongoose");

const suggSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true,"name is requirred"]
    },
    email : {
        type : String,
        require : [true,"email is requirred"]
    },
    mobile : {
        type : String,
        require : [true, "mobile is requirred"]
    },
    state : {
        type : String,
        require : [true, "state is requirred"]
    },
    city : {
        type : String,
        require : [true, "city is requirred"]
    },
    date : {
        type : String,
        require : [true, "Date is requirred"]
    },
    slot : {
        type : String,
        require : [true, "selectslot is requirred"]
    }
});

const dbModel = mongoose.model("suggestion",suggSchema);

module.exports = dbModel;