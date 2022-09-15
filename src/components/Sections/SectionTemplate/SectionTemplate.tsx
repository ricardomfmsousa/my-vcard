import {
  Box,
  BoxProps,
  Container,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ReactNode } from "react";

export interface SectionTemplateProps {
  id: string;
  variant: "lighter" | "darker";
  title: string;
  subtitle: string;
  isOnViewport?: boolean;
  children: ReactNode;
  sx?: SxProps;
}

export const SectionTemplate = React.forwardRef<BoxProps, SectionTemplateProps>(
  (
    { id, variant, title, subtitle, isOnViewport = false, children, sx },
    ref
  ): JSX.Element => {
    const { palette } = useTheme();

    return (
      <Box
        id={id}
        ref={ref}
        component="section"
        sx={{
          pt: 10,
          pb: { xs: 10, lg: 12 },
          background: palette.background.default,
          ...(variant === "darker" && {
            background: palette.background.darker,
          }),
          ...sx,
        }}
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
              <Box
                sx={{
                  mt: 4,
                  mx: "auto",
                  width: 50,
                  height: 4,
                  border: `1px solid ${palette.primary.main}`,
                  borderRadius: 1,
                  ...(isOnViewport && { background: palette.primary.main }),
                }}
              ></Box>
            </Stack>
          )}
        </Container>
        <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
          {children}
        </Container>
      </Box>
    );
  }
);

SectionTemplate.displayName = "SectionTemplate";
