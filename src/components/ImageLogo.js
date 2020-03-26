// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import Logo from '../assets/logo.svg';

export const LogoImage = styled.img`
  width: ${props => (props.widthImage ? '130px' : '150px')};
  margin: ${props => props.margin};

`;

export default function ImageLogo(props) {
	return <LogoImage src={Logo} margin={props.margin} alt="Osc Logo" />;
}
