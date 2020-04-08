// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import Logo from '../assets/logo.svg';

const LogoImage = styled.img`
  width: ${props => props.width};
  margin: ${props => props.margin};

	@media(max-width: 648px) {
		margin: ${props => props.marginMobile};
	}
`;

const ImageLogo = props => (
	<LogoImage src={Logo}
		margin={props.margin}
		alt="Osc Logo"
		width={props.width}
	/>
);

export default ImageLogo;
