/**
 * Verifies if all translation keys have a non-empty value
 * This script should be executed from the project root context
 */
const { execSync } = require("child_process");
const localesFolder = "./src/locales";
const fs = require("fs");

// Extract all keys
execSync("yarn trans:extract", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Read all available locales
const locales = fs
  .readdirSync(localesFolder, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

// Verify if each locale translation file keys have non-empty values
locales.forEach((locale) => {
  const translationPath = `${localesFolder}/${locale}/translation.json`;
  const translation = JSON.parse(fs.readFileSync(translationPath, "utf8"));
  const isMissing = Object.values(translation).some((value) => value === "");
  if (isMissing) {
    console.error(
      `[${locale.toLocaleUpperCase()}] translation values are missing!`
    );
    process.exit(1);
  }
});
