import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";

import { Footer } from "../components/Layout/Footer/Footer";
import { Header } from "../components/Layout/Header/Header";
import { ScrollTop } from "../components/ScrollTop/ScrollTop";
import { About } from "../components/Sections/About/About";
import { Contact } from "../components/Sections/Contact/Contact";
import { Intro } from "../components/Sections/Intro/Intro";
import { Resume } from "../components/Sections/Resume/Resume";
import { useScrollSpy } from "../hooks/useScrollSpy/useScrollSpy";

export const IndexPage: React.FC<PageProps> = (): JSX.Element => {
  const introPadding = "50px";
  const footerPadding = "48px";
  const sections = [
    <Intro key="intro" introPadding={introPadding} />,
    <About key="about" />,
    <Resume key="resume" />,
    <Contact key="contact" />,
  ];

  const sectionRefs = sections.map(() => React.useRef<HTMLElement>(null));
  const [activeElementId] = useScrollSpy(sectionRefs, {
    onActiveElement: (id: string) => history.replaceState(null, "", `#${id}`),
  });

  return (
    <>
      <Header introPadding={introPadding} activeSectionId={activeElementId} />
      <main>
        {sections.map((section: JSX.Element, i) =>
          React.cloneElement(section, {
            ref: sectionRefs[i],
            variant: i % 2 ? "lighter" : "darker",
            // TODO: implement isOnViewport on all section components
            // isOnViewport: activeElementId === sectionRefs[i]?.current?.id,
          })
        )}
      </main>
      <Footer />
      <ScrollTop right={introPadding} bottom={footerPadding} />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
