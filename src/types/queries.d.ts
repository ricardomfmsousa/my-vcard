import { GatsbyImageProps } from "gatsby-plugin-image";

declare namespace QueryTypes {
  export interface SeoMetaData {
    site: {
      siteMetadata: {
        title: string;
        shortTitle: string;
        description: string;
        siteUrl: string;
        license: string;
        author: {
          name: string;
          github: string;
          strava: string;
          linkedIn: string;
          discord: string;
        };
      };
    };
    featuredImage: {
      childImageSharp: { gatsbyImageData: GatsbyImageProps };
    };
  }
}
