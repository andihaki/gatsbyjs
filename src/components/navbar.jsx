import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const NavBar = styled.div`
  margin-bottom: 1.5rem;

  position: relative;
  overflow: hidden;
`;

const Shape = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(-6deg);
  transform-origin: top left;
  z-index: -999;
`;

export default () => (
  <NavBar>
    <Shape />
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
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
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          // <BurgerMenu menu={arrMenu} change={change} onClick={!change}/>
        )}
      />
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Index</ListLink>
      <ListLink to="/home">Home</ListLink>
      <ListLink to="/about">about</ListLink>
    </ul>
  </NavBar>
);
