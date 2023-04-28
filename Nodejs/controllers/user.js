/* import packages */
const { Successresponse } = require("../utils/response")


/**
 * 
 * @desc get all user using this endpoint 
 * @route /api/v1/users
 * @access * 
 */
exports.getUser = async (req, res, next) => {
    try {
        const response = await Successresponse(200, "success", { "message": "getdata" })
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
    }
}