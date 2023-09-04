const mongoose=require('mongoose');

const commentSchema = new mongoose.Schema({
    comment_author: String,
    comment_date: String,
    comment_content: String,
});

const blogSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    publish_date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    introduction:{
        type:String,
        required:true
    },
    ingredients:{
        type:[String],
        required:true
    },
    instructions:{
        type:[String],
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    cooking_time:{
        type:String,
        required:true
    },
    comments:{
        type:[commentSchema],
        required:true
    },
    likes:{
        type:String,
        required:true
    }

})


const BlogSchema=mongoose.model('Blog',blogSchema);
module.exports=BlogSchema;