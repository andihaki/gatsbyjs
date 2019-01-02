import React from "react";
import { graphql } from "gatsby";
// import { createGlobalStyle } from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";

import Typed from "../containers/typed";
import { Wave } from "../components/svgShape";
import Footer from "../components/footer";
import TechStack from "../components/techStack";


export default ({ data }) => (
	<Layout>
		<Header headerText={"About "+data.site.siteMetadata.title} />
		<Typed />

		<div>
			Masih tinggal di Jakarta, Indonesia.{" "}
			<u>
				(tersedia untuk kerja remote atau <em>overseas</em>)
			</u>
		</div>
		
		<Wave />

		<Footer/>

		<TechStack />
	</Layout>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
	}
	}
`