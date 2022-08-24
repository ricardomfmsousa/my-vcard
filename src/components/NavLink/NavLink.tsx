import { globalHistory } from "@gatsbyjs/reach-router";
import { useTheme } from "@mui/material";
import {
  Link,
  ReactI18NextChild,
  useI18next,
} from "gatsby-plugin-react-i18next";
import React from "react";

export interface NavLinkProps {
  children?: ReactI18NextChild | Iterable<ReactI18NextChild>;
  to: string;
  language?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  language,
  style,
  onClick,
  isActive,
}): JSX.Element => {
  const theme = useTheme();
  const location = globalHistory.location;
  const { defaultLanguage, i18n } = useI18next();
  const [isHovering, setIsHovering] = React.useState(false);

  const currentRoute: string = React.useMemo(
    () => `${location.pathname}${location.hash}`,
    [location]
  );

  const localeHref: string = React.useMemo(
    () => (i18n.language === defaultLanguage ? to : `/${i18n.language}${to}`),
    [location]
  );

  let shouldHighlight = localeHref === currentRoute;

  if (isActive !== undefined) {
    // Override default behaviour
    shouldHighlight = isActive;
  }

  const handleOnClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (shouldHighlight) {
        e.preventDefault();
      }
      if (onClick) {
        onClick(e);
      }
    },
    [shouldHighlight]
  );

  return (
    <Link
      to={to}
      language={language}
      onClick={handleOnClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        color:
          !shouldHighlight && isHovering
            ? theme.palette.text.disabled
            : theme.palette.text.primary,
        textDecoration: "none",
        cursor: shouldHighlight ? "default" : "pointer",
        ...(shouldHighlight && {
          fontWeight: "bold",
          textShadow: `0 0 1px ${theme.palette.text.primary}`,
        }),
        ...style,
      }}
    >
      {children}
    </Link>
  );
};
