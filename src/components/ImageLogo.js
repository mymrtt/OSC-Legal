// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import Logo from '../assets/logo.svg';

const LogoImage = styled.img`
  width: ${props => props.width};
  margin: ${props => props.margin};
	height: ${props => props.height};

	@media(max-width: 768px){
		margin: ${props => props.marginMobile};
	}

	@media(max-width: 648px) {
		height: ${props => props.heightMobile};
		padding-top: ${props => props.paddingMobile};
		margin: ${props => props.marginMobile};
		display: ${props => props.displayMobile};
	}
`;

const ImageLogo = props => (
	<LogoImage src={Logo}
		alt="Osc Logo"
		width={props.width}
		height={props.height}
		heightMobile={props.heightMobile}
		displayMobile={props.displayMobile}
		paddingMobile={props.paddingMobile}
		margin={props.margin}
		marginMobile={props.marginMobile}
	/>
);

export default ImageLogo;
