import { enUS, pt } from "date-fns/locale";

export const languageMetaData = [
  { name: "English", abbreviation: "eng", locale: "en" },
  { name: "Português", abbreviation: "por", locale: "pt" },
] as const;

export type Languages = typeof languageMetaData[number]["locale"];
export const languages: Languages[] = languageMetaData.map(
  ({ locale }) => locale
);
export const defaultLanguage = "en";
export const translationPath = "./src/locales";
export const dateLocales = { en: enUS, pt: pt };
