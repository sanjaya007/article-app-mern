const { verifyToken } = require("../utils");

module.exports = {
    authenticateToken: function(req, res, next) {
        try {
            const token = req.body.token || req.query.token || req.headers["x-authorization"];
            if(!token) {
                return res.send("Access denied!")
            }

            const tokenInfo = verifyToken(token)
            console.log(tokenInfo)

            next()

        } catch (error) {
            console.log(error.message)
        }
    }
}