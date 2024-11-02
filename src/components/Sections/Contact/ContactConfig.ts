import { TFunction } from "react-i18next";
import * as yup from "yup";

export const googleFormUrl =
  "https://docs.google.com/forms/u/0/d/e/" +
  "1FAIpQLSfpal1vZ6teMo55NMhUT9gdlkhysU_UGsP5e2mFWFwhEFUNzA/formResponse";

export const getValidationSchema = (
  t: TFunction<string | string[], undefined>
) =>
  yup.object({
    name: yup.string().required(t("Name is required")),
    email: yup
      .string()
      .email(t("Enter a valid email"))
      .required(t("Email is required")),
    message: yup
      .string()
      .min(20, t("A meaningful message should have more than 20 characters :)"))
      .required(t("Message is required")),
  });
