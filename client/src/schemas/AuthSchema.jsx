import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("*Please enter your Email !"),
  password: Yup.string().min(6).required("*Please enter the password !"),
});

export const registerSchema = Yup.object({
  email: Yup.string().email().required("*Please enter your Email !"),
  password: Yup.string().min(6).required("*Please enter the password !"),
  confirmPassword: Yup.string()
    .required("*Please enter the confirm password !")
    .oneOf([Yup.ref("password"), null], "*Password must match"),
});
 
export const emailSchema = Yup.object({
  email: Yup.string().email().required("*Please enter the Email"),
});

export const otpSchema = Yup.object({
  otp: Yup.string().max(6).min(6).required("*Please enter the 6-digit OTP"),
});

export const passwordSchema = Yup.object({
  password: Yup.string().min(6).required("*Please enter the password"),
  confirmPassword: Yup.string()
    .required("*Please re-enter the password")
    .oneOf([Yup.ref("password"), null], "*Password must match"),
});
