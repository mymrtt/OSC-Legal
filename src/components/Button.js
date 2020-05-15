// Libs
import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : '3.5rem')};
  color: #FFFFFF;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: 600;
  font-family: Overpass, Bold;
  border: 0;
  border-radius: 3px;
  background-color: #FF4136;
  box-shadow: 0 3px 6px #00000029;
  text-transform: ${props => (props.textTransform && 'uppercase')};

  @media(max-width: 768px){
    height: ${props => props.heightMobile};
  }

  @media (max-width: 648px) {
    width: ${props => (props.widthMobile)};
    margin: ${props => (props.marginMobile)};
    padding: ${props => (props.paddingMobile)};
  }

  @media (max-width: 490px){
    width: ${props => (props.widthMobileSmall)};
  }
`;

const Button = props => (
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
	>
		{props.text}
	</MyButton>
);

export default Button;
