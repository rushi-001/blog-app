const userModel = require("../models/user_model")

const handleUserLogInPage = (req, res) => {
    return res.render("login");
}

const handleUserSignUpPage = (req, res) => {
    return res.render("signup");
}

const handleUserLogIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.matchPassword(email, password);
    console.log(user);
    res.redirect("/");
}

const handleUserSignUp = async (req, res) => {
    const { fullName, email, password } = req.body;

    await userModel.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/user/login");
}

module.exports = {
    handleUserLogInPage,
    handleUserSignUpPage,
    handleUserSignUp,
    handleUserLogIn,
}