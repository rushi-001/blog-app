const { handleTokenValidation } = require("../services/authentication");

const checkForAuthenticationCookie = (cookieName) => {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next();
        }

        try {
            const userPayload = handleTokenValidation(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            console.error("Token validation error:", error);
        }

        return next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}