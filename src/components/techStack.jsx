import React from "react";
import styled from "styled-components";

import { NewTab } from "./svgShape";

const LinkStyled = styled.div`
	text-align: center;
`;

export default () => (
    <LinkStyled>
        <a href="https://gatsbyjs.org" rel="noopener noreferrer" target="_blank">GatsbyJS<NewTab/></a> |&nbsp;
        <a href="https://gitlab.com" rel="noopener noreferrer" target="_blank">GitLab CI/CD<NewTab/></a> |&nbsp;
        <a href="https://styled-components.com/" rel="noopener noreferrer" target="_blank">Styled Components<NewTab/></a>
    </LinkStyled>
)