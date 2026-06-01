import * as yup from "yup";

export const LanguageSchema = yup.object({
  languageName: yup.string().max(30, "The number must be less than 30 characters").required("This field is required."),
  languageDescription: yup.string().required("This field is required.")
});