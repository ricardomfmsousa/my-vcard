import { Box, Stack, SxProps, Tooltip, TooltipProps } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { languageMetaData } from "../../../i18n-config";
import { NavLink } from "../NavLink/NavLink";

export interface LanguageSwitcherProps {
  sx?: SxProps;
  spacing?: string | number;
  tooltipPlacement?: TooltipProps["placement"];
}
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  sx,
  spacing = "1.25em",
  tooltipPlacement,
}): JSX.Element => {
  const { originalPath, i18n } = useI18next();

  const languages = React.useMemo(
    () =>
      languageMetaData.map(({ name, locale, abbreviation }) => (
        <Tooltip
          key={name}
          title={tooltipPlacement ? name : ""}
          placement={tooltipPlacement}
        >
          <Box>
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

  return (
    <Stack spacing={spacing} direction={"row"} sx={{ ...sx }}>
      {languages}
    </Stack>
  );
};
