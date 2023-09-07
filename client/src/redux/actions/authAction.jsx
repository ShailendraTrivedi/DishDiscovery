import axios from "axios";
import {
  LOGIN_AUTH_FAILURE,
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  REGISTER_AUTH_REQUEST,
  REGISTER_AUTH_SUCCESS,
} from "../constant";

export const loginAction = (values) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_AUTH_REQUEST });
    try {
      console.log("values:", values);
      const response = await axios.post(
        "http://localhost:5000/foodieuser/login",
        values
      );
      console.log(response);
      if (response.status === 200) {
        alert("Working....");
        dispatch({ type: LOGIN_AUTH_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: LOGIN_AUTH_FAILURE });
      if (error.response && error.response.status === 404) {
        alert("User not found !");
      } else {
        alert("Error while searching the user to the database !!!");
      }
    }
  };
};

export const registerAction = (values) => {
  console.log(values);
  return async (dispatch) => {
    dispatch({ type: REGISTER_AUTH_REQUEST });
    try {
      const response = await axios.post(
        "http://localhost:5000/foodieuser/register",
        values
      );
      console.log(response);
      if (response.status === 201) {
        dispatch({ type: REGISTER_AUTH_SUCCESS, payload: response.data });
        alert("User Registered");
      }
    } catch (error) {
      dispatch({ type: REGISTER_AUTH_REQUEST });
      if (error.response && error.response.status === 400) {
        alert("User already present !");
      } else {
        alert("Something went wrong !");
      }
    }
  };
};
