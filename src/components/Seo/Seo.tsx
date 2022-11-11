import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { languages } from "../../../i18n-config";
import { QueryTypes } from "../../types/queries";

type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};

export type SeoProps = {
  description?: string;
  title?: string;
  keywords?: string;
  featuredImage?: ImageDataType;
};

export const Seo: React.FC<SeoProps> = (props) => {
  const { i18n } = useTranslation();
  const { site, featuredImage } =
    useStaticQuery<QueryTypes.SeoMetaData>(graphql`
      query SeoMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        featuredImage: file(absolutePath: { glob: "**/src/images/icon.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `);

  const title = props.title ?? site.siteMetadata.title;
  const description = props.description ?? site.siteMetadata.description;
  const location = useLocation();
  const ogImage =
    props.featuredImage ??
    (featuredImage?.childImageSharp
      ?.gatsbyImageData as unknown as ImageDataType);
  const ogLanguages = languages
    .filter((lang) => lang !== i18n.language)
    .map((lang) => ({ name: "og:locale:alternate", content: lang }));

  const metaData = [
    { name: "description", content: description },
    { name: "og:image", content: ogImage.images.fallback.src },
    { name: "og:image:width", content: `${ogImage.width}` },
    { name: "og:image:height", content: `${ogImage.height}` },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:site_name", content: site.siteMetadata.title },
    {
      name: "og:url",
      content: `${site.siteMetadata.siteUrl}${location.pathname}`,
    },
    { name: "og:locale", content: i18n.language },
    ...ogLanguages,
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:image", content: ogImage.images.fallback.src },
  ];

  if (props.keywords) {
    metaData.push({ name: "keywords", content: props.keywords });
  }

  const metaTags = React.useMemo(
    () =>
      metaData.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      )),
    [props, site, featuredImage]
  );

  return (
    <Helmet>
      <html lang={i18n.language} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {metaTags}
    </Helmet>
  );
};
