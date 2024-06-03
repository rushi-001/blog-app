const userModel = require("../models/user_model")

const handleUserLogInPage = (req, res) => {
    return res.render("login");
}

const handleUserSignUpPage = (req, res) => {
    return res.render("signup");
}

const handleUserSignUp = async (req, res) => {
    const { fullName, email, password } = req.body;

    await userModel.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/login");
}

module.exports = {
    handleUserLogInPage,
    handleUserSignUpPage,
    handleUserSignUp,
}