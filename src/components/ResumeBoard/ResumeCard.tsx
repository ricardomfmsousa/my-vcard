import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Stack,
  SxProps,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { NavLink } from "../NavLink/NavLink";
import { ResumeItem } from "./resume-data";

export interface ResumeCardProps {
  resume: ResumeItem;
  sx?: SxProps;
  [rest: string]: unknown;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  resume: { title, institution, period, url, description, tags },
  alignment = "left",
  sx,
  ...rest
}): JSX.Element => {
  const { t } = useI18next();
  const { palette } = useTheme();
  const [isExpanded, setExpanded] = React.useState(false);

  const tagChips = React.useMemo(
    () => (
      <Stack
        direction="row"
        spacing={1}
        sx={{ pt: 2, pb: 1, marginTop: "auto", overflow: "auto" }}
      >
        {tags.map(({ name, url }) => (
          <NavLink key={name} to={url} language="disable" target="_blank">
            <Chip
              variant="outlined"
              color="primary"
              size="small"
              label={name}
              sx={{ cursor: "pointer" }}
            />
          </NavLink>
        ))}
      </Stack>
    ),
    [tags]
  );

  const styledDescription = React.useMemo(() => {
    const color = palette.text.secondary;
    const lineHeight = 1.6;
    if (Array.isArray(description)) {
      const items = description.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{ color, lineHeight }}
          dangerouslySetInnerHTML={{ __html: item }}
        ></Typography>
      ));
      return <Box component="ul">{items}</Box>;
    }
    return (
      <Typography variant="body2" sx={{ color, lineHeight }}>
        {description}
      </Typography>
    );
  }, [tags]);

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: 0, md: 335, lg: 230 },
        border: "none",
      }}
    >
      <CardContent
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">{title}</Typography>
          <Tooltip title={isExpanded ? t("Collapse") : t("Expand")}>
            <IconButton
              size="small"
              onClick={() => setExpanded((prev) => !prev)}
              sx={{
                alignSelf: "flex-start",
                color: "text.disabled",
                border: "1px solid",
                borderColor: "text.disabled",
                backgroundColor: isExpanded
                  ? "action.disabledBackground"
                  : "transparent",
                opacity: isExpanded ? 1 : 0.5,
                "&:hover": { opacity: 1 },
              }}
            >
              {isExpanded ? (
                <KeyboardArrowUpIcon fontSize="inherit" />
              ) : (
                <KeyboardArrowDownIcon fontSize="inherit" />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography sx={{ mt: 1, mb: 2 }} color="text.disabled">
          {institution} / {period}
        </Typography>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          {styledDescription}
        </Collapse>
        {tagChips}
      </CardContent>
    </Card>
  );
};
