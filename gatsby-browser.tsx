import "@fontsource/over-the-rainbow";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Script, ScriptStrategy } from "gatsby";
import React from "react";

import theme from "./src/components/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;
  setTimeout(() => {
    const win = window as any;
    if (typeof win.gtag === "function") {
      win.gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);
  return true;
};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GTM_ID}`}
        strategy={ScriptStrategy.offMainThread}
      />
      <Script id="gtag-config" strategy={ScriptStrategy.offMainThread}>
        {`
          window.dataLayer = window.dataLayer || []
          window.gtag = function gtag() { window.dataLayer.push(arguments) }
          gtag('js', new Date())
          gtag('config', '${process.env.GATSBY_GTM_ID}', { send_page_view: false })
        `}
      </Script>
    </>
  );
};

const consoleStyles = {
  h1: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 60px;
    font-weight: bold;
`,
  h2: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 40px;
    font-weight: bold;
`,
  p: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 15px;
`,
  pb: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 15px;
    font-weight: bold;
`,
};

console.log("%c👋 HI THERE!", consoleStyles.h1);
console.log("%cWelcome to my vCard website.\n", consoleStyles.h2);
console.log("%cYou can check my source code at Github:", consoleStyles.p);
console.log("%chttps://github.com/ricardomfmsousa/my-vcard", consoleStyles.pb);
console.log(
  "%cFeel free to open an issue if you've found the slightest bug (thanks in advance :)",
  consoleStyles.p
);
