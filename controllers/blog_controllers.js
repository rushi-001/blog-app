const multer = require("multer");
const path = require("path");

const handleCreateBlog = (req, res) => {
    return res.render("create_blog", {
        user: req.user,
    });
}

const upload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    }
});

const handleCreateBlogSubmition = (req, res) => {
    console.log(req.body);
    return res.redirect("/");
}

module.exports = {
    handleCreateBlog,
    handleCreateBlogSubmition,
}