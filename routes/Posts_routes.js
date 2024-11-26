const express = require("express");
const router = express.Router();
const Post=require("../controllers/post");

router.get("/",Post.GetAllPost);

router.get("/:id",Post.GetPostById);

router.post("/",Post.CreatePost);

router.delete("/",Post.deletePost);

module.exports = router;