import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  text-shadow: none;
  background-image: none;
  color: #ffffff;
  text-decoration: none;
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

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;

  a:link {
    text-decoration: none;
    color: white;
  }
  a:visited {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
    color: white;
  }
`;

const PostHeader = styled.h3`
  display: inline;
`;

const ListLink = props => (
  <Li>
    <Link to={props.to}>{props.children}</Link>
  </Li>
);

// const Shape = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   // background-image: linear-gradient(#ff9d2f, #ff6126);
//   background-color: #fff;
//   transform: skewY(-3.5deg);
//   transform-origin: top left;
//   z-index: -999;
// `;

export default () => (
  <NavBar>
    {/* <Shape /> */}
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
          <PostHeader>{data.site.siteMetadata.title}</PostHeader>
        )}
      />
    </LinkStyled>
    <RightNavBar>
      <ListLink to="/about">about</ListLink>
    </RightNavBar>
  </NavBar>
);
