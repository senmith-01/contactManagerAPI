const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name value"]
    },
    email:{
        type:String,
        required:[true,"Please add an email value"]
    },
    phone:{
        type:String,
        required:[true,"Please add a phone value"]
    }
},{timestamps : true}); 

module.exports = mongoose.model("Contact",contactSchema);