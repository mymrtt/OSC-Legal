import React from 'react';
import styled from 'styled-components';

export const MyButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  color: #fff;
  background-color: #ff4136;
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  font-family: Overpass, Bold;
  font-size: 0.9rem;
  box-shadow: 0 3px 6px #00000029;
  text-transform: uppercase;
  
  @media (max-width: 648px) {
    width: ${props => (props.login ? '90%' : '100%')};
  }

  @media (max-width: 490px) {
    width: ${props => (props.login ? '90%' : '100%')};
  }
  
  @media (max-width: 320px) {
    width: ${props => (props.login ? "83%" : "100%")};
  }
    
`;

export default function Button(props) {
  return (
    <MyButton onClick={props.onClick} login={props.login} type={props.type} width={props.width} height={props.height} margin={props.margin}>
      {props.text}
    </MyButton>
  );
}
