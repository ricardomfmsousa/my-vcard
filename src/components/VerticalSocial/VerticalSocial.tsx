import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, SxProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

import { Strava } from "../Icons/Strava/Strava";

interface VerticalSocialProps {
  sx?: SxProps;
}

export const VerticalSocial: React.FC<VerticalSocialProps> = ({
  sx,
}): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            github
            linkedIn
            strava
          }
        }
      }
    }
  `);

  const socialData = [
    {
      name: "Github",
      icon: <GitHub />,
      href: data.site.siteMetadata.author.github,
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      href: data.site.siteMetadata.author.linkedIn,
    },
    {
      name: "Strava",
      icon: <Strava />,
      href: data.site.siteMetadata.author.github,
    },
  ];

  const socialIcons = React.useMemo(
    () =>
      socialData.map(({ name, icon, href }) => (
        <Tooltip key={name} title={name} placement="left">
          <Link to={href} sx={{ color: "inherit", mt: 1 }}>
            {icon}
          </Link>
        </Tooltip>
      )),
    [socialData]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...sx,
      }}
    >
      {socialIcons}
    </Box>
  );
};
