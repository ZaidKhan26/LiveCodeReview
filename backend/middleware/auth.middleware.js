const { verifyToken } = require("../utils/token.utils");
const ApiError = require("../utils/ApiError");

const protect = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            throw new ApiError(401, "Not Authorized");
        }

        const decoded = verifyToken(token)

        if (!decoded) {
            throw new ApiError(401, "Invalid or Expired Token");
        }

        req.user = decoded
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = protect
