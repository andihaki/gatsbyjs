import React from "react";

import styled from "styled-components";
import { NewTab } from "./svgShape";

const LinkStyled = styled.div`
    text-align: center;
    border-top: 0.025px solid #808080;
    padding-top: 1.5em;
`;

export default () => (
    <LinkStyled>Github<NewTab/> | Instagram<NewTab/> | Youtube<NewTab/> | Medium<NewTab/> | Unsplash<NewTab/></LinkStyled>
)