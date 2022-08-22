import { Box, Menu, MenuItem, SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "gatsby-theme-material-ui";
import React from "react";

import { BurgerMenu } from "../../Icons/BurgerMenu/BurgerMenu";

export interface HeaderProps {
  links: { name: string; href: string }[];
  currentRoute: string | undefined;
  introPadding: string;
  sx?: SxProps;
}

export const Header: React.FC<HeaderProps> = ({
  links,
  currentRoute,
  sx,
  introPadding,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  const CustomLink: React.FC<{ name: string; href: string }> = ({
    name,
    href,
  }) => (
    <Link
      key={name}
      to={href}
      onClick={handleCloseNavMenu}
      sx={{
        textDecoration: "none",
        color: "inherit",
        ...(href === currentRoute && {
          borderBottom: "1px solid rgb(255 255 255 / 50%)",
          borderRadius: "2px",
          boxShadow: "0 7px 7px -7px rgb(255 255 255 / 50%)",
        }),
      }}
    >
      {name}
    </Link>
  );

  const lowResLinks = React.useMemo(
    () =>
      links.map((link) => (
        <MenuItem key={link.name} onClick={handleCloseNavMenu}>
          <Typography>{CustomLink(link)}</Typography>
        </MenuItem>
      )),
    [links, currentRoute]
  );

  const highResLinks = React.useMemo(
    () =>
      links.map((link) => (
        <Typography sx={{ ml: 4 }}>{CustomLink(link)} </Typography>
      )),
    [links, currentRoute]
  );

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="transparent"
      sx={{
        backdropFilter: "blur(20px)",
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
          component="a"
          href="/"
          sx={{ ...headerLogo.sx, display: { xs: "none", md: "flex" } }}
        >
          {headerLogo.text}
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

        <Box sx={{ display: { xs: "flex", md: "none" }, marginRight: "-12px" }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <BurgerMenu fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {lowResLinks}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>{highResLinks}</Box>
      </Toolbar>
    </AppBar>
  );
};
