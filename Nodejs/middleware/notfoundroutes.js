/* import packages */
const { Errorresponse } = require("../utils/response")


exports.Notfoundroutes = async (req, res) => {
    const response = await Errorresponse(404, "fail", "not found")
    res.status(404).send(response)
}