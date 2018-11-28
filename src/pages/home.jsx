import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        color: white;
    }
`;

const Jobs = styled.h3`
  color: green;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header headerText="Home Page" />
        <Jobs>
          Seorang <em>Software Engineer</em>
        </Jobs>

        <div>
          <em>Agnostic software engineer, which is</em> mengerti backEnd,
          frontEnd & sedikit devOps.
        </div>

        <div>
          Masih tinggal di Jakarta, Indonesia.{" "}
          <u>
            (tersedia untuk kerja remote atau <em>overseas</em>)
          </u>
        </div>

        <div>Social Media</div>

        <div />
      </div>
    );
  }
}

export default Home;
