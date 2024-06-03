const { handleUserLogInPage, handleUserSignUpPage, handleUserSignUp } = require("../controllers/user_controller.js");
const { Router } = require("express");

const userRouter = Router();

userRouter.get("/login", handleUserLogInPage);
userRouter.post("/signun", handleUserSignUp);
userRouter.get("/signup", handleUserSignUpPage);

module.exports = userRouter;