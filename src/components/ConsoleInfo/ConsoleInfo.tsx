/* eslint-disable no-console */
import React from "react";
import { useTranslation } from "react-i18next";

import { useOnPageLoad } from "../../hooks/useOnPageLoad";
import { dark as theme } from "../../styles/theme";

const styles = {
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
  sub: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 11px;
  `,
};

export const ConsoleInfo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useTranslation();
  const messages = [
    [t("👋 HI THERE!"), styles.h1],
    [t("Welcome to my vCard website.\n"), styles.h2],
    [t("You can check my source code at Github:"), styles.p],
    ["https://github.com/ricardomfmsousa/my-vcard", styles.pb],
    [
      t(
        "Feel free to open an issue if you've found the slightest bug, thanks in advance! 😉"
      ),
      styles.sub,
    ],
    [""],
    [t("Project documentation is also available through Storybook:"), styles.p],
    ["https://ricardomfmsousa.github.io/my-vcard/storybook", styles.pb],
  ];

  useOnPageLoad(() =>
    messages.forEach(([message, style]) => console.log(`%c${message}`, style))
  );

  return <>{children}</>;
};
