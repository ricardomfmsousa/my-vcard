import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";

import { Footer } from "../components/Layout/Footer/Footer";
import { Header } from "../components/Layout/Header/Header";
import { Intro } from "../components/Sections/Intro/Intro";

export const IndexPage: React.FC<PageProps> = (): JSX.Element => {
  const introPadding = "50px";

  return (
    <>
      <Header introPadding={introPadding} />
      <Intro introPadding={introPadding} />
      <Footer />
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
