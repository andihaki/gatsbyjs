import React from "react";
import styled from "styled-components";

import Header from "../components/header";

const Content = styled.div`
  background-color: black;
  height: 100%;
  margin: 0 auto -65px;
`;

const Jobs = styled.h3`
  color: green;
`;

class Home extends React.Component {
  render() {
    return (
      <Content>
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
      </Content>
    );
  }
}

export default Home;
