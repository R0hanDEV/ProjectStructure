/* import modules  */
const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const cookiesParser = require("cookie-parser")
const bodyParser = require('body-parser')


/* import security packages to avoid injection hit to your system */
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors")


/* load config file */
dotenv.config({ path: "./config" })


/* invoke express  */
const app = express()


/* invoke cors and securities to app */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(mongoSanitize())

/* cors setting */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'POST, GET, PATCH, DELETE, OPTIONS'
    );
    next();
})

/* invoke middlewarees */
app.use(express.json());
app.use(cookiesParser());



/* import routes from routes folder */
const getRoutes = require("./routes/users")


/* invokes routes to app */
app.use("/api/v1/", getRoutes);


// not found
app.use((req, res) => {
    res.status(404).send({ code: 404, status: "fail", data: { error: `${req.originalUrl} not found` } });
});


/* module export app */

module.exports = app    
