import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: Overpass, Bold;
  border: 0;
  border-radius: 5px;
  background-color: #ff4136;
  box-shadow: 0 3px 6px #00000029;
  text-transform: uppercase;
  
  ${'' /* @media (max-width: 648px) {
    width: ${props => (props.login ? '90%' : '100%')};
  }

  @media (max-width: 490px) {
    width: ${props => (props.login ? '90%' : '100%')};
  }
  
  @media (max-width: 320px) {
    width: ${props => (props.login ? '83%' : '100%')};
  } */}
    
`;

export default function Button(props) {
	return (
		<MyButton onClick={props.onClick} login={props.login} type={props.type} width={props.width} height={props.height} margin={props.margin}>
			{props.text}
		</MyButton>
	);
}
