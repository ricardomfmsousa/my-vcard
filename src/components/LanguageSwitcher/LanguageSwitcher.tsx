import { Box, SxProps, Tooltip } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

interface LanguageSwitcherProps {
  sx?: SxProps;
}
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  sx,
}): JSX.Element => {
  const languageData = [
    { name: "English", locale: "en", selected: true },
    { name: "Portuguese", locale: "pt", selected: false },
  ];

  const languages = React.useMemo(
    () =>
      languageData.map(({ name, locale, selected }) => (
        <Tooltip key={name} title={name} placement="right">
          <Link
            sx={{
              color: "inherit",
              mr: 3,
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: selected ? "bold" : "light",
            }}
          >
            {name.substring(0, 3).toUpperCase()}
          </Link>
        </Tooltip>
      )),
    [languageData]
  );

  return <Box sx={{ ...sx }}>{languages}</Box>;
};
