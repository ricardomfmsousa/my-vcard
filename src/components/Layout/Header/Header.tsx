import { Close } from "@mui/icons-material";
import {
  Box,
  Slide,
  SxProps,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useI18next } from "gatsby-plugin-react-i18next";
import { IconButton } from "gatsby-theme-material-ui";
import React from "react";
import { useWindowScroll } from "react-use";

import { useScrollBlock } from "../../../hooks/useBlockScroll";
import { FullScreenMenu } from "../../FullScreenMenu/FullScreenMenu";
import { BurgerMenu } from "../../Icons/BurgerMenu/BurgerMenu";
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
  const { y: scrollY } = useWindowScroll();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const { breakpoints, palette } = useTheme();
  const hasMediumResolution = useMediaQuery(breakpoints.up("md"));

  const handleOpenNavMenu = () => {
    setMenuOpen(true);
    blockScroll();
  };

  const handleCloseNavMenu = () => {
    allowScroll();
    setMenuOpen(false);
  };

  const handleToggleNavMenu = () => {
    if (isMenuOpen) {
      handleCloseNavMenu();
      return;
    }
    handleOpenNavMenu();
  };

  React.useEffect(() => {
    if (hasMediumResolution) {
      handleCloseNavMenu();
    }
  }, [hasMediumResolution]);

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

  const highResLinks = React.useMemo(
    () =>
      links.map(({ name, href }) => (
        <NavLink
          key={name}
          to={href}
          onClick={handleCloseNavMenu}
          sx={{ height: "100%", display: "flex", alignItems: "center", ml: 4 }}
        >
          {name}
        </NavLink>
      )),
    [links]
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          position="fixed"
          color="transparent"
          sx={{
            p: 1,
            zIndex: 2000,
            ...(hasMediumResolution && {
              pt: `calc(${introPadding} - 20px)`,
              px: introPadding,
              pb: "initial",
            }),
            ...(scrollY > 100 &&
              !isMenuOpen && {
                backdropFilter: "blur(20px)",
                borderBottom: `1px solid #ffffff0f`,
              }),
            ...sx,
          }}
        >
          <Toolbar disableGutters={hasMediumResolution}>
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
                onClick={handleToggleNavMenu}
                color="inherit"
              >
                {isMenuOpen ? (
                  <Close fontSize="large" />
                ) : (
                  <BurgerMenu fontSize="large" />
                )}
              </IconButton>
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignSelf: "stretch" }}
            >
              {highResLinks}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {isMenuOpen && (
        <FullScreenMenu links={links} onInternalNav={handleCloseNavMenu} />
      )}
    </>
  );
};
