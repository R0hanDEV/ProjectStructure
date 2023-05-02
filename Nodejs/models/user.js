const { uniqueId } = require("lodash");
const mongoose = require("mongoose")
const schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mobile_no: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true,
})

const Users = mongoose.model("Users", userSchema, "users")

module.exports = Users