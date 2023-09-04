
const BlogSchema = require('./../modals/BlogSchema');

const AddBlog = async (req, res) => {
    try {

        const blog = req.body;
        const newBlog = new BlogSchema(blog);
        await newBlog.save();
        return res.status(200).json({ message: "Blog Added Successfully" });

    }
    catch (err) {
        return res.status(400).json({ message: "Something went wrong" });
    }
}

const getUserBlog = async (req, res) => {
    try {

        const username = req.params.id;
        const all_blogs = await BlogSchema.find({ username: username });
        if (all_blogs.length === 0) {
            return res.status(400).json({ message: "No Blog Found" });
        }
        else {
            return res.status(200).send(all_blogs);
        }

    }
    catch (err) {
        return res.status(400).json({ message: "Something went wrong" });
    }
}

module.exports = {
    AddBlog,
    getUserBlog
}