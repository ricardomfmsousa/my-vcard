import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Card, Stack, SxProps, Typography } from "@mui/material";
import { Trans } from "gatsby-plugin-react-i18next";
import React from "react";

import { Resume } from "./resume-data";
import { ResumeCard } from "./ResumeCard";

export interface ResumeCardProps {
  resume: {
    education: Resume;
    experience: Resume;
  };
  sx?: SxProps;
  [rest: string]: unknown;
}

export const ResumeBoard: React.FC<ResumeCardProps> = ({
  resume: { education, experience },
  sx,
  ...rest
}): JSX.Element => {
  const educationCards = React.useMemo(
    () =>
      education.map((item) => <ResumeCard key={item.title} resume={item} />),
    [education]
  );

  const experienceCards = React.useMemo(
    () =>
      experience.map((item) => <ResumeCard key={item.title} resume={item} />),
    [experience]
  );

  const spacing = 2;
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      spacing={{ xs: 8, md: 2 }}
      {...rest}
      sx={sx}
    >
      <Stack spacing={spacing} flex={1} sx={{ overflow: "hidden" }}>
        <Card variant="outlined" sx={{ py: 2, px: 4, border: "none" }}>
          <Typography
            variant="h4"
            color="primary.main"
            sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}
          >
            <AutoStoriesIcon />
            <Trans>Education</Trans>
          </Typography>
        </Card>
        {educationCards}
      </Stack>
      <Stack spacing={spacing} flex={1} sx={{ overflow: "hidden" }}>
        <Card variant="outlined" sx={{ py: 2, px: 4, border: "none" }}>
          <Typography
            variant="h4"
            color="primary.main"
            sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}
          >
            <BusinessCenterIcon />
            <Trans>Experience</Trans>
          </Typography>
        </Card>
        {experienceCards}
      </Stack>
    </Stack>
  );
};
