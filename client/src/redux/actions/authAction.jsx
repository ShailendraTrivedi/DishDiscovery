import axios from "axios";
import { toast } from "react-toastify";
import {
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  REGISTER_AUTH_REQUEST,
  REGISTER_AUTH_SUCCESS,
} from "../constant";

export const loginAction = (values,navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_AUTH_REQUEST });
    try {
      const response = await axios.post(
        "http://localhost:5000/foodieuser/login",
        values
      );
      if (response.status === 200) {
        sessionStorage.setItem("loginUser", JSON.stringify(response.data));
        // const data = JSON.parse(sessionStorage.getItem("loginUser"));
        dispatch({ type: LOGIN_AUTH_SUCCESS, payload: response.data });
        toast.success("Login Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.warning("Wrong Password !");
      } else if (error.response && error.response.status === 404) {
        toast.warning("User not found !");
      } else {
        toast.error("Something went wrong !!!");
      }
    }
  };
};

export const registerAction = (values) => {
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
        toast.success("Registeration Successfully");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        toast.warning("User already present !");
      } else {
        toast.error("Something went wrong !");
      }
    }
  };
};
