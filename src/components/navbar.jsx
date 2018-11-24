import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
// import BurgerMenu from "./burgerMenu";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

// const arrMenu = [1, 2, 3];
// let change = false;

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
                    // <BurgerMenu menu={arrMenu} change={change} onClick={!change}/>
                )}
            />
            
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">about</ListLink>
        </ul>
    </div>
)