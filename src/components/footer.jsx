import React from "react";
import styled from "styled-components";
import { NewTab } from "./svgShape";

const LinkStyled = styled.div`
	text-align: center;
	padding-top: 1.5em;
`;

export default () => (
    <LinkStyled>
        <a href="https://github.com/andihaki" rel="noopener noreferrer" target="_blank">Github<NewTab/></a> |&nbsp;
        <a href="https://instagram.com/andihaki" rel="noopener noreferrer" target="_blank">Instagram<NewTab/></a> |&nbsp; 
        <a href="https://youtube.com/andihaki" rel="noopener noreferrer" target="_blank">Youtube<NewTab/></a> |&nbsp;
        <a href="https://medium.com/@andihaki" rel="noopener noreferrer" target="_blank">Medium<NewTab/></a> |&nbsp;
        <a href="https://unsplash.com/@andihaki" rel="noopener noreferrer" target="_blank">Unsplash<NewTab/></a>
    </LinkStyled>
)
