import React from "react";

import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
// import Header from "../components/header";
import Footer from "../components/footer";
import Typed from "../containers/typed";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  &:after {
    content: "";
    height: 5px;
    left: 0;
    bottom: 20;
    width: 1px;
    position: absolute;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    right: 0;
    margin: 0 auto;
  }

  &:hover:after, 
  &:focus:after,
  &:active:after{
    width: 91%; /* fallback */
    width: calc(100% - 8rem);
    background-color: #fff; /* fallback */
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    color:transparent;
  }
`;

const DateStyled = styled.span`
  color: #bbb;
`;

const BorderTop = styled.div`
  border-top: 0.025px solid #808080;
  text-align: center;
  ${props => props.lastItem ? 'border-bottom: 0.025px solid #808080;' : null}
`;

const Title = styled.h3`
text-decoration: none;
  // &:hover {
  //   background: #f09433; 
  //   background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  //   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  //   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  //   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  //   color:transparent;
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-transition: all 1s ease;
  //   -moz-transition: all 1s ease;
  //   -ms-transition: all 1s ease;
  //   -o-transition: all 1s ease;
  //   transition: all 1s ease;
  // }
`;

export default ({ data }) => (
  <Layout>
    <Typed />
    {/* <Header headerText="Portofolio" /> */}
    
    <h4>{data.allMarkdownRemark.totalCount} Posting</h4>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <BorderTop key={node.id} lastItem={parseInt(data.allMarkdownRemark.totalCount)-1 === parseInt(index)}>
        <LinkStyled to={node.fields.slug}>
          <Title>
            {node.frontmatter.title}{" "}
            <DateStyled> - {node.frontmatter.date.split(" ")[2]}</DateStyled>
          </Title>
        </LinkStyled>
      </BorderTop>
    ))}
    
   <Footer />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: { fileAbsolutePath: { regex: "/(pages)/"}} 
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
