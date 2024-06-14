const { Router } = require("express");
const { handleCreateBlog, upload, handleCreateBlogSubmition } = require("../controllers/blog_controllers");

const blogRouter = Router();


blogRouter.get("/create-blog", handleCreateBlog);
blogRouter.post("/create-blog", upload.single("coverImage"), handleCreateBlogSubmition);

module.exports = blogRouter