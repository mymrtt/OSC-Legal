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
  font-weight: 600;
  text-transform: ${props => (props.textTransform && 'uppercase')};


  @media(max-width: 768px){
    height: ${props => props.heightMobile};
		${props => props.orderMobile && css`
			width: 80%;
			position: fixed;
			bottom: 0;
			z-index: 2;
		`}
  }

  @media (max-width: 648px) {
    width: ${props => (props.widthMobile)};
    margin: ${props => (props.marginMobile)};
    padding: ${props => (props.paddingMobile)};
  }

  @media (max-width: 490px){
    width: ${props => (props.widthMobileSmall)};
    position: ${props => props.positionMb};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom}
  }
`;

const ButtonBack = styled.div`

	@media (max-width: 768px){
		width: 100%;
    background-color: #FFFFFF;
		border: none;
		padding: 3.5rem;
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
			widthMobile={props.widthMobile}
			widthMobileSmall={props.widthMobileSmall}
			height={props.height}
			heightMobile={props.heightMobile}
			fontSize={props.fontSize}
			padding={props.padding}
			paddingMobile={props.paddingMobile}
			margin={props.margin}
			marginMobile={props.marginMobile}
			textTransform={props.textTransform}
			orderMobile={props.orderMobile}
			positionMb={props.positionMb}
			right={props.right}
			left={props.left}
			bottom={props.bottom}
		>
			{props.text}
		</MyButton>
	</>
);

export default Button;
