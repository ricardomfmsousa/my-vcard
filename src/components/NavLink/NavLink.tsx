import { globalHistory } from "@gatsbyjs/reach-router";
import {
  Link as MuiLink,
  styled,
  SxProps,
  Tooltip,
  TooltipProps,
  useTheme,
} from "@mui/material";
import { withPrefix } from "gatsby";
import {
  Link as GatsbyI18nLink,
  ReactI18NextChild,
  useI18next,
} from "gatsby-plugin-react-i18next";
import React from "react";

import { languages } from "../../../i18n-config";

export interface NavLinkProps {
  children?: ReactI18NextChild | Iterable<ReactI18NextChild>;
  to: string;
  language?: "disable" | typeof languages[number];
  onClick?: (e: React.MouseEvent) => void;
  tooltipPlacement?: TooltipProps["placement"];
  tooltipText?: string;
  // Overrides default route match styling
  isActive?: boolean;
  sx?: SxProps;
  [rest: string]: unknown;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  language,
  onClick,
  isActive,
  tooltipPlacement = "bottom",
  tooltipText,
  sx,
  ...rest
}): JSX.Element => {
  const { palette } = useTheme();
  const location = globalHistory.location;
  const { defaultLanguage, i18n } = useI18next();
  const [shouldHighlight, setShouldHighlight] = React.useState(false);

  React.useEffect(() => {
    const prefixedHref = withPrefix(
      i18n.language === defaultLanguage ? to : `/${i18n.language}${to}`
    );
    const currentRoute = `${location.pathname}${location.hash}`;
    setShouldHighlight(
      isActive !== undefined ? isActive : prefixedHref === currentRoute
    );
  }, [location, isActive]);

  const handleOnClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (onClick) {
        onClick(e);
      }
    },
    [shouldHighlight]
  );

  const linkStyle = {
    textDecoration: "none",
    color: palette.text.primary,
    cursor: "pointer",
    ...(shouldHighlight && {
      fontWeight: "bold",
      textShadow: `0 0 1px ${palette.text.primary}`,
    }),
    ...(!shouldHighlight && {
      "&:hover": {
        color: palette.text.disabled,
      },
    }),
  };

  const StyledGatsbyI18nLink = styled(GatsbyI18nLink)(linkStyle);
  const href = withPrefix(to);

  return (
    <Tooltip title={tooltipText || ""} placement={tooltipPlacement}>
      {language === "disable" ? (
        <MuiLink
          href={href}
          onClick={handleOnClick}
          sx={{ ...linkStyle, ...sx }}
          {...rest}
        >
          {children}
        </MuiLink>
      ) : (
        <StyledGatsbyI18nLink
          to={to}
          language={language}
          onClick={handleOnClick}
          sx={sx}
          {...rest}
        >
          {children}
        </StyledGatsbyI18nLink>
      )}
    </Tooltip>
  );
};
