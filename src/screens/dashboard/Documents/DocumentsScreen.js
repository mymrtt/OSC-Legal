// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';

const Container = styled.div`
  width: 80%;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const InputSearch = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-right: 0.8rem;
`;

const Input = styled.input`
  width: 15%;
  border-color: #85144B;
  border-radius: 3px;
`;

const Title = styled.h2`
  color: #85144B;
  font-family: Overpass-Black;
`;

const Paragraph = styled.h2`
  width: 40%;]
  font-size: 1.5rem;
  font-family: Overpass-Regular;
`;

const Button = styled.button`
  width: 10%;
  height: 7vh;
  background-color: #FF4136;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 6px #00000029;
  color: #fff;
  font-size: 1.2rem;
`;



class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Container>
        <ImageLogo />
        <Span>
          <h2>ORGANIZAÇÕES</h2>
          <h2>DOCUMENTOS</h2>
          <div>
            <h2>ADMINISTRADOR</h2>
            <h2>SAIR</h2>
          </div>
        </Span>
        <div>
          <h1>Modelos de Documents</h1>
          <Button>Adicionar Modelo</Button>
        </div>
        <InputSearch>
          <Label>Pesquisar</Label>
          <Input
						/* type="pesquisa"
            onChange={this.handleChange} */
            placeholder="Digite aqui para pesquisar"
          />
        </InputSearch>
        <div>
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
        </div>
      </Container>
    );
  }
}

export default Documents;
