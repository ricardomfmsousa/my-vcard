import { Stack, StackProps, SxProps, Typography } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import Typewriter from "typewriter-effect";

import { useThemeContext } from "../../../context/ThemeContext";
import darkBg from "../../../images/intro-dark-background.jpg";
import lightBg from "../../../images/intro-light-background.jpg";
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { Social } from "../../Social/Social";

export interface IntroProps {
  introPadding?: string;
  sx?: SxProps;
}

export const Intro = React.forwardRef<StackProps, IntroProps>(
  ({ introPadding, sx }, ref): JSX.Element => {
    const { t } = useI18next();
    const { isDarkMode } = useThemeContext();

    return (
      <Stack
        ref={ref}
        id="intro"
        component="section"
        sx={{
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),
        url(${isDarkMode ? darkBg : lightBg})`,
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "62% center",
            sm: "65% center",
            md: "center center",
          },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          ...sx,
        }}
      >
        <Typography variant="h1" fontWeight="700" mb={3} mx={4}>
          Ricardo Sousa
        </Typography>
        <Typography
          component="div"
          fontSize={30}
          mx={4}
          sx={{ color: "text.secondary" }}
        >
          {/* TODO: Investigate https://www.typeitjs.com/docs/react */}
          <Typewriter
            options={{ loop: true, delay: 70, deleteSpeed: 30 }}
            onInit={(typewriter) => {
              const pause = {
                initial: 1500,
                last: 5000,
                long: 3000,
                short: 550,
              };
              typewriter
                .pauseFor(pause.initial)
                .typeString(t("Hi there!"))
                .pauseFor(pause.long)
                .deleteAll()
                .pauseFor(pause.short)
                .typeString(t("I'm a Proud <strong>Father</strong>"))
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
        <Social
          size="medium"
          direction="column"
          tooltipPlacement="left"
          sx={{
            position: "absolute",
            right: introPadding,
            bottom: introPadding,
            display: { xs: "none", md: "flex" },
          }}
        />
      </Stack>
    );
  }
);

Intro.displayName = "Intro";
