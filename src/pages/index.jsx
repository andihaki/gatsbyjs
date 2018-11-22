import React from "react"
import { withPrefix } from "gatsby"

import Header from "../components/header"

export default () => (
    <div style={{ color: `green` }}>
        <Header headerText="Home Page" />
        <p>Ok</p>
        <img src={withPrefix('img/photo.jpeg')} alt="photos"/>
    </div>
)
