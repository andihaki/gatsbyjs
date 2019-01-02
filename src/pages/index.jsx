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
`;

const DateStyled = styled.span`
  color: #bbb;
`;

const BorderTop = styled.div`
  border-top: 0.025px solid #808080;
  text-align: center;
  ${props => props.lastItem ? 'border-bottom: 0.025px solid #808080;' : null}
`;

export default ({ data }) => (
  <Layout>
    <Typed />
    {/* <Header headerText="Portofolio" /> */}
    
    <h4>{data.allMarkdownRemark.totalCount} Posting</h4>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <BorderTop key={node.id} lastItem={parseInt(data.allMarkdownRemark.totalCount)-1 === parseInt(index)}>
        <LinkStyled to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <DateStyled> - {node.frontmatter.date.split(" ")[2]}</DateStyled>
          </h3>
          {/* <p>{node.excerpt}</p> */}
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
