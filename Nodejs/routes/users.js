/* import packages */
const express = require("express")


/* allow express to merge routers */
const routers = express.Router({ mergeParams: true })


/* invoke middlewares to route if you want */


/* invoke controllers to route */
const {
    getUser
} = require("../controllers/user.js")


/* declare routers */
routers.get('/user', getUser)



/* export routers */
module.exports = routers