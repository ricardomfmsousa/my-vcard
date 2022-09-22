import * as dotenv from "dotenv";

import { defaultLanguage, languages, translationPath } from "./i18n-config";

import type { GatsbyConfig } from "gatsby";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const siteMetadata = {
  title: "Ricardo Sousa's vCard",
  shortTitle: "RS vCard",
  description: "Ricardo Sousa's presentation website",
  siteUrl: "https://ricardomfmsousa.github.io/my-vcard/",
  license:
    "https://raw.githubusercontent.com/ricardomfmsousa/my-vcard/main/LICENSE",
  author: {
    name: "Ricardo Sousa",
    github: "https://github.com/ricardomfmsousa",
    strava: "https://strava.com/athletes/ricardomfmsousa",
    linkedIn: "https://www.linkedin.com/in/ricardomfmsousa",
    discord: "https://discordapp.com/users/377100083990102016",
  },
};

const config: GatsbyConfig = {
  pathPrefix: "/my-vcard",
  siteMetadata,
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-theme-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortTitle,
        start_url: "/",
        background_color: "#020202",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: translationPath,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        // Name given to `gatsby-source-filesystem` plugin.
        localeJsonSourceName: `locale`,
        languages,
        defaultLanguage,
        siteUrl: siteMetadata.siteUrl,
        trailingSlash: "always",
        // Pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
          fallbackLng: false,
          generateDefaultLanguagePage: true,
        },
        pages: [
          {
            matchPath: "/preview",
            languages: ["en"],
          },
        ],
      },
    },
  ],
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GTM_ID}`,
  ],
};

export default config;
