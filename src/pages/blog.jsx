import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Footer from "../components/footer";

const Title = styled.h4`
	margin: 0.5em 0 0 0;
`;

const Info = styled.small`
	font-size: 0.7em;
`;

const Excerpt = styled.p`
	margin: 0.3em 0 2.5em 0;
`;

export default ({ data}) => (
	<Layout>
		<h4>{data.allMarkdownRemark.totalCount} Posting</h4>
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<div key={node.id}>
				<Link to={node.fields.slug}>
					<Title>{node.frontmatter.title}</Title>
				</Link>
				<Info>{node.frontmatter.date} • bacaan {node.timeToRead} menit</Info>
				<Excerpt>{node.excerpt}</Excerpt>
			</div>
		))}

		<Footer />
	</Layout>
);

export const query = graphql`
	query {
		allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC },
				filter: { fileAbsolutePath: { regex: "/(blog)/" }}
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
					timeToRead
				}
			}
		}
	}
`;
