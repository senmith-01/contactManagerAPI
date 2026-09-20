const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a username value"]
    },
    email: {
        type: String,
        required: [true, "Please add an email value"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please add a password value"]
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);
