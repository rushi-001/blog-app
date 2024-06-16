const multer = require("multer");
const path = require("path");
const fs = require('fs');
const blogModel = require("../models/blog_model");

const handleCreateBlog = (req, res) => {
    return res.render("create_blog", {
        user: req.user,
    });
}

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const dir = await path.resolve(`./public/uploads/${req.user._id}`); // Correct path handling
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage })

const handleCreateBlogSubmition = async (req, res) => {
    const { title, body } = req.body;
    const blog = await blogModel.create({
        title: title,
        body: body,
        author: req.user._id, // user._id is comming from req.user 
        coverImage: `/uploads/${req.user._id}/${req.file.filename}` // file.filename is comming from req.file
    })
    return res.redirect(`/blog/${blog._id}`); // blog._id is comming from blog ( the _id will generate automatically by mongoDB ) 
}

const handleOpenBlogById = async (req, res) => {
    const blog = await blogModel.findById(req.params.id);
    return res.render("blog_user", {
        user: req.user,
        blog: blog
    });
}

module.exports = {
    handleCreateBlog,
    handleCreateBlogSubmition,
    upload,
    handleOpenBlogById,
}