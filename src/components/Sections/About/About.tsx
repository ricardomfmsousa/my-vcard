import { Box, Stack, Typography } from "@mui/material";
import { differenceInYears } from "date-fns";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { NavLink } from "../../NavLink/NavLink";
import {
  SectionTemplate,
  SectionTemplateProps,
} from "../SectionTemplate/SectionTemplate";

export interface AboutProps {
  variant: SectionTemplateProps["variant"];
  [rest: string]: unknown;
}

export const About: React.FC<AboutProps> = ({
  variant,
  ...rest
}): JSX.Element => {
  const { t } = useI18next();
  const myAge = differenceInYears(new Date(), new Date("1985-09-24T15:00:00"));
  const experienceYears = differenceInYears(new Date(), new Date("2014"));
  const aboutImage = {
    width: { xs: 200, sm: 250, md: 420 },
    height: { xs: 200, sm: 250, md: 510 },
  };

  return (
    <SectionTemplate
      id="about"
      variant={variant}
      title={t("About")}
      subtitle={t("Get to know me")}
      {...rest}
    >
      <Stack
        spacing={{ xs: 6, md: 10 }}
        direction={{ xs: "column", md: "row" }}
        sx={{ alignItems: "center" }}
      >
        <Box
          sx={{
            width: aboutImage.width,
            height: aboutImage.height,
            minWidth: aboutImage.width,
            minHeight: aboutImage.height,
            borderRadius: { xs: "50%", md: 1 },
            overflow: "hidden",
          }}
        >
          <StaticImage
            src="https://placekitten.com/600/800"
            alt={t("About photo")}
            placeholder="blurred"
            layout="fullWidth"
          />
        </Box>
        <Stack>
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            Who am I?
          </Typography>
          <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
            I'm Ricardo Sousa, Senior Front-End Software Developer.
          </Typography>

          <Typography color="text.secondary">
            I'm {myAge} years old, I have {experienceYears} years of
            professional experience in the field of IT. <br /> I love building
            highly performant, properly tested/documented and responsive UIs (
            <NavLink to="/storybook" language="disable">
              see an example
            </NavLink>
            ).
            <br /> I like to (ab)use linting/formatting tools and base my
            implementations mostly on the principles of{" "}
            <NavLink
              to="https://gist.github.com/ricardomfmsousa/d60fe1bbde052c9521b872b3488b70e0"
              language="disable"
            >
              Clean Code
            </NavLink>
            , by Robert C. Martin.
            <br />
            <br />
            I'm currently based on the beautiful bay of Setúbal, Portugal. Since
            2020 that I work in full remote mode, which translates into more
            three hours free per day that I can use to exercise and spend with
            my family.
          </Typography>
        </Stack>
      </Stack>
    </SectionTemplate>
  );
};
