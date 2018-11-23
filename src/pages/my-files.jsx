import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
    <Layout>
        <div>
            <h1>File di server ini:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Lokasi</th>
                        <th>Ukuran</th>
                        <th>Format</th>
                        <th>Dibuat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Layout>
)


export const query = graphql`
    {
        allFile {
        edges {
            node {
                relativePath
                prettySize
                extension
                birthTime(fromNow: true)
            }
        }
        }
    }
`;