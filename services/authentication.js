require('dotenv').config();
const JWT = require("jsonwebtoken");

const secret = process.env.JWTkey;

const handleCreateTokenForUser = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

const handleTokenValidation = (token) => {
    const payload = JWT.verify(token, secret);

    return payload;
}

module.exports = {
    handleCreateTokenForUser,
    handleTokenValidation,
}