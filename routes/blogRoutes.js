const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

//get all blogs
router.get("/", blogController.blog_index);

//create a new blog
router.post("/", blogController.blog_create_post);

//Returns the create page
router.get("/create", blogController.blog_create_get);

//get a specific blog
router.get("/:id", blogController.blog_details);

//delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
