const { handleUserLogInPage, handleUserLogIn, handleUserSignUpPage, handleUserSignUp } = require("../controllers/user_controller.js");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", handleUserSignUp);
userRouter.get("/signup", handleUserSignUpPage);
userRouter.post("/login", handleUserLogIn);
userRouter.get("/login", handleUserLogInPage);

module.exports = userRouter;