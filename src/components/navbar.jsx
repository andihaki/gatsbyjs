import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  text-shadow: none;
  background-image: none;
  color: #ffffff;
  text-decoration: none;

  &:hover,
  &:focus,
  &:visited  {
    text-decoration: none;
  }
`;

const NavBar = styled.div`
  margin-bottom: 1.5rem;

  position: relative;
  overflow: hidden;
`;

const RightNavBar = styled.ul`
  list-style: none;
  float: right;
  margin-top: 0;
`;

const PostHeader = styled.p`
  display: inline;
  ${props => props.isActive ? 
    `
      font-size: 1.5em;
      // font-size: 5vw;
      font-weight: bold;
    ` : 
    `
      opacity: 0.7;
      text-decoration: underline;

      &:hover,
      &:focus,
      &:visited {
        opacity: 1;
        text-decoration: none;
      }
    `};
`;

export default () => (
  <NavBar>
    <LinkStyled to="/" >
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <PostHeader isActive={typeof window !== "undefined" ? window.location.pathname.search("/blog") < 0 : true} >{data.site.siteMetadata.title}</PostHeader>
        )}
      />
    </LinkStyled>
    <RightNavBar>
      <LinkStyled to="/blog">
        {/* <PostHeader isActive={window.location.pathname === "/blog"} >blog</PostHeader> */}
        <PostHeader isActive={typeof window !== "undefined" ? window.location.pathname.search("/blog") >= 0 : true} >blog</PostHeader>
      </LinkStyled>
    </RightNavBar>
  </NavBar>
);
