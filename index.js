const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user_routes.js")
const blogRouter = require("./routes/blog_routes.js");
const path = require("path")
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication.js");
const Blogs = require("./models/blog_model");
require('dotenv').config();

const app = express();
const PORT = 8008;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("UserToken"));
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.get("/", async (req, res) => {
    const allBlogs = await Blogs.find({}).sort({ createdAt: -1 });
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
mongoose.connect(process.env.mongoDb).then(e => console.log("MongoDB is connected"));

// exam