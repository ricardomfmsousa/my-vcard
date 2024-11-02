/**
 * Uses a babel preset to extract translations
 */
const { execSync } = require("child_process");

const commands = [
  // Transpile i18n configuration to be used by babel preset
  "if [ ! -f './scripts/i18n-config.js' ]; then npx tsc i18n-config.ts --outDir ./scripts; fi",
  // Execute the extraction babel preset
  "npx babel --config-file ./scripts/babel-i18n.js -o tmp/chunk.js './src/**/*.{js,jsx,ts,tsx}'",
  // Remove unneeded files
  "rm -rf tmp",
];

// Execute all commands
execSync(commands.join(" && "), (error, stdout, stderr) => {
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
