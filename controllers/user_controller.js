const userModel = require("../models/user_model")

const handleUserLogInPage = (req, res) => {
    return res.render("login");
}

const handleUserSignUpPage = (req, res) => {
    return res.render("signup");
}

const handleUserLogIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userModel.matchPasswordCreateToken(email, password);
        return res.cookie("User Token", token).redirect("/");
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

module.exports = {
    handleUserLogInPage,
    handleUserSignUpPage,
    handleUserSignUp,
    handleUserLogIn,
}