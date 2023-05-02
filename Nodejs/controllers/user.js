/* import packages */
const { Successresponse, Errorresponse } = require("../utils/response")
const { _ } = require("lodash")
const { EmptyRequestvalidation } = require("../utils/validation")
const Users = require("../models/user")
const db = require("../models");

/**
 * 
 * @desc get all user using this endpoint 
 * @route /api/v1/users
 * @access * 
 */
exports.getUser = async (req, res, next) => {
    try {
        // const getUser =
        const response = await Successresponse(200, "success", { "message": "getdata" })
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @description {*} req 
 * @route  /api/v1/user 
 * @method  post 
 */
exports.addUser = async (req, res, next) => {
    try {
        const isEmptyReqbody = await EmptyRequestvalidation(req)
        if (isEmptyReqbody != true) {
            res.status(400).send(isEmptyReqbody)
        }

        const userObject = new Users(req.body)
        const error = userObject.validateSync();

        if (error) {
            const errorRes = await Errorresponse(500, "fail", error.message)
            res.status(400).send(errorRes)
        }

        const createUser = await db.Users.create(req.body)

        const success = await Successresponse(200, "success", "user create successfully")
        res.status(200).send(success)
    } catch (error) {
        console.log(error.message)
        const errorRes = await Errorresponse(500, "fail", error.message)
        res.status(500).send(errorRes)
    }
}