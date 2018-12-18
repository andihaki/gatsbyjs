import React from "react";

import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
// import Header from "../components/header";
import Footer from "../components/footer";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const DateStyled = styled.span`
  color: #bbb;
`;

const BorderTopBottom = styled.div`
  border-top: 0.025px solid #808080;
  text-align: center;
`;

export default ({ data }) => (
  <Layout>
    {/* <Header headerText="Home Page" /> */}
    
    <h4>{data.allMarkdownRemark.totalCount} Posting</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BorderTopBottom key={node.id}>
        <LinkStyled to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <DateStyled> - {node.frontmatter.date}</DateStyled>
          </h3>
          {/* <p>{node.excerpt}</p> */}
        </LinkStyled>
      </BorderTopBottom>
    ))}
   <Footer />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
