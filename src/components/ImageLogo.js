// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import Logo from '../assets/logo.svg';

export const LogoImage = styled.img`
  width: ${props => (props.loginScreen ? '110px' : '180px')};
  margin: ${props => (props.loginScreen ? '3rem' : '1.5rem 0')};

`;

export default function ImageLogo(props) {
	return <LogoImage src={Logo} loginScreen={props.loginScreen} alt="Osc Logo" />;
}
