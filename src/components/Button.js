import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  width: ${props => (props.login ? '62%' : '87%')};
  height: 50px;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff4136;
  border: 0;
  font-weight: 600;
  margin: ${props => (props.login ? '1.7rem' : '0.5rem 0')};

  
  @media (max-width: 320px) {
    width: ${props => (props.login ? '83%' : '87%')};
      }
    }
`;

export default function Button(props) {
	return (
		<MyButton onClick={props.onClick} login={props.login} type={props.type}>
			{props.text}
		</MyButton>
	);
}
