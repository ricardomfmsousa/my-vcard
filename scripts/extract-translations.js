const {
  languages,
  defaultLanguage,
  translationPath,
} = require("../i18n-config");

process.env.NODE_ENV = "test";

module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        keySeparator: null,
        nsSeparator: null,
        locales: languages,
        keyAsDefaultValue: [defaultLanguage],
        useI18nextDefaultValue: [defaultLanguage],
        discardOldKeys: true,
        outputPath: `${translationPath}/{{locale}}/{{ns}}.json`,
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
      },
    ],
  ],
  overrides: [
    {
      test: [`../**/*.ts`, `../**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
