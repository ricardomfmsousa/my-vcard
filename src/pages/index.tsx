import { useLocation } from "@reach/router";
import * as React from "react";

import { Footer } from "../components/Layout/Footer/Footer";
import { Header } from "../components/Layout/Header/Header";
import { Intro } from "../components/Sections/Intro/Intro";

import type { HeadFC } from "gatsby";

const IndexPage = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = React.useState<string>();

  React.useEffect(() => {
    setCurrentRoute(`${location.pathname}${location.hash}`);
  }, [location]);

  const headerLinks = [
    { name: "About", href: "/#about" },
    { name: "Resume", href: "/#resume" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const introPadding = "50px";

  return (
    <>
      <Header
        links={headerLinks}
        currentRoute={currentRoute}
        introPadding={introPadding}
      />
      <Intro introPadding={introPadding} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
