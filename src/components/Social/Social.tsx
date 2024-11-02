import { GitHub } from "@mui/icons-material";
import { IconProps, Stack, SxProps, TooltipProps } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import React from "react";

import { Discord } from "../Icons/Discord/Discord";
import { LinkedIn } from "../Icons/LinkedIn/LinkedIn";
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
            discord
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
      name: "Discord",
      icon: <Discord fontSize={size} />,
      href: data.site.siteMetadata.author.discord,
    },
    {
      name: "Strava",
      icon: <Strava fontSize={size} />,
      href: data.site.siteMetadata.author.strava,
    },
  ];

  const socialIcons = React.useMemo(
    () =>
      socialData.map(({ name, icon, href }) => (
        <Tooltip
          key={name}
          title={tooltipPlacement ? name : ""}
          placement={tooltipPlacement}
        >
          <Link
            to={href}
            target="_blank"
            sx={{ color: "inherit", display: "flex" }}
          >
            {icon}
          </Link>
        </Tooltip>
      )),
    [socialData, size]
  );

  const defaultSpacing: { [size: string]: number } = {
    small: 1.5,
    medium: 2,
    large: 2.5,
  };

  return (
    <Stack
      spacing={spacing || defaultSpacing[size]}
      direction={direction}
      sx={{
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
