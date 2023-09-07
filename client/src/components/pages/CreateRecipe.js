import React from "react";
import { useFormik } from "formik";
import Button from "../../helpers/Button";
import Input from "../../helpers/Input";
import { PenSquare, Plus, Trash2 } from "lucide-react";

const CreateRecipe = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      title: "",
      publish_date: "",
      category: "",
      introduction: "",
      ingredients: [""],
      instructions: [""],
      images: "",
      cooking_time: "",
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form values:", values);
    },
  });

  const handleDeleteIngredient = (index) => {
    if(formik.values.ingredients.length>1){
      const newIngredients = [...formik.values.ingredients];
      newIngredients.splice(index, 1);
      formik.setFieldValue("ingredients", newIngredients);
    }

  };

  const handleDeleteInstruction = (index) => {
    if(formik.values.instructions.length>1){
      const newInstructions = [...formik.values.instructions];
      newInstructions.splice(index, 1);
      formik.setFieldValue("instructions", newInstructions);
    }
  };

  return (
    <div className="text-lg flex flex-col gap-2 p-5">
      <h1 className="text-5xl text-orange-500 font-bold text-center">
        Welcome to the recipe creation page!
      </h1>
      <p className="text-center">
        Share your culinary masterpiece with the DishDiscovery community by
        filling out the following details for your new recipe.
      </p>

      <form
        className="grid grid-cols-2 gap-5 p-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <Input
            id="username"
            type="text"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.username}
            touched={formik.touched.username}
          />
          <Input
            id="title"
            type="text"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.title}
            touched={formik.touched.title}
          />
          <Input
            id="publish_date"
            type="text"
            label="Publish Date"

            value={formik.values.publish_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.publish_date}
            touched={formik.touched.publish_date}
          />
          <Input
            id="category"
            type="text" 
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.category}
            touched={formik.touched.category}
          />
          <Input
            id="introduction"
            type="text"
            label="Introduction"
            value={formik.values.introduction}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.introduction}
            touched={formik.touched.introduction}
          />
          <Input
            id="cooking_time"
            type="text"
            label="Cooking Time"
            value={formik.values.cooking_time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.cooking_time}
            touched={formik.touched.cooking_time}
          />
        </div>
        <div className="flex flex-col gap-10">
          {/* Ingredient */}
          <div className="flex flex-col gap-5 items-center w-full">
            {formik.values.ingredients.map((ingredient, index) => (
              <div key={index} className="relative flex w-full">
                <div className="relative w-full">
                  <input
                    id={`ingredient-${index}`}
                    type="text"
                    className="inputfield_css peer"
                    required
                    autoComplete="off"
                    value={ingredient}
                    onChange={(e) => {
                      const newIngredients = [...formik.values.ingredients];
                      newIngredients[index] = e.target.value;
                      formik.setFieldValue("ingredients", newIngredients);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor={`ingredient-${index}`}
                    className="labelfeild_css"
                  >
                    Ingredient {index + 1}
                  </label>
                </div>
                <Trash2
                  className="border-2 w-[3rem] bg-orange-500 text-white h-[3rem] p-2 cursor-pointer"
                  onClick={() => handleDeleteIngredient(index)}
                />
              </div>
            ))}
            <div className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2">
              <Plus />
              <button
                type="button"
                onClick={() =>
                  formik.setFieldValue("ingredients", [
                    ...formik.values.ingredients,
                    "",
                  ])
                }
              >
                Add Ingredient
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-5 items-center">
            {formik.values.instructions.map((instruction, index) => (
              <div key={index} className="relative flex w-full">
                <div className="w-full">
                  <input
                    id={`instruction-${index}`}
                    type="text"
                    className="inputfield_css peer"
                    required
                    autoComplete="off"
                    value={instruction}
                    onChange={(e) => {
                      const newInstructions = [...formik.values.instructions];
                      newInstructions[index] = e.target.value;
                      formik.setFieldValue("instructions", newInstructions);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor={`instruction-${index}`}
                    className="labelfeild_css"
                  >
                    Instruction {index + 1}
                  </label>
                </div>
                <Trash2
                  className="border-2 w-[3rem] bg-orange-500 text-white h-[3rem] p-2 cursor-pointer"
                  onClick={() => handleDeleteInstruction(index)}
                />
              </div>
            ))}
            <div className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2">
              <Plus />
              <button
                type="button"
                onClick={() =>
                  formik.setFieldValue("instructions", [
                    ...formik.values.instructions,
                    "",
                  ])
                }
              >
                Add Instruction
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-span-2">
          <Button
            onClick={formik.handleSignIn}
            className="border-2 border-orange-500 w-[15rem]"
            buttonName="Add Recipe"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
