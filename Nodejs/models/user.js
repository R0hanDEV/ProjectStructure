const mongoose = require("mongoose")
const schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    mobile_n0:{
        type:Number,
        max:10
    },
    email:{
        type:String,
        required: true
    }
}, {
    timestamps: true,
})