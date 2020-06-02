// Libs
import React from 'react';
import styled, { css } from 'styled-components';

const MyButton = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : '3.5rem')};
  background-color: #FF4136;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 6px #00000029;
  color: #FFFFFF;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-family: Overpass, Bold;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
	text-transform: ${props => (props.textTransform && 'uppercase')};
	letter-spacing:  ${props => props.letterSpacing};

	@media(max-width: 1024px){
		width: ${props => props.widthMedium};
	}

  @media(max-width: 768px){
		width: ${props => props.widthTablet};
    height: ${props => props.heightMobile};
		${props => props.orderMobile && css`
			width: 90%;
			/* margin: 0 4.5rem 1.2rem; */
			position: fixed;
			bottom: 0;
			z-index: 2;
		`}
  }

  @media (max-width: 648px) {
    width: ${props => (props.widthMobile)};
    margin: ${props => (props.marginMobile)};
    padding: ${props => (props.paddingMobile)};
		position: ${props => props.positionMobile};
		left: ${props => props.leftMobile};
    right: ${props => props.rightMobile};
    bottom: ${props => props.bottomMobile};
		font-size: ${props => props.fontSizeMobile};
  }

  @media (max-width: 490px){
    width: ${props => (props.widthMobileSmall)};
		margin: ${props => (props.marginMobileSmall)};
    position: ${props => props.positionMb};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
	}
`;

const ButtonBack = styled.div`

	@media (max-width: 768px){
		width: 100%;
    background-color: #FFFFFF;
		border: none;
		padding: 4rem;
		position: fixed;
		bottom: 0;
		z-index: 1;
  }
`;

const Button = props => (
	<>
		{props.organizationMobile && <ButtonBack></ButtonBack>}
		<MyButton
			onClick={props.onClick}
			type={props.type}
			width={props.width}
			widthMedium={props.widthMedium}
			widthTablet={props.widthTablet}
			widthMobile={props.widthMobile}
			widthMobileSmall={props.widthMobileSmall}
			height={props.height}
			heightMobile={props.heightMobile}
			fontSize={props.fontSize}
			padding={props.padding}
			paddingMobile={props.paddingMobile}
			margin={props.margin}
			marginMobile={props.marginMobile}
			marginMobileSmall={props.marginMobileSmall}
			textTransform={props.textTransform}
			orderMobile={props.orderMobile}
			positionMb={props.positionMb}
			positionMobile={props.positionMobile}
			right={props.right}
			left={props.left}
			bottom={props.bottom}
			rightMobile={props.rightMobile}
			leftMobile={props.leftMobile}
			bottomMobile={props.bottomMobile}
			fontSizeMobile={props.fontSizeMobile}
			fontWeight={props.fontWeight}
			letterSpacing={props.letterSpacing}


			background={props.background}
		>
			{props.text}
		</MyButton>
	</>
);

export default Button;
