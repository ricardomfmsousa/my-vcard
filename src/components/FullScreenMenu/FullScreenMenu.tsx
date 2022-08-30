import {
  Box,
  Divider,
  MenuItem,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { NavLink } from "../NavLink/NavLink";
import { Social } from "../Social/Social";

export interface FullScreenMenuProps {
  links: { name: string; href: string }[];
  closeButtonPadding?: string | number;
  onInternalNav?: (e: React.MouseEvent) => void;
  sx?: SxProps;
  [rest: string]: unknown;
}
export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  links: linkData,
  onInternalNav,
  sx,
  ...rest
}): JSX.Element => {
  const links = React.useMemo(
    () =>
      linkData.map(({ name, href }) => (
        <NavLink key={name} to={href} onClick={onInternalNav}>
          <MenuItem sx={{ justifyContent: "center", fontWeight: "inherit" }}>
            <Typography
              variant="h1"
              component="p"
              sx={{ lineHeight: "1.5em", fontWeight: "inherit" }}
            >
              {name}
            </Typography>
          </MenuItem>
        </NavLink>
      )),
    [linkData]
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(30px)",
        zIndex: 1000,
        overflow: "auto",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          height: "inherit",
          flexDirection: "column",
          justifyContent: "space-around",
          ...sx,
        }}
        {...rest}
      >
        <Box sx={{ pt: 8 }}>{links}</Box>

        <Stack
          spacing={2}
          sx={{ alignSelf: "center", alignItems: "center" }}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Typography variant="h4" component="div">
            <LanguageSwitcher spacing={"1em"} />
          </Typography>
          <Social
            size="large"
            direction="row"
            spacing={3}
            sx={{ color: "text.secondary", px: 4 }}
          />
        </Stack>
      </Container>
    </Box>
  );
};
