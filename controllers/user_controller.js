const userModel = require("../models/user_model")

const handleUserLogInPage = (req, res) => {
    return res.render("login");
}

const handleUserSignUpPage = (req, res) => {
    return res.render("signup");
}

const handleUserLogIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userModel.matchPasswordCreateToken(email, password);
        return res.cookie("UserToken", token).redirect("/");
    } catch (error) {
        return res.render("login", {
            error: "Incorrect Email or Password"
        })
    }
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

const handleUserLogOut = (req, res) => {
    res.clearCookie("UserToken").redirect("/");
}

module.exports = {
    handleUserLogInPage,
    handleUserSignUpPage,
    handleUserSignUp,
    handleUserLogIn,
    handleUserLogOut,
}