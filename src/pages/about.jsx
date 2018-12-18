import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

import Typed from "../containers/typed";
import { Wave } from "../components/svgShape";

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

        <div>Social Media</div>
        <div>Github | Instagram | Youtube | Medium | Unsplash</div>

        <div>Website ini dibangun dengan:</div>
        <div>GatsbyJS | ReactJs | GraphQL | GitLab Pages</div>
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