import axios from "axios";
import {
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  GET_ALL_RECIPE_BY_CATEGORY_REQUEST,
  GET_ALL_RECIPE_BY_CATEGORY_SUCCESS,
  GET_ALL_RECIPE_BY_ID_REQUEST,
  GET_ALL_RECIPE_BY_ID_SUCCESS,
  GET_ALL_RECIPE_REQUEST,
  GET_ALL_RECIPE_SUCCESS,
} from "../constant";
import { toast } from "react-toastify";

const addRecipeAction = (values) => {
  console.log("Form values:", values);
  return async (dispatch) => {
    dispatch({ type: ADD_RECIPE_REQUEST });
    try {
      const response = await axios.post(
        "http://localhost:5000/foodieblog/add-blog",
        values
      );
      if (response.status === 200) {
        dispatch({ type: ADD_RECIPE_SUCCESS });
        toast.success("Recipe Added Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
};

const getUserRecipeAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_BY_ID_REQUEST });
    try {
      const response = await axios.get(
        `http://localhost:5000/foodieblog/get-user-blogs/${id}`
      );
      if (response.status === 200) {
        dispatch({
          type: GET_ALL_RECIPE_BY_ID_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("No Recipe Found!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

const getAllRecipeAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_REQUEST });
    try {
      const response = await axios.get(
        "http://localhost:5000/foodieblog/get-all-recipe"
      );
      if (response.status === 200) {
        dispatch({ type: GET_ALL_RECIPE_SUCCESS, payload: response.data });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("No Recipe Found!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

const getAllRecipeByCategoryAction = ({ category }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RECIPE_BY_CATEGORY_REQUEST });
    try {
      const response = await axios.get(
        `http://localhost:5000/foodieblog/get-all-recipe-by-category/${category}`
      );
      if (response.status === 200) {
        dispatch({ type: GET_ALL_RECIPE_BY_CATEGORY_SUCCESS });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("No recipes found for this category");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
};

export {
  addRecipeAction,
  getUserRecipeAction,
  getAllRecipeAction,
  getAllRecipeByCategoryAction,
};
