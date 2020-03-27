import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: 3.5rem;
  color: #fff;
  font-size: 0.9rem;
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
  }

  @media (max-width: 488px){
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
			heightMobile={props.heightMobile}
			margin={props.margin}
			marginMobile={props.marginMobile}
			padding={props.padding}
		>
			{props.text}
		</MyButton>
	);
}
