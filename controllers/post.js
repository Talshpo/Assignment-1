const GetAllPost = (req,res)=>{
    res.send("get all posts");
};

const getPostById = (req,res)=>{
    res.send("get a post by id");
};

const CreatePost = (req,res)=>{
    res.send("create a post");
};

const deletePost = (req,res)=>{
    res.send("delete a post");
};

module.exports = {
    GetAllPost,
    CreatePost,
    deletePost,
    getPostById, 

};