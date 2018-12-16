import React from "react";
// import styled from "styled-components";
// import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";

import Typed from "../containers/typed";

// const GlobalStyle = createGlobalStyle`
//     body {
//         background-color: black;
//         color: white;
//     }
// `;

// const WaveSpan = styled.span`
//   position: relative;
//   height: 70px;
//   width: 600px;
//   background: #e0efe3;

//   &:before {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 340px;
//     height: 80px;
//     background-color: white;
//     right: -5px;
//     top: 40px;
//   }

//   &:after {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 300px;
//     height: 70px;
//     background-color: #e0efe3;
//     left: 0;
//     top: 27px;
//   }
// `;

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header headerText="Home Page" />
        {/* <WaveSpan /> */}
        <Typed />

        <div>
          Masih tinggal di Jakarta, Indonesia.{" "}
          <u>
            (tersedia untuk kerja remote atau <em>overseas</em>)
          </u>
        </div>

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
