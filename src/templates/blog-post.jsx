// ambil data dari markdown (.md)
// trus di render
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

// import {Wave} from "../components/svgShape";
const Header = styled.h1`
    // font-size: 4vw;
`;

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <Header>{post.frontmatter.title}</Header>
                {/* <Wave /> */}
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`;