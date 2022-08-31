import { GitHub } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { NavLink } from "../../NavLink/NavLink";

export const Footer: React.FC = (): JSX.Element => {
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
        color="inherit"
        to={data.site.siteMetadata.license}
        language="disable"
        target="_blank"
        sx={{ textDecoration: "none" }}
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
          <GitHub fontSize="small" sx={{ mr: 2 }} />
          Copyright &copy; {new Date().getFullYear()}{" "}
          {data.site.siteMetadata.author.name}.
        </Typography>
      </NavLink>
    </Box>
  );
};
