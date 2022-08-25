import {
  Box,
  Menu,
  MenuItem,
  Slide,
  SxProps,
  useScrollTrigger,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useI18next } from "gatsby-plugin-react-i18next";
import { IconButton } from "gatsby-theme-material-ui";
import React from "react";

import { BurgerMenu } from "../../Icons/BurgerMenu/BurgerMenu";
import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { NavLink } from "../../NavLink/NavLink";

const HideOnScroll: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={200}>
      {children}
    </Slide>
  );
};
export interface HeaderProps {
  introPadding: string;
  sx?: SxProps;
}

export const Header: React.FC<HeaderProps> = ({ sx, introPadding }) => {
  const { t } = useI18next();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const links = [
    { name: t("Intro"), href: `/` },
    { name: t("About"), href: `/#about` },
    { name: t("Resume"), href: `/#resume` },
    { name: t("Contact"), href: `/#contact` },
  ];

  const headerLogo = {
    icon: null, // <NavIcon sx={{ mr: 1, fontSize: { md: "1.3em" } }} />,
    text: "RS",
    sx: {
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontFamily: "Over the Rainbow",
      fontWeight: { xs: 700, md: 200 },
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none",
      flexGrow: 1,
    },
  };

  const lowResLinks = React.useMemo(
    () =>
      links.map(({ name, href }) => (
        <NavLink key={name} to={href} onClick={handleCloseNavMenu}>
          <MenuItem>
            <Typography>{name}</Typography>
          </MenuItem>
        </NavLink>
      )),
    []
  );

  const highResLinks = React.useMemo(
    () =>
      links.map(({ name, href }) => (
        <Typography key={name} sx={{ ml: 4 }}>
          <NavLink
            to={href}
            onClick={handleCloseNavMenu}
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            {name}
          </NavLink>
        </Typography>
      )),
    []
  );

  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        position="fixed"
        color="transparent"
        sx={{
          backdropFilter: "blur(10px)",
          paddingTop: `calc(${introPadding} - 20px)`,
          paddingLeft: introPadding,
          paddingRight: introPadding,
          ...sx,
        }}
      >
        <Toolbar disableGutters>
          {headerLogo.icon}
          <Typography
            variant="h6"
            noWrap
            sx={{ ...headerLogo.sx, display: { xs: "none", md: "flex" } }}
          >
            <NavLink
              to="/"
              isActive={false}
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              {headerLogo.text}
            </NavLink>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{ ...headerLogo.sx, display: { xs: "flex", md: "none" } }}
          >
            {headerLogo.text}
          </Typography>

          <Box
            sx={{ display: { xs: "flex", md: "none" }, marginRight: "-12px" }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BurgerMenu fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {lowResLinks}
              <Divider />
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageSwitcher tooltipPlacement="bottom" />
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignSelf: "stretch" }}
          >
            {highResLinks}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
