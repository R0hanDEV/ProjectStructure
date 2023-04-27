/* import modules  */
const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const cookiesParser = require("cookie-parser")


/* import security packages to avoid injection hit to your system */
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors")


/* load config file */
dotenv.config({ path: "./config" })


/* invoke express  */
const app = express()


/* invoke cors and securities to app */
app.use(cors())
app.use(mongoSanitize())


/* invoke middlewarees */
const { Notfoundroutes } = require("./middleware/notfoundroutes")

app.use(express.json());
app.use(cookiesParser());



/* import routes from routes folder */
const getRoutes = require("./routes/users")


/* invokes routes to app */
app.use("/api/v1/", getRoutes);

app.use("*", Notfoundroutes)


/* module export app */

module.exports = app    
