const express = require("express");
const router = express.Router();
const Post=require("../controllers/post");

router.get("/",Post.GetAllPost);

router.post("/",Post.CreatePost);


module.exports = router;