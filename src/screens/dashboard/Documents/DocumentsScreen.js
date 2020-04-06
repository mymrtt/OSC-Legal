// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
`;

const InputSearch = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Model = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: Overpass-Black;
  font-weight: 600;
  margin-left: 5.5rem;
  
`;

const Span = styled.span`
  width: 30%;
  margin-top: 0.5rem;
  margin-right: 4.2rem;
`;

const Label = styled.label`
  color: #231F20;
  font-size: 1.375rem;
  font-family: Overpass, Bold;
  margin-right: 0.8rem;
`;

const Input = styled.input`
  width: 68%;
  border: 0.5px solid #85144B;;
  border-radius: 3px;
  padding: 0.7rem;
`;

const Title = styled.h2`
  color: #85144B;
  font-family: Overpass-Black;
`;

const Paragraph = styled.h2`
  width: 40%;
  font-size: 1.5rem;
  font-family: Overpass-Regular;
`;

const Button = styled.button`
  width: 15%;
  height: 7vh;
  background-color: #FF4136;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 6px #00000029;
  color: #fff;
  font-size: 1.2rem;
`;


class DocumentsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	// class Documents extends Component {

	render() {
		return (
			<Container>
				<Header/>
				<InputSearch>
					<Model>Modelos de Documentos</Model>
					<Span>
						<Label>Pesquisar</Label>
						<Input
						/* type="pesquisa"
            onChange={this.handleChange} */
							placeholder="Digite aqui para pesquisar"
						/>
					</Span>
				</InputSearch>
				<div>
					<Button>Adicionar Modelo</Button>
				</div>
				{/* <div>
					<Title> 1 Modelo Estatuto Associação </Title>
					<Paragraph>Documentação básica de uma associação,
          deve-se atentar para questões como a possibilidade de remuneração dos
          associados e dirigentes, tempo de mandato, organização interna etc.</Paragraph>
					<Title>2 Modelo Estatuto para Grupo de capoeira</Title>
					<Paragraph>Documentação básica de uma associação, deve-se atentar para questões como
          a possibilidade de remuneração dos associados e dirigentes, tempo de mandato,
          organização interna etc.</Paragraph>
					<Title>3 Modelo Estatuto Fundação</Title>
					<Paragraph>  Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações
          relacionadas à dotação inicial de bens, além daquelas eventualmente
          sugeridas pelo Ministério Público. </Paragraph>
					<Title>4 Modelo Estatuto Associação</Title>
					<Paragraph>Organização da Sociedade Civil de Interesse Público (OSCIP).
          documentação básica de associação, cumprindo as exigências da
          Lei nº 9.790/1999 para qualificação como OSCIP. </Paragraph>
					<Title>5 Modelo Ata Assembleia de Constituição Associação </Title>
					<Paragraph>Modelo de ata de Assembleia específica para constituição de Associação,
          com a aprovação do estatuto e eleição dos cargos diretivos. </Paragraph>
					<Title>6 Modelo Ata Assembleia Geral Associação</Title>
					<Paragraph>Modelo de ata de Assembleia Geral de Associação, que poderá ser adaptado
            e utilizado em diversos contextos, para qualquer pauta.</Paragraph>
					<Title>7 Modelo Registro Público Constituição Fundação </Title>
					<Paragraph> Modelo de Escritura Pública de Registro de constituição de Fundação.
            Atentar para as exigências e rotinas dos cartórios competentes.</Paragraph>
				</div> */}
			</Container>
		);
	}
}

export default DocumentsScreen;
