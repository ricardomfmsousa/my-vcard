import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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

export const About: React.FC<AboutProps> = React.forwardRef(
  ({ variant, ...rest }, ref): JSX.Element => {
    const { t } = useI18next();
    const { breakpoints } = useTheme();
    const myAge = differenceInYears(
      new Date(),
      new Date("1985-09-24T15:00:00")
    );
    const myExperienceYears = differenceInYears(new Date(), new Date("2014"));
    const isBellowLargeResolution = useMediaQuery(breakpoints.down("lg"));

    const aboutImage = {
      width: { xs: 200, sm: 250, md: 300, lg: 420 },
      height: { xs: 200, sm: 250, md: 300, lg: 510 },
    };

    return (
      <SectionTemplate
        ref={ref}
        id="about"
        variant={variant}
        title={t("About")}
        subtitle={t("Get to know me")}
        {...rest}
      >
        <Stack
          spacing={{ xs: 6, lg: 10 }}
          direction={{ xs: "column", lg: "row" }}
          sx={{ alignItems: "center" }}
        >
          <Box
            sx={{
              width: aboutImage.width,
              height: aboutImage.height,
              minWidth: aboutImage.width,
              minHeight: aboutImage.height,
              borderRadius: { xs: "50%", lg: 1 },
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
              <strong>I'm {myAge} years old</strong>, I have {myExperienceYears}{" "}
              years of professional experience in the field of IT, currently
              employed as a Front-End Software Development Technical Lead at{" "}
              <NavLink
                to="https://bubble-go.ch/"
                language="disable"
                target="_blank"
              >
                bubble-go
              </NavLink>
              .<br />
              Here, I have interviewed, onboarded and trained many employees who
              have become significant contributors for the company.
              {isBellowLargeResolution && <br />}
              <br />
              <strong>I love building</strong> highly performant, properly
              tested/documented and responsive UIs (
              <NavLink to="/storybook" language="disable" target="_blank">
                see an example
              </NavLink>
              ), I like to (ab)use linting/formatting tools and base my
              implementations mostly on the principles of{" "}
              <NavLink
                to="https://gist.github.com/ricardomfmsousa/d60fe1bbde052c9521b872b3488b70e0"
                language="disable"
                target="_blank"
              >
                Clean Code
              </NavLink>
              , by Robert C. Martin.
              <br />
              I'm, always seeking to amplify my knowledge on workflows,
              methodologies and new technologies, specially on the{" "}
              <NavLink
                to="https://jamstack.org/"
                language="disable"
                target="_blank"
              >
                JAM stack
              </NavLink>
              .{isBellowLargeResolution && <br />}
              <br />
              <strong>I'm currently living</strong> on the beautiful bay of
              Setúbal, Portugal. Since 2020 that I work in full remote mode,
              removing the need to commute, which translates into three more
              hours free per day that I can use to exercise and spend with my
              family.
            </Typography>
          </Stack>
        </Stack>
      </SectionTemplate>
    );
  }
);
