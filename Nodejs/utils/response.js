exports.Errorresponse = async (code, status, errormessage,) => {
    return {
        code: code,
        status: status,
        data: {
            message: errormessage
        }
    }
}


exports.Successresponse = async (code, status, data) => {
    return {
        code: code,
        status: status,
        data: data
    }
}

