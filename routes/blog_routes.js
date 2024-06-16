const { Router } = require("express");
const { handleCreateBlog, upload, handleCreateBlogSubmition, handleOpenBlogById } = require("../controllers/blog_controllers");

const blogRouter = Router();


blogRouter.get("/create-blog", handleCreateBlog);
blogRouter.post("/create-blog", upload.single("coverImage"), handleCreateBlogSubmition);
blogRouter.get("/:id", handleOpenBlogById)

module.exports = blogRouter