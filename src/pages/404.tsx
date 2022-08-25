import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { graphql, HeadFC, PageProps } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { NavLink } from "../components/NavLink/NavLink";

export const NotFoundPage: React.FC<PageProps> = ({ data }): JSX.Element => {
  const theme = useTheme();

  return (
    <BackgroundImage
      Tag="main"
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={theme.palette.background.default}
      style={{
        height: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backdropFilter: "blur(3px)",
          background: "rgba(0, 0, 0, 0.7)",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              p: { xs: 2, md: 5, lg: 10 },
            }}
          >
            <Typography
              variant="h1"
              sx={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.palette.action.selected,
                  fontSize: "0.5em",
                  fontWeight: "light",
                }}
              >
                404
              </Box>
              <br />
              <Box component="span">#Not</Box>
              <Box component="span" sx={{ wordSpacing: "-1em" }}>
                {" "}
              </Box>
              <Box component="span">Found</Box>
            </Typography>
            <br />
            <Divider sx={{ my: 3 }} />
            <Typography>
              <NavLink to="/">
                {"> "}
                <Trans>Go to the Home Page...</Trans>
              </NavLink>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </BackgroundImage>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

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
    desktop: file(relativePath: { eq: "light_bulb.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
