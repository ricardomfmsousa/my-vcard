import { Box, SxProps, Typography } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import Typewriter from "typewriter-effect";

import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { VerticalSocial } from "../../VerticalSocial/VerticalSocial";

export interface IntroProps {
  introPadding?: string;
  sx?: SxProps;
  [rest: string]: unknown;
}

export const Intro: React.FC<IntroProps> = ({
  introPadding,
  sx,
  ...rest
}): JSX.Element => {
  const { t } = useI18next();

  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),
        url(https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: {
          xs: "62% center",
          sm: "65% center",
          md: "center center",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        ...sx,
      }}
      {...rest}
    >
      <Typography variant="h1" fontWeight="700" mb={4} mx={4}>
        Ricardo Sousa
      </Typography>
      <Typography variant="h4" mx={4}>
        <Typewriter
          options={{ loop: true, delay: 70, deleteSpeed: 30 }}
          onInit={(typewriter) => {
            const pause = { initial: 1500, last: 5000, long: 3000, short: 550 };
            typewriter
              .pauseFor(pause.initial)
              .typeString(t("Hi there!"))
              .pauseFor(pause.long)
              .deleteAll()
              .pauseFor(pause.short)
              .typeString(t("I'm a <strong>Proud</strong> Father"))
              .pauseFor(pause.long)
              .deleteAll()
              .pauseFor(pause.short)
              .typeString(t("I'm a <strong>Software Developer</strong>"))
              .pauseFor(pause.long)
              .deleteAll()
              .pauseFor(pause.short)
              .typeString(t("I've specialized on <strong>Front-End</strong>"))
              .pauseFor(pause.long)
              .deleteAll()
              .pauseFor(pause.short)
              .typeString(
                t(
                  "I love <strong>Trail Running</strong> and <strong>Calisthenics</strong>"
                )
              )
              .pauseFor(pause.last)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
      <LanguageSwitcher
        tooltipPlacement="right-end"
        sx={{
          position: "absolute",
          left: introPadding,
          bottom: introPadding,
          transformOrigin: "bottom left",
          transform: "rotate(-90deg) translateY(100%)",
          display: { xs: "none", md: "flex" },
        }}
      />
      <VerticalSocial
        tooltipPlacement="left"
        sx={{
          position: "absolute",
          right: introPadding,
          bottom: introPadding,
          display: { xs: "none", md: "flex" },
        }}
      />
    </Box>
  );
};
