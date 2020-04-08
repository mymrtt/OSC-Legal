// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Header from '../components/Header';


const Container = styled.div`
  width: 100%;
  background-color: #FFCFCD;
  height: 100vh;
  /* padding: 2rem; */
  
`;

const CreateButton = styled.button`
  width: 25%;
  padding: 1.3rem;
  background-color: #FF4136;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 6px #00000029;
  color: #fff;
  font-size: 1.4rem;
  font-family: Overpass, SemiBold;
  font-weight: bold;
  margin: 1.5rem 0 1.5rem 2.5rem;
`;

const ContainerTable = styled.div`
  /* width: 80%; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  border-radius: 5px;
`;

const Div = styled.div`
  width: 94%;
  height: 75vh;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  
`;

const InputSearch = styled.span`
	width: 94%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0 0;
`;

const Model = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: Overpass-Black;
  font-weight: 600;
  /* margin-left: 5.5rem; */
`;

const Span = styled.span`
  width: 44%;
  margin-top: 0.5rem;
	/* display: flex;
  flex-direction: row; */
  /* margin-right: 4.2rem; */
`;

const Label = styled.label`
  color: #231F20;
  font-size: 1rem;
  font-family: Overpass, Bold;
  font-weight: 600;
  margin-right: 0.8rem;
`;

const Input = styled.input`
  width: 82%;
  border: 0.5px solid #85144B;;
  border-radius: 3px;
  padding: 0.7rem;
`;

const Table = styled.div`
  width: 94%;
	margin-top: 1rem;
`;

const TableCreate = styled.span`
  /* width: 100%; */
	height: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  font-family: Overpass, Regular;
  /* padding: 0.8rem; */
  /* justify-content: space-evenly; */
`;

const TableTitle = styled.p`
  width: 100%;
  height: 2rem;
	background-color: #85144B;
	color: #FFFFFF;
	font-size: 0.8rem;
	font-family: Overpass, Regular;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

const TableList = styled.p`
  width: 100%;
	color: #404040;
`;

const TableList1 = styled.p`
  width: 100%;
	background-color: #FFCFCD;
	color: #404040;
`;


class CreateOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header />
        {/* <Create> */}
          <CreateButton>Criar Organização</CreateButton>
        {/* </Create> */}
        <ContainerTable>
          <Div>
          <InputSearch>
            <Model>Minhas organizações</Model>
            <Span>
              <Label>Pesquisar</Label>
              <Input
                /* type="pesquisa"
                onChange={this.handleChange} */
                placeholder="Digite aqui para pesquisar"
              />
            </Span>
          </InputSearch>
          <Table>
            <TableCreate>
              <TableTitle>Organização</TableTitle>
              <TableTitle>CNPJ</TableTitle>
              <TableTitle>Usuário</TableTitle>
              <TableTitle>E-mail</TableTitle>
              <TableTitle>Telefone</TableTitle>
              <TableTitle>Criado em</TableTitle>
              <TableTitle>Autorização</TableTitle>
              <TableTitle>Vencimento</TableTitle>
              <TableTitle>Status</TableTitle>
            </TableCreate>
            <TableCreate>
              <TableList>Instituto PrecisaSer</TableList>
              <TableList>00.000.000/0000-00</TableList>
              <TableList>Jorge Amado da Silva</TableList>
              <TableList>organização@email.com</TableList>
              <TableList>(11)11111-1111</TableList>
              <TableList>19/05/19</TableList>
              <TableList> - </TableList>
              <TableList> - </TableList>
              <TableList>PENDENTE</TableList>
            </TableCreate>
            <TableCreate>
              <TableList1>Vai na Web</TableList1>
              <TableList1>00.000.000/0000-00</TableList1>
              <TableList1>Yasmin Miranda</TableList1>
              <TableList1>nome@email.com</TableList1>
              <TableList1>(99) 99999-9999</TableList1>
              <TableList1>18/06/19</TableList1>
              <TableList1> - </TableList1>
              <TableList1> - </TableList1>
            </TableCreate>
            <TableCreate>
              <TableList>Casa de Rui Barbosa</TableList>
              <TableList>00.000.000/0000-00</TableList>
              <TableList>Alice Barbosa Souza</TableList>
              <TableList>organização@email.com</TableList>
              <TableList>(77)77777-7777</TableList>
              <TableList>17/06/19</TableList>
              <TableList>02/06/19</TableList>
              <TableList>02/07/19</TableList>
              <TableList>PENDENTE</TableList>
            </TableCreate>
            <TableCreate>
              <TableList1>Biblioteca da Maré</TableList1>
              <TableList1>00.000.000/0000-00</TableList1>
              <TableList1>Vinicius Almeida Rodrigues</TableList1>
              <TableList1>organização@email.com</TableList1>
              <TableList1>(22)22222-2222</TableList1>
              <TableList1>15/06/19</TableList1>
              <TableList1>26/05/19</TableList1>
              <TableList1> - </TableList1>
              <TableList1> ISENTO </TableList1>
            </TableCreate>
          </Table>
          </Div>
        </ContainerTable>
      </Container>
    );
	}
}

export default CreateOrganization;