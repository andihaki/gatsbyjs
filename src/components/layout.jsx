import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./navbar";
import { withPrefix } from "gatsby";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'header';
      src: url('${withPrefix('/font/bariol_regular-webfont.ttf')}');
    }

    @font-face {
      font-family: 'body';
      src: url('${withPrefix('/font/raleway_thin-webfont.ttf')}');
    }

    body {
      background-color: black;
      color: white;
      font-family: 'header';
      margin: 0;
      padding: 0;
      font-size: 1.25em;
    }
`;

const Grid = styled.div`
  margin: 0 auto;
  // max-width: 750px;
  padding: 0 2rem;
`;


export default ({ children }) => (
  <Grid>
    <GlobalStyle />
    <Navbar />
    {children}
  </Grid>
);
