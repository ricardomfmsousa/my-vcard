import { defaultLanguage, languages, translationPath } from "./i18n-config";

import type { GatsbyConfig } from "gatsby";
const siteUrl = "https://ricardomfmsousa.github.io/my-vcard/";

const config: GatsbyConfig = {
  pathPrefix: "/my-vcard",
  siteMetadata: {
    title: "Ricardo Sousa's vCard",
    siteUrl,
    license:
      "https://raw.githubusercontent.com/ricardomfmsousa/my-vcard/main/LICENSE",
    author: {
      name: "Ricardo Sousa",
      github: "https://github.com/ricardomfmsousa",
      strava: "https://strava.com/athletes/ricardomfmsousa",
      linkedIn: "https://www.linkedin.com/in/ricardomfmsousa",
      discord: "https://discordapp.com/users/377100083990102016",
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "3989290945",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ricardo Sousa's presentation website",
        short_name: "vCard",
        start_url: "/",
        background_color: "#663399",
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
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages,
        defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
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
};

export default config;
