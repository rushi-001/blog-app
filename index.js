const path = require("path")
const express = require("express");
const userRouter = require("./routes/user_routes.js")
const mongoose = require("mongoose")
require('dotenv').config();

const app = express();
const PORT = 8008;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home")
})
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
mongoose.connect(process.env.mongoDb).then(e => console.log("MongoDB is connected"));