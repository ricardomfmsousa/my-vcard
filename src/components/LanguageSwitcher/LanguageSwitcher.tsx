import { Box, SxProps, Tooltip, TooltipProps } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { languageMetaData } from "../../../i18n-config";
import { NavLink } from "../NavLink/NavLink";

export interface LanguageSwitcherProps {
  sx?: SxProps;
  tooltipPlacement: TooltipProps["placement"];
}
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  sx,
  tooltipPlacement,
}): JSX.Element => {
  const { originalPath, i18n } = useI18next();

  const languages = React.useMemo(
    () =>
      languageMetaData.map(({ name, locale, abbreviation }) => (
        <Tooltip key={name} title={name} placement={tooltipPlacement}>
          <Box sx={{ mr: 3 }}>
            <NavLink
              to={originalPath}
              language={locale}
              isActive={i18n.language === locale}
            >
              {abbreviation.toUpperCase()}
            </NavLink>
          </Box>
        </Tooltip>
      )),
    [i18n.language]
  );

  return <Box sx={{ display: "flex", ...sx }}>{languages}</Box>;
};
