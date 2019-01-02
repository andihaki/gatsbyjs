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
      background-color: ${props => props.darkPage ? 'black' : 'white'};
      color: ${props => props.darkPage ? 'white' : 'black'};
      font-family: 'header';
      margin: 0;
      padding: 0;
      font-size: 1.25em;
    }

    a:link {
      text-decoration: none;
      color: ${props => props.darkPage ? 'white' : 'black'};
    }
    a:visited {
      text-decoration: none;
      color: ${props => props.darkPage ? 'white' : 'black'};
    }
    a:hover {
      text-decoration: underline;
      color: ${props => props.darkPage ? 'white' : 'black'};
    }

    html{
      max-width: ${props => props.darkPage ? null : '750px'};
      margin: 0 auto;
      padding: 0 2rem;
    }
`;

const Grid = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;


export default ({ children }) => (
  <Grid>
    <GlobalStyle
      darkPage={window.location.pathname.search("blog") < 0}
      suppressMultiMountWarning 
      />
    <Navbar />
    {children}
  </Grid>
);
