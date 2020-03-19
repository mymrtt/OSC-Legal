import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  width: ${props => (props.login ? '75%' : '87%')};
  height: 50px;
  color: #fff;
  background-color: #ff4136;
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  margin: 1.5rem 0;
  font-family: Overpass, Bold;
  box-shadow: 0 3px 6px #00000029;
  margin: ${props => (props.login ? '1.7rem' : '1.5rem 0')};
  text-transform: uppercase;
  margin: ${props => (props.login ? '1.7rem' : '0.5rem 0')};
  font-family: Overpass, Bold;
  
  @media (max-width: 648px) {
    width: ${props => (props.login ? '90%' : '87%')};
  }

  @media (max-width: 490px) {
    width: ${props => (props.login ? '100%' : '87%')};
  }
`;

export default function Button(props) {
	return (
		<MyButton onClick={props.onClick} login={props.login} type={props.type}>
			{props.text}
		</MyButton>
	);
}
