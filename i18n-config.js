const languageMetaData = [
  { name: "English", abbreviation: "eng", locale: "en" },
  { name: "Português", abbreviation: "por", locale: "pt" },
];

module.exports = {
  languageMetaData,
  languages: languageMetaData.map(({ locale }) => locale),
  defaultLanguage: "en",
  translationPath: "./src/locales",
};
