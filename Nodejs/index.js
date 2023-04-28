
/* import package */
const app = require("./app")
const db = require("./models/index")


const PORT = process.env.PORT || 8000;


db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`MongoDB Connected:`)
    app.listen(
        PORT,
        console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
});    
