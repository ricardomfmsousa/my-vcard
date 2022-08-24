import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, SxProps, TooltipProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

import { Strava } from "../Icons/Strava/Strava";

interface VerticalSocialProps {
  sx?: SxProps;
  tooltipPlacement: TooltipProps["placement"];
}

export const VerticalSocial: React.FC<VerticalSocialProps> = ({
  sx,
  tooltipPlacement,
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
      href: data.site.siteMetadata.author.strava,
    },
  ];

  const socialIcons = React.useMemo(
    () =>
      socialData.map(({ name, icon, href }) => (
        <Tooltip key={name} title={name} placement={tooltipPlacement}>
          <Link
            to={href}
            target="_blank"
            sx={{ color: "text.primary", mt: 1.5 }}
          >
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
        width: "fit-content",
        ...sx,
      }}
    >
      {socialIcons}
    </Box>
  );
};
