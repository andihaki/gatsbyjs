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
  color: yellow;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header headerText="Home Page" />
        <Jobs>
          Seorang <em>Agnostic Software Engineer</em>
        </Jobs>
        <Jobs>
          Seorang insinyur perangkat lunak <strike>pengennya</strike> serba bisa
        </Jobs>
        <Jobs>
          Seorang yang coba fokus sebagai <em>FrontEnd Developer</em>
        </Jobs>
        <Jobs>Seorang buta warna parsial 8-)</Jobs>
        <Jobs>Seorang bernama Andi Hakim</Jobs>

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
      </div>
    );
  }
}

export default Home;
