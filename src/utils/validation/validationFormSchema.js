import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

export const profileFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars min")
    .max(40, "Name is too long - should be 40 chars max"),
  aboutMe: Yup.string(),
  lookingForAJobDescription: Yup.string(),
});
