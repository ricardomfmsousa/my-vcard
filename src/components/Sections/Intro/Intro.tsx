import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { VerticalSocial } from "../../VerticalSocial/VerticalSocial";

export interface IntroProps {
  introPadding?: string;
  sx?: SxProps;
}

export const Intro: React.FC<IntroProps> = ({
  introPadding,
  sx,
}): JSX.Element => (
  <Box
    component="section"
    sx={{
      height: "100vh",
      background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),
        url(https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg)`,
      backgroundColor: "",
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
  >
    <Typography variant="h1" fontSize="70px" fontWeight="700" mb={4} mx={4}>
      Ricardo Sousa
    </Typography>
    <Typography variant="h4" mx={4}>
      <Typewriter
        options={{ loop: true, delay: 70, deleteSpeed: 30 }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString("Hi there!")
            .pauseFor(3000)
            .deleteAll()
            .typeString("I'm a <strong>Proud</strong> Father")
            .pauseFor(3000)
            .deleteChars(12)
            .pauseFor(300)
            .typeString("Software Developer")
            .pauseFor(3000)
            .deleteChars(22)
            .pauseFor(300)
            .typeString("ve specialized on Front-End")
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
      />
    </Typography>
    <LanguageSwitcher
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
      sx={{
        position: "absolute",
        right: introPadding,
        bottom: introPadding,
        display: { xs: "none", md: "flex" },
      }}
    />
  </Box>
);
