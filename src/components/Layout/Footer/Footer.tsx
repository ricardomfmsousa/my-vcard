import { GitHub } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

import { dateLocales, Languages } from "../../../../i18n-config";
import PackageJson from "../../../../package.json";
import { NavLink } from "../../NavLink/NavLink";

export const Footer: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { version } = PackageJson;
  const { GATSBY_BUILD_TIME } = process.env;
  const currentYear = new Date().getFullYear();
  const buildTime = GATSBY_BUILD_TIME
    ? format(new Date(GATSBY_BUILD_TIME), "PPPPpppp", {
        locale: dateLocales[i18n.language as Languages],
      })
    : t("unknown");

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          license
          author {
            name
            github
          }
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 6,
      }}
      component="footer"
    >
      <NavLink
        to={data.site.siteMetadata.license}
        language="disable"
        target="_blank"
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GitHub fontSize="small" sx={{ mr: 1 }} />
          <Tooltip title={`${t("Latest build")}: ${buildTime}`}>
            <Box component="span" sx={{ fontWeight: "bold", mr: 1 }}>
              v{version}
            </Box>
          </Tooltip>
          Copyright &copy; {currentYear} {data.site.siteMetadata.author.name}.
        </Typography>
      </NavLink>
    </Box>
  );
};
