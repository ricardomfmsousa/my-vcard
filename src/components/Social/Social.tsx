import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconProps, Stack, SxProps, TooltipProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

import { Strava } from "../Icons/Strava/Strava";

interface VerticalSocialProps {
  sx?: SxProps;
  size: NonNullable<IconProps["fontSize"]>;
  direction: "row" | "column";
  spacing?: number;
  tooltipPlacement?: TooltipProps["placement"];
}

export const Social: React.FC<VerticalSocialProps> = ({
  sx,
  size = "medium",
  direction = "row",
  spacing,
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
      icon: <GitHub fontSize={size} />,
      href: data.site.siteMetadata.author.github,
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn fontSize={size} />,
      href: data.site.siteMetadata.author.linkedIn,
    },
    {
      name: "Strava",
      icon: <Strava fontSize={size} />,
      href: data.site.siteMetadata.author.strava,
    },
  ];

  const socialIcons = React.useMemo(() => {
    return socialData.map(({ name, icon, href }) => (
      <Tooltip
        key={name}
        title={tooltipPlacement ? name : ""}
        placement={tooltipPlacement}
      >
        <Link to={href} target="_blank" sx={{ color: "inherit" }}>
          {icon}
        </Link>
      </Tooltip>
    ));
  }, [socialData, size]);

  const defaultSpacing: { [size: string]: number } = {
    small: 1,
    medium: 1.5,
    large: 2,
  };

  return (
    <Stack
      spacing={spacing || defaultSpacing[size]}
      direction={direction}
      sx={{
        display: "flex",
        width: "fit-content",
        color: "text.primary",
        ...(direction === "row" && {
          alignItems: "center",
        }),
        ...(direction === "column" && {
          justifyContent: "center",
        }),
        ...sx,
      }}
    >
      {socialIcons}
    </Stack>
  );
};
