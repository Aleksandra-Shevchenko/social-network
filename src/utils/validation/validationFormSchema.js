import * as Yup from "yup";

const errorUrl = "This address is invalid. The field must contain URL";

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
  contacts: Yup.object().shape({
    facebook: Yup.string().url(errorUrl),
    github: Yup.string().url(errorUrl),
    instagram: Yup.string().url(errorUrl),
    mainLink: Yup.string().url(errorUrl),
    twitter: Yup.string().url(errorUrl),
    vk: Yup.string().url(errorUrl),
    website: Yup.string().url(errorUrl),
    youtube: Yup.string().url(errorUrl),
  }),
});
