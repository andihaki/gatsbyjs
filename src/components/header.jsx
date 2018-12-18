import React from "react";
import styled from 'styled-components';

const Header = styled.h1`
	text-decoration: none;  
`;

export default props => <Header>{props.headerText}</Header>;
