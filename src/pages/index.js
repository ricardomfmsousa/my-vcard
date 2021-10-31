import { Link } from "gatsby";
import React from "react";

import Earth3D from "../components/Earth3D/Earth3D";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Earth3D>
    <Layout>
      <Seo title="Home" />
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  </Earth3D>
);

export default IndexPage;
