const { _ } = require("lodash")
const { Errorresponse } = require("../utils/response")


exports.EmptyRequestvalidation = async (req) => {
   
    if (_.isEmpty(req.body)) {
        const response = await Errorresponse(400, "fail", "empty request body" )
        return response
    }
    return true
}






