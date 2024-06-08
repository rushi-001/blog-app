const path = require("path")
const express = require("express");
const userRouter = require("./routes/user_routes.js")
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication.js");
require('dotenv').config();

const app = express();
const PORT = 8008;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("UserToken"));

app.get("/", (req, res) => {
    res.render("home", {
        user: req.user,
    });
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
mongoose.connect(process.env.mongoDb).then(e => console.log("MongoDB is connected"));