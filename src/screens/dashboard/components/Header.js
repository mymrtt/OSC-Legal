// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';

const Container = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  color: #231F20;
  font-family: Overpass, Light;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
  text-transform: uppercase;
  opacity: 1;
`;

// const Form = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;

// `;

const ParagraphContainer = styled.p`
  margin-top: 1.2rem;
  font-size: 1.375rem;
  &:hover {
    font-weight: 600;
    text-decoration: underline;
    margin-bottom: 0.5rem;
    font-family: Overpass, ExtraBold;
  }
 
`;

const ContainerAdm = styled.div`
  width: 30%;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  font-size: 1.25rem;
`;

const ParagraphSair = styled.p`
  color: #85144B;
  font-family: Overpass, SemiBold;
  opacity: 1;
`;

const Hr = styled.hr`
  width: 100%;
  background-color: #707070;
  display: flex;
  flex-direction: column;
`;

export default class Header extends Component {
	render() {
		return (
			<div>
				<Container>
          {/* <Form> */}
					<ImageLogo/>
            <ParagraphContainer>organizações</ParagraphContainer>
            <ParagraphContainer>documentos</ParagraphContainer>
          {/* </Form> */}
					<ContainerAdm>
						<ParagraphContainer>administrador</ParagraphContainer>
						<ParagraphSair>sair</ParagraphSair>
					</ContainerAdm>
				</Container>
				<Hr/>
			</div>
		);
	}
}

// export default Header;
