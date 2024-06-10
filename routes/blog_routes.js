const { Router } = require("express");
const { handleCreateBlog, handleCreateBlogSubmition } = require("../controllers/blog_controllers");

const blogRouter = Router();

blogRouter.get("/create-blog", handleCreateBlog);
blogRouter.post("/create-blog", handleCreateBlogSubmition);

module.exports = blogRouter