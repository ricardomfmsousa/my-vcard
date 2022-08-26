import {
  Box,
  Container,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

export interface SectionTemplateProps {
  variant: "lighter" | "darker";
  title: string;
  subtitle: string;
  children: React.ReactElement<any, any> | React.ReactElement<any, any>[];
  sx?: SxProps;
  [rest: string]: unknown;
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({
  variant,
  title,
  subtitle,
  children,
  sx,
  ...rest
}): JSX.Element => {
  const { t, i18n } = useI18next();
  const { palette } = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: palette.background.default,
        ...(variant === "darker" && {
          background: palette.background.darker,
        }),
        ...sx,
      }}
      {...rest}
    >
      <Container maxWidth="sm">
        {(title || subtitle) && (
          <Stack>
            {subtitle && (
              <Typography
                align="center"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                {subtitle}
              </Typography>
            )}
            {title && (
              <Typography variant="h2" align="center">
                {title}
              </Typography>
            )}
          </Stack>
        )}
      </Container>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {children}
      </Container>
    </Box>
  );
};
