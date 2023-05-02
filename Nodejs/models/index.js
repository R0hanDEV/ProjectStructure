/* package importer */

const mongoose = require("mongoose")

// set debug to true to display db responses
if (process.env.NODE_ENV === "development") {
    mongoose.set("debug", true);
} else {
    mongoose.set("debug", false);
}

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // keepAlive: true
    })
    .then((conn) => {
        console.log(`mongoose connected `)
    })
    .catch((err) => {
        console.log(err)
    })

    
module.exports.Users = require("./user")
