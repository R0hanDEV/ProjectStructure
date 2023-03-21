class Authentication {
    constructor() {
        this.auth = false
    }

    loginInstance(data, callback) {
        this.auth = true
        callback(data)
    }

    logoutInstance(callback) {
        this.auth = false
        callback()
    }


    isAuthenticated() {
        return this.auth
    }
}


export default new Authentication();