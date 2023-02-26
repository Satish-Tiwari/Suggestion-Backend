const mongoose  = require("mongoose");

const slotschema = new mongoose.Schema({
    date : {
        type : String,
    },
    slot : {
        type : String,
    },
    booked: {Boolean,}
});

const dbModel = mongoose.model("suggestion",suggSchema);

module.exports = dbModel;