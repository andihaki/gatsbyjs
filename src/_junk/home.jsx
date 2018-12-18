import React from "react";
// import styled from "styled-components";
// import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";
import {Wave} from "../components/svgShape";

import Typed from "../containers/typed";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header headerText="Home Page" />

        <Typed />

        <div>
          Masih tinggal di Jakarta, Indonesia.{" "}
          <u>
            (tersedia untuk kerja remote atau <em>overseas</em>)
          </u>
        </div>


        
        <Wave />

        <div>Social Media</div>
        <div>Github | Instagram | Youtube | Medium | Unsplash</div>

        <div>Website ini dibangun dengan:</div>
        <div>GatsbyJS | ReactJs | GraphQL | GitLab Pages</div>

        <div />
      </Layout>
    );
  }
}

export default Home;
