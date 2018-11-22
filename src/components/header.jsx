import React from "react"

import Navbar from "./navbar"

export default props => (
    <div>
        <Navbar />
        <h1>{ props.headerText }</h1>
    </div>
)