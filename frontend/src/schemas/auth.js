import * as yup from "yup";

const emailValidation = yup
  .string()
  .required("Email is required.")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email format.",
  );

const passwordValidation = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 character");

const usernameValidation = yup
  .string()
  .required("Username is required")
  .max(10, "Username must be at most 10 characters")
  .min(3, "Username must be at least 3 characters");

export const SignUpSchema = yup.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirm password must be same as password")
    .required("Confirm password is required."),
});

export const LoginSchema = yup.object({
  username: usernameValidation,
  password: passwordValidation,
});
