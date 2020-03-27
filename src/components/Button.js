import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: 3.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  font-family: Overpass, Bold;
  border: 0;
  border-radius: 3px;
  background-color: #ff4136;
  box-shadow: 0 3px 6px #00000029;
  text-transform: uppercase;

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

export default function Button(props) {
	return (
		<MyButton
			onClick={props.onClick}
			type={props.type}
			width={props.width}
			widthMobile={props.widthMobile}
			widthMobileSmall={props.widthMobileSmall}
			margin={props.margin}
			marginMobile={props.marginMobile}
			padding={props.padding}
			paddingMobile={props.paddingMobile}
		>
			{props.text}
		</MyButton>
	);
}
