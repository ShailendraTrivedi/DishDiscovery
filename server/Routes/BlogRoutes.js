const {Router} =require('express')
const { AddBlog, getUserBlog } = require('../controller/BlogController')

const blogRouter=Router()

blogRouter.route("/add-blog").post(AddBlog)
blogRouter.route("/get-user-blogs/:id").get(getUserBlog)


module.exports=blogRouter;