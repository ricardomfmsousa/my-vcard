import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Tooltip, useScrollTrigger, Zoom } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

export interface ScrollTopProps {
  bottom: string | { [key: string]: string };
  right: string | { [key: string]: string };
}

export const ScrollTop: React.FC<ScrollTopProps> = ({ bottom, right }) => {
  const { t } = useI18next();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => window.scrollTo(0, 0);
  const centeredBottom = `calc(${bottom} - 10px)`;
  const centeredRight = `calc(${right} - 10px)`;

  return (
    <Zoom in={trigger}>
      <Tooltip title={t("Scroll to top")} placement="top">
        <Fab
          onClick={handleClick}
          color="primary"
          size="small"
          aria-label="scroll back to top"
          sx={{
            position: "fixed",
            bottom: centeredBottom,
            right: centeredRight,
            opacity: 0.5,
            filter: "grayscale(1)",
            "&:hover": { opacity: 1, filter: "grayscale(0)" },
          }}
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};
