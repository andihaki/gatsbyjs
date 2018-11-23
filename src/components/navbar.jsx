import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <div style={{ marginBottom: `1.5rem` }}>
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
                )}
            />
            
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">about</ListLink>
        </ul>
    </div>
)