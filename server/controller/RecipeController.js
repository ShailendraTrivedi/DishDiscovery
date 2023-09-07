const RecipeRouter = require("../Routes/RecipeRoutes");
const RecipeModel = require("../modals/RecipeSchema");

/** GET: http://localhost:5000/foodieblog/add-blog */
const AddRecipe = async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new RecipeModel(blog);
    await newBlog.save();
    return res.status(200).json({ message: "Blog Added Successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

/** GET: http://localhost:5000/foodieblog/get-user-blogs/:id */
const getUserRecipe = async (req, res) => {
  try {
    const username = req.params.id;
    const all_blogs = await RecipeModel.find({ username: username });
    if (all_blogs.length === 0) {
      return res.status(400).json({ message: "No Blog Found" });
    } else {
      return res.status(200).send(all_blogs);
    }
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

/** GET: http://localhost:5000/foodieblog/get-all-recipe */
const getAllRecipe = async (req, res) => {
  try {
    const allRecipe = await RecipeModel.find();
    if (!allRecipe) {
      return res.status(404).send({ error: "No Reipe Found !" });
    }
    return res.send(allRecipe);
  } catch (error) {
    return res.status(500).send("error: Somthing went Wrong !");
  }
};

/** GET: http://localhost:5000/foodieblog/get-all-recipe-by-category/:category */
const getAllRecipeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const allRecipeCategory = await RecipeModel.find({ category });
    return res.status(200).send(allRecipeCategory);
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong!" });
  }
};



module.exports = {
  AddRecipe,
  getUserRecipe,
  getAllRecipe,
  getAllRecipeByCategory
};
