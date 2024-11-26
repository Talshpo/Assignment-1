const GetAllPost = (req,res)=>{
    console.log("posts get all service" );
    res.send("post get all service");
};

const CreatePost = (req,res)=>{
    console.log("posts create service" );
    res.send("post create service");
};

module.exports = {GetAllPost, CreatePost};