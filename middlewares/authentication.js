const { handleTokenValidation } = require("../services/authentication");

const checkForAuthenticationCookie = (cookieName) => {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];

        if (!tokenCookieValue) {
            next();
        }

        try {
            const userPayload = handleTokenValidation(tokenCookieValue);
            req.uesr = userPayload;
        } catch (error) {
        }

        next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}